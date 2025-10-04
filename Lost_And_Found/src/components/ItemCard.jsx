import React from "react"

export default function ItemCard({ title, description, image, location, date }) {
  return (
    <div className="border p-6 rounded shadow bg-white">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded mb-6"
        />
      )}

      {/* Title & Description */}
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">{description}</p>

      {/* Location & Date */}
      <p className="text-sm text-gray-600">📍 Location: {location}</p>
      <p className="text-sm text-gray-600">
        🗓️ Date: {new Date(date).toLocaleDateString()}
      </p>
    </div>
  )
}

