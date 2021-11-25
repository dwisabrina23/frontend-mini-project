import React from 'react';
import './GridMenu.css';
function GridMenu({photo, title, content}) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card card-news text-center border-0">
                <div className="img-service-wrapper">
                    <img src={photo} alt="" className="card-img-top img-service" style={{backgroundSize:"cover"}}/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default GridMenu;