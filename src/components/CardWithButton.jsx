import React from 'react'
import './card.css'

function CardWithButton({ title, content, url, image, price}) {
    return (
        <div className="col-md-4 mb-3">
            <div className="card card-news text-center shadow card-wrapper">
                <div className="w-100">
                    <img src={image} alt="" className="card-img-top" style={{backgroundSize:"cover", maxHeight:"250px"}}/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{content}</p>
                    <p className="font-bold text-price">price: <span className="text-money">start from ~ $ {price} </span></p>
                    <a href={url} className="btn btn-outline-warning mb-2" target='_blank' rel='noreferrer'>ORDER NOW</a>
                </div>
            </div>
        </div>
    )
}

export default CardWithButton;