import React, {useReducer} from 'react'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import service from '../../config/axios'
import tokenAuth from '../../config/token'

import { useParams } from 'react-router-dom'

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    AGREGAR_CARRITO,
    EDITAR_USUARIO,
    ELIMINAR_USUARIO
} from '../../types'


const AuthState = props => {

    // DATOS INICIALES CON LOS CUALES EMPEZAMOS EL ESTADO GLOBAL
    const initialState = {
        token: localStorage.getItem('token'), 
        autenticado: null,
        usuario: null, // información del usuario
        mensaje: null,  // relacionado con las alertas
        cargando: true,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)
    
    // Registra un usuario
    const registrarUsuario = async datos => {
        console.log("estoy en registrar usuarios")
        console.log(datos)
        try{
            const respuesta = await service.post('/user', datos)

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            // OBTENER EL USUARIO
            usuarioAutenticado()

        } catch(error){
            // console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: "alerta-error"
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token') // LEER EL TOKEN DE LOCAL STORAGE

        if(token) {
            // Función para enviar el token por headers
            tokenAuth(token)
        }

        try {
            const respuesta = await service.get('/auth')

            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.user
            })


        } catch(error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }

    }   

    // Cuando el usuario inicia sesión
    const iniciarSesion = async datos => {
        try{
            const respuesta = await service.post('/auth', datos)
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })

            usuarioAutenticado()

        } catch(error){
            console.log(error)
            const alerta = {
                msg: error.response.data.msg,
                categoria: "alerta-error"
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    const agregarCarrito = async (producto) => {
        const result = await service.patch("/user/profile/edit", producto)
        dispatch({
            type: AGREGAR_CARRITO,
            payload: result.data.profile
        })
    }


    const editarUsuario = async (datos, id) => {
        const respuesta = await service.put(`/user/profile/change/${id}`, datos)
        dispatch({
            type: EDITAR_USUARIO,
            payload: respuesta.data.profile
        })
    }


    const eliminarUsuario = async(info) => {
        const result = await service.delete("/user/profile/delete", info)
        dispatch({
            type: ELIMINAR_USUARIO,
            payload: result.info
        })
    }

    return (
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            cargando: state.cargando,
            registrarUsuario,
            iniciarSesion,
            usuarioAutenticado,
            cerrarSesion,
            agregarCarrito,
            editarUsuario,
            eliminarUsuario
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState