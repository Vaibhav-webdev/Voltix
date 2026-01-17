"use client"

import React from 'react'
import { useState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Download } from "lucide-react";
import RightPreview from "../app/components/RightPreview";

const page = () => {
  const [render, setrender] = useState(true)

  const [PersonalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    linkedInProfile: "",
    website: "",
  });
  const [ProfessionalSummary, setProfessionalSummary] = useState({
    professionalSummary: "",
  })
  const [color, setColor] = useState('#2563eb');
  const [Experience, setExperience] = useState([])
  const [Project, setProject] = useState([])
  const [Education, setEducation] = useState([])
  const [Skills, setSkills] = useState([])
  const [template, settemplate] = useState(0)
  const [imageUrl, setImageUrl] = useState("");

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const show = searchParams.get('show')
  const router = useRouter()

  
  useEffect(() => {
    if (show === "true") {
      let main = () => {
        setTimeout(() => {
          window.print()
        }, 1000);
      }
      main()
    } else {
      console.log("Hello")
    }
    async function getData(id) {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();

        for (const item of data.resumes) {
          if (item._id === id) {
            console.log(item)
            setPersonalData({
              name: item.fullName,
              email: item.email,
              phone: item.phone,
              location: item.location,
              profession: item.profession,
              linkedInProfile: item.linkedInProfile,
              website: item.website,
            })
            setProfessionalSummary({
              professionalSummary: item.professionalSummary,
            })
            setExperience(item.experience)
            setProject(item.projects)
            setEducation(item.education)
            setSkills(item.skills)
            setColor(item.color)
            settemplate(item.template)
            setImageUrl(item.image)
          }
        }

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    getData(id);
  }, [render]);
  return (
    <div className='flex justify-center items-center py-10'>
      <RightPreview show={show} size={"a4"} imageUrl={imageUrl} template={template} PersonalData={PersonalData} color={color} Education={Education} Experience={Experience} Skills={Skills} ProfessionalSummary={ProfessionalSummary} Project={Project} />
    </div>
  )
}

export default page