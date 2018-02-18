"use strict"
//React
import React from 'react';
import {render} from 'react-dom'
        import {Provider} from 'react-redux'

        import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//IMPORT COMBINE REDUCER
import reducers from './reducers/index';
//IMPORT ACTIONS
import {addToCart} from "./actions/cartActions";
import {postBooks, deleteBooks, updateBooks} from "./actions/booksActions";

const middleware = applyMiddleware(logger);
//Step 1 Create the store
const store = createStore(reducers, middleware);

import BookList from './components/pages/booksList';
import Menu from './components/menu';
import Footer from './components/footer'

render(
        <Provider store={store}>
            <div>
                <Menu />
                <BookList />
                <Footer />
            </div>
        </Provider>, document.getElementById('app')
        );

/// STEP 2 create and dispatch actions
//store.dispatch(postBooks(
//        
//        ))
//// DELETE a book
//store.dispatch(deleteBooks(
//        {id: 1}
//))
//// UPDATE a book
//store.dispatch(updateBooks(
//        {
//            id: 2,
//            title: 'Learn React in 24h'
//        }
//))
//
//
////-------------------------------------------
//
////-->> CART ACTIONS <<--
//// ADD TO CART
//store.dispatch(addToCart([{id: 1}]))