import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        college: '',
        branch: '',
        year: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch('Example_Sheet', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            console.log(result);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit the form. Please try again.');
        }
    };

    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Registration Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Contact</label>
                    <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your contact number" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">College</label>
                    <input type="text" name="college" value={formData.college} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your college name" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Branch</label>
                    <input type="text" name="branch" value={formData.branch} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your branch" />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Year</label>
                    <input type="text" name="year" value={formData.year} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your year" />
                </div>
                <div>
                    <button type="submit" className="w-3/4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
