import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Box  from '@mui/system/Box';


const images1 = [
    {original: "./images/slideshow/001.jpg"},
    {original: "./images/slideshow/002.jpg"},
    {original: "./images/slideshow/003.jpg"},    
    {original: "./images/slideshow/009.jpg"}    
];

const images2 = [
    {original: "./images/slideshow/011.jpg"},
    {original: "./images/slideshow/012.jpg"},
    {original: "./images/slideshow/013.jpg"},
    {original: "./images/slideshow/014.jpg"}
];

const images3 = [
    {original: "./images/slideshow/015.jpg"},
    {original: "./images/slideshow/016.jpg"},
    {original: "./images/slideshow/017.jpg"},
    {original: "./images/slideshow/018.jpg"}
];

const images4 = [
    {original: "./images/slideshow/019.jpg"},
    {original: "./images/slideshow/020.jpg"},    
    {original: "./images/slideshow/022.jpg"},
    {original: "./images/slideshow/023.jpg"},
    {original: "./images/slideshow/024.jpg"},
    {original: "./images/slideshow/025.jpg"},
    {original: "./images/slideshow/026.jpg"}
];

const imagenumber = "images1";

function Slideshow() {
  return (
    <Box component="section" sx={{height:'50vh', maxWidth:'45vw', marginRight:'5vw', verticalAlign:'baseline', overflow:'visible'}}>
        <ImageGallery items={images1} showNav = {false} showPlayButton = {false} showFullscreenButton = {false} showThumbnails={false}
        autoPlay={true} />
    </Box>
  )
}

export default Slideshow