import React, {Component} from "react";
import "./styles/ReadContent.css";

export default class ReadContent extends Component{
    render() {
        return(
            <article>
                <div id="content-title">{this.props.title}</div>
                <div id="content-detail">
                    {this.props.desc}
                </div>
            </article>
        )
    }
}