import { React, useEffect, useState } from "react";
import {createApi} from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "ruuzfvwzWeRFxUDoCxp9HmQ5_MInJFlIbph0rl3pveU"
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <div className="col-md-4 mb-3">
      <div className="card card-news text-center shadow">
        <img className="img" src={urls.regular} alt="image_gallery"/>
          <a
            className="credit"
            target="_blank"
            rel="noreferrer"
            href={`https://unsplash.com/@${user.username}`}
          >
            {user.name}
          </a>
        </div>
      </div>
  );
};
function Article() {
  const [data, setPhotoResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({
        query:"mural", 
        orientation:"portrait",
        perPage:"40"})
      .then(result => {
        setPhotoResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else{
    return(
      <div>
        <h1 className="display-4 text-center">MORE ART GALLERY</h1>
        <h5 className="text-center px-3 ms-auto" style={{fontStyle:"italic"}}>for more inspiration look more art gallery below</h5>
        <hr/>
        <div
          className="container-fluid d-flex justify-content-around"
          style={{ top: "20px" }}
        >
          <div className="row m-3 w-75">
            {data.response.results.map(photo => (
                <PhotoComp key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default Article;


// function Article() {
//   const URL =
//     "https://newsapi.org/v2/top-headlines?country=id&apiKey=5f485a2cbdd6436bb5f2b9398f6ae287";
//   const [news, setNews] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const handleFetch = async () => {
//       let result;
//       try {
//         result = await axios.get(URL);
//         setIsLoaded(true);
//         // console.log(result.data.articles);
//         setNews(result.data.articles);
//       } catch (err) {
//         setIsLoaded(true);
//         setError(err);
//       }
//     };
//     handleFetch();
//   },[]);
  
//   if (error){
//     return <div>Erorr: {error}</div>
//   } else if (!isLoaded){
//     return <div>Loading...</div>
//   }
//   return (
//     <div>
// 	    <h1 className="display-4 text-center">NEWS</h1>
//       <div
//         className="container-fluid d-flex justify-content-around"
//         style={{ top: "20px" }}
//       >
//         <div className="row m-3">
//           {news.map((item) => (
//             <Card
//               key={uuidv4()}
//               title={item.title}
//               content={item.content}
//               url={item.url}
//               image={item.urlToImage}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }