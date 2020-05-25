import React, { Component } from "react";
//import styled from 'styled-components';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <React.Fragment>
        <div className="product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
            <ProductConsumer>
              {(value) => (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in Cart
                      </p>
                    ) : (
                      <i className="fa fa-cart-plus"></i>
                    )}
                  </button>
                </div>
              )}
            </ProductConsumer>
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">{title}</p>
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
