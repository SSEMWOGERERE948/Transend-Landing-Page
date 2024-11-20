import { BookOpen, GraduationCap, Plane, FileCheck } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap className="h-8 w-8 text-[#007FFF]" />,
    title: "University Admissions",
    description: "Expert guidance in selecting and applying to top universities worldwide."
  },
  {
    icon: <FileCheck className="h-8 w-8 text-[#007FFF]" />,
    title: "Visa Assistance",
    description: "Complete support for student visa applications and documentation."
  },
  {
    icon: <Plane className="h-8 w-8 text-[#007FFF]" />,
    title: "Travel Support",
    description: "Comprehensive travel arrangements and pre-departure briefings."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-[#007FFF]" />,
    title: "Test Preparation",
    description: "Specialized coaching for IELTS, TOEFL, GRE, and other exams."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0B1F3A]">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive support for your international education journey</p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}