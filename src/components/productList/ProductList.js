import React, { Component } from "react";
import Product from "../product/Product";
import Title from "../title/Title";
import { ProductConsumer } from "../../Context";
//import Registration from './Registration';

class ProductList extends Component {
  /*constructor(props){
        super(props);

       this.state = {
            loggedInStatus: 'NOT LOGGED IN',
            user: {}
          }
         
    }*/

  render() {
    return (
      <React.Fragment>
        <div className="products-wrapper py-5">
          {/* <h1>Status: {this.props.loggedInStatus}</h1> */}

          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
