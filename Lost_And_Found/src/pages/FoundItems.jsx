import { useEffect, useState } from "react";

const LostItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://back-to-you.vercel.app/api/items")
      .then((res) => res.json())
      .then((data) => {
        const lostItems = data.filter((item) => item.status === "found");
        setItems(lostItems);
      })
      .catch((err) => console.error("Failed to fetch lost items:", err));
  }, []);

  return (
    <div className="p-10 bg-gray-50 dark:bg-gray-100">
      <h2 className="text-2xl font-bold mb-10 text-center">Found Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className="border p-6 rounded shadow bg-white">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-60 object-cover rounded mb-4"
              />
            )}
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <p className="text-sm text-gray-700 mb-1">{item.description}</p>
            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {item.location || "Unknown"}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Date:</strong>{" "}
              {item.date ? new Date(item.date).toLocaleDateString() : "Unknown"}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Time:</strong> {item.time || "Unknown"}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> {item.category || "Unknown"}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Brand:</strong> {item.brand || "Unknown"}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Colors:</strong> {item.primaryColor || "-"}{" "}
              {item.secondaryColor ? `/ ${item.secondaryColor}` : ""}
            </p>

            {/* Contact details */}
            <div className="mt-3 border-t pt-3">
              <p className="text-sm text-gray-800">
                📞 <strong>Mobile:</strong> {item.mobileNumber || "Not Provided"}
              </p>
              <p className="text-sm text-gray-800">
                📧 <strong>Email:</strong> {item.email || "Not Provided"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostItems;
