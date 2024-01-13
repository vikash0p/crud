'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteStudentData = ({ id }) => {
    const router = useRouter();

    const DeleteStudentDataHandler = async () => {
        const res = await fetch(`http://localhost:3000/api/student?id=${id}` || `https://crud-vikash0p.vercel.app/api/student?id=${id}` , {
            method:'DELETE',
        });

        if (res.ok) {
            alert('you are successfully delete!');
            router.refresh();
        }
        

    }
    return (
        <div>
            <button type="button" className='bg-red-600 px-4 py-2 rounded-lg ' onClick={DeleteStudentDataHandler }>Delete</button>
        </div>
    )
}

export default DeleteStudentData