import React from 'react';

function PhotoCard(props) {
    return (
        <div style={{
            ...styles.card,
            ...styles[props.size]
        }}>
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
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