import React from "react";
import "../Pages/Brand.css"
import { Link } from "react-router-dom";
// import Errorpage from "../Homepage/Errorpage/Errorpage";


export const Brand = () => {
  return (
  <div>



        <div className="brand-container">
            <h1>Watch Brands</h1>
            <div className="brand-list">
                <div className="brand-item"> 
                {/* titan */}
                   <Link>
                   <img src="https://th.bing.com/th/id/OIP.JoHVNy73F8vXweBadqDj2AAAAA?w=142&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Brand 1" />
                   </Link>
                    <p>Brand 1</p>
                </div>
                {/* sonata  */}
                <div className="brand-item">
                   <Link>
                   <img src="https://th.bing.com/th/id/OIP.JoHVNy73F8vXweBadqDj2AAAAA?w=142&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Brand 2" />
                   </Link>
                    <p>Brand 2</p>
                </div>
                {/* fastrack */}
                <div className="brand-item">
                   <Link to="/reebook">
                   <img src="https://th.bing.com/th/id/OIP.JoHVNy73F8vXweBadqDj2AAAAA?w=142&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Brand 3" />
                   </Link>
                    <p>Brand 3</p>
                </div>
                {/* reeboke */}
                <div className="brand-item">
                   <Link >
                   <img src="https://th.bing.com/th/id/OIP.JoHVNy73F8vXweBadqDj2AAAAA?w=142&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Brand 4" />
                   </Link>
                    <p>Brand 4</p>
                </div>
                
            </div>
        </div>
    



     {/* <Errorpage/> */}
    
  </div>
  );
};
