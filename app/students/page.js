import DeleteStudentData from '@/components/studentComponents/DeleteStudentData';
import { fetchStudentdata } from '@/utils/fetchData'
import Link from 'next/link';
import React from 'react'
import { Suspense } from 'react'

const Students = async () => {

  const data = await fetchStudentdata();
  console.log(data);


  return (
    <div className='container mx-auto my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 '>
      {
        data?.student?.map((value, index, array) => {
          return (
            <>
              <Suspense fallback={ <p> loading...</p> }>
                <div key={index} className=''>
                  <div className='flex flex-col gap-2 bg-slate-600 rounded-lg py-4 text-center text-white'>
                    <p className="uppercase">{value.name} </p>
                    <p className="uppercase">{value.email} </p>
                    <p className="uppercase">{value.gender} </p>
                    <p className="uppercase">{value.major} </p>
                    <div className="w-full flex justify-between px-2">
                      <Link href={`students/${value._id}`} className='bg-orange-600 px-4 py-2 rounded-lg' >Update</Link>
                      <DeleteStudentData id={value._id} />
                    </div>
                  </div>
                </div>
              </Suspense>
            </>

          )
        })
      }
    </div>
  )
}

export default Students
