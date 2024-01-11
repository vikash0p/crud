import Card from '@/components/studentComponets/Card'
import React from 'react'
import { Suspense } from 'react'
const Student = async () => {

    const res = await fetch('http://localhost:3000/api/student', { cache: 'no-store' });
    const student = await res.json();
    // console.log(student);

    if (!res.ok) {
        throw new Error("Failed to fetch Student data. !")
    }





    return (
        <div className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {
                student.length > 0 && student.map((value, index, array) => {
                    return (
                        <div key={index} className=''>
                            <Suspense fallback={<p>Loading feed...</p>}>
                                <Card student={value} key={index} />
                            </Suspense>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default Student
