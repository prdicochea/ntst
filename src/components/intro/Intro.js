import React from 'react';
import aerial from './aerial.jpg';
import Container from '@mui/material/Container';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";


const images = [
    {
        original: "./images/slideshow/001.jpg",        
    },
    {
        original: "./images/slideshow/002.jpg"        
    },
    {
        original: "./images/slideshow/003.jpg"
    },
    {
        original: "./images/slideshow/004.jpg"
    },
    {
        original: "./images/slideshow/005.jpg"
    },
    {
        original: "./images/slideshow/006.jpg"
    },
    {
        original: "./images/slideshow/009.jpg"
    },
    {
        original: "./images/slideshow/010.jpg"
    },
    {
        original: "./images/slideshow/011.jpg"
    },
    {
        original: "./images/slideshow/012.jpg"
    },
    {
        original: "./images/slideshow/013.jpg"
    },
    {
        original: "./images/slideshow/014.jpg"
    },
    {
        original: "./images/slideshow/015.jpg"
    },
    {
        original: "./images/slideshow/016.jpg"
    },
    {
        original: "./images/slideshow/017.jpg"
    },
    {
        original: "./images/slideshow/018.jpg"
    },
    {
        original: "./images/slideshow/019.jpg"
    },
    {
        original: "./images/slideshow/020.jpg"
    },
    {
        original: "./images/slideshow/021.jpg"
    },
    {
        original: "./images/slideshow/022.jpg"
    },
    {
        original: "./images/slideshow/023.jpg"
    },
    {
        original: "./images/slideshow/024.jpg"
    },
    {
        original: "./images/slideshow/025.jpg"
    },
    {
        original: "./images/slideshow/026.jpg"
    }
];


function Intro() {
  return (
    <Container maxWidth='lg'>
        <ImageGallery items={images} showNav = {false} showPlayButton = {false} showFullscreenButton = {false} showThumbnails={false}
        autoPlay={true} />
    </Container>
  )
}

export default Intro