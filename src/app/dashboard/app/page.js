"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Download } from "lucide-react";
import RightPreview from "./components/RightPreview";
import LeftForm from "./components/LeftForm";


export default function page() {
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
  const [template, settemplate] = useState("0")
  const [imageUrl, setImageUrl] = useState("");

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const router = useRouter()

  async function Main() {
    const res = await fetch("/api/update", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id, PersonalData, imageUrl, template, color, ProfessionalSummary, Experience, Project, Education, Skills
      })
    })
    const data = await res.json()
    if (data.success === true) {
      toast.success("Successfully Changes!", {
        description: "Your changes have been saved!",
      })
    } else {
      console.log(data)
    }
  }
  useEffect(() => {
    async function getData(id) {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();

        for (const item of data.resumes) {
          if (item._id === id) {
            setPersonalData({
              name: item.fullName || "",
              email: item.email || "",
              phone: item.phone || "",
              location: item.location || "",
              profession: item.profession || "",
              linkedInProfile: item.linkedInProfile || "",
              website: item.website || "",
            })

            setProfessionalSummary({
              professionalSummary: item.professionalSummary || "",
            })
            setExperience(item.experience || [])
            setProject(item.projects || [])
            setEducation(item.education || [])
            setSkills(item.skills || [])
            setColor(item.color || "#2563eb");
            settemplate(item.template || "0");
            setImageUrl(item.image)
          }
        }

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    getData(id);
  }, [render]);

  const downloadPdf = async () => {
    router.push(`/dashboard/review?id=${id}&show=true`)
  };
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-14 bg-gray-50 py-6 sm:py-10 shadow-[inset_0_4px_6px_-3px_rgba(0,0,0,0.2)]">
  
  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 bg-gray-50 pb-4">
    
    {/* Back Button */}
    <div
      onClick={() => router.push("/dashboard")}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer"
    >
      <ArrowLeft width={18} />
      <p className="text-sm sm:text-base">Back To Dashboard</p>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap gap-2">
      <div
        onClick={() => router.push(`/dashboard/review?id=${id}&show=false`)}
        className="flex items-center gap-2 hover:bg-purple-200 hover:text-purple-600 cursor-pointer text-purple-500 bg-purple-100 transition duration-150 ease-in py-2 px-4 rounded-lg text-sm"
      >
        <EyeOff width={16} />
        <span>Preview</span>
      </div>

      <div
        onClick={downloadPdf}
        className="flex items-center gap-2 hover:bg-green-200 hover:text-green-700 text-green-600 cursor-pointer bg-green-100 py-2 px-4 transition duration-150 ease-in rounded-lg text-sm"
      >
        <Download width={16} />
        <span>Download</span>
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-gray-50">
    <LeftForm
      template={template}
      settemplate={settemplate}
      PersonalData={PersonalData}
      Main={Main}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      setPersonalData={setPersonalData}
      Experience={Experience}
      Education={Education}
      color={color}
      setColor={setColor}
      Project={Project}
      setProject={setProject}
      setEducation={setEducation}
      setExperience={setExperience}
      ProfessionalSummary={ProfessionalSummary}
      Skills={Skills}
      setSkills={setSkills}
      setProfessionalSummary={setProfessionalSummary}
    />

    <RightPreview
      imageUrl={imageUrl}
      template={template}
      PersonalData={PersonalData}
      color={color}
      Education={Education}
      Experience={Experience}
      Skills={Skills}
      ProfessionalSummary={ProfessionalSummary}
      Project={Project}
    />
  </div>
</div>

  );
}