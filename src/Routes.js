import React from 'react';
import MicroFrontend from './components/MircoFrontend';
console.log(process.env)

const { REACT_APP_MICRO_UI_FIRST: firstApp} = process.env;
const { REACT_APP_MICRO_UI_SECOUND: secondApp} = process.env;
const Routes = (props) => {

    switch(props.route && props.currentRoute) {
        case "address": 
            return address(props);
        default:
            return null;
    }
}

const address = (props) => {
    console.log("hello")
    return (
        <MicroFrontend
        host={firstApp}
        name="address"
        route={props.route}/>
    )
}

export default Routes;