import React, {Component} from "react";

export default class Control extends Component{
    shouldComponentUpdate(newProps, newState) {
        console.log("TOC should Update");
        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    render() {
        return (
            <ul>
                <li>
                    <a href="/create"
                       onClick={function (e) {
                           e.preventDefault();
                           this.props.onChangeMode('create');
                       }.bind(this)}
                    >Create</a>
                </li>
                <li>
                    <a href="/update"
                       onClick={function (e) {
                           e.preventDefault();
                           this.props.onChangeMode('update');
                       }.bind(this)}
                    >Update</a>
                </li>
                <li>
                    <input type="button" value="Delete"
                           onClick={function (e) {
                               e.preventDefault();
                               this.props.onChangeMode('delete');
                           }.bind(this)}
                    />
                </li>
            </ul>
        );
    }
}