import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import axios from "axios";
const Zhihu = () => (
    <p>知乎</p>
)
const Douban = () => (
    <p>豆瓣</p>
)
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[]
        }
    }
    componentDidMount() {
        this.initData();
    }
    initData = () => {
        let list = this.refs.list;
        list.innerText = "加载中";
        axios.get('/api/zhihu')
        .then(res => {
            this.setState({
                items: res.data
            })
            list.childNodes[0].nodeValue = "";
        })
        .catch(err => {
            list.innerText = "请求出错";
        })
    }
    render() {
        return (
            <section>
                {/* <input onClick={this.sendReq} type="button" value="请求"/> */}
                <ul ref="list">
                    {this.state.items.map((item,idx) => (
                        <li key={idx}>{item.title}</li>
                    ))}
                </ul>
            </section>
        )
    }
}
export {Content,Douban,Zhihu};