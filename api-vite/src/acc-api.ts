import axios, { Method } from 'axios';

export async function getAllUsers() {
  const url = "https://reqres.in/api/users?page=1&per_page=5";
  const response = await getApiWrapper({ method: 'GET', url });
  return response.data;
}

export async function getProfileDetails(id: number) {
  const url = `https://reqres.in/api/users/${id}`;
  const response = await getApiWrapper({ method: 'GET', url });
  return response.data;
}

export async function getOrderDetails(id: number) {
  const url = `https://dummyjson.com/carts/${id}`;
  const response = await getApiWrapper({ method: 'GET', url });
  return response.data;
}

function getApiWrapper({ method, url }: { method: Method, url: string }) {
  return axios({
    method,
    url
  })
}