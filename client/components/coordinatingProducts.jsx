import React, { Component } from 'react';
import styles from '../styles/CoordinatingProducts.css'
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#app')

class CoordinatingProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      modalIsOpen: false,
      spotlight: 'placeholder'
    }

    this.getProducts = this.getProducts.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  openModal(product) {
    console.log(product);
    this.setState({
      spotlight: product,
      modalIsOpen: true
    });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  getProducts() {
    // axios.get('http://34.219.169.248:4000/api/product', {
    axios.get('api/product', {
      // params: { type: 'fillmein' }
      params: { 
        // productLine: 'at'
      }
    })
      .then((response) => {
        this.setState({
          products: response.data
        });
      }).catch(err => { console.log(err) });
  }

  render() {
    return (
      <div>
        <div className={styles.wideContainer}>
          <div className={styles.container}>
            <div className={styles.header}>Coordinating Products</div>
            <div className={styles.displayContainer}>

              {this.state.products.map((product, i) => {
                var percentage = product.stars / 5 * 100;
                var width = percentage + "%";
                var backgroundColor = '';

                if (i === 0) {
                  backgroundColor = '#ededed';
                } else {
                  backgroundColor = 'white';
                }

                return (
                  <div key={i} style={{ 'background': backgroundColor }} className={styles.productContainer}>
                    <div className={styles.product}>
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
                      <div className={styles.buttonContainer}>
                        <button className={styles.cartButton}>
                          <svg viewBox="0 0 24 24" width="100%" height="100%">
                            <path d="M6 15H5v2H3v1h2v2h1v-2h2v-1H6v-2zm1.09-6a5 5 0 0 1 9.81 0H7.09zm10.83 0A6 6 0 0 0 6.08 9H2l1.4 5h1l-1.08-4h17.36l-2.52 9H9v1h9.92L22 9h-4.08z"></path>
                          </svg>
                        </button>
                        <button className={styles.listButton}>
                          <svg viewBox="0 0 24 24" width="100%" height="100%">
                            <path d="M17 15h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2zM5 5h8V4H4v9h1V5zM15.83 4l-9.74 9.74-.7.7L4 20l5.57-1.39L20 8.17zM6.12 18.43l-.55-.55.64-2.63 2.54 2.54zm.66-4l9-9 2.78 2.78-9 9z"></path>
                            <path d="M7 9h1v1H7zM7 7h3v1H7z"></path>
                          </svg>
                        </button>

                      </div>
                    </div>

                    <div onClick={this.openModal.bind(this, product)} className={styles.magnifyContainer}>
                      <svg className={styles.magnify} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

                        <path d="M21.21,19.79,15.6,14.19a7,7,0,1,0-1.41,1.41l5.61,5.61ZM4,10a6,6,0,1,1,6,6A6,6,0,0,1,4,10Z"></path>
                      </svg>
                    </div>


                  </div>
                )
              })}
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              className={styles.Modal}
              overlayClassName={styles.Overlay}
              contentLabel="Product Modal"
            >
              <div>
                <div className={styles.closeBtnContainer}>
                  <a className={styles.closeBtn} onClick={this.closeModal} href="#"></a>
                </div>
                <div className={styles.modalContainer}>
                  <div className={styles.infoContainer}>
                    <span className={styles.modalHeader}>{this.state.spotlight.productLine}</span>

                    <span className={styles.modalTitle}>{this.state.spotlight.title}</span>

                    <span className={styles.modalPrice}>${this.state.spotlight.price}.99</span>


                    <div className={styles.starContainer}>
                      <div className={styles.starOff}>★★★★★</div>
                      <div style={{ 'width': this.state.spotlight.stars / 5 * 100 + "%" }} className={styles.starOn}>★★★★★</div>
                    </div>
                    <div className={styles.modalReviewCount}>({this.state.spotlight.reviewCount})</div>

                    <div className={styles.modalDescriptionContainer}>
                      <div>
                        {this.state.spotlight.description}
                      </div>
                      <div className={styles.modelDescriptionLinks}>
                        Save to list
                      </div>
                    </div>

                  </div>

                  <div >
                    <img className={styles.modalImage} src={this.state.spotlight.imageUrl}></img>
                  </div>



                </div>
              </div>

            </Modal>

          </div>


          < div className={styles.popup} >
            <img className={styles.arrow} src="http://i63.tinypic.com/15ez18m.png"></img>
            <div className={styles.text}>Remember to complete <b>HEKTAR Work lamp with wireless charging</b> with the following product</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoordinatingProducts;