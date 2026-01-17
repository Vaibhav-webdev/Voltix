"use client"

import React from 'react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import { toast } from 'sonner'
import CreateResumeModal from './CreateResumeModal'

const create = (props) => {
  const setshow = props.setshow

  const { render, setrender } = useAppContext()
  const [open, setOpen] = useState(false);

  const handleCreate = async (title) => {
    const res = await fetch("/api/add", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title
      })
    })
    const data = await res.json()
    try {
      if (data.success === true) {
        toast.success("Successfully Created!")
        setrender(prev => !prev);
      }
    } catch (error) {
      toast.error("Something is Wrong!")
    }
    setOpen(false);
  };
  return (
    <div className="flex flex-col md:flex-row border-b border-gray-200 shadow-[inset_0_4px_6px_-3px_rgba(0,0,0,0.2)]">
  <div
    onClick={() => {
      setOpen(true);
      setshow(false);
    }}
    className="flex cursor-pointer transition duration-150 ease-in-out gap-3 flex-col justify-center rounded-xl border-violet-300 hover:border-violet-600 hover:shadow-lg border-[1px] items-center 
               px-6 py-12 md:py-16 m-4 md:m-10 border-dashed bg-white"
  >
    <div className="p-3 md:p-2 rounded-full bg-gradient-to-br from-violet-200 to-violet-600">
      <Plus className="text-white text-lg md:text-xl" />
    </div>
    <div>
      <h2 className="text-sm md:text-base text-blue-500">Create Resume</h2>
    </div>
  </div>

  <CreateResumeModal
    open={open}
    onClose={() => setOpen(false)}
    onCreate={handleCreate}
  />
</div>
  )
}

export default create