import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../Hooks/useAuth';
import { myApplicationPromice } from '../API/ApplicationAPI';

const MyApplications = () => {
    const {user}=useAuth();
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
                 <ApplicationList
                  myApplicationPromice={myApplicationPromice(user.email)}
                  ></ApplicationList>
            </Suspense>
           
        </div>
    );
};

export default MyApplications;