import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Reset error message when user starts typing
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi Nama
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Nama tidak boleh kosong',
      }));
    }

    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Masukkan email yang valid',
      }));
    }

    // Validasi Pesan
    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Pesan tidak boleh kosong',
      }));
    }

    // Jika tidak ada kesalahan, lakukan sesuatu dengan data formulir (misalnya, kirim ke backend)
    if (!errors.name && !errors.email && !errors.message) {
      console.log('Form data submitted:', formData);

      // Reset formulir setelah pengiriman
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
      <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
        <label htmlFor="name" className="text-2xl md:text-[22px] font-bold text-gray-900 sm:text-xl tracking-[-0.48px] w-auto">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama Anda"
          className={`bg-gray-50 justify-center sm:px-5 px-[100px] py-[23px] rounded-[10px] text-gray-600 text-lg text-shadow-ts w-full ${errors.name && 'border-red-500'}`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
        <label htmlFor="email" className="text-2xl md:text-[22px] font-bold text-gray-900 sm:text-xl tracking-[-0.48px] w-auto">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan email Anda"
          className={`bg-gray-50 justify-center sm:px-5 px-[100px] py-[23px] rounded-[10px] text-gray-600 text-lg text-shadow-ts w-full ${errors.email && 'border-red-500'}`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
        <label htmlFor="message" className="text-2xl md:text-[22px] font-bold text-gray-900 sm:text-xl tracking-[-0.48px] w-auto">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tulis pesan Anda di sini"
          className={`bg-gray-50 flex flex-col items-center justify-center md:px-10 px-12 sm:px-5 px-[110px] py-6 rounded-[10px] shadow-bs w-full ${errors.message && 'border-red-500'}`}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="text-gray-50 cursor-pointer font-bold leading-[normal] max-w-[779px] sm:text-2xl md:text-[26px] text-[32px] text-center tracking-[-0.56px] w-full bg-red-600 rounded-full py-4 px-8 transition duration-300 hover:bg-red-700"
        onClick={handleSubmit}
      >
        Kirim Pesan
      </button>
    </div>
  );
};

export default ContactForm;
