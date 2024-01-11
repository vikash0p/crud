"use client"
import Link from 'next/link'
import React from 'react'
import RemoveButton from './RemoveButton'

const Card = ({ student }) => {

    return (
        <div className='bg-slate-600 flex flex-col justify-center items-center gap-2 text-white rounded-lg py-4 m-3'>
            <div className="uppercase">{student.name}</div>
            <div className="uppercase">{student.email}</div>
            <div className="uppercase">{student.gender}</div>
            <div className="uppercase">{student.major}</div>
            <div className="uppercase">{student.admissionYear}</div>
            {/* <div className="">{student._id}</div> */}
            <div className="flex justify-between w-full h-full px-3">
                <div className="bg-orange-400 px-4 py-1  rounded-md">
                    <Link href={`/students/${student._id}`} className="">Update</Link>
                </div>
                <RemoveButton id={student._id} />
            </div>
        </div>
    )
}

export default Card
