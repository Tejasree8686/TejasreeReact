import Restrntcard from "./Restrntcard";
import restlist from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          console.log("DRYYYYYYYNTgdfh;k")
        }}>
            Top rated Restaurants
          </button >
          <button onClick={() => console.log('Button clicked!')}>Click me!</button>
        </div>
      <div className="restarnt-cards">
        {restlist.map((restaurant) => (
          <Restrntcard key={restaurant.data.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
