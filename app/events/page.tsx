import Image from "next/image"
import { events } from "@/data/events"

export default function EventsPage() {
  // Separate past and upcoming events
  const upcomingEvents = events.filter((event) => !event.isPast)
  const pastEvents = events.filter((event) => event.isPast)

  return (
    <div className="py-16">
      <div className="container-custom">
        <h1 className="section-title text-center mb-4">Events & Activities</h1>
        <div className="w-24 h-1 bg-primary-500 mx-auto mb-12"></div>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-secondary-700">
          CRESA organizes various technical, cultural, and sports events throughout the year to foster student
          engagement and skill development.
        </p>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="section-subtitle text-primary-600 border-b-2 border-primary-500 pb-2 mb-8">Upcoming Events</h2>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  id={`event-${event.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col card-hover"
                >
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 m-3 rounded-md text-sm font-medium">
                      Upcoming
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-secondary-900">{event.title}</h3>
                    <p className="text-primary-600 mb-4">
                      {event.date} | {event.location}
                    </p>
                    <p className="mb-4 text-secondary-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-secondary-600">No upcoming events at the moment. Check back soon!</p>
          )}
        </section>

        {/* Past Events */}
        <section>
          <h2 className="section-subtitle text-secondary-900 border-b-2 border-secondary-900 pb-2 mb-8">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                id={`event-${event.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              >
                <div className="relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-secondary-800 text-white px-3 py-1 m-3 rounded-md text-sm font-medium">
                    Past
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-secondary-900">{event.title}</h3>
                  <p className="text-primary-600 text-sm mb-2">
                    {event.date} | {event.location}
                  </p>
                  <p className="text-sm text-secondary-700">{event.description.substring(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

