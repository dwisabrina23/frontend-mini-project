import React from 'react'
import './card.css'
import { useHistory } from "react-router-dom";
import CheckboxIcon from './CheckboxIcon';

function CardWithButton({ title, content, url, image, price}) {
    const history = useHistory();
    const handleClick = () =>{
        history.push('/order');
    }
    return (
        <div className="col-md-4 mb-3">
            <div className="card card-news text-center shadow card-wrapper">
                <div className="w-100">
                    <img src={image} alt="" className="card-img-top" style={{backgroundSize:"cover", maxHeight:"250px"}}/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{title}</h4>
                    <div className="float-right"><CheckboxIcon/></div>
                    <p className="card-text">{content}</p>
                    <p className="font-bold text-price">price: <span className="text-money">start from ~ $ {price} </span></p>
                    <button type="button" className="btn btn-outline-warning mb-2" target='_blank' rel='noreferrer' onClick={handleClick}>ORDER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default CardWithButton;