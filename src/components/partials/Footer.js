import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-section-1">
          <div className="footer-left">
            <h2>Shoppo </h2>
            <p>Find everything at one stop.</p>
          </div>
          <div className="footer-right">
            <h3>NEVER MISS ANOTHER SALE</h3>
            <p>
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <div className="subscription">
              <label>Subscribed here: </label>
              <input type="email" />
            </div>
          </div>
        </div>

        <div className="footer-section-2">
          <div className="footer-vertical-1">
            <h3>Shop</h3>
            <h6>Surat</h6>
            <h6>Delhi</h6>
            <h6>Chennai</h6>
            <h6>Hariyana</h6>
            <h6>Ahemdabad</h6>
          </div>
          <div className="footer-vertical-2">
            <h3>Products</h3>
            <h6>All Products</h6>
            <h6>Men's Wear</h6>
            <h6>Women's Wear</h6>
            <h6>Childern Wear</h6>
            <h6>Toys</h6>
          </div>
          <div className="footer-vertical-3">
            <h3>Help</h3>
            <h6>Reach to us</h6>
            <h6>FAQ</h6>
            <h6>Ask for favor</h6>
          </div>
          <div className="footer-vertical-4">
            <h3>Contact</h3>
            <h6>Email</h6>
            <h6>Phone</h6>
            <h6>Twitter</h6>
            <h6>Instagram</h6>
            <h6>Whatsapp</h6>
          </div>
        </div>

        <div className="footer-section-3">
          <div className="footer-desclaimer"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
