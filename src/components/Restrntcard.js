import { CDN_URL } from "../utils/constants";

const cardstyle = {
  backgroundColor: "pink",
};

const Restrntcard = (props) => {
  console.log("props",props);
  
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resdata?.info;
    
  return (
    <div className="res-cardnew" style={cardstyle}>
      <img className="meghanaimg" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default Restrntcard;
