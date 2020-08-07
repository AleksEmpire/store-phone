import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";

class CartTotals extends Component {
  render() {
    const { cartSubTotal, cartTotal, cartTax, clearValue } = this.props.value;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto cols-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => value.ClearCart()}
                  >
                    Clear Cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title">Subtotal :</span>${" "}
                  <strong>{cartSubTotal}</strong>
                </h5>
                <h5>
                  <span className="text-title">Tax :</span>${" "}
                  <strong>{cartTax}</strong>
                </h5>
                <h5>
                  <span className="text-title">Total :</span>${" "}
                  <strong>{cartTotal}</strong>
                </h5>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default CartTotals;
