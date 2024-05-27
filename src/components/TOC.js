import React, {Component} from "react";

export default class TOC extends Component{
    render() {
        var data = this.props.data;
        var list = [];
        var i = 0;
        while (i < data.length) {
            list.push(<li key = {data[i].id}><a href={"/content/" + data[i]}>{data[i].title}</a></li>)
        }
        return(
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        );
    }
}