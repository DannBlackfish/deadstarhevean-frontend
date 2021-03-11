import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://res.cloudinary.com/dannblackfish/image/upload/v1615344178/deadstarclothing/shooting-image/_DSC0384_pwuwku.jpg" onDragStart={handleDragStart} alt="imagen1"/>,
  <img src="https://res.cloudinary.com/dannblackfish/image/upload/v1615344578/deadstarclothing/shooting-image/DSC_0373_hrlcez.jpg" onDragStart={handleDragStart} alt="imagen2"/>,
  <img src="https://res.cloudinary.com/dannblackfish/image/upload/v1615344176/deadstarclothing/shooting-image/_DSC0330_v65bm8.jpg" onDragStart={handleDragStart} alt="imagen3"/>,
];

export default function Gallery()  {
    return (
      <AliceCarousel mouseTracking items={items} />
    );
  }