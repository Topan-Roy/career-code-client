import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    console.log(jobId, user);

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const LinkedIn = form.linkedin.value;
        const GitHub = form.github.value;
        const Resume = form.resume.value;
        console.log(LinkedIn, GitHub, Resume);
        const application = {
            jobId,
            applicant: user.email,
            LinkedIn,
            GitHub,
            Resume
        }
        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application  has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div>
            <h3 className='text-3xl'>Apply for this Job: <Link to={`/job/${jobId}`}> dateils</Link></h3>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">LinkedIn Link</label>
                    <input type="url" name='linkedin' className="input" placeholder="LinkedIn Profile link" />

                    <label className="label">GitHub Link</label>
                    <input type="url" name='github' className="input" placeholder="GitHub Profile link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="Resume Link" />

                    <input type="submit" className='btn' value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;
