import axios from 'axios'

export const URL = 'http://192.168.100.10:5000/api/Contacts';


export function getContacts() {
    return axios.get(URL)
}

export function updateContact(id, data) {
    return axios.put(URL + '/' + id, data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

export function addContact(data) {
    return axios.post(URL, data, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
}


export function deleteContact(id) {
    return axios.delete(URL + '/' + id)
}
