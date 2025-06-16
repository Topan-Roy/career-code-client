export const  jobsCreateByPromice=email=>{
    return fetch(`https://career-code-server-neon-mu.vercel.app/jobs/applications?email=${email}`).then(res=>res.json())
}