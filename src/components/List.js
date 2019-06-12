import React from "react";
import Card from '../components/Card';
import AddNewItem from './AddNewItem';
const List = ({title,cards}) => {
    return(
        <div style = {styles.container}>
            <h4>{title}</h4>
            {cards.map(item => <Card text={item.text} id={item.id} />)}
            <AddNewItem />
        </div>
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