"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { NotebookPen } from 'lucide-react';
import { toast } from 'sonner';
import { Notebook, Edit, Trash2 } from "lucide-react";
import { Eye } from 'lucide-react';

const content = (props) => {
    const show = props.show
    const setshow = props.setshow

    const router = useRouter()
    
    const { render, setrender } = useAppContext()
    const [titles, settitles] = useState([])

    const handleDelete = async (id) => {
        const confirmDelete = confirm("Are you sure?");
        if (!confirmDelete) return;

        const res = await fetch("/api/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
            }),
        });

        const data = await res.json();

        if (data.success) {
            toast.success("Resume deleted!");
            setrender(prev => !prev)
        } else {
            toast.error("Delete failed ❌");
        }
    };
    useEffect(() => {
        async function get() {
            const res = await fetch("/api/get")
            const data = await res.json()
            settitles(data.user.resumes)
            if (data.user.resumes.length !== 0) {
                setshow(false)
            }
        }
        get()
    }, [render])

    return (
        <div>
    <div className='grid gap-8 py-10 px-4 sm:px-8 md:px-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
        {titles.map((item, index) => (
            <div 
                onClick={() => router.push(`/dashboard/app?id=${item._id}`)}
                key={item._id} 
                className="relative group flex cursor-pointer transition duration-150 ease-in-out gap-1 flex-col justify-center rounded-xl border-purple-400 hover:shadow-xl border-[1px] items-center py-14 bg-gradient-to-br from-violet-100 to-purple-300"
            >
                {/* Hover Icons */}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="p-1 cursor-pointer bg-white rounded-full hover:bg-purple-100">
                        <Eye 
                            onClick={(e) => {
                                e.stopPropagation()
                                router.push(`/dashboard/review?id=${item._id}&show=false`)
                            }} 
                            size={16} 
                            className="text-purple-600" 
                        />
                    </button>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation()
                            handleDelete(item._id)
                        }} 
                        className="p-1 cursor-pointer bg-white rounded-full hover:bg-red-100"
                    >
                        <Trash2 size={16} className="text-red-500" />
                    </button>
                </div>

                {/* Card Content */}
                <div className="p-2 rounded-full">
                    <Notebook width={46} height={46} className="text-purple-500" />
                </div>
                <div>
                    <h2 className="text-sm text-purple-600">{item.title}</h2>
                </div>
            </div>
        ))}
    </div>

    {show && (
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-0">

            {/* Icon Container */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <NotebookPen size={28} />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800">
                No resumes found
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-sm text-sm text-gray-500">
                You haven’t created any projects yet.
                Start by creating a new project to see it listed here.
            </p>
        </div>
    )}
</div>
    )
}

export default content