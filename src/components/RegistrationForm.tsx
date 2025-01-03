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

    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.contact) newErrors.contact = 'Contact is required';
        if (!formData.college) newErrors.college = 'College is required';
        if (!formData.branch) newErrors.branch = 'Branch is required';
        if (!formData.year) newErrors.year = 'Year is required';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await fetch('Example_Url', { // This is to be replace by your urlL
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

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
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Contact</label>
                    <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your contact number" />
                    {errors.contact && <p className="text-red-500">{errors.contact}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">College</label>
                    <input type="text" name="college" value={formData.college} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your college name" />
                    {errors.college && <p className="text-red-500">{errors.college}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Branch</label>
                    <input type="text" name="branch" value={formData.branch} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your branch" />
                    {errors.branch && <p className="text-red-500">{errors.branch}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Year</label>
                    <input type="text" name="year" value={formData.year} onChange={handleChange} className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your year" />
                    {errors.year && <p className="text-red-500">{errors.year}</p>}
                </div>
                <div>
                    <button type="submit" className="w-3/4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
