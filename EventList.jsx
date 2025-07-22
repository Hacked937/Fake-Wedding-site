import events from "../data/events";
import RegisterForm from "../pages/Registration";
import { useState } from "react";

export default function Eventlist() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">🎉 Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="border p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{event.name}</h3>
                <p>{event.date}</p>
              </div>
              <button
                onClick={() => setSelectedEvent(event)}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
              >
                Register
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedEvent && <RegisterForm event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
}
