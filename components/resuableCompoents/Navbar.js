'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const link = [
    {
        id: 1,
        name: 'Add Data',
        href:"/"
    },
    {
        id: 2,
        name: 'Student',
        href: "/students"   
    }
]

const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className="w-full flex justify-between bg-neutral-600 text-white py-3 px-4 sticky top-0 ">
            <div className="text-2xl font-bold ">C.<span className="text-green-400">R.</span><span className="text-yellow-400">U.</span><span className="text-red-500">D</span></div>
            <div className="flex gap-4">
                {
                    link.length > 0 && link.map((value, index, array) => {
                        return (
                            <Link href={value.href} key={index} className={`${pathname === value.href ? "text-green-400 font-bold underline" : "text-white" }`}>{value.name} </Link>
                        )
                    })
}
            </div>
        </div>
    )
}

export default Navbar
