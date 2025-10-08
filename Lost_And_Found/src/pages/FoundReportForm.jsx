import { useState } from "react";

export default function FoundReportForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    dateFound: "",
    timeFound: "",
    category: "",
    brand: "",
    primaryColor: "",
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

    // ✅ Extra Validation
    if (!formData.mobileNumber.trim()) {
      alert("Mobile Number is required!");
      return;
    }
    if (!formData.email.trim()) {
      alert("Email is required!");
      return;
    }
    if (!image) {
      alert("Please upload an image. It is required for Found Reports.");
      return;
    }

    try {
      const form = new FormData();
      form.append("name", formData.itemName);
      form.append("date", formData.dateFound);
      form.append("time", formData.timeFound);
      form.append("category", formData.category);
      form.append("brand", formData.brand);
      form.append("primaryColor", formData.primaryColor);
      form.append("location", formData.location);
      form.append("description", formData.description);
      form.append("mobileNumber", formData.mobileNumber);
      form.append("email", formData.email);
      form.append("status", "found");
      form.append("image", image);

      const res = await fetch("https://back-to-you.vercel.app/api/items", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Failed to submit found report");

      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);

      // Reset form
      setFormData({
        itemName: "",
        dateFound: "",
        timeFound: "",
        category: "",
        brand: "",
        primaryColor: "",
        location: "",
        description: "",
        mobileNumber: "",
        email: "",
      });
      setImage(null);
      setPreviewUrl("");
    } catch (err) {
      console.error(err);
      alert("Error submitting found report");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8 relative">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
        Submit Found Property
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Please provide details about the item you found to help the owner recover it.
      </p>

      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 animate-slide-in">
          Found property report submitted successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="Item Name"
          required
          className="w-full border p-2 rounded"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            name="dateFound"
            value={formData.dateFound}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="time"
            name="timeFound"
            value={formData.timeFound}
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
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Found At Location"
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
          <label className="block font-medium mb-1 text-red-600">
            Upload Image <span className="text-sm text-gray-500">(required)</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
            required
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
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
        >
          Submit Found Report
        </button>
      </form>
    </div>
  );
}
