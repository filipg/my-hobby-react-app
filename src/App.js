import React, { Component } from 'react';
import './App.scss';
import Layout from './Layout/Layout';

class App extends Component {

    state = {
        isUserAuthenticated: false
    }

    render() {

        const isUserAuth = this.state.isUserAuthenticated ? <h1>User is authenticated</h1> : <h1>User in not authenticated</h1>;

        return (
            <div>
                <Layout isAuthenticated={this.state.isUserAuthenticated}>
                    {isUserAuth}
                </Layout>
            </div>
        );
    }
}

export default App;
