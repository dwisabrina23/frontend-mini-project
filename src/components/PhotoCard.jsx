import React from 'react';
import image from '../assets/gallery1.png';
import './photoCard.css';

function PhotoCard(props) {
    return (
        <div style={{
            ...styles.card,
            ...styles[props.size]
        }}>
            <img 
                className="img-gallery"
                src={image} 
                alt="image_gallery" 
                style={{
                    height:"100%",
                    width:"100%",
                    borderRadius:"18px"}}/>
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        overflow:'hidden',
        // backgroundColor: 'blue',
        "background":"linear-gradient(0deg, rgba(101,100,98,0.742734593837535) 0%, rgba(190,191,191,0.4150035014005602) 73%)"
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default PhotoCard;