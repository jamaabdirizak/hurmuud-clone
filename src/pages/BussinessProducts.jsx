import React from 'react';
import sms_Icon from '../assets/sms.png'; // Assuming this is your SMS icon
// You'll need to import other icons for Enterprise Internet, IVR, USSD if you have them
// import internet_Icon from '../assets/internet.png';
// import ivr_Icon from '../assets/ivr.png';
// import ussd_Icon from '../assets/ussd.png';

const FavouriteProducts = [
  {
    id: 1,
    title: 'My SMS API',
    subtitle: 'Empower your organization to build and deliver marketing sms while integrating and collaborating with our messaging api.',
    icon: sms_Icon,
    color: 'bg-green-600' // Specific color for this card
  },
  {
    id: 2,
    title: 'Enterprise Internet',
    subtitle: 'Lightning-fast, secure and reliable enterprise internet connections for large institutions and organizations.',
    // icon: internet_Icon, // Use your actual internet icon here
    icon: sms_Icon, // Placeholder if you don't have others yet
    color: 'bg-blue-600' // Specific color for this card
  },
  {
    id: 3,
    title: 'IVR',
    subtitle: 'Customer service call centres made easy.',
    // icon: ivr_Icon, // Use your actual IVR icon here
    icon: sms_Icon, // Placeholder if you don't have others yet
    color: 'bg-green-600' // Specific color for this card
  },
  {
    id: 4,
    title: 'USSD Short Codes',
    subtitle: 'Strengthen customer relationships and reach your global audience with special short codes.',
    icon: sms_Icon, 
    color: 'bg-gray-900' 
  },
];



const FavCard = ({ icon, title, subtitle, color }) => {
  return (
    <div className={`
      ${color}   rounded-lg  p-8 shadow-lg flex  flex-col justify-between h-full hover:shadow-xl transform  hover:-translate-y-1 transition-all duration-300  ease-in-out  text-white           
    `}>
      <div className='
        mb-6 w-16 h-16 p-3 bg-white rounded-md flex items-center justify-center       
      '>
        
        <img
          src={icon}
          alt={`${title} icon`}
          className='w-10 h-10 object-contain '/>
      </div>

      
      <div className='flex flex-col flex-grow'> {}
        <h2 className='
          text-2xl font-bold mb-3 leading-tight'>
          {title}
        </h2>

        <p className='text-base leading-relaxed opacity-90 '>
          {subtitle}
        </p>
      </div>
    </div>
  );
};


// Main Component
export default function BussinessProducts () {
  return (
    <section className='py-16 sm:py-20 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-gray-800 mb-6 leading-tight">
            Our Customers’ Favourite Business Products
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Discover the tools that empower businesses to thrive and connect with their customers effortlessly.
          </p>
        </div>

        {/* Cards */}
        <div className='
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch 
        '>
          {FavouriteProducts.map((product) => (
            <FavCard
              key={product.id}
              icon={product.icon}
              title={product.title}
              subtitle={product.subtitle}
              color={product.color} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}