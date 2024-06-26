import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const yourAccessToken = localStorage.getItem('token');

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', 
  headers: {
    Authorization: `Bearer ${yourAccessToken}`,
  },
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
)
