export const myApplicationPromice=(email,accessToken)=>{
    return fetch(`http://localhost:3000/applications?email=${email}`,{
        credentials:'include',
        headers:{
           authorization:`Berrer${accessToken}`
        }
    }).then(res=>res.json())
}