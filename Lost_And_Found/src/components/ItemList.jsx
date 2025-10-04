import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/items/all")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search lost or found items..."
        className="w-full p-3 rounded-md border dark:bg-gray-800 dark:text-white mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300 col-span-full">No items found.</p>
        )}
      </div>
    </>
  );
};

export default ItemList;
