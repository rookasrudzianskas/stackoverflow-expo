import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://saltillo.stepzen.net/api/kindred-sabertooth/__graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization:
        'Apikey saltillo::stepzen.io+1000::6696a5e5c5fba15c49fa828865116f1545b285cef6a83195041294b37308c861',

      'Content-Type': 'application/json',
    },
  },
});
