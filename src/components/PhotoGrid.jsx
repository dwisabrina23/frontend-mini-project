import React from 'react';
import PhotoCard from './PhotoCard';

function PhotoGrid() {
    return (
        <div style={styles.pin_container}>
            <PhotoCard size="small" />
            <PhotoCard size="medium" />
            <PhotoCard size="large" />
            <PhotoCard size="small"/>
            <PhotoCard size="large"/>
            <PhotoCard size="medium"/>
            <PhotoCard size="large" />
            <PhotoCard size="small"/>
            <PhotoCard size="large"/>
            <PhotoCard size="medium" />
            <PhotoCard size="medium" />
            <PhotoCard size="small"/>
            {/* section 2 */}
            <PhotoCard size="small" />
            <PhotoCard size="medium" />
            <PhotoCard size="large" />
            <PhotoCard size="small"/>
            <PhotoCard size="large"/>
            <PhotoCard size="medium"/>
            <PhotoCard size="large" />
            <PhotoCard size="small"/>
            <PhotoCard size="large"/>
            <PhotoCard size="medium" />
            <PhotoCard size="medium" />
            <PhotoCard size="small"/>
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
    }
}

export default PhotoGrid;