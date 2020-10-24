import React from 'react';
import Aux from '../hoc/Aux';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const layout = props => (
    <Aux>
        <header>
            <Header isAuthenticated={props.isAuthenticated} displayLogin={(condition) => props.displayLogin(condition)}/>
        </header>
        <main>
            {props.children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </Aux>
)
export default layout;
