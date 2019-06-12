import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';

const styles = makeStyles(theme => ({
    
    icon: {
      margin: theme.spacing(2),
    }
  }));
class AddNewItem extends Component {
    state = {
        isFormOpen : false,
        text : ''
    }
    renderAddButton = () =>{
        const {list} = this.props;
        const buttonText = list ? "add another list" : "add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackgorund = list ? 'rgba(0,0,0,.15)' : 'inherit';
        return(

            <div onClick={this.openForm}
                style={{
                    ...styl.buttonAndTextGroup,
                    opacity: buttonTextOpacity, 
                    color:buttonTextColor, 
                    backgroundColor: buttonTextBackgorund}}>
                <Icon style={styles.icon}>add_circle</Icon>
                <p>{buttonText}</p>
            </div>
        );
    }
    openForm = () => {
        this.setState({
            isFormOpen: true
        });
        
    }
    closeForm = (e) => {
        this.setState({
            isFormOpen: false
        });
    }
    handleChangeInput = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    renderForm = () => {
        const {list} = this.props;
        const placeholder = list 
        ? 'Add New List'
        : 'Enter a title from card';
        const buttonTitle = list
        ? 'Add New List'
        : 'Add New Card';

        return(
            <div>
                <Card
                    style={{
                        overflow: 'visible',
                        minHeight: 80,
                        minWidth: 250,
                        padding: '6px 8px 2px'
                    }}>
                    <Textarea
                    placeholder={placeholder}
                    title={buttonTitle} autofocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleChangeInput}
                    style={{
                        width: '100%',
                        outline: 'none',
                        border: 'none'
                    }}/>
                </Card>
            </div>
        );
    }
    render() {
        return this.state.isFormOpen ? this.renderForm() : this.renderAddButton();
    }
}
const styl = {
    buttonAndTextGroup : {
        display: 'flex',
        alignItems: 'center',
        cursor : 'pointer',
        borderRadius: 3,
        height: 36,
        width: 270,
        paddingLeft: 10
    }
}
export default AddNewItem;