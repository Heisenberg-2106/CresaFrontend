import Image from "next/image"
import Link from "next/link"
import { events } from "@/data/events"

export default function Home() {
  // Filter for upcoming events
  const upcomingEvents = events.filter((event) => !event.isPast).slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to <span className="text-primary-400">CRESA</span>
              </h1>
              <p className="text-xl mb-6">Computer Regional Engineering Student Association</p>
              <Link
                href="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md inline-block transition-colors"
              >
                Get Involved
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-lg blur-md opacity-20 transform -rotate-3"></div>
                <Image
                  src="/Logo2.png"
                  alt="CRESA Students"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-500">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">Our Mission</h2>
              <p className="text-lg text-secondary-800">
                To foster a collaborative environment for students to develop technical, cultural, and leadership
                skills.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary-900">
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">Our Vision</h2>
              <p className="text-lg text-secondary-800">
                To be a leading student body that bridges the gap between academics and industry through innovation and
                teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 m-2 rounded-md text-sm font-medium">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-secondary-900">{event.title}</h3>
                  <p className="text-primary-600 mb-4">
                    {event.date} | {event.location}
                  </p>
                  <p className="mb-4 text-secondary-700">{event.description.substring(0, 100)}...</p>
                  <Link
                    href={`/events#event-${event.id}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Explore CRESA</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/teams" className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="text-primary-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-900">Our Teams</h3>
              <p className="text-secondary-700">Meet the dedicated teams behind CRESA's success</p>
            </Link>

            <Link href="/events" className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="text-primary-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-900">Events</h3>
              <p className="text-secondary-700">Discover our exciting events and activities</p>
            </Link>

            <Link href="/achievements" className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="text-primary-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-900">Achievements</h3>
              <p className="text-secondary-700">Explore our accomplishments and impact</p>
            </Link>

            <Link href="/contact" className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
              <div className="text-primary-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-900">Contact Us</h3>
              <p className="text-secondary-700">Get in touch with the CRESA team</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

