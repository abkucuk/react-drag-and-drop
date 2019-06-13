import React from "react";
import Card from '../components/Card';
import AddNewItem from './AddNewItem';
import {Droppable} from 'react-beautiful-dnd';

const List = ({title,cards, listID }) => {
    return(
        <Droppable droppableId={String(listID)}>
        {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} style = {styles.container}>
                <h4>{title}</h4>
                {cards.map((item, index) => <Card text={item.text} index={index}  id={item.id} card={ item.id}/>)}
                <AddNewItem listID={listID} />
                {provided.placeholder}
            </div>
        )}
        </Droppable>
    );
}
const styles = {
    container : {
        backgroundColor : '#dfe3e6',
        borderRadius: 30,
        padding: 20,
        marginBottom: 15,
        marginRight: 10,
        width:300
    },

};
 
export default List;