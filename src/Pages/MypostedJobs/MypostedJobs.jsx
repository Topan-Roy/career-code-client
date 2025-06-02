import React, { Suspense } from 'react';
import useAuth from '../../Hooks/useAuth';
import JobList from './JobList';
import { jobsCreateByPromice } from '../../API/JobsAPI';

const MypostedJobs = () => {
      const {user}=useAuth();
    return (
        <div>
            <h2>My poosted jobs</h2>
            <Suspense>
                <JobList jobsCreateByPromice={jobsCreateByPromice(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MypostedJobs;