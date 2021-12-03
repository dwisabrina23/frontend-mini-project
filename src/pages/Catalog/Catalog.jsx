import React, {useEffect, useState} from 'react';
import CardWithButton from '../../components/CardWithButton';
import CardPricing from '../../components/CardPricing';
import useGetByGenre from '../../Hooks/useGetByGenre';
import useGetPackage from '../../Hooks/useGetPackage';
import SubPageTitle from '../../components/SubPageTitle';
import Loading from '../../components/Loading';

function Catalog() {
    const [genreData, setGenreData] = useState([]);
    const [packageData, setPackageData] = useState([])
    
    //graphQl
    const {dataGenre, loadingGenre, errorGenre} = useGetByGenre();
    const {dataPackage, loadingPackage, errorPackage} = useGetPackage();
    console.log("data service package", dataPackage);

    //set use effect
    useEffect(() => {
        if(dataGenre){
            setGenreData(dataGenre.service)
            console.log('genreData', genreData)
        }
        if(dataPackage){
            setPackageData(dataPackage.service)
        }
    }, [dataGenre, dataPackage])

  return (
    <div>
        {/* <h1 className="text-page-title text-center">OUR CATALOG</h1>s */}
        <div>
            <SubPageTitle title="SHOP BY PACKAGE"/>
            {/* <h1 className="text-page-title text-center">SHOP BY PACKAGE</h1> */}
                <div className="container-fluid d-flex justify-content-around" style={{ top: '20px' }}>
                <div className="row m-3"> 
                <p className="text-center mt-5">Want to discuss your ideas, projects or Requirements? Click the <b>order</b> button, fill the form and our sales representative will contact you soon! Pick your date and enjoy the process!😊🙌 </p>
                {
                        loadingPackage ?
                        (
                            <Loading/>
                        )
                        :packageData.map((item) => (
                            <CardPricing
                                key={item.id}
                                title={item.title}
                                content={item.description}
                                url={item.url}
                                work={item.photo}
                                price={item.price}
                            />
                            )
                        )
                    }
                    </div>
                </div>
            </div>
        <div>
            <SubPageTitle title="SHOP BY GENRE"/>
            {/* <h1 className="text-page-title text-center">SHOP BY GENRE</h1> */}
            <div className="container-fluid d-flex justify-content-around" style={{ top: '20px' }}>
            <div className="row m-3">
                {
                loadingGenre ?
                (
                    <Loading/>
                )
                :
                genreData.map((item) => (
                <CardWithButton
                  key={item.id}
                  title={item.title}
                  content={item.description}
                  url={item.url}
                  image={item.photo}
                  price={item.price}
                />
                ))}
            </div>
            </div>
        </div>
    </div>
  );
}

export default Catalog;
