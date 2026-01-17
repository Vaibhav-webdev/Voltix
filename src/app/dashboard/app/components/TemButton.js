"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function TemplateDropdown(props) {
  const template = props.template
  const settemplate = props.settemplate

  const [open, setOpen] = useState(false);
  

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 hover:bg-blue-200 cursor-pointer transition duration-150 ease-in text-sm rounded-md bg-blue-50 text-blue-600"
      >
        <span>Template</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute border-t-2 border-gray-400 left-0 z-10 mt-2 w-84 rounded-xl bg-white shadow-lg">
          <div className="space-y-3 p-4">

            {/* Classic (Selected) */}
            <div onClick={() => {
              settemplate("0")
              setOpen(!open)
            }} className={`relative cursor-pointer rounded-lg ${template === "0" ? "border border-blue-500" : "border border-gray-300"} hover:${template === "0" ? "bg-blue-100" : "bg-gray-100"} ${template === "0" ? "bg-blue-100" : "bg-gray-50"} p-4`}>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">Classic</h3>
                  {template === "0" && <div className="bg-blue-400 rounded-full">
                    <Check width={16} height={16} className="text-white m-1" />
                  </div>}  
                </div>
                {
                /* Check Icon */}
                <div>
                  <p className="mt-1 italic text-sm text-gray-600">
                    A clean, traditional resume format with clear sections and
                    professional typography
                  </p>
                </div>
              </div>
            </div>

            {/* Modern */}
            <div onClick={() => {
              settemplate("1")
              setOpen(!open)
            }} className={`relative cursor-pointer rounded-lg ${template === "1" ? "border border-blue-500" : "border border-gray-300"} hover:${template === "1" ? "bg-blue-100" : "bg-gray-100"} ${template === "1" ? "bg-blue-100" : "bg-gray-50"} p-4`}>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">Modern</h3>
                 {template === "1" && <div className="bg-blue-400 rounded-full">
                    <Check width={16} height={16} className="text-white m-1" />
                  </div>}
                </div>
                {
                /* Check Icon */}
                <div>
                  <p className="mt-1 italic text-sm text-gray-600">
                    Sleek design with strategic use of color and modern font choices
                  </p>
                </div>
              </div>
            </div>

            {/* Minimal */}
            <div onClick={() => {
              settemplate("2")
              setOpen(!open)
            }} className={`relative cursor-pointer rounded-lg ${template === "2" ? "border border-blue-500" : "border border-gray-300"} hover:${template === "2" ? "bg-blue-100" : "bg-gray-100"} ${template === "2" ? "bg-blue-100" : "bg-gray-50"} p-4`}>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">Minimal Image</h3>
                  {template === "2" && <div className="bg-blue-400 rounded-full">
                    <Check width={16} height={16} className="text-white m-1" />
                  </div>}  
                </div>
                {
                /* Check Icon */}
                <div>
                  <p className="mt-1 italic text-sm text-gray-600">
                    Minimal design with a single image and clean typography
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
