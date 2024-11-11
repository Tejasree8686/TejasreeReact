import Restrntcard from "./Restrntcard";
import Shimmeruicard from "./Shimmeruicard";
import restlist from "../utils/mockdata";
import { useState, useEffect } from "react";
///React is good & efficient mainly in DOM Manipulation.
// In React ,Dom manipulations makes in sink with data layer & UI layer.

const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => { 
    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9520803&lng=77.5707288&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let json = await data.json();
    console.log(json);
    setListofRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  //conditional Rendering
  // if(ListofRestaurents == 0){
  //   return <Shimmeruicard/>
  // }


  //Using ternary operator
  return ListofRestaurents == 0 ? (<Shimmeruicard/>) :(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredlist = ListofRestaurents.filter(
              (rest) => rest.info.avgRating > 4.4
            );
            setListofRestaurents(filteredlist);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restarnt-cards">
        {ListofRestaurents?.map((restaurant) => (
          <Restrntcard key={restaurant.info.id} resdata={restaurant} />
        ))
      }
      </div>
    </div>
  );
};
export default Body;
