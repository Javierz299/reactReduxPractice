import auth0 from 'auth0-js'
import history from './history'



export default class Auth {
   auth0 = new auth0.WebAuth({
    domain: 'dev-u9j3svni.auth0.com',
    clientID: 'nlHyOqCmngjzTLca5egfytpWNp3f1ucX',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
   }) 

 login = () => {
    this.auth0.authorize()
}

handleAuth = () => {
    this.auth0.parseHash((err,authResult) => {
        if(authResult){
            localStorage.setItem('access_token', authResult.accessToken)
            localStorage.setItem('id_token', authResult.id_token)

            let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))

            localStorage.setItem('expiresAt',expiresAt)
            setTimeout(() => {
                history.replace('/authcheck')
            }, 200);
        } else {
            console.log(err)
        }
    })
}
   
logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
}

isAunthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
}


}

