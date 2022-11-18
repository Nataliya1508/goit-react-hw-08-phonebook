import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchContacts() {
    const { data } = await instance.get('/contacts');
    return data;
    

}

export async function addContacts(newContact) {
    const { data } = await instance.post('/contacts', newContact);
    return data;
}

export async function removeContacts(id) {
     const { data } = await instance.delete(`/contacts/${id}`);
    return data;
}