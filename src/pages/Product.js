import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
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
        <div className="container products-list">
            <h2 className="product-header">Never compromise </h2>
          <div className="products">
            {items.map((item) => (
              <div className="card product" key={item.name}>
                <div class="product-image-div"><img
                  src={item.image}
                  className="card-img-top product-image"
                  alt={item.title}
                /></div>
                <div className="card-body">
                  <h5 className="card-text product-name">{item.title}</h5>
                  <div><span>Category : </span> <span>{item.category}</span></div>
                  <div className="product-card-buttons"><button className="btn btn-warning">Add to cart</button>
                  <button className="btn btn-success">Place Order</button></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Product;
