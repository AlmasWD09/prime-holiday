"use client"

import { useState } from "react";

const ModalPage = ({isOpen,setIsOpen}) => {
    // const [isOpen, setIsOpen] = useState(false);
    console.log(typeof(setIsOpen), '---------- 55')
    const [formData, setFormData] = useState({
        title: "Mr.",
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        contactMethod: "Email",
        message: "",
        subscribe: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Add your API submission logic here
        setIsOpen(false);
    };

    const handleCloseModal = () =>{
        setIsOpen(false)
       
    }
    return (
        <div className="relative">
            {/* <button
                onClick={() => setIsOpen(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
                Open Enquiry Form
            </button> */}

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg relative">
                        <button
                            onClick={() => handleCloseModal()}
                            className="absolute top-4 right-4 text-red-500 hover:text-gray-800"
                        >
                            &#10005;
                        </button>
                        <h2 className="text-2xl font-semibold text-center mb-6">
                            Enquiry Form
                        </h2>

                        <form onSubmit={handleSubmit}>
                            {/* Title, First Name, Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium">
                                        Title
                                    </label>
                                    <select
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    >
                                        <option>Mr.</option>
                                        <option>Ms.</option>
                                        <option>Mrs.</option>
                                        <option>Dr.</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium"
                                    >
                                        First Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium">
                                        Last Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>

                            {/* Email and Telephone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="telephone" className="block text-sm font-medium">
                                        Telephone*
                                    </label>
                                    <input
                                        type="text"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>

                            {/* Preferred Contact Method */}
                            <div className="mb-4">
                                <p className="text-sm font-medium">Preferred Method Of Contact</p>
                                <div className="flex items-center gap-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="Email"
                                            checked={formData.contactMethod === "Email"}
                                            onChange={handleInputChange}
                                            className="mr-2"
                                        />
                                        Email
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            value="Telephone"
                                            checked={formData.contactMethod === "Telephone"}
                                            onChange={handleInputChange}
                                            className="mr-2"
                                        />
                                        Telephone
                                    </label>
                                </div>
                            </div>

                            {/* Your Message */}
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Your Message*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                ></textarea>
                            </div>

                            {/* Subscribe Checkbox */}
                            <div className="mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="subscribe"
                                        checked={formData.subscribe}
                                        onChange={handleInputChange}
                                        className="mr-2"
                                    />
                                    Subscribe to our newsletter
                                </label>
                                <p className="text-xs text-gray-500 mt-1">
                                    Your details will not be passed to any other company, and you
                                    can unsubscribe at any time.
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalPage
