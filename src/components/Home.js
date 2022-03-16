import React from "react";
import "../assets/category.css";
import "../assets/product.css";
import "../assets/about.css";
import "../assets/contact.css";
import electronics from "../assets/images/electronic.jpeg";
import jewellery from "../assets/images/jewellery.jpg";
import menClothing from "../assets/images/men_clothing.jpg";
import womenClothing from "../assets/images/women_clothing.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          const images = [electronics, jewellery, menClothing, womenClothing];
          const response = [];
          result.forEach((item, i) => {
            let data = {};
            data.name = item;
            data.image = images[i];
            response.push(data);
          });
          this.setState({
            isLoaded: true,
            items: response,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container categories-list">
            <h2 className="category-header"> Find the perfect match for you !! </h2>
          <div className="categories">
            {items.map((item) => (
              <div className="card category" key={item.name}>
                <img
                  src={item.image}
                  className="card-img-top category-image"
                  alt={item.name}
                />
                <div className="card-body">
                  <h3 className="card-text category-name">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Home;
