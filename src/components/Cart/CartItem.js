import React, { Component } from "react";
import { ProductConsumer } from "../../Context";

export default class CartList extends Component {
  render() {
    const { id, title, price, img, total } = this.props.item;
    const { removeItem } = this.props.value;
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <React.Fragment>
              <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                  <img
                    src={img}
                    style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product"
                  />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <span className="d-lg-none">Product : </span>
                  {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <span className="d-lg">Price : </span>
                  {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                  <div className="d-flex justify-content-center"></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fa fa-trash"></i>
                  </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <strong>Item total : $ {total}</strong>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}
