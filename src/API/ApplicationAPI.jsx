export const myApplicationPromice=(email,accessToken)=>{
    return fetch(`https://career-code-server-neon-mu.vercel.app/applications?email=${email}`,{
        credentials:'include',
        headers:{
           authorization:`Berrer${accessToken}`
        }
    }).then(res=>res.json())
}