import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const locations = [
  "Ampang",
  "Ara Damansara",
  "Ampang Hilir",
  "Bandar Baru Bangi",
  "Batu Caves",
  "Banting",
  "Bandar Sunway",
  "Bandar Tasik Selatan",
  "Bandar Utama",
  "Beranang",
  "Bukit Jalil",
  "Bukit Rimau",
  "Balakong",
  "Bandar Baru Sentul",
  "Bandar Botanic",
  "Bandar Mahkota",
  "Bandar Permaisuri",
  "Bandar Puteri",
  "Bandar Saujana Putra",
  "Bangsar",
  "Bukit Bintang",
  "Bukit Jelutong U8",
  "Bukit Raja",
  "Bukit Tinggi",
  "Cyberjaya"
];

const LocationGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleLocations = locations

  return (
    <div id="location" className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Where You’ll Find Us
      </h2>
      <p className="text-lg font-semibold tracking-wider mb-10 italic text-center">We're just around the corner — check out where we operate!</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6 lg:px-20">
        {visibleLocations.map((location, index) => (
          <div
            key={index}
            className="bg-blue-50 hover:bg-blue-100 flex items-center italic text-blue-900 text-sm md:text-lg font-medium px-4 py-3 rounded shadow-sm transition duration-200"
          >
            <FaLocationArrow className=" hidden sm:block mr-2.5 " /> {location}
          </div>
        ))}
      </div>

      <div className="text-center">
        <button onClick={() => window.location.href = "https://wa.me/60163824522"} className="px-3 w-auto py-2 bg-yellow-400 font-semibold text-lg tracking-wider italic shadow-md shadow-yellow-900 rounded-md"> More Location</button>
      </div>
    </div>
  );
};

export default LocationGrid;
