'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const RemoveButton = ({ id }) => {
    const router = useRouter();

    const deleteHandler = async () => {

       const res=   await fetch(`http://localhost:3000/api/student?id=${id}`, {
            method: "DELETE"
       });
        
        if (res.ok) {
            alert('delete student data successfully !');
            router.refresh();
        }
    }
    
   

  return (

      <button type="button" onClick={deleteHandler} className='bg-red-500 px-4 py-2 rounded-md'>Delete</button>
    
  )
}

export default RemoveButton
