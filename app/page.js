'use client'
import { useRouter } from 'next/navigation';
// pages/index.js
import React, { useState } from 'react';

const Home = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    email: '',
    gender: '',
    major: '',
    admissionYear: '',
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
    if (!studentData.name || !studentData.email || !studentData.gender || !studentData.major || !studentData.admissionYear) {
      alert("All field are mandatery !")
    }
    try {
        
      const res = await fetch("/api/student", {
        method: "POST",
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          name: studentData.name,
          email: studentData.email,
          gender: studentData.gender,
          major: studentData.major,
          admissionYear :studentData.admissionYear
        })
      })

      if (!res.ok) {
        throw new Error("failed to crate student database.")
      }
      router.refresh();
      router.push('/students')
        
      } catch (error) {
        console.log(error)
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-xl w-full p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="email"
            id="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className="w-full p-2 border rounded-md"
            id="gender"
            name="gender"
            value={studentData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
            Major
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="text"
            id="major"
            name="major"
            value={studentData.major}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admissionYear">
            Admission Year
          </label>
          <input
            className="w-full p-2 border rounded-md"
            type="number"
            id="admissionYear"
            name="admissionYear"
            value={studentData.admissionYear}
            onChange={handleChange}
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
