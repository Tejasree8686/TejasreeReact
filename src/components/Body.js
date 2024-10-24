import Restrntcard from "./Restrntcard";
import restlist from "../utils/mockdata";
import { useState } from "react";
///React is good & efficient mainly in DOM Manipulation.
// In React ,Dom manipulations makes in sink with data layer & UI layer.

const Body = () => {
  // LOcal state variable
  const [ListofRestaurents, setListofRestaurents] = useState(restlist);
//Normal javascript variable
// let ListofRestaurents =[restlist]

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredlist = ListofRestaurents.filter(
              (rest) => rest.data.avgRating > 4.6
            );
            setListofRestaurents(filteredlist);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restarnt-cards">
        {ListofRestaurents.map((restaurant) => (
          <Restrntcard key={restaurant.data.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
