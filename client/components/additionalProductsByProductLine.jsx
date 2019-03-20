// COPIED FROM ADDITIONALPRODUCTSBYTYPE
// NEED TO IMPLEMENT FILTER FUNCTIONALITY ON THE GET REQUEST!!!

import React, { Component } from 'react';
import styles from '../styles/AdditionalProductsByProductLine.css'
import axios from 'axios';

class AdditionalProductsByType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { productLine: '' }
      ]
    }
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    // axios.get('http://34.219.169.248:4000/api/product', {
    axios.get('api/product', {
      // params: { productLine: 'fillmein' }
      params: { productLine: 'at' }
    })
      .then((response) => {
        // console.log('PL response', response.data)
        this.setState({
          products: response.data
        });
      }).catch(err => { console.log(err) });
  }

  render() {
    return (
      <div className={styles.container}>
        {/* Fix below hard code for series name */}
        <div className={styles.header}>More {this.state.products[0].productLine.toUpperCase()} series</div>
        <div className={styles.displayContainer}>
          {this.state.products.map((product, i) => {
            var percentage = product.stars / 5 * 100;
            var width = percentage + "%";

            return (
              <div key={i} className={styles.product}>
                <a href="#" className={styles.noDecoration}>
                  <img src={product.imageUrl} className={styles.image}></img>
                  <span className={styles.productLine}>{product.productLine}</span>
                  <span className={styles.title}>{product.title}</span>
                  <span className={styles.price}>${product.price}.99</span>
                </a>
                <div className={styles.starContainer}>
                  <div className={styles.starOff}>★★★★★</div>
                  <div style={{ 'width': width }} className={styles.starOn}>★★★★★</div>
                </div>
                <div className={styles.ratingCount}>&nbsp;<a href="#" className={styles.noDecoration}>({product.reviewCount})</a></div>
              </div>
            )
          })}
        </div>
        <div className={styles.linkContainer}>
          <a className={styles.link} href="">Go to {this.state.products[0].productLine.toUpperCase()} series</a>
        </div>
      </div>
    );
  }
}

export default AdditionalProductsByType;