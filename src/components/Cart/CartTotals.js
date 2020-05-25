import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";

class CartTotals extends Component {
  render() {
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
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default CartTotals;
