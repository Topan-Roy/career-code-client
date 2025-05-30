import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';



const ApplicationList = ({ myApplicationPromice }) => {
    const applications = use(myApplicationPromice);
    return (
        <div>
            <h2 className='text-2xl'>Jobs applied so far : {applications.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application,index)=><JobApplicationRow 
                            key={application._id}
                            application={application}
                            index={index}
                            ></JobApplicationRow>)
                        }
                       
                       
                    </tbody>
                   
                </table>
            </div>

        </div>
    );
};

export default ApplicationList;