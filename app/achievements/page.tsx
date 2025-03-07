import Image from "next/image"
import { achievements, testimonials } from "@/data/achievements"

export default function AchievementsPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <h1 className="section-title text-center mb-4">Achievements & Impact</h1>
        <div className="w-24 h-1 bg-primary-500 mx-auto mb-12"></div>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-secondary-700">
          CRESA has a proud history of accomplishments and positive impact on the engineering student community.
        </p>

        {/* Achievements Section */}
        <section className="mb-20">
          <h2 className="section-subtitle text-primary-600 border-b-2 border-primary-500 pb-2 mb-8">
            Notable Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col card-hover"
              >
                <Image
                  src={achievement.image || "/placeholder.svg"}
                  alt={achievement.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-secondary-900">{achievement.title}</h3>
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">{achievement.year}</span>
                  </div>
                  <p className="mb-4 text-secondary-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="section-subtitle text-secondary-900 border-b-2 border-secondary-900 pb-2 mb-8">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 card-hover">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-500 rounded-full blur-sm opacity-20"></div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 relative z-10 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900">{testimonial.name}</h3>
                    <p className="text-sm text-primary-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="italic text-secondary-700 bg-secondary-50 p-4 rounded-lg border-l-4 border-primary-500">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

