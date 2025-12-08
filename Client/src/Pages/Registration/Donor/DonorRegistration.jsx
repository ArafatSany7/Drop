import React, { useState } from "react";
import { addDonor } from "../../../services/localDonorService";

const DonorRegistration = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [status, setStatus] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    age: "",
    bloodGroup: "",
    district: "",
    state: "",
    pinCode: "",
    lastDonation: "",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const inputClasses =
    "w-full rounded-2xl border border-white/20 bg-neutral-900/60 px-4 py-3 text-sm text-white font-secondary transition focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400/30 placeholder:text-white/40";

  const submitButtonClasses = `btn btn-dash px-10 py-3 border font-semibold font-secondary tracking-wide transition-colors duration-500 ${
    agreedToTerms
      ? "bg-neutral-900 text-white border-neutral-900"
      : "bg-transparent text-white border-white/40"
  }`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (!agreedToTerms) {
      setStatus({ type: "error", message: "Please agree to the terms first." });
      return;
    }

    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "address",
      "age",
      "bloodGroup",
      "district",
      "state",
      "pinCode",
    ];

    const missing = requiredFields.filter((key) => !formData[key]);
    if (missing.length) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      return;
    }

    setIsSaving(true);
    try {
      await addDonor({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        group: formData.bloodGroup,
        location: formData.district,
        availability: "Available today",
        phone: formData.phone,
        donations: 0,
      });

      setStatus({
        type: "success",
        message: "Donor saved to the server successfully.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        age: "",
        bloodGroup: "",
        district: "",
        state: "",
        pinCode: "",
        lastDonation: "",
      });
      setAgreedToTerms(false);
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: error?.message || "Could not save. Please try again.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto w-full space-y-10 rounded-[36px] p-6 sm:p-10 border border-rose-100/60 ">
      <header className="group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-red-900 via-black to-black text-white p-8 shadow-2xl hover:shadow-red-900/30 bordertransition-all duration-500">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-900 via-black to-black opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-16 bg-rose-600/40 blur-3xl opacity-0 scale-75 transition-all duration-500 group-hover:opacity-70 group-hover:scale-110"
        ></div>
        <div className="relative">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Register
          </p>
          <h2 className="text-3xl font-semibold font-secondary">
            Register As Donor
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/80 font-secondary">
            Fill in your personal details to become a registered donor. The more
            accurate your information, the faster we can match you with someone
            in need.
          </p>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className=" backdrop-blur rounded-[32px] border border-white/10 p-8 shadow-2xl space-y-8 text-white"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">First Name</label>
            <input
              type="text"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange("firstName")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Last Name</label>
            <input
              type="text"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange("lastName")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Number"
              value={formData.phone}
              onChange={handleChange("phone")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Mail ID"
              value={formData.email}
              onChange={handleChange("email")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-white">Address</label>
            <textarea
              rows={3}
              placeholder="Type here"
              value={formData.address}
              onChange={handleChange("address")}
              className={`${inputClasses} min-h-[120px] resize-none`}
            ></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Age</label>
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange("age")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">
              Blood Group
            </label>
            <select
              className={inputClasses}
              value={formData.bloodGroup}
              onChange={handleChange("bloodGroup")}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">District</label>
            <input
              type="text"
              placeholder="District"
              value={formData.district}
              onChange={handleChange("district")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">State</label>
            <input
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={handleChange("state")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Pin Code</label>
            <input
              type="text"
              placeholder="Pin Code"
              value={formData.pinCode}
              onChange={handleChange("pinCode")}
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">
              Last Donation (Month)
            </label>
            <input
              type="text"
              placeholder="Month"
              value={formData.lastDonation}
              onChange={handleChange("lastDonation")}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-start gap-3 text-sm text-white/80 font-secondary">
            <input
              type="checkbox"
              className="checkbox checkbox-sm mt-1 border-neutral-400 checked:border-neutral-900 checked:bg-neutral-900"
              checked={agreedToTerms}
              onChange={(event) => setAgreedToTerms(event.target.checked)}
            />
            <span>
              I agree to the terms and conditions. Lorem ipsum is simply dummy
              text of the printing and typesetting industry.
            </span>
          </label>

          <button
            type="submit"
            className={submitButtonClasses}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Submit"}
          </button>
        </div>

        {status && (
          <p
            className={`text-sm font-medium ${
              status.type === "success" ? "text-green-400" : "text-rose-300"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default DonorRegistration;
