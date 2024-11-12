import Restrntcard from "./Restrntcard";
import Shimmeruicard from "./Shimmeruicard";
import { useState, useEffect } from "react";

const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [FilteredlistofRestaurents, setFilteredlistofRestaurents] = useState([]);
  const [Searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => { 
    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9520803&lng=77.5707288&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let json = await data.json();
    console.log(json);
    setListofRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredlistofRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  //conditional Rendering
  // if(ListofRestaurents == 0){
  //   return <Shimmeruicard/>
  // }


  //Using ternary operator
  return ListofRestaurents == 0 ? (<Shimmeruicard/>) :(
    <div className="body">
      <div className="searchcontainer">
        
          <input type="text" className="search-box" value={Searchtext} onChange={(e)=>{
                setSearchtext(e.target.value);

          }}></input>
          <button onClick={()=>{
           let filteredsearchtext = ListofRestaurents.filter((res)=>res.info.name.toLowerCase().includes(Searchtext.toLowerCase())
            );
            setFilteredlistofRestaurents(filteredsearchtext);
          }}>
            searchtext
            </button>
       
      </div>
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
        {FilteredlistofRestaurents?.map((restaurant) => (
          <Restrntcard key={restaurant.info.id} resdata={restaurant} />
        ))
      }
      </div>
    </div>
  );
};
export default Body;
