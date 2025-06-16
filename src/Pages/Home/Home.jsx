import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    const jobPromise=fetch('https://career-code-server-neon-mu.vercel.app/jobs').then(res=>res.json())
    return (
        <div>
           <Banner></Banner>
           <Suspense fallback={<h2>loading...</h2>}>
             <HotJobs jobPromise={jobPromise}></HotJobs>
           </Suspense>
          
        </div>
    );
};

export default Home;