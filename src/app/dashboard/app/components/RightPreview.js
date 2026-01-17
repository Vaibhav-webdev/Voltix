"use client"

import {
  Mail,
  Phone,
  Briefcase,
  X,
  MapPin,
  Linkedin,
  Globe
} from "lucide-react";
import Image from "next/image";

export default function RightPreview(props) {
  const PersonalData = props.PersonalData
  const ProfessionalSummary = props.ProfessionalSummary
  const Experience = props.Experience
  const Education = props.Education
  const Project = props.Project
  const Skills = props.Skills
  const color = props.color
  const template = props.template
  const imageUrl = props.imageUrl
  const size = props.size
  const show = props.show

  return (
    <div className={`${size === "a4" ? "w-full md:w-[58%]" : "w-[210mm] h-[297mm]"} ${show === "true" || show === "false" ? null : "hidden"} lg:flex bg-white shadow rounded text-sm overflow-hidden`}>
      {template === "0" && <div className="p-8">
        {/* Header */}
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: color }}
        >
          {PersonalData.name || "Your Name"}
        </h1>

        <div className="flex flex-wrap justify-center leading-8 gap-x-4 gap-y-1 text-gray-600 mt-2 text-sm">
          {PersonalData.email && (
            <div className="flex items-center gap-1">
              <Mail size={18} />
              <span>{PersonalData.email}</span>
            </div>
          )}

          {PersonalData.phone && (
            <div className="flex items-center gap-1">
              <Phone size={18} />
              <span>{PersonalData.phone}</span>
            </div>
          )}

          {PersonalData.location && (
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <span>{PersonalData.location}</span>
            </div>
          )}

          {PersonalData.linkedInProfile && (
            <div className="flex items-center gap-1">
              <Linkedin size={18} />
              <span>{PersonalData.linkedInProfile}</span>
            </div>
          )}
          {PersonalData.profession && (
            <div className="flex items-center gap-1">
              <Briefcase size={18} />
              <span>{PersonalData.profession}</span>
            </div>
          )}

          {PersonalData.website && (
            <div className="flex items-center gap-1">
              <Globe size={18} />
              <span>{PersonalData.website}</span>
            </div>
          )}
        </div>


        <hr className="my-4" style={{ color: color }} />

        {/* Professional Summary */}
        {ProfessionalSummary.professionalSummary && (
          <section className="mb-6">
            <h2 className="font-semibold text-lg mb-2" style={{ color: color }}>
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {ProfessionalSummary.professionalSummary}
            </p>
          </section>
        )}
        {Experience[0] && <section className="mb-6">
          <h2 className="font-semibold mb-2 text-lg" style={{ color: color }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          {Experience.map((item, index) => (<div key={index} className="mb-4 border-l-2 border-blue-500 pl-3">
            <div className="flex justify-between">
              <h3 className="font-semibold">{item.jobTitle}</h3>
              <span className="text-xs text-gray-500">
                {item.startDate} - {item.currentlyWorking ? "Present" : item.endDate}
              </span>
            </div>
            <p className="italic text-gray-600">{item.companyName}</p>
            <p className="text-gray-700 mt-1">{item.jobDescription}</p>
          </div>))}
        </section>}

        {/* Projects */}
        {Project[0] && <section className="mb-6">
          <h2 className="font-semibold mb-2 text-lg" style={{ color: color }}>PROJECTS</h2>
          {Project.map((item, index) => (<div key={index} className="mb-3 border-l-2 border-blue-500 pl-3">
            <h3 className="font-semibold">{item.projectName}({item.projectType})</h3>
            <p className="text-gray-700">{item.projectDescription}</p>
          </div>))}
        </section>}

        {/* Education */}
        {Education[0] && <section className="mb-6">
          <h2 className="font-semibold mb-2 text-lg" style={{ color: color }}>EDUCATION</h2>
          {Education.map((item, index) => (<div key={index} className="mb-3">
            <div className="flex justify-between">
              <h3 className="font-semibold">
                {item.degree} ({item.fieldOfStudy})
              </h3>
              <span className="text-xs text-gray-500">
                {item.endDate}
              </span>
            </div>
            <p className="italic text-gray-600">{item.institutionName}</p>
            {item.gpa && <p className="text-gray-600">GPA: {item.gpa}</p>}
          </div>))}
        </section>}
        {Skills[0] && <section>
          <h2 className="font-semibold text-lg mb-2" style={{ color: color }}>
            CORE SKILLS
          </h2>

          <div className="flex flex-wrap gap-2">
            {(Skills || []).map((item, index) => (
              <span
                key={index}
                className="px-2 text-gray-700 py-1 text-sm rounded"
              >
                •{item}
              </span>
            ))}
          </div>
        </section>}

      </div>}
      {template === "1" && <div>
        <div
          className="p-6 text-white"
          style={{ backgroundColor: color }}
        >
          <h1 className="text-3xl font-semibold">
            {PersonalData.name || "Your Name"}
          </h1>

          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm opacity-90">
            {PersonalData.email && <div className="flex gap-2"><Mail size={18} />{PersonalData.email}</div>}
            {PersonalData.phone && <div className="flex gap-2"><Phone size={18} />{PersonalData.phone}</div>}
            {PersonalData.location && <div className="flex gap-2"><MapPin size={18} />{PersonalData.location}</div>}
            {PersonalData.linkedInProfile && <div className="flex gap-2"><Linkedin size={18} />{PersonalData.linkedInProfile}</div>}
            {PersonalData.linkedInProfile && <div className="flex gap-2"><Briefcase size={18} />{PersonalData.profession}</div>}
            {PersonalData.website && <div className="flex gap-2"><Globe size={18} />{PersonalData.website}</div>}
          </div>
        </div>

        <div className="p-6">

          {ProfessionalSummary.professionalSummary && (
            <section className="mb-6">
              <h2 className="text-gray-800 font-semibold mb-2">
                Professional Summary
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {ProfessionalSummary.professionalSummary}
              </p>
            </section>
          )}

          {Experience[0] && (
            <section className="mb-6">
              <h2 className="font-semibold mb-3 text-gray-800">
                Experience
              </h2>

              {Experience.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 border-l-2 pl-4"
                  style={{ borderColor: color }}
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.jobTitle}</h3>
                    <span className="text-xs text-gray-500">
                      {item.startDate} – {item.currentlyWorking ? "Present" : item.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-blue-600">{item.companyName}</p>
                  <p className="text-gray-600 mt-1">
                    {item.jobDescription}
                  </p>
                </div>
              ))}
            </section>
          )}

          {Project[0] && (
            <section className="mb-6">
              <h2 className="font-semibold mb-3 text-gray-800">
                Projects
              </h2>

              {Project.map((item, index) => (
                <div
                  key={index}
                  className="mb-3 border-l-2 pl-4"
                  style={{ borderColor: color }}
                >
                  <h3 className="font-semibold">
                    {item.projectName}
                  </h3>
                  <p className="text-gray-600">
                    {item.projectDescription}
                  </p>
                </div>
              ))}
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {Education[0] && (
              <section>
                <h2 className="font-semibold mb-3 text-gray-800">
                  Education
                </h2>

                {Education.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">
                        {item.degree} ({item.fieldOfStudy})
                      </h3>
                      <span className="text-xs text-gray-500">
                        {item.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-blue-600">
                      {item.institutionName}
                    </p>
                    {item.gpa && (
                      <p className="text-xs text-gray-600">
                        GPA: {item.gpa}
                      </p>
                    )}
                  </div>
                ))}
              </section>
            )}

            {Skills[0] && (
              <section>
                <h2 className="font-semibold mb-3 text-gray-800">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-2">
                  {Skills.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs text-white"
                      style={{ backgroundColor: color }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </div>}
      {template === "2" && <div className="px-6 py-3">
        <div className="flex items-center gap-6 py-6 px-14">
          <div className="w-26 h-26 relative rounded-full border-4 overflow-hidden" style={{ borderColor: color }}>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="User image"
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-semibold">
              {PersonalData.name || "Your Name"}
            </h1>
            <p
              className="text-sm tracking-widest uppercase"
              style={{ color }}
            >
              {PersonalData.profession}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[32%_68%] gap-6 p-6">
          <aside className="space-y-6 border-r border-gray-400">
            <section>
              <h3
                className="text-xs font-semibold tracking-widest mb-3"
                style={{ color }}
              >
                CONTACT
              </h3>
              <div className="space-y-2 text-gray-600">
                {PersonalData.email && <div className="flex gap-2"><Mail size={18} />{PersonalData.email}</div>}
                {PersonalData.phone && <div className="flex gap-2"><Phone size={18} />{PersonalData.phone}</div>}
                {PersonalData.location && <div className="flex gap-2"><MapPin size={18} />{PersonalData.location}</div>}
                {PersonalData.linkedInProfile && <div className="flex gap-2"><Linkedin size={18} />{PersonalData.linkedInProfile}</div>}
                {PersonalData.linkedInProfile && <div className="flex gap-2"><Briefcase size={18} />{PersonalData.profession}</div>}
                {PersonalData.website && <div className="flex gap-2"><Globe size={18} />{PersonalData.website}</div>}
              </div>
            </section>
            {Education[0] && (
              <section>
                <h3
                  className="text-xs font-semibold tracking-widest mb-3"
                  style={{ color }}
                >
                  EDUCATION
                </h3>
                {Education.map((item, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-semibold text-xs">
                      {item.degree} ({item.fieldOfStudy})
                    </p>
                    <p className="text-xs text-gray-600">
                      {item.institutionName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.endDate}
                    </p>
                  </div>
                ))}
              </section>
            )}
            {Skills[0] && (
              <section>
                <h3
                  className="text-xs font-semibold tracking-widest mb-3"
                  style={{ color }}
                >
                  SKILLS
                </h3>
                <ul className="space-y-1 text-gray-700 text-xs">
                  {Skills.map((skill, index) => (
                    <li key={index}>•{skill}</li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
          <main className="space-y-6">
            {ProfessionalSummary.professionalSummary && (
              <section>
                <h3
                  className="text-xs font-semibold tracking-widest mb-2"
                  style={{ color }}
                >
                  SUMMARY
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  • {ProfessionalSummary.professionalSummary}
                </p>
              </section>
            )}
            {Experience[0] && (
              <section>
                <h3
                  className="text-xs font-semibold tracking-widest mb-3"
                  style={{ color }}
                >
                  EXPERIENCE
                </h3>
                {Experience.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">
                        {item.jobTitle}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {item.startDate} – {item.currentlyWorking ? "Present" : item.endDate}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color }}>
                      {item.companyName}
                    </p>
                    <p className="text-gray-600 mt-1">
                      • {item.jobDescription}
                    </p>
                  </div>
                ))}
              </section>
            )}
            {Project[0] && (
              <section>
                <h3
                  className="text-xs font-semibold tracking-widest mb-3"
                  style={{ color }}
                >
                  PROJECTS
                </h3>
                {Project.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-semibold">
                      {item.projectName}
                    </h4>
                    <p className="text-xs" style={{ color }}>
                      {item.projectType}
                    </p>
                    <p className="text-gray-600 mt-1">
                      • {item.projectDescription}
                    </p>
                  </div>
                ))}
              </section>
            )}
          </main>
        </div>
      </div>}
    </div>
  );
}