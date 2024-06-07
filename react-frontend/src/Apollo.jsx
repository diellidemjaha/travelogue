import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

// create an Apollo Client instance with a name
const client = new ApolloClient({
  name: 'myUploadClient',
  link: createUploadLink({
    uri: 'http://localhost:8000/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
