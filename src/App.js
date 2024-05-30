import './App.css';
import React, {Component} from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.state={
            selectedId: 1,
            mode:'welcome',
            max_content_id: 3,
            welcome:{
                title: "Welcome",
                desc: "Hello React!!"
            },
            subject: {
                title : "게시판",
                sub: "Welcome!!"
            },
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is HyperText Markup Language.'},
                {id: 2, title: 'CSS', desc: 'Css is design.'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive.'}
            ]
        }
    }

    getContentDetail() {
        var i = 0;
        while (i < this.state.contents.length) {
            var data = this.state.contents[i];
            if (data.id === this.state.selectedId) {
                return data;
                break;
            }
            i += 1;
        }
    }

    getContent() {
        var _title, _desc, _article = null;
        var mode = this.state.mode;
        if (mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}/>;

        } else if (mode === 'read') {
            var _content = this.getContentDetail();
            _article = <ReadContent title={_content.title} desc={_content.desc}/>;

        } else if (mode === 'create') {
            _article = <CreateContent onSubmit={function (_title, _desc) {
                var new_max_id = this.state.max_content_id + 1;
                var contentList = Array.from(this.state.contents);
                contentList.push(
                    {
                        id: new_max_id,
                        title: _title,
                        desc: _desc
                    }
                );
                this.setState({
                    contents: contentList,
                    mode: 'read',
                    selectedId: new_max_id,
                    max_content_id: new_max_id
                })
            }.bind(this)}/>;

        } else if (mode === 'update') {
            _content = this.getContentDetail();
            _article = <UpdateContent data={_content}
                                      onSubmit={function (_id, _title, _desc) {
                                          var _contents = Array.from(this.state.contents);
                                          var i = 0;
                                          while (i < _contents.length) {
                                              if (_contents[i].id === _id) {
                                                  _contents[i] = {
                                                      id: _id,
                                                      title: _title,
                                                      desc: _desc
                                                  }
                                                  break;
                                              }
                                              i += 1;
                                          }
                                          this.setState({
                                              contents: _contents,
                                              mode: 'read'
                                          });
                                      }.bind(this)}
            />
        } else if (mode === 'delete') {

        }
        return _article;
    }

    render() {
        console.log("App Render!");

        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    desc={this.state.subject.desc}
                    selectedId={this.state.subject.id}
                    clickWelcome={function () {
                        this.setState({
                            mode: 'welcome',
                        })
                    }.bind(this)
                    }
                />
                <Control
                    onChangeMode={function (mode) {
                        if (mode === 'delete') {
                            if (window.confirm("Really?")) {
                                var content = Array.from(this.state.contents);
                                var i =0;
                                while (i < content.length) {
                                    if (content[i].id === this.state.selectedId) {
                                        content.splice(i,1);
                                        break;
                                    }
                                    i += 1;
                                }
                            }
                            this.setState({
                                mode:'welcome',
                                contents: content
                            })
                        } else {
                            this.setState({mode:mode})
                        }
                    }.bind(this)}
                />
                <br/>
                <hr/>
                <TOC data={this.state.contents}
                     onChangePage={function (id) {
                         this.setState({
                             mode: 'read',
                             selectedId: Number(id)
                         })
                     }.bind(this)}
                />
                {this.getContent()}
            </div>
        );
    }
}
