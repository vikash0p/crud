'use client'
import { loading } from '@/utils/db'
// import { fetchStudentdata } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'



const Studentdata = async () => {
    const res = await axios.get( `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/student` );
    return res.data;
}

const FetchStudentData = () => {

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['students'],
        queryFn: Studentdata,
    });



    if (isError) {
        return <span>Error: {error.message}</span>
    }

    console.table(data);

    return (
        <div >
            {
              
                isPending ? (
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5 px-3 '>
                     
                        {
                            loading.map((value, index, array) => {
                                return (
                                    <div role="status" className="max-w-sm animate-pulse bg-black flex flex-col gap-2 py-3 rounded-xl" key={index}>
                                        <div className="h-3  rounded-full bg-gray-700  w-full ps-4 mb-4"></div>
                                        <div className="h-3  rounded-full bg-gray-700  w-full ps-4 mb-4"></div>
                                        <div className="h-3  rounded-full bg-gray-700  w-full ps-4 mb-4"></div>
                                        <span className="sr-only">{value.name} </span>
                                    </div>
                                )
                            })
                        }
                       

                    </div>
                ) :
                    (
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5 px-3' >
                            {

                                data?.map((value, index, array) => {
                                    return (
                                        <div key={value._id} className='flex flex-col gap-2 bg-slate-600 text-white text-center py-4 rounded-xl'>
                                            <div className="uppercase">{value.name}</div>
                                            <div className="uppercase">{value.eamil}</div>
                                            <div className="uppercase">{value.gender}</div>
                                            <div className="uppercase">{value.major}</div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
            }



            
        </div>
    )
}

export default FetchStudentData
