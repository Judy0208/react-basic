import React, {Component} from "react";

export default class UpdateContent extends Component{
    constructor(props) {
        super(props);
        this.state={
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <article>
                <h2>Update</h2>
                <form action="/update_process" method="post"
                      onSubmit={function (e) {
                          e.preventDefault();
                          this.props.onSubmit(
                              this.state.id,
                              this.state.title,
                              this.state.desc);
                      }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}/>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.inputFormHandler}
                        />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="Enter Descriptions"
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        />
                    </p>
                    <p>
                        <input type="submit" value="수정하기"/>
                    </p>
                </form>
            </article>
        );
    }
}