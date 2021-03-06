import{
    ApolloClient,
    InMemoryCache,
    HttpLink, split
} from "@apollo/client";
import {WebSocketLink} from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";


const wsLink = new WebSocketLink({
    uri: 'wss://paintastic-gql.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        connectionParams:{
            headers:{
                'x-hasura-admin-secret':'vCyhnmFSB5dIkIK7fy2JU0SOJzX0CC46S5FvdPHF0Q0UUs9iBzy4jEhNKQ462Niv'
            }
        }
    }
})

//httpLink
const httpLink = new HttpLink({
    uri: 'https://paintastic-gql.hasura.app/v1/graphql',
    headers:{
        'x-hasura-admin-secret':'vCyhnmFSB5dIkIK7fy2JU0SOJzX0CC46S5FvdPHF0Q0UUs9iBzy4jEhNKQ462Niv'
    }
})

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return(
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})
export default client;