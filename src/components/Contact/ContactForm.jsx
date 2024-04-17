import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Write us</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700">First Name *</label>
            <div className="border-b">
              <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border-none rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">Last Name *</label>
            <div className="border-b">
              <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border-none rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-gray-700">Company *</label>
            <div className="border-b">
              <input type="text" id="company" name="company" className="mt-1 p-2 w-full border-none rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone *</label>
            <div className="border-b">
              <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border-none rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">E-mail *</label>
            <div className="border-b">
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full border-none rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div>
            <label htmlFor="country" className="block text-gray-700">Country *</label>
            <div className="border-b">
              <input type="text" id="country" name="country" className="mt-1 p-2 w-full border-none rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="projectDetails" className="block text-gray-700">Project Details</label>
            <div className="border-b">
            <textarea id="projectDetails" name="projectDetails" rows="4" className="mt-1 p-2 w-full border-none rounded focus:outline-none focus:border-blue-500"></textarea>
            </div>
          </div>
          <div className="col-span-2">
            <button type="submit" className="bg-[#00419C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600 hover:bg-[#333333]">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
