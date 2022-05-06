import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://comic-wolf-38.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'ZU8And9ZljlFP7ctGWjNyVrKhSYwAdPngkMYFyROw3AqzdYATp6PA4BdGLTx9jF8'},
    cache: new InMemoryCache()
});

export default client;