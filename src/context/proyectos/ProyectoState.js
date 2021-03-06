import React, {useReducer} from 'react'

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'

import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from '../../types'

import service from '../../config/axios'

const ProyectoState = props => {

    const initialState = {
        formulario: false,
        proyectos: [],
        errorformulario: false,
        proyecto: null,
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos

    const obtenerProyectos = async () => {
        try {
            
            const resultado = await service.get('/api/proyectos')

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })

        } catch (error) {
            const alerta = {
                msg: "Hubo un error",
                categoria: "alert-error"
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    // Agregar nuevo proyecto
    const agregarProyecto = async proyecto =>  {

        try {
            const resultado = await service.post('/api/proyectos', proyecto)
            console.log(resultado)

            // Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })


        } catch (error) {
            const alerta = {
                msg: "Hubo un error",
                categoria: "alert-error"
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    // validar formulario por errores

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click

    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto

    const eliminarProyecto = async proyectoId => {

        try {
            await service.delete(`/api/proyectos/${proyectoId}`)
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: "Hubo un error",
                categoria: "alert-error"
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <ProyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )

}

export default ProyectoState