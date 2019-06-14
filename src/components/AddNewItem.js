import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';
import {addList, addCard} from '../actions';



const styles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    icon: {
        margin: theme.spacing(2),
    }
}));


class AddNewItem extends Component {
    state = {
        isFormOpen: false,
        text: ''
    }

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "add another list" : "add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackgorund = list ? 'rgba(0,0,0,.15)' : 'inherit';
        return (

            <div onClick={this.openForm}
                style={{
                    ...styl.buttonAndTextGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackgorund
                }}>
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
   
    handleAddList = () => {
        console.log(this.props)
        this.setState({
            text : ""
        })
        const {dispatch} = this.props;
        const {text} = this.state;
        if(text){
            dispatch(addList(text));
        }
        return; 
    }
    handleAddCart = () => {
        this.setState({
            text : ""
        });
        const {dispatch, listID} = this.props;
        const {text} = this.state;
        if(text){
            dispatch(addCard(listID,text));
        }
        return; 
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
        const { list } = this.props;
        const placeholder = list
            ? 'Add New List'
            : 'Enter a title from card';
        const buttonTitle = list
            ? 'Add New List'
            : 'Add New Card';

        return (
            <div>
                <Card
                    style={{
                        overflow: 'visible',
                        minHeight: 80,
                        minWidth: 250,
                        padding: '6px 8px 2px',
                        marginBottom: 10,

                    }}>
                    <Textarea
                        autoFocus
                        placeholder={placeholder}
                        title={buttonTitle} 
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleChangeInput}
                        style={{
                            width: '100%',
                            outline: 'none',
                            border: 'none'
                        }} />
                </Card>
                {/*
                    aşağıdaki Fab componentinde onClick eventi yerin onMouseDown eventinin 
                    kullanılmasının sebebi textarea'da ki onBlur eventi
                    eğer biz onClick fonksiyonunu kullanırsak, onBlur daha önce çalışır
                    ve on click eventi tetiklenmez.
                    buna çözüm olarak onBlur fonksiyonundan daha once çalışan onMouseDown 
                    eventini kullanmak.
                */}
                <Fab onMouseDown={list ? this.handleAddList : this.handleAddCart} color="primary" aria-label="Add" className={styles.fab}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }
    render() {
        return this.state.isFormOpen ? this.renderForm() : this.renderAddButton();
    }
}
const styl = {
    buttonAndTextGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 270,
        paddingLeft: 10
    }
}
export default connect()(AddNewItem);