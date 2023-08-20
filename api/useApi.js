import axios from 'axios'

// const api = 'https://api.superapp.avacore.ru/'
const api = 'http://87.249.49.97:86/'


export async function getApi(path) {
    return axios.get(api + path)
}

export async function postApi(path, payload) {
    return axios.post(api + path, payload, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc2NTM2MDEsInN1YiI6IjQ1In0.M5CkSmH26zKSmj3S7z2qrmOX5aMhbnK4Y1uHoeUG9pw' } })
}