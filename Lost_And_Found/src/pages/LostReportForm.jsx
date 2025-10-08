import { useState } from "react";

export default function LostReportForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    dateLost: "",
    timeLost: "",
    category: "",
    brand: "",
    primaryColor: "",
    secondaryColor: "",
    location: "",
    description: "",
    mobileNumber: "",
    email: "",
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("name", formData.itemName);
      form.append("date", formData.dateLost);
      form.append("time", formData.timeLost);
      form.append("category", formData.category);
      form.append("brand", formData.brand);
      form.append("primaryColor", formData.primaryColor);
      form.append("secondaryColor", formData.secondaryColor);
      form.append("location", formData.location);
      form.append("description", formData.description);
      form.append("mobileNumber", formData.mobileNumber); 
      form.append("email", formData.email);
      form.append("status", "lost");

      if (image) form.append("image", image);

      const res = await fetch("https://back-to-you.vercel.app/api/items", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Failed to submit lost report");

      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      // Reset form
      setFormData({
        itemName: "",
        dateLost: "",
        timeLost: "",
        category: "",
        brand: "",
        primaryColor: "",
        secondaryColor: "",
        location: "",
        description: "",
        mobileNumber: "",
        email: "",
      });
      setImage(null);
      setPreviewUrl("");
    } catch (err) {
      console.error(err);
      alert("Error submitting lost report");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8 relative">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-4">
        Submit Lost Property
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Please provide the following details to help us locate your lost item.
      </p>

      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 animate-slide-in">
          Lost property report submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="What was Lost"
          required
          className="w-full border p-2 rounded"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            name="dateLost"
            value={formData.dateLost}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="time"
            name="timeLost"
            value={formData.timeLost}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="primaryColor"
            value={formData.primaryColor}
            onChange={handleChange}
            placeholder="Primary Color"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="secondaryColor"
            value={formData.secondaryColor}
            onChange={handleChange}
            placeholder="Secondary Color"
            className="w-full border p-2 rounded"
          />
        </div>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description (optional)"
          className="w-full border p-2 rounded"
          rows="4"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="tel"
            name="mobileNumber" 
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-4 h-48 object-cover rounded shadow"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition"
        >
          Submit Lost Report
        </button>
      </form>
    </div>
  );
}
