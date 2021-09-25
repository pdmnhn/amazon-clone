import "../css/Home.css";
import Product from "./Product";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { dummyData } from "./dummyData.js";
import banner from "../assets/banner.png";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="page">
      <img
        className="banner"
        src={banner}
        // src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
        alt="Shop Computers and Accessories"
      />
      <div className="products-grid">
        {dummyData.map((item) => {
          return (
            <Product
              className="product"
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
