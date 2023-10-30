"use client";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contato</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md sm:w-2/3 md:w-1/2 p-3">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mb-2"
            required
          />
        </div>

        <div className="mb-4 flex space-x-2">
          <div className="w-1/2">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="phone" className="block text-gray-700 font-semibold">
              Celular:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold">
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
