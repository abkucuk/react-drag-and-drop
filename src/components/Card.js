import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Draggable} from 'react-beautiful-dnd';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const SimpleCard = ({text, id, index}) => {  
    return(
      <Draggable draggableId={String(id)} index={index}>
      {/*
        aşağıda card componentini tekrar bir daha div içine aldık
        çünkü card componentine react-beautiful-dnd de zorunlu olan bir
        ref properties'ini gönderemiyoruz.
      */}
      {provided => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card style={styles.card}>
            <CardContent>
              
              <Typography variant="body2"  component="p">
                {text}
              </Typography>
            </CardContent>
          </Card>
        </div> 
      )}
      </Draggable>
    );
}
const styles = {
  card : {
     
      
      marginBottom: 8,
      
  },

};
export default SimpleCard;
