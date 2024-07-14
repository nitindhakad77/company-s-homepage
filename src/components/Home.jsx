import React, { useState } from 'react';

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    workEmail: '',
    firstName: '',
    lastName: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://getform.io/f/axojwzmb';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setShowForm(false);
      setFormData({
        workEmail: '',
        firstName: '',
        lastName: '',
        agreeToTerms: false,
      });
    } else {
      alert('Form submission failed!');
    }
  };

  return (
    <div className='flex'>
      <div className='flex items-center justify-center ml-10'>
        <div className='w-1/2 mt-5 ml-10'>
          <div className='p-5 mt-5 ml-5'>
            <div className='text-start mt-5'>
              <div className='p-5 mt-5 ml-4'>
                <h1 className='text-xl text-red-600'>AWARD WINNING</h1>
                <p className='text-4xl font-bold mt-5'>DIGITAL MARKETING</p>
                <p className='text-4xl font-bold mt-5'>AGENCY</p>
                <p className='mt-5'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button
                  type='button'
                  className='mt-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                  onClick={() => setShowForm(true)}
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 ml-5 mt-10'>
          <img src='hero@2x.png' className='h-[80vh] rounded-none' />
        </div>
      </div>

      {showForm && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <div className='bg-white p-8 rounded shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Talk to Us</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <input
                  type='email'
                  placeholder='Work email*'
                  name='workEmail'
                  value={formData.workEmail}
                  onChange={handleChange}
                  className='mt-1 p-2 border border-3 border-white border-b-gray-400 rounded w-full outline-none'
                  required
                />
              </div>
              <div className='mb-4 flex'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First name*'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='mt-1 p-2 border border-3 border-white border-b-gray-400 rounded w-full outline-none'
                  required
                />
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last name*'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='mt-1 p-2 ml-2 border border-3 border-white border-b-gray-400 rounded w-full outline-none'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    name='agreeToTerms'
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className='form-checkbox'
                    required
                    
                  />
                  <span className='ml-2 max-w-80'>I agree to Fyle's terms and conditions, and provide consent to send me communication.</span>
                </label>
              </div>
              <div className='flex flex-col'>
                <button
                  type='submit'
                  className='focus:outline-none w-full text-white bg-red-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5'
                >
                  Submit
                </button>
                <button
                  type='button'
                  className='mr-4 focus:outline-none text-gray-600 ml-5'
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
