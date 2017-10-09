import React from 'react';
// import Nav from "../sideNav/sideNav";
import './home.less';
// import {Content,douban,zhihu} from  '../content/content';
import {Route,BrowserRouter as Router,Link} from "react-router-dom"
import {Content} from "../content/content";
import ErrPage from "../error";

const routes = [
    { path: '/',
      exact: true,
      main: () => <h2>Home</h2>
    },
    { path: '/zhihu',
      main: Content
    },
    { path: '/douban',
      main: () => <h2>豆瓣</h2>
    }
  ]
const Menu = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
      <li styleName={match ? 'active' : ''}>
        <Link to={to}>{label}</Link>
      </li>
    )}/>
)
export default class Home extends React.Component{
    
    render() {
        return (
            <Router>
            <div styleName="home">
                  <ul styleName="nav">
                    <Menu to="/" activeOnlyWhenExact={true} label="home"/>
                    <Menu to="/zhihu" label="知乎"/>
                    <Menu to="/douban" label="豆瓣"/>        
                  </ul>
                <section styleName="content">
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                    />
                  ))}
                </section>
                <Route componet={ErrPage}/>
            </div>
            </Router>
        )
    }
}