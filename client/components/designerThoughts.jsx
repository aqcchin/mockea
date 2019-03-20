import React, { Component } from 'react';
import styles from '../styles/DesignerThoughts.css'
import axios from 'axios';

class DesignerThoughts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: []
    }
    this.getDesigners = this.getDesigners.bind(this);
  }

  componentDidMount() {
    this.getDesigners();
  }

  getDesigners() {
    // axios.get('http://34.219.169.248:4000/api/designer', {
    axios.get('api/designer', {
      // params: { productLine: 'fillmein' }
      params: { 
        // designerName: 'J Jelinek'
      }
    })
      .then((response) => {
        // console.log('getting designers', response);
        this.setState({
          designers: response.data
        });
      }).catch(err => { console.log(err) });

    // =========================================
    
    // axios.post('api/designer', {
    //   params: {
    //     id: 10000001,
    //     designerName: 'John Smith',
    //     productLine: 'stuff',
    //     thoughts: 'Something awesome',
    //     imageUrl: 'http://dummyimage.com/400x400.png/ff4444/ffffff'
    //   }
    // }).then(response => {
    //   // console.log('Successfully posted data', response)
    // }).catch(err => {
    //   console.log('Error posting data')
    // })

    // =========================================

    // axios.put('api/designers/' + 10000001, {
    //   params: {
    //     productLine: 'More stuff'
    //   }
    // })
    // .then(response => {
    //   console.log('updating designer', response);
    // })
    // .catch(err => {
    //   console.log('Error updating designers');
    // })

    // =========================================

    // axios.delete('api/designers', {
    //   data: {
    //     id: 10000001
    //   }
    // })
    // .then(() => {
      
    // })
    // .catch(err => {
    //   console.log('Error deleting designers');
    // });
  }

  render() {
    return (
      <div>
        {this.state.designers.map((designer, i) => {
          return (
            <div className={styles.container} key={i}>
              <img className={styles.image} src={designer.imageUrl}></img>
              <div className={styles.thoughtContainer}>
                <span className={styles.header}>Designer thoughts</span>
                <span className={styles.designer}>Designer&nbsp;{designer.designerName}</span>
                <div className={styles.thought}>"{designer.thoughts}"</div>
              </div>
            </div>
          )
        })}


      </div>
    );
  }
}

export default DesignerThoughts;