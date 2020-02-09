import axios from 'axios';

const BASE_URI = 'http://localhost:8081';
const client = axios.create({
    baseURL: BASE_URI,
    json: true
});

export default {
    getFavorites(userId) {
        return this.perform('get', `/users/${userId}`);
    },
    getTeachers() {
        return this.perform('get', '/teachers');
    },
    getTeacherInfo(teacherId) {
        return this.perform('get', `/teachers/${teacherId}`);
    },

    async perform(method, resource, data) {
        // let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            // headers: {
            //     Authorization: `Bearer ${accessToken}`
            // }
        }).then(req => {
            return req.data
        })
    }
}