import Image from 'next/image';

const destinations = [
  {
    country: "United States",
    image: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80",
    universities: "500+ Universities"
  },
  {
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    universities: "150+ Universities"
  },
  {
    country: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    universities: "100+ Universities"
  },
  {
    country: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80",
    universities: "80+ Universities"
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0B1F3A]">Popular Destinations</h2>
          <p className="mt-4 text-xl text-gray-600">Choose from top educational destinations worldwide</p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image 
                src={destination.image} 
                alt={destination.country}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{destination.country}</h3>
                  <p className="text-gray-200">{destination.universities}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}