import React from 'react';
import './card.css';
function CardPricing({work, title, content, price, url}) {
    let description = content.split(",")
    return (
        <div className="col-md-4 mb-3">
            <div className="card card-news text-center shadow card-wrapper">
                <div className="card-body">
                    <h4 className="card-title">{title}<hr/></h4>
                    <p className="text-center text-work text-white" style={{backgroundColor:"#52D988"}}>{work}</p>
                    <p className="font-bold text-price">START FROM </p>
                    <p className="text-money2 text-left">$ {price} <span className="text-normal" style={{fontSize:"30px"}}>/m<sup className="text-dark">2</sup></span></p>
                    <ul class="list-unstyled">
                        {
                            description.map((item, idx) => (
                                <li key={idx}>
                                    <p
                                        style={{color:"orange"}}
                                    ><i class="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>{item}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <a href={url} className="btn btn-outline-warning mb-2" target='_blank' rel='noreferrer'>ORDER NOW</a>
                </div>
            </div>
        </div>
    )
}

export default CardPricing;