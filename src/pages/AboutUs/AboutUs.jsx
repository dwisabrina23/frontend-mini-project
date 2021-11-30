import React from 'react';
import './about.css';
import image from '../../assets/about-us-img.png';
import image1 from '../../assets/img-about1.png';
import image2 from '../../assets/img-about2.png';
import image3 from '../../assets/img-about3.png';
import '../index.css';

function AboutUs(props) {
    return (
        <div>
            <div className="text-center">
                <p className="text-page-title">ABOUT US</p>
            </div>
            <div className="row mx-2 mb-3">
                <div className="col-md-5 d-flex align-items-center">
                    <img className="mx-auto d-block image-about" src={image} alt="image_about" />
                </div>
                <div className="col-md-7">
                    <p className="text-justify px-5 m-2 text-about">
                    Paintastic is wall décor, mural, painting, and design service. It is normally used for interior, exterior decoration and even commercial use which is customized authentically for your brand. Paintastic Painting Services has over 10 years of experiences in the house painting industry.
 Our specialty are mural wall painting that suits for cafes, restaurants, workspaces and even public places. Up to this moment, we continuously create our special mural painting and decor for the local and international market such as Jakarta, Bali, Thailand, Singapore, and even USA. We also often held an art exhibitions and workshops in our studio
                    </p>
                </div>
            </div>
            <div className="row px-2 mx-2 mb-3">
                <div className="col-md-4 p-3 mb-2">
                    <img className="mx-auto d-block" src={image1} alt="" />
                </div>
                <div className="col-md-4 p-3 mb-2">
                    <img className="mx-auto d-block" src={image2} alt="" />
                </div>
                <div className="col-md-4 p-3 mb-2">
                    <img className="mx-auto d-block" src={image3} alt="" />
                </div>
            </div>
            <div className="text-center mx-2">
                <p className="text-quotes">-Our mission for each jobs are to make it right the first time & providing our best customer services-</p>
            </div>
        </div>
    );
}

export default AboutUs;