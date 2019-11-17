import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_BASE,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
})

if(process.browser) {
  let token = localStorage.getItem("access_token")
  if( token ) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

export default instance