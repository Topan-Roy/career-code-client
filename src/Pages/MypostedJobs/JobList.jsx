import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsCreateByPromice }) => {
    const jobs = use(jobsCreateByPromice)
    return (
        <div>
            <h2 className='text-3xl'>Jobs created bt you : {jobs.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job title</th>
                            <th>Job Deadline</th>
                            <th>Cound</th>
                            <th>View Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows 1 */}
                      {
                        jobs.map((job,index)=><tr key={job._id}>
                            <th>{index + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.deline}</td>
                            <td>{job.application_count}</td>
                            <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                        </tr>)
                      }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;