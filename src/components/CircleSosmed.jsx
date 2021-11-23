import React from 'react';
import iconIg from '../assets/icon-ig.png';
import iconWa from '../assets/icon-wa.png';
import iconTwt from '../assets/icon-twt.png';

function CircleSosmed(props) {
    const dataSosmed = [
        {
            title: "instagram",
            link:"https://www.instagram.com/instagram/",
            image:iconIg,
        },
        {
            title: "twitter",
            link:"https://twitter.com/twitter",
            image:iconTwt,
        },
        {
            title: "whatsapp",
            link:"https://wa.me/081081081081",
            image:iconWa,
        }
    ]
    return (
        <div className="d-flex flex-row justify-content-center">
            {
                dataSosmed.map((data, idx) => {
                    return(
                        <div 
                            key={idx} 
                            className="d-flex m-3 rounded-circle container align-items-center justify-content-center" 
                            style={{
                                width:"70px", 
                                height:"70px",
                                border: "solid 2px #FC9E01"
                            }}>
                            <a href={data.link} target="_blank">
                                <img src={data.image} alt="" />
                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CircleSosmed;