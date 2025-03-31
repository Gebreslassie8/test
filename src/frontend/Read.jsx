import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Read() {
    const { id } = useParams();
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/read/" + id)
            .then(res => {
                console.log(res)
                setStudents(res.data[0]);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div className='p-2'>
                    <h3 className="text-center text-primary">Student Detail</h3>
                    <h5>{students.Id}</h5>
                    <h5>{students.Name}</h5>
                    <h5>{students.Email}</h5>
                </div>
            < Link to='/student' className="btn btn-success">Back</Link>
            <Link to={`/Update/${students.Id}`} className="btn btn-primary ms-2">Update</Link>

            </div>

        </div>
    )
}
export default Read