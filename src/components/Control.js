import React, {Component} from "react";
import "./styles/Control.css";

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
            <div id="topMenu">

            <ul >
                <li >
                    <a href="/create"
                       onClick={function (e) {
                           e.preventDefault();
                           this.props.onChangeMode('create');
                       }.bind(this)}
                       className="menuLink"
                    >글쓰기</a>
                </li>
                <li>
                    <a href="/update"
                       onClick={function (e) {
                           e.preventDefault();
                           this.props.onChangeMode('update');
                       }.bind(this)}
                       className="menuLink"
                    >수정하기</a>
                </li>
                <li>
                    <input type="button" value="삭제"
                           onClick={function (e) {
                               e.preventDefault();
                               this.props.onChangeMode('delete');
                           }.bind(this)}
                           className="menuLink"
                    />
                </li>
            </ul>
            </div>

        );
    }
}