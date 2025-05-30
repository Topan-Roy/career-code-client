import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';


const Home = () => {
    const jobPromise=fetch('http://localhost:3000/jobs').then(res=>res.json())
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