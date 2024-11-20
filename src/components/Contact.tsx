import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0B1F3A]">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">Get in touch to start your journey</p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-[#007FFF]" />
                <span className="text-gray-600">info@transend.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-[#007FFF]" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-[#007FFF]" />
                <span className="text-gray-600">123 Education Street, New York, NY 10001</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007FFF] focus:ring focus:ring-[#007FFF] focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007FFF] focus:ring focus:ring-[#007FFF] focus:ring-opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007FFF] focus:ring focus:ring-[#007FFF] focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#007FFF] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}