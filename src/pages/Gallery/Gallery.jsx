import React from 'react';
import PhotoGrid from '../../components/PhotoGrid';
function Gallery(props) {
    return (
        <div>
            <div 
                className="container p-3"
                style={{
                    backgroundColor:"orange", 
                    fontWeight:"900", 
                    color:"white", 
                    width:"6rem", display:"flex", justifyContent:"start", marginLeft:"10px"}}
            >GALLERY</div>
            <hr style={{marginTop:"-30px", border:"solid black 1.5px", zIndex:"-1"}}/>
            <div 
                className="text-center py-4"
                style={{
                    marginTop:"60px",
                    paddingLeft:"15rem",
                    paddingRight:"15rem"
                }}>
            grab some inspiration with our portofolio art gallery!
check out our example mural wall arts that may inspire you to obtain a professional hand-painted mural that will please you every time you look at the wall
                <hr/>
            </div>
            <PhotoGrid/>
        </div>
    );
}

export default Gallery;