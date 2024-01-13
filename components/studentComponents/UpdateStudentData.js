'use client'
import { useRouter } from 'next/navigation';
// pages/index.js
import React, { useState } from 'react';

const UpdateStudentData = ({id,name,email,gender,major,admissionYear}) => {
    const [studentData, setStudentData] = useState({
        newName: name,
        newEmail: email,
        newGender: gender,
        newMajor: major,
        newAdmissionYear: admissionYear,
    });

    const router = useRouter();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!studentData.newName || !studentData.newEmail || !studentData.newGender || !studentData.newMajor || !studentData.newAdmissionYear) {
            alert("All field are mandatery !")
        }
        try {

            const res = await fetch(`http://localhost:3000/api/student/${id}` || `https://crud-vikash0p.vercel.app/api/student/${id}` , {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newName: studentData.newName,
                    newEmail: studentData.newEmail,
                    newGender: studentData.newGender,
                    newMajor: studentData.newMajor,
                    newAdmissionYear: studentData.newAdmissionYear
                })
            })

            if (!res.ok) {
                throw new Error("failed to crate student database.")
            }
            else {
                router.refresh();
                router.push('/students')
                alert('you are successfully updated !')
            }
          

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="max-w-xl w-full p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Update Name
                    </label>
                    <input
                        className="w-full p-2 border rounded-md"
                        type="text"
                        id="newName"
                        name="newName"
                        value={studentData.newName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newEmail">
                       Update Email
                    </label>
                    <input
                        className="w-full p-2 border rounded-md"
                        type="newEmail"
                        id="newEmail"
                        name="newEmail"
                        value={studentData.newEmail}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newGender">
                        Update Gender
                    </label>
                    <select
                        className="w-full p-2 border rounded-md"
                        id="newGender"
                        name="newGender"
                        value={studentData.newGender}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select newGender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newMajor">
                       Update Major
                    </label>
                    <input
                        className="w-full p-2 border rounded-md"
                        type="text"
                        id="newMajor"
                        name="newMajor"
                        value={studentData.newMajor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newAdmissionYear">
                        New Admission Year
                    </label>
                    <input
                        className="w-full p-2 border rounded-md"
                        type="number"
                        id="newAdmissionYear"
                        name="newAdmissionYear"
                        value={studentData.newAdmissionYear}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="w-full bg-green-500 text-white p-2 rounded-md" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateStudentData;
