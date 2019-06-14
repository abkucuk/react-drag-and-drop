import React, { Component } from 'react';
import List from './List';
import { connect } from "react-redux";
import AddNewItem from './AddNewItem';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const listContainer = styled.div`
  display: flex; 
  flex-direction: row;
`;


class App extends Component {
  whenDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) { return; }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );

  }
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.whenDragEnd}>
        <listContainer>
          <h2>Trello clone with ReactJS</h2>
          <div style={styles.listContainer}>
            {lists.map(item => <List listID={item.id} key={item.id} title={item.title} cards={item.cards} />)}
            <AddNewItem list />
          </div>
          </listContainer>
      </DragDropContext>
    );
  }
}
const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#df4500',
    padding: 20,
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
