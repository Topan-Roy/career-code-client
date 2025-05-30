import React from 'react';
import { Link,  useLoaderData } from 'react-router';

const JobDaleils = () => {
    const {_id, title, company } = useLoaderData();

    return (
        <div>
            <h2 className='text-4xl'> Dateils of job  {title}</h2>
            <p>{company}</p>
          <Link to={`/jobApply/${_id}`}>  <button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDaleils;