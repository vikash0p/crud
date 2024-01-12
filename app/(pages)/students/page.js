import Card from '@/components/studentComponets/Card'
import React from 'react'
import { Suspense } from 'react'

const URL2 = `https://crud-lac-nine.vercel.app/api/student`
const URL1 = 'http://localhost:3000/api/student'

const GetData = async () => {
    try {
        const res = await fetch(URL1 || URL2, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error("Failed to fetch Student data. !")
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

const Student = async () => {
    const { student } = await GetData();
    console.log(student)


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
