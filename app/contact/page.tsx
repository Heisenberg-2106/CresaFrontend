import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <h1 className="section-title text-center mb-4">Contact Us</h1>
        <div className="w-24 h-1 bg-primary-500 mx-auto mb-12"></div>

        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-secondary-700">
          Have questions or want to get involved with CRESA? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="section-subtitle text-primary-600 mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-md card-hover">
                <Mail className="text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-secondary-900">Email</h3>
                  <p className="text-secondary-700">onkar.chand23@pccoepune.org</p>
                  <p className="text-secondary-700">aarush.borkar23@pccoepune.org</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 rounded-lg shadow-md card-hover">
                <Phone className="text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-secondary-900">Phone</h3>
                  <p className="text-secondary-700">+91 9876543210</p>
                  <p className="text-secondary-700">+91 9988776655</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-4 rounded-lg shadow-md card-hover">
                <MapPin className="text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-secondary-900">Address</h3>
                  <p className="text-secondary-700">Computer Engineering (Regional) Department</p>
                  <p className="text-secondary-700">Pimpri Chinchwad College of Engineering, Pune</p>
                  <p className="text-secondary-700">Autonomous, Affliated with SPPU</p>
                  <p className="text-secondary-700">Sector 26, Nigdi-Pradhikaran</p>
                </div>
              </div>
            </div>

            <h3 className="font-semibold mt-8 mb-4 text-secondary-900">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-secondary-900 text-white p-3 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-900 text-white p-3 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-900 text-white p-3 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-900 text-white p-3 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="section-subtitle text-primary-600 mb-6">Send Us a Message</h2>

            <form className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition-colors w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

