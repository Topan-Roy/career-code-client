import React from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth();
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        // process salari range data
        const { min, max, currency, ...newJob } = data;
       newJob.salaryRange = { min, max, currency };
        // console.log(newJob)
        // process requirements
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',')
        const requirementsClean = requirementsDirty.map(req => req.trim());
        newJob.requirements = requirementsClean;
        // process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
        newJob.status = 'active';
        console.log(newJob)
        // save job to the data base
        axios.post('https://career-code-server-neon-mu.vercel.app/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This new job has been saved published",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div >
            <h2>Plasce add a job</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />

                    <label className="label">Company logo</label>
                    <input type="text" name='company_logo' className="input" placeholder="Company logo URL" />
                </fieldset>
                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" value='On-Site' name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" value='Remot' name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" value='Hybrid' name="jobType" aria-label="Hybrid" />
                    </div>

                </fieldset>
                {/*  Job Category*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job category</legend>

                    <select defaultValue="job category" className="category bg-base-200" name='category'>
                        <option disabled={true}>job category</option>
                        <option>Enginnering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>
                </fieldset>
                {/* application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">application Deadline</legend>
                    <input type="date" name='deline' className="input" />

                </fieldset>
                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="">
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='min' className="input" placeholder="Minimun Salary" />

                        </div>
                        <div className="">
                            <label className="label">Maximum Salary</label>
                            <input type="text" name='max' className="input" placeholder="Maximum Salary" />

                        </div>
                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" name='currency' className="select">
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                {/*description  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Description</legend>
                    <textarea className="textarea" name='description' placeholder="Job Description"></textarea>

                </fieldset>
                {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <textarea className="textarea" name='requirements' placeholder="Job Requirements (saparet by comma)"></textarea>

                </fieldset>
                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job Responsibilities (saparet by comma)"></textarea>

                </fieldset>
                {/* HR relative Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Relative Info</legend>

                    <label className="label">Job Title</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' defaultValue={user.email} className="input" placeholder="HR email" />

                </fieldset>

                <input type="submit" className='btn' value="Add Job" />

            </form>
        </div>
    );
};

export default AddJob;