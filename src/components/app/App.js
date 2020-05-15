import React from 'react';
import {connect} from 'react-redux';

import {changeName} from "../actions";

function App(props) {

    const onChangeName = () => {
        props.changeName('asd');
    };

    return (
        <div className="App">
            <p>Surname: {props.surname}</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <button onClick={onChangeName}>Change name</button>
        </div>
    );
}

function mapStateToProps(state) {
    console.log(state);
    return {
        surname: state.surname,
        name: state.name,
        age: state.age
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeName: name => {
            dispatch(changeName(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
