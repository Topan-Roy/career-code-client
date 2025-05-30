import React, { use } from 'react';
import JobsCard from '../../Shared/JobsCard';

const HotJobs = ({ jobPromise }) => {
    const jobs = use(jobPromise);
    console.log(jobs)
    return (
        <div>
            <h2  className='text-3xl text-center'>Hots job  of the Day</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    jobs.map(job=><JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;