import React, {Component} from "react";

export default class TOC extends Component{
    shouldComponentUpdate(newProps, newState) {
        console.log("TOC should Update");
        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }

    render() {
        var data = this.props.data;
        var list = [];
        var i = 0;
        while (i < data.length) {
            list.push(
                <li key = {data[i].id}>
                    <a href={"/content/" + data[i].id}
                       data-id={data[i].id}
                        onClick={function (e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}>
                        {data[i].title}
                    </a>
                </li>)
            i +=1;
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