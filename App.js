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

// using destructing:-One of the way---> Creating props in one object , & passes as an argument

const Restrntcardcomponent =(props) =>{
        const{resname ,Cuisine} = props;
        return(
                <div className="res-cardnew" style={cardstyle}>
                        <img className="meghanaimg" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"/>
                 <h3>{resname}</h3>
                    <h4>{Cuisine}</h4>
                   <h4>4.4 stars</h4>
                   <h4>38 minutes</h4>
                </div>
        )
} 

const Bodycomponent = ()=>{
        return(
                <div className="body">
                      <div className="searchbar">serachbar</div>
                      <div className="restarnt-cards">
                           <Restrntcardcomponent resname="MeghanaaanaFo00ods" Cuisine="Sothhhhhhhhhh IndianItalian"/> 
                      </div>
                </div>
        )
}   




        // const Restrntcardcomponent =(props) =>{
        //         return(
        //                 <div className="res-cardnew" style={cardstyle}>
        //                         <img className="meghanaimg" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"/>
        //                    <h3>{props.resname}</h3>
        //                    <h4>{props.Cuisine}</h4>
        //                    <h4>4.4 stars</h4>
        //                    <h4>38 minutes</h4>
        //                 </div>
        //         )
        // }

// const Bodycomponent = ()=>{
//         return(
//                 <div className="body">
//                       <div className="searchbar">serachbar</div>
//                       <div className="restarnt-cards">
//                            <Restrntcardcomponent resname="Meghana Fooo0ods" Cuisine="North IndianItalian"/>
                          
//                       </div>
//                 </div>
//         )
// }

const Applayoutcomponent = () => {
  return (
    <div className="app">
        <Headercomponent/>
        <Bodycomponent/>
    </div>
  );
};
root.render(<Applayoutcomponent />);
















