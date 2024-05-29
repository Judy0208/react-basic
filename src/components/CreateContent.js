import React, {Component} from "react";

export default class CreateContent extends Component{
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form action="create_process" method="post"
                      onSubmit={function (e) {
                          e.preventDefault();
                          this.props.onSubmit(e.target.title.value, e.target.desc.value);
                      }.bind(this)}
                >
                    <p><input type="title" name="title" placeholder="Title"/></p>
                    <p><textarea name="desc" placeholder="Enter Descriptions"/></p>
                    <p><input type="submit" value="글쓰기"/></p>
                </form>
            </article>
        );
    }
}