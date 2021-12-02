import React from 'react';
import './card.css';
function CardPricing({work, title, content, price, url}) {
    let description = content.split(",")

    //set color for every title
    let base, accent;
    if(title === "bronze"){
        base = '#905B7C';
        accent = '#C7ADBD';
    }else if(title === "silver"){
        base = '#347574';
        accent = '#347574'
    }else if(title === "gold"){
        base = '#FE7C00';
        accent = '#FEBA79'
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card card-news text-center shadow card-wrapper"
                style={{
                    border:'3px solid'+base
                }}
            >
                <div className="card-body">
                    <h4 className="title-pricing">{title}</h4>
                    <div className='title-border'></div>
                    <p 
                        className="text-center text-work text-white m-auto" 
                        style={{backgroundColor:accent}}
                        >{work}</p>
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
                    <a 
                        href={url} 
                        className="btn btn-primary mb-2" 
                        target='_blank' 
                        rel='noreferrer'
                        style={{backgroundColor:base, border:"1px solid"+base}}
                    >ORDER NOW</a>
                </div>
            </div>
        </div>
    )
}
export default CardPricing;