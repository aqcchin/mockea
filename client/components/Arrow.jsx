import React, { Component } from 'react';
import styles from "../styles/Arrow.css"

window.scrollFunction = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topBtn").style.display = "flex";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

window.onscroll = function () { this.scrollFunction() };

class Arrow extends Component {



  topFunction() {
    document.body.scrollTop = 0; //Safario
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <div id="topBtn" className={styles.container} onClick={this.topFunction}>
        <span className={styles.text}>UP</span>
        <img className={styles.image} src="http://i64.tinypic.com/smvuih.png"></img>
      </div>
    );
  }
}

export default Arrow;