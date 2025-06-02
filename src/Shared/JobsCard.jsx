import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {
    const { title, _id, location, requirements, salaryRange, description, company, company_logo } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className=" flex gap-2">
                <figure>
                    <img
                        className='w-16'
                        src={company_logo} />
                </figure>
                <div className="">
                    <h3 className='text-3xl'>{company}</h3>
                    <p className='flex items-center gap-1'> <FaLocationDot />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                {/* <p>Salary : {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p> */}
                 {/* <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p> */}
                <p>{description}</p>
                <p>
  Salary: {salaryRange?.min !== undefined && salaryRange?.max !== undefined
    ? `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency || ''}`
    : 'Not specified'}
</p>

                <p>{description}</p>
                <div className="card-actions ">
                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/job/${_id}`}><button className="btn btn-primary">Shoe Daleils Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;