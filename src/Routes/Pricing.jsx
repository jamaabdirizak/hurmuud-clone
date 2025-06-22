import React from 'react';

const FAQ = () => {
    // Define your plan data as an array of objects
    const plans = [
        {
            id: 1, // Add a unique ID for the key prop
            packageName: 'ADSL+ PACKAGE',
            price: 25,
            features: [
                'Unlimited GB',
                '20MBps',
                '200 Mins',
                'Int Minutes', // Now just a string
                'Valid for 30 Days',
                'Super Speed'
            ],
        },
        {
            id: 2, // Another unique ID
            packageName: 'FIBER HOME PRO', // Example: a different plan
            price: 45,
            features: [
                'Unlimited GB',
                '50MBps',
                '500 Mins',
                'Int Minutes', // Now just a string
                'Valid for 30 Days',
                'Ultra Speed'
            ],
        },
        {
            id: 3, // Another unique ID
            packageName: 'ADSL+ PACKAGE', // Example: a different plan
            price: 45,
            features: [
                'Unlimited GB',
                '50MBps',
                '500 Mins',
                'Int Minutes', // Now just a string
                'Valid for 30 Days',
                'Ultra Speed'
            ],
        },
        {
            id: 2, // Another unique ID
            packageName: 'ADSL+ PACKAGE', // Example: a different plan
            price: 45,
            features: [
                'Unlimited GB',
                '50MBps',
                '500 Mins',
                'Int Minutes', // Now just a string
                'Valid for 30 Days',
                'Ultra Speed'
            ],
        },
        {
            id: 2, // Another unique ID
            packageName: 'ADSL+ PACKAGE', // Example: a different plan
            price: 45,
            features: [
                'Unlimited GB',
                '50MBps',
                '500 Mins',
                'Int Minutes', // Now just a string
                'Valid for 30 Days',
                'Ultra Speed'
            ],
        },
        // You can add more plan objects here
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className='text-center mb-12'>
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>Choose The Best FTTH Plan For You</h1>
                <p className='text-gray-600 text-lg sm:text-xl'>Subscribe your favorite bundle and enjoy high speed 5G internet</p>
            </div>

            <div className='flex flex-wrap justify-center gap-8 px-4'>
                {plans.map((plan) => (
                    // Card structure for each plan
                    <div
                        key={plan.id} // Important: Use a unique key when mapping
                        className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                    >
                        {/* Package Details */}
                        <div className="p-6 sm:p-8 text-center">
                            <h1 className="text-sm sm:text-base text-gray-500 font-semibold uppercase tracking-wide mb-2">
                                {plan.packageName}
                            </h1>
                            <div className="flex items-baseline justify-center mb-6">
                                <span className="text-4xl sm:text-5xl font-extrabold text-green-700">${plan.price}</span>
                                <h3 className="ml-2 text-lg sm:text-xl text-gray-500 font-medium">/package</h3>
                            </div>
                            {/* Recharge Button */}
                            <button className="w-full text-lg sm:text-xl text-white font-bold rounded-full bg-green-600 py-3 px-6 shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75">
                                Recharge Now!
                            </button>
                        </div>

                        {/* Separator */}
                        <hr className="border-t-2 border-green-800 mx-6 sm:mx-8" />

                        {/* Features List */}
                        <div className="p-6 sm:p-8">
                            <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
                                {plan.features.map((feature, idx) => (
                                    // All features now render uniformly with a green checkmark
                                    <li key={idx} className="flex items-center">
                                        <span className="text-green-500 mr-3 text-xl">&#10004;</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;