import React from 'react';
import styles from '../styles/Footer.css';

const Footer = (props) => {
  return (
    <div className={styles.container}>
      <div className="backtotop">
        <div id="back-top">
          <div id="back-top-image">
            <img src="https://www.ikea.com/ms/img/footer/BackToTopArrow.png" alt="UP"></img>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.linksWrapper}>
          <div className={styles.linkContainer}>
            <span className={styles.header}>Catalog &amp; Brochures</span>
            <a className={styles.link} href="http://info.ikea-usa.com/Signup/">Request</a>
            <a className={styles.link} href="http://info.ikea-usa.com/Catalog/">View Online</a>
            <a className={styles.link} href="/ms/en_US/customer-service/about-our-products/buying-guides/index.html">Buying Guides</a>
          </div>
          <div className={styles.linkContainer}>
            <span className={styles.header}>
              <a className={styles.link} href="http://www.ikea.com/ms/en_US/customer_service/splash.html">Need Help</a></span>
            <a className={styles.link} href="/ms/en_US/customer_service/faq/index.html">FAQ</a>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/customer_service/contact_us/contact.html">Contact Us</a>
            <a className={styles.link} href="https://www.ikea.com/ms/en_US/feedback-center/home.html">Feedback</a>
            <a className={styles.link} href="/ms/en_US/customer-service/about-shopping/return-policy/index.html">Return Policy</a>
            <a className={styles.link} href="http://info.ikea-usa.com/registration/">Children's Product Registration</a>
            <a className={styles.link} href="https://www.ikea.com/ms/en_US/local_stores/">Store Finder</a>
          </div>

          <div className={styles.linkContainer}>
            <span className={styles.header}>Delivery Information</span>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/service-offer/delivery/index.html">Delivery</a>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/service-offer/picking-with-delivery/">Picking with Delivery</a>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/customer_service/track_order.html?icid=us|iba|120817|track">Track an Order</a>
            <a className={styles.link} href="/ms/en_US/homeshopping/shop_online_terms_conditions.html">Delivery Terms &amp; Conditions</a>
          </div>

          <div className={styles.linkContainer}>
            <span className={styles.header}>Helpful Links</span>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/local_stores/">Find an IKEA Store</a>
            <a className={styles.link} href="http://www.ikea.com/us/en/catalog/allproducts/">All Products</a>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/customer-service/about-our-products/planning-tools/index.html">Planning Tools</a>
            <a className={styles.link} href="http://www.ikea.com/us/en/catalog/categories/departments/food/">IKEA Food &amp; Restaurant</a>
            <a className={styles.link} href="/ms/en_US/customer-service/about-our-products/warranties/index.html">Warranties</a>
            <a className={styles.link} href="/ms/en_US/service-offer">IKEA Services</a>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/service-offer/gift-cards/index.html">IKEA Gift Card</a>
          </div>

          <div className={styles.linkContainer}>
            <span className={styles.header}><a className={styles.link} href="/ms/en_US/this-is-ikea/index.html">This is IKEA</a></span>
            <a className={styles.link} href="/ms/en_US/this-is-ikea/the-ikea-concept/index.html">The IKEA Concept</a>
            <a className={styles.link} href="/ms/en_US/this-is-ikea/democratic-design/index.html">Democratic Design</a>
            <a className={styles.link} href="/ms/en_US/this-is-ikea/company-information/index.html">About the IKEA Group</a>
            <a className={styles.link} href="/ms/en_US/this-is-ikea/people-and-planet/index.html">People &amp; Planet</a>
            <a className={styles.link} href="http://www.ikea.com/ms/en_US/pressroom/start_page/index.html">Press Room</a>
            <a className={styles.link} href="/ms/en_US/this-is-ikea/reports-downloads/index.html">Read our Materials</a>
            <a className={styles.link} href="javascript:window.open(&quot;http://www.ikeafoundation.org/soft-Toys&quot;, &quot;_blank&quot;);void(0);">IKEA Foundation</a>
          </div>

          <div className={styles.linkContainer}>
            <span className={styles.header}>
              <a className={styles.link} href="javascript:window.open(&quot;https://seeacareerwithus.com/&quot;);void(0);">Jobs at IKEA</a></span>
          </div>

          <div className={styles.linkContainer}>
            <span className={styles.header}>Partners</span>
            <a className={styles.link} href="javascript:window.open(&quot;https://www.taskrabbit.com/ikea?utm_source=globalfooter&utm_term=ikea&quot;);void(0);" >TaskRabbit</a>
          </div>
        </div >
      </div >

      <div className={styles.copyright}>
        © Inter IKEA Systems B.V. 1999 - 2018 | <a className={styles.copyrightLink} href="http://www.ikea.com/ms/en_US/privacy_policy/privacy_policy.html">Privacy Policy</a> | <a className={styles.copyrightLink} href="/ms/en_US/responsible-disclosure/index.html">Responsible Disclosure</a>
      </div>

    </div>
  );
};

export default Footer;