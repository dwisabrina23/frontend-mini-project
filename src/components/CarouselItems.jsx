import React from 'react';
function CarouselItems({data}) {
    console.log("isi data item:", data)
    var n = new Date(data.created_at);
    var date = n.toLocaleString("en-GB", {dateStyle:"full"});
    console.log(date)
    return (  
        <div className="blog_item mx-2">
                  <div className="blog_image">
                    <img className="img-fluid" src={data.photo} alt="images not found" />
                  </div>
                  <div className="blog_details">
                    <div className="blog_title">
                      <h5><a href="#/">{data.project}</a></h5>
                    </div>
                    <ul>
                      <li><i className="fa fa-user" />{data.user_testimoni.nama}</li>
                      <li><i className="fa fa-calendar" />{date}</li>
                    </ul>
                    <p className="text-testi">{data.message}</p>
                  </div>
        </div>  
    );
}

export default CarouselItems;