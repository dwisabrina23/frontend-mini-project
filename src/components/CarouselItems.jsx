import React from 'react';
function CarouselItems(image) {
    console.log("isi image:", image)
    return (  
        <div className="blog_item mx-2">
                  <div className="blog_image">
                    <img className="img-fluid" src="https://cdn.pixabay.com/photo/2019/03/10/18/31/hong-kong-4046913_960_720.jpg" alt="images not found" />
                  </div>
                  <div className="blog_details">
                    <div className="blog_title">
                      <h5><a href="/">Milk and Madu Cafe</a></h5>
                    </div>
                    <ul>
                      <li><i className="fa fa-user" />Alex</li>
                      <li><i className="fa fa-calendar" />August 1, 2018</li>
                    </ul>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>
                  </div>
        </div>    
    );
}

export default CarouselItems;