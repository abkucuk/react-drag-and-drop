import React from "react";
import Card from '../components/Card';
import AddNewItem from './AddNewItem';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    backgroundColor : #dfe3e6,
    border-radius: 30px,
    padding: 20px,
    margin-bottom: 15px,
    margin-right: 10px,
    width:300px
`;

const List = ({ title, cards, listID }) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                    <h4>{title}</h4>
                    {cards.map((item, index) => <Card text={item.text} index={index} id={item.id} card={item.id} />)}
                    <AddNewItem listID={listID} />
                    {provided.placeholder}
                </Container>
            )}
        </Droppable>
    );
}


export default List;