import StudentForm from '@/components/studentComponets/StudentForm';
import React from 'react'

const getTopicById = async (id) => {
    try {
        const url1 = `https://crud-lac-nine.vercel.app/api/student?id=${id}`
        const url2 = `http://localhost:3000/api/student?id=${id}`

        const res = await fetch(url1 ||url2, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error('failed to fetch student data !')
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
}


const StudentId = async ({ params }) => {
    const { id } = params;
    console.log("this is my id", id)

    const { message, success, data } = await getTopicById(id);
    console.log(message)
    console.log(success)
    console.log(data);
    const { name, email, gender, major, admisssionYear } = data;

    return (
        <div>
            <StudentForm id={id} name={name} email={email} gender={gender} major={major} admisssionYear={admisssionYear} />
        </div>
    )
}

export default StudentId
