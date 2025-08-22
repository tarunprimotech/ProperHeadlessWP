import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { API_Routes } from "@/constants/api_routes";

const client = new ApolloClient({
  // Set the URI to your WordPress GraphQL endpoint
  link: new HttpLink({
    uri: API_Routes.GraphQL, // Change this URL if necessary
  }),
  cache: new InMemoryCache(),
});

export default client;
