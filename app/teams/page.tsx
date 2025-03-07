import Image from "next/image"
import { teams } from "@/data/teams"

export default function TeamsPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <h1 className="section-title text-center mb-4">Our Teams</h1>
        <div className="w-24 h-1 bg-primary-500 mx-auto mb-12"></div>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-secondary-700">
          CRESA is organized into seven specialized teams, each contributing to our mission of fostering technical,
          cultural, and leadership skills among engineering students.
        </p>

        <div className="space-y-20">
          {teams.map((team, index) => (
            <div key={team.id} id={`team-${team.id}`} className="scroll-mt-24">
              <h2 className="section-subtitle text-primary-600 border-b-2 border-primary-500 pb-2 mb-8">{team.name}</h2>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div>
                  <p className="text-lg mb-4 text-secondary-700">{team.description}</p>
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-1 w-16 mb-6"></div>
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-500">
                    <h3 className="text-lg font-semibold mb-2 text-secondary-900">Team Responsibilities</h3>
                    <ul className="list-disc list-inside text-secondary-700 space-y-1">
                      <li>Planning and executing team-specific initiatives</li>
                      <li>Collaborating with other CRESA teams</li>
                      <li>Representing CRESA in relevant events and competitions</li>
                      <li>Contributing to the overall growth of the association</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-secondary-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4 text-primary-600">Team Members</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {team.members.map((member) => (
                      <div
                        key={member.id}
                        className="text-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-primary-500 rounded-full blur-sm opacity-20"></div>
                          <Image
                            src={member.image || "../images/person1.jpg"}
                            alt={member.name}
                            width={100}
                            height={100}
                            className="rounded-full mx-auto mb-2 relative z-10"
                          />
                        </div>
                        <p className="font-medium text-secondary-900">{member.name}</p>
                        <p className="text-sm text-primary-600">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

