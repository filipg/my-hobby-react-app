import React, { Component } from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import Auth from './Auth/Auth';

class App extends Component {

    state = {
        isUserAuthenticated: false,
        displayLoginPage: true
    }

    checkDisplayLogin = value => this.setState({displayLoginPage: value})

    render() {
        const isUserAuth = this.state.isUserAuthenticated ? <h1>User is authenticated</h1> : <Auth displayLoginPage={this.state.displayLoginPage}/>

        return (
            <div>
                <Layout isAuthenticated={this.state.isUserAuthenticated} displayLogin={(condition) => this.checkDisplayLogin(condition)}>
                    {isUserAuth}
                </Layout>
            </div>
        );
    }
}

export default App;
