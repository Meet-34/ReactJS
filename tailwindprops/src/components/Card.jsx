import React from "react";

// Assigned default value for btnText
function Card({username, btnText="View"}) {
  console.log({username});
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
          alt="Nature"
          className="w-full h-56 object-cover rounded-xl"
        />

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Beautiful Nature</h2>

          <p className="text-gray-600 mt-2">
            Explore the beauty of mountains, forests, and peaceful landscapes.
          </p>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <span>{username}</span>
            <span>2025</span>
          </div>

          <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300">
            {btnText || "View"}
            {/* In case no value is passed for "btnText", by default "View" will be shown */}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
