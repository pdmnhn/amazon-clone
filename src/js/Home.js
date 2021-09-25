import "../css/Home.css";
import Product from "./Product";
import { dummyData } from "./dummyData.js";
import banner from "../assets/banner.png";

const Home = () => {
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
