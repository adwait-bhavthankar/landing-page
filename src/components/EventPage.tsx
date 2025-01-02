import React from 'react';
import Navbar from './Navbar';
import RegistrationForm from './RegistrationForm';

const EventPage: React.FC = () => {
    return (
        <div className="bg-custom-bg bg-repeat-y bg-cover bg-center min-h-screen p-4">
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white bg-opacity-50 shadow-md rounded-lg overflow-hidden mt-8 p-4">
                <div className="bg-blue-600 bg-opacity-50 text-white p-4">
                    <h1 className="text-2xl font-bold">Microsoft SDE Secrets</h1>
                    <p className="text-lg">Tips by Anshima Choudhary for Landing Top Placements</p>
                </div>
                <div className="p-4">
                    <div className="flex items-center mb-4">
                        <div className="w-1/2">
                            <img src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/event-covers/1t/dc8ffef0-81a8-4c09-a564-53b410add2d8" alt="Event" />
                        </div>
                        <div className="w-1/4 pl-10 text-black">
                            <p>Sunday, October 22, 2023</p>
                            <p>12:00 PM - 1:00 PM GMT+5:30</p>
                            <p>YouTube</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button className="bg-yellow-500 bg-opacity-75 text-white px-4 py-2 rounded">Register Now</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">Hosted By</h2>
                        <p className="text-gray-700">SoarX</p>
                        <p className="text-gray-700">563 Going</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">About Event</h2>
                        <p className="text-gray-700">
                            Join us for an exclusive session with Anshima Choudhary, a seasoned Senior Software Developer at Microsoft. Learn the secrets to landing top placements and excelling in your career.
                        </p>
                    </div>
                    <div className="mb-4">
                        <button className="bg-blue-500 bg-opacity-75 text-white px-4 py-2 rounded">Register</button>
                    </div>
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
}

export default EventPage;
