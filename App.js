import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const Headercomponent = () => {
  return (
    <div className="header">
      <div className="logocontainer">
       <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"/>
      </div>
      <div className="Navbar">
        <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>contact Us</li>
                <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//One way to wite css in jsx 
const cardstyle = {
        backgroundColor: "coral",
}


//Using Json object ->to get data----------> Dynamically created 

const resobj ={
                             type : "restaurants",  
                                  data: {
                                    id: "17301",
                                    name: "KFC",
                                    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17301.JPG",
                                    locality: "Basavanagudi",
                                    areaName: "Basavanagudi",
                                    costForTwo: "₹400 for two",
                                    cuisines: [
                                      "Burgers",
                                      "Fast Food",
                                      "Rolls & Wraps"
                                    ],
                                    avgRating: 4.3,
                                    parentId: "547",
                                    avgRatingString: "4.3",
                                    totalRatingsString: "13K+",
                                    "sla": {
                                      "deliveryTime": 34,
                                      "lastMileTravel": 2.8,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "30-35 mins",
                                      "lastMileTravelString": "2.8 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                      "nextCloseTime": "2024-10-19 02:00:00",
                                      "opened": true
                                    },
                                //     "badges": {
                                      
                                //     },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                      "entityBadges": {
                                        "imageBased": {
                                          
                                        },
                                        "textBased": {
                                          
                                        },
                                        "textExtendedBadges": {
                                          
                                        }
                                      }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                      "header": "ITEMS",
                                      "subHeader": "AT ₹179"
                                    },
                                    "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                        "lottie": {
                                          
                                        },
                                        "video": {
                                          
                                        }
                                      }
                                    },
                                    "reviewsSummary": {
                                      
                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {
                                      
                                    },
                                    externalRatings: {
                                      aggregatedRating: {
                                        rating: "4.0",
                                        ratingCount: "6.1K+"
                                      },
                                      source: "GOOGLE",
                                      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
                                    },
                                    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                  },
                                  analytics: {
                                    context: "seo-data-48d61be3-1984-444f-92da-09acde84c0c4"
                                  },
                                  cta: {
                                    link: "https://www.swiggy.com/city/bangalore/kfc-basavanagudi-rest17301",
                                    type: "WEBLINK"
                                  }
                                }
        
       const Restrntcardcomponent =(props) =>{
                const{ resdata} = props;
                return(
                        <div className="res-cardnew" style={cardstyle}>
                                <img className="meghanaimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.data.cloudinaryImageId}
                        /> 
                           <h3>{resdata.data.name}</h3>
                           <h4>{resdata.data.cuisines.join(" , ")}</h4>
                           <h4>{resdata.data.avgRating} stars</h4>
                           <h4>{resdata.data.costForTwo}</h4>
                        </div>
                )
        }


const Bodycomponent = ()=>{
        return(
                <div className="body">
                      <div className="searchbar">serachbar</div>
                      <div className="restarnt-cards">
                           <Restrntcardcomponent resdata = {resobj}/>
                          
                      </div>
                </div>
        )
} 


const Applayoutcomponent = () => {
  return (
    <div className="app">
        <Headercomponent/>
        <Bodycomponent/>
    </div>
  );
};
root.render(<Applayoutcomponent />);

////////////////////////// Config Driven UI///////////////////////
// ****--means controlling data using data =config, which getting from backend.
// *** data will be different in different locations in apps, but cants make diff websites foe each location, there this concept concept comes into picture----our websites UI will be controlled/driven by data/config, which is coming from backend.
















