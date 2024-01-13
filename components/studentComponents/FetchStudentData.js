'use client'
import { loading } from '@/utils/db'
// import { fetchStudentdata } from '@/utils/fetchData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'



const Studentdata = async () => {
    const res = await axios.get( 'http://localhost:3000/api/student' || 'https://crud-vikash0p.vercel.app/api/student' );
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
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5 '>
                     
                        {
                            loading.map((value, index, array) => {
                                return (
                                    <div key={index} className="flex justify-center place-items-center w-[326px] h-[128px] bg-emerald-600  rounded-xl text-white text-2xl">
                                        {value.name}
                                    </div>
                                )
                            })
                        }
                       

                    </div>
                ) :
                    (
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5' >
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
