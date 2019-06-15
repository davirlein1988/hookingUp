import React from 'react';
import { ReactDOM } from 'react-dom';
import { mount, route } from 'navi';
import { createApolloFetch } from 'apollo-fetch';
import { URL } from '../config';
import { Router} from 'react-navi';
import Header from '../containers/Header';


const fetch = createApolloFetch({
  uri: URL,
});


export default mount({
  '/': route({
    title: 'Home',
    head: (
      <>
        <meta name="description" content="And example app" />
      </>
    ),
    getView: () => import('../containers/home.js'),
  }),
  '/users': route({
    title: 'Users',
    head: (
      <>
        <meta name="description" content="slldals snasd" />
      </>
    ),
    getView: () => import('../containers/Users.js'),
  })


ReactDOM.render(
  <Router
  routes={route}
  >
    <Header/>
  </Router>
)
