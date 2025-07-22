import { useState } from "react";

export default function RegisterForm({ event, onClose }) {
  const [formData, setFormData] = useState({ name: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.contact) {
      setSubmitted(true);
    }
  };

  return (
    <div className="mt-8 bg-white border p-6 rounded-lg shadow-lg">
      {submitted ? (
        <div className="text-green-600 font-bold">
          ✅ Registered for {event.name}! We’ll contact you soon.
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-4">RSVP for {event.name}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-2 w-full rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact (email/phone)"
              className="border p-2 w-full rounded"
              onChange={handleChange}
              required
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
