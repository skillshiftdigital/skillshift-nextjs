import nodeFetch from 'node-fetch';

const query = encodeURIComponent('*[_type == "services"]');
const url = `https://a3n3iq2v.api.sanity.io/v2021-03-25/data/query/production?query=${query}`;
const options = {
  headers: {
    Authorization: `Bearer skGq1oM4EuDFPWhrEAUusPYAGwGVFWzquyHAxODK4wVVY9X6BEhI9YHlJ861O5Qw6ccKvpLvsqMVTnMtQ5JUHWNmqNsXY7TXq7ZrwNR9vIbgHhL86EOsYnegL3RFOX7AeSzaILeQ3S479zUaJWcoHnEW6lCzegivVEUGpCLbSirkjJP1deHX`
  }
};

nodeFetch(url, options)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);