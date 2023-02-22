import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = ' http://localhost:7008/register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
