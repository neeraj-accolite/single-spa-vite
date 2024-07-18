import axios, { Method } from 'axios';

export async function getProfileDetails(url: string) {
  const response = await getApiWrapper({ method: 'GET', url });
  return response.data;
}

function getApiWrapper({ method, url }: { method: Method, url: string }) {
  return axios({
    method,
    url
  })
}