import './App.css';
import React, {Component} from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state={
            subject: {
                title : "WEB",
                sub: "Welcome!!"
            },
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language.'},
                {id: 2, title: 'CSS', desc: 'Css is design.'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'}
            ]

        }
    }

  render() {
    return (
        <div className="App">
            <Subject title={this.state.subject.title} desc={this.state.subject.sub}/>
            <TOC data={this.state.contents}/>
            <Content title="HTML" desc="HTML is HyperText Markup Language."/>
        </div>
    );
  }
}