import {Component} from "react";

export default class Subject extends Component{
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.desc}
            </header>
        );
    }
}