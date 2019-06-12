import React, { Component } from 'react';
import List from './List';
import { connect } from "react-redux";
import AddNewItem from './AddNewItem';
class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div style={styles.container}>
        <h2>Başlık</h2>
        <div style={styles.listContainer}>
          {lists.map(item => <List title={item.title} cards={item.cards} />)}
          <AddNewItem />
        </div>
      </div>
    );
  }
}
const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  container : {
    backgroundColor:'#df4500'
  }
};

// aşığadaki func => burada store'dan aldığımız state'i iki noktanın sol tarafında yazdığımız lists adında bir property ile
// App componentine gönderiyoruz.
// buraya state nereden geliyor sorunun cevabı : reducers içinde index.js 'te bir listReducer adında bir component var. 
// ve biz bu componenti combineReducers'ın içine attık.
// list reducer ise bildiğimiz basit bir reducer
const mapStatetoProps = state => ({
  lists: state.lists
});
export default connect(mapStatetoProps)(App);
