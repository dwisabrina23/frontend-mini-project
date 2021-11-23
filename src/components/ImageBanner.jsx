import React from 'react';
import './ImageBanner.css';

function ImageBanner() {
    return (
        <div 
            className="container-fluid mb-3 image-body"
            style={{
                paddingLeft: "0px",
                paddingRight: "0px"}}
        >
            <div className="image-big w-100">
            <div className="container text-md-left content-text">
                <p className="text-title-toko">PAINTING AND MURAL SERVICES</p>
                <h1 className="text-jargon font-weight-bold">Give Your Space A Brand <br/>New Look</h1>
                <p className="font-italic">We make it a priority to offer flexible services <br/>to accomodate your needs</p>
            </div>
        </div>
        </div>
    );
}

export default ImageBanner;