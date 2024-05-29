import React, {Component} from "react";
import "./styles/Subject.css";

export default class Subject extends Component{
    shouldComponentUpdate(newProps, newState) {
        console.log("TOC should Update");
        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    render() {
        return (
            <header>
                <h1><a id="title" href="/" onClick={function (e){
                    e.preventDefault();
                    this.props.clickWelcome();
                }.bind(this)}
                >{this.props.title}</a></h1>
            </header>
        );
    }
}