import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context";
import styled from "styled-components";

class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(value) => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart,
            } = value.detailProduct;
            return (
              <div className="container product-detail py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-centet text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h1>Model: {title}</h1>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Made by: <span className="text-uppercase">{company}</span>
                      <strong>Price: ${price}</strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Info: {info}
                    </p>
                    <p className="text-muted lead">{info}</p>

                    <Link to="/">
                      <ButtonContainer className="cart-btn-details">
                        Back to Products
                      </ButtonContainer>
                    </Link>

                    <ButtonContainer
                      cart
                      className="cart-btn-details"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--lightBlue);
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
export default Details;
