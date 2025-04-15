import React, { useEffect, useState } from "react";
import ycp from "../assets/images/ycp.jpg";

const EventPage = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showPlane, setShowPlane] = useState(true);

  useEffect(() => {
    const profileTimer = setTimeout(() => setShowProfile(true), 3000);
    const planeTimer = setTimeout(() => setShowPlane(false), 3000);

    return () => {
      clearTimeout(profileTimer);
      clearTimeout(planeTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* ✈️ Animated Airplane */}
      {showPlane && (
        <img
          src={ycp}
          alt="YCP-logo"
          className="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-out"
        />
      )}

      {/* 🎉 Event Profile */}
      {showProfile && (
        <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center animate-zoom-in-slow">
          <img
            src={ycp}
            alt="Event Logo"
            className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-blue-200"
          />
          <h1 className="text-2xl font-bold text-blue-800 mb-2">
            ARCHDIOCESAN PROFESSIONAL DAY
          </h1>
          <p className="text-cyan-600 font-semibold mb-4 italic text-lg">
            Theme: Self Growth and Financial Freedom —{" "}
            <span className="text-red-400 font-semibold">Lessons from Disruptors</span>
          </p>
          <p className="text-gray-700 font-semibold mb-2">🗓️ Sunday, 27th April 2025</p>
          <p className="text-gray-700 font-semibold mb-6">⏰ Time: 8:30am</p>

          {/* 📍 Venue Card */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-inner mb-6 flex flex-col items-center">
            <h2 className="text-gray-800 text-lg font-bold mb-2">📍 Venue</h2>
            <p className="text-gray-700 font-medium text-center leading-relaxed">
              Ss Philip and James Catholic Church, Km 18, Lekki-Epe Express Way, Lagos
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Ss+Philip+and+James+Catholic+Church,+Km+18,+Lekki-Epe+Express+Way,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              📍 Get Directions to Church
            </a>
          </div>

          {/* 🎉 Reception Card */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-inner mb-6 flex flex-col items-center">
            <h2 className="text-gray-800 text-lg font-bold mb-2">🎉 Reception</h2>
            <p className="text-gray-700 font-medium text-center leading-relaxed">
              Lumen Christi Television Network, Osapa, Km 16 Lekki - Epe Expy, opposite Zenith/Polaris Banks, Lekki, Nigeria
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Alpha+and+Omega+Hall,+Lumen+Christi+Television+Network,+Osapa,+Lekki"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 transition"
            >
              📍 Get Directions to Reception
            </a>
          </div>

          <p className="text-gray-800 font-medium">
            📞 Contact: <span className="font-semibold">Jane — +2347063857531</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default EventPage;
