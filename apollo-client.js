import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://monteiro.stepzen.net/api/limping-mite/__graphql",
  headers: {
    Authorization: `ApiKey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
