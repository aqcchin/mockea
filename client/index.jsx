import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer.jsx';
import AdditionalProductsByType from './components/AdditionalProductsByType.jsx';
import AdditionalProductsByProductLine from './components/AdditionalProductsByProductLine.jsx';
import DesignerThoughts from './components/DesignerThoughts.jsx';
import CoordinatingProducts from './components/CoordinatingProducts.jsx';
import Arrow from './components/Arrow.jsx';

const Index = () => {
  return (
    <div>

      <CoordinatingProducts />
      <DesignerThoughts />

      {/*
      **********************************************************************************
      Since there was no linkage between this module and other modules on the site, both
      additional product views below are not filtered. Both javascript and CSS files
      are nearly identical 
      **********************************************************************************
      */}

      <AdditionalProductsByProductLine />
      <AdditionalProductsByType />
      <Footer />
      <Arrow />
    </div>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));

