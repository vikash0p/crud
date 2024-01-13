import UpdateStudentData from '@/components/studentComponents/UpdateStudentData';
import { getStudentById } from '@/utils/fetchData';
import React from 'react'



const StudentId = async ({ params }) => {
    const { id } = params;
    console.log(id);
    const { singleStudentData } = await getStudentById(id);
    console.log(singleStudentData);
    const{name,email,gender,major,admissionYear}=singleStudentData

  
    return (
        <div>
            <UpdateStudentData id={id} name={name} email={email} gender={gender} major={major} admissionYear={admissionYear} />
        </div>
    )
}

export default StudentId
