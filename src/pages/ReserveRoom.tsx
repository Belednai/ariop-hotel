import React, { useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
  roomType: "Luxury Suite",
};

const roomTypes = ["Luxury Suite", "Executive Room", "Premium Room", "Presidential Suite"];

const ReserveRoom: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "guests" ? Number(value) : value }));
  };

  const validate = () => {
    if (!form.fullName.trim()) return "Full Name is required.";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return "Valid Email is required.";
    if (!form.phone.match(/^\+?\d{7,15}$/)) return "Valid Phone Number is required.";
    if (!form.checkIn) return "Check-in date is required.";
    if (!form.checkOut) return "Check-out date is required.";
    if (new Date(form.checkIn) >= new Date(form.checkOut)) return "Check-out must be after Check-in.";
    if (form.guests < 1) return "At least one guest required.";
    if (!roomTypes.includes(form.roomType)) return "Select a valid room type.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        setError("Failed to submit reservation. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-luxury-gold/10 py-16">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-brand-dark">Reserve a Room</h1>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-sm">Reservation received! We'll contact you soon.</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className="w-full border rounded px-3 py-2" required placeholder="Enter your full name" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" required placeholder="Enter your email address" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" required placeholder="e.g. +211928741200" />
        </div>
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Check-in Date</label>
            <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} className="w-full border rounded px-3 py-2" required placeholder="Check-in date" />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Check-out Date</label>
            <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} className="w-full border rounded px-3 py-2" required placeholder="Check-out date" />
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Number of Guests</label>
            <input type="number" name="guests" min={1} value={form.guests} onChange={handleChange} className="w-full border rounded px-3 py-2" required placeholder="Number of guests" />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Room Type</label>
            <select name="roomType" value={form.roomType} onChange={handleChange} className="w-full border rounded px-3 py-2" required title="Room Type">
              {roomTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="w-full bg-[#154c79] text-white font-semibold py-2 rounded hover:bg-[#113a5c] transition" disabled={loading}>
          {loading ? "Reserving..." : "Reserve Now"}
        </button>
      </form>
    </div>
  );
};

export default ReserveRoom; 