import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Search, ShieldCheck } from "lucide-react";
import { getDonors } from "../../services/localDonorService";
import { Helmet } from "react-helmet-async";

const emergencies = [
  {
    id: 1,
    group: "O+",
    hospital: "Square Hospital",
    city: "Dhaka",
    time: "Need in 2 hrs",
  },
  {
    id: 2,
    group: "B+",
    hospital: "Evercare",
    city: "Chittagong",
    time: "Need today",
  },
  {
    id: 3,
    group: "AB-",
    hospital: "CMH",
    city: "Sylhet",
    time: "Need within 6 hrs",
  },
];

const FindBlood = () => {
  const [donors, setDonors] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("all");
  const [location, setLocation] = useState("");
  const [searchFilters, setSearchFilters] = useState({
    group: "all",
    location: "",
  });
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);
  const [requestForm, setRequestForm] = useState({
    patientName: "",
    bloodGroup: "",
    location: "",
    contactPhone: "",
    hospital: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const loadDonors = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getDonors(searchFilters);
        if (!cancelled) {
          setDonors(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || "Unable to load donors");
          setDonors([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    loadDonors();

    return () => {
      cancelled = true;
    };
  }, [searchFilters]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchFilters({
      group: bloodGroup,
      location: location.trim(),
    });
  };

  const handleResetFilters = () => {
    setBloodGroup("all");
    setLocation("");
    setSearchFilters({ group: "all", location: "" });
  };

  const handleRequestFieldChange = (field) => (event) => {
    setRequestForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    const required = [
      requestForm.patientName,
      requestForm.bloodGroup,
      requestForm.location,
      requestForm.contactPhone,
    ];

    if (required.some((value) => !value.trim())) {
      setRequestStatus({
        type: "error",
        message: "Please fill all required fields.",
      });
      return;
    }

    setRequestStatus({
      type: "success",
      message:
        "Request submitted. Our team will contact matching donors soon.",
    });
    setRequestForm({
      patientName: "",
      bloodGroup: "",
      location: "",
      contactPhone: "",
      hospital: "",
      notes: "",
    });
  };

  return (
    <div>
      <Helmet>
        <title>Drop | Find Blood</title>
      </Helmet>
      <section className="min-h-screen bg-base-100 pt-28 pb-16 px-4 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-10 ">
          <div className="group relative overflow-hidden bg-gradient-to-br from-red-900 via-black to-black text-white p-10 shadow-2xl hover:shadow-red-900/30 transition-all duration-500 rounded-3xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-900 via-black to-black opacity-90 transition-opacity duration-500 group-hover:opacity-100 after:content-[''] after:pointer-events-none after:absolute after:-inset-16 after:bg-rose-600/40 after:blur-3xl after:opacity-0 after:scale-75 after:transition-all after:duration-500 group-hover:after:opacity-70 group-hover:after:scale-110"
            ></div>
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                  Find Blood
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold font-secondary">
                  Locate a donor in minutes
                </h1>
                <p className="text-sm md:text-base text-white/80 max-w-2xl font-secondary">
                  Search by blood group and district to instantly see available
                  donors from our community. Reach out directly when every
                  second counts.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <ShieldCheck size={16} /> Verified community donors
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                    <Heart size={16} /> Response under 1 hour
                  </span>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl backdrop-blur w-full lg:max-w-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white/15 p-2">
                    <Search size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70">Live availability</p>
                    <p className="text-lg font-semibold">128 donors nearby</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                  <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                    <p className="text-xs text-white/60">Urgent</p>
                    <p className="font-semibold">18 requests</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                    <p className="text-xs text-white/60">Cities</p>
                    <p className="font-semibold">22 covered</p>
                  </div>
                </div>
                <Link
                  to="/registration"
                  className="btn btn-dash w-full border-white text-white hover:bg-white hover:text-black"
                >
                  Become a donor
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <form
                onSubmit={handleSearchSubmit}
                className="grid md:grid-cols-3 gap-4  border border-rose-100 rounded-2xl p-5 shadow-lg"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Blood Group
                  </label>
                  <select
                    value={bloodGroup}
                    onChange={(event) => setBloodGroup(event.target.value)}
                    className="select select-bordered w-full"
                  >
                    <option value="all">All groups</option>
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
                  <label className="text-sm font-medium text-gray-700">
                    District
                  </label>
                  <div className="input input-bordered flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    <input
                      type="text"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      placeholder="e.g., Dhaka"
                      className="grow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Search Area
                  </label>
                  <button
                    type="submit"
                    className="btn w-full bg-black text-white hover:bg-rose-700"
                  >
                    <Search size={16} />
                    Search donors
                  </button>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="btn btn-outline w-full"
                  >
                    Reset
                  </button>
                </div>
              </form>

              <div className="grid gap-4 md:grid-cols-2">
                {isLoading && (
                  <div className="col-span-full rounded-2xl border border-dashed border-rose-200 bg-rose-50 px-6 py-10 text-center text-gray-700">
                    <p className="font-semibold text-lg">Loading donors...</p>
                  </div>
                )}

                {error && !isLoading && (
                  <div className="col-span-full rounded-2xl border border-dashed border-rose-200 bg-rose-50 px-6 py-10 text-center text-gray-700">
                    <p className="font-semibold text-lg">{error}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Please check your connection or try again.
                    </p>
                  </div>
                )}

                {!isLoading &&
                  !error &&
                  donors.map((donor) => (
                    <article
                      key={donor.id || `${donor.name}-${donor.group}`}
                      className="rounded-2xl border border-rose-100  p-5 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm text-red-800">{donor.group}</p>
                          <h3 className="text-lg  font-semibold">
                            {donor.name}
                          </h3>
                          <p className="flex items-center gap-2 text-sm opacity-60 mt-1">
                            <MapPin size={16} /> {donor.location}
                          </p>
                        </div>
                        <span className="rounded-full border-2 rounded-2xl px-3 py-1 text-xs font-semibold text-rose-700 opacity-70">
                          {donor.availability}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                        <span className="inline-flex items-center gap-1 rounded-full border-2 rounded-2xl px-3 py-1">
                          <Heart size={14} /> {donor.donations} donations
                        </span>
                        <a
                          href={`tel:${donor.phone}`}
                          className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-white hover:bg-rose-700 duration-500"
                        >
                          <Phone size={14} /> Call donor
                        </a>
                      </div>
                    </article>
                  ))}

                {!isLoading && !error && donors.length === 0 && (
                  <div className="col-span-full rounded-2xl border border-dashed border-rose-200 bg-rose-50 px-6 py-10 text-center text-gray-700">
                    <p className="font-semibold text-lg">
                      No donors match the current filters.
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Try a different blood group or district, or post a request
                      for urgent help.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-rose-100  p-5 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="text-rose-600" size={18} />
                  <p className="font-semibold">Urgent requests</p>
                </div>
                <div className="space-y-3">
                  {emergencies.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-rose-50 bg-gradient-to-br from-red-900 via-black to-black  px-4 py-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-rose-700">
                          {item.group}
                        </span>
                        <span className="text-xs text-rose-600">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm ">{item.hospital}</p>
                      <p className="text-xs ">{item.city}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200   p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-2">
                  Couldn't find a match?
                </h3>
                <p className="text-sm opacity-60 mb-4">
                  Register as a donor or submit your requirement. Our community
                  will reach you soon.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/registration"
                    className="btn btn-dash w-full bg-white text-black border-none"
                  >
                    Register as donor
                  </Link>
                  <button
                    onClick={() => {
                      setIsRequestModalOpen(true);
                      setRequestStatus(null);
                    }}
                    className="btn w-full bg-transparent  border-white/40 hover:bg-white hover:text-black"
                  >
                    Post a request
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {isRequestModalOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 px-4">
          <div className="w-full max-w-xl rounded-2xl bg-base-100 p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Post blood request</h2>
              <button
                onClick={() => setIsRequestModalOpen(false)}
                className="btn btn-sm btn-ghost"
                aria-label="Close request form"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRequestSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Patient name *"
                value={requestForm.patientName}
                onChange={handleRequestFieldChange("patientName")}
                className="input input-bordered w-full"
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <select
                  value={requestForm.bloodGroup}
                  onChange={handleRequestFieldChange("bloodGroup")}
                  className="select select-bordered w-full"
                >
                  <option value="">Blood group *</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <input
                  type="text"
                  placeholder="District *"
                  value={requestForm.location}
                  onChange={handleRequestFieldChange("location")}
                  className="input input-bordered w-full"
                />
              </div>
              <input
                type="tel"
                placeholder="Contact phone *"
                value={requestForm.contactPhone}
                onChange={handleRequestFieldChange("contactPhone")}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Hospital name"
                value={requestForm.hospital}
                onChange={handleRequestFieldChange("hospital")}
                className="input input-bordered w-full"
              />
              <textarea
                rows={3}
                placeholder="Additional notes"
                value={requestForm.notes}
                onChange={handleRequestFieldChange("notes")}
                className="textarea textarea-bordered w-full"
              />

              {requestStatus && (
                <p
                  className={`text-sm ${
                    requestStatus.type === "success"
                      ? "text-green-600"
                      : "text-rose-600"
                  }`}
                >
                  {requestStatus.message}
                </p>
              )}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsRequestModalOpen(false)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn bg-black text-white">
                  Submit request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindBlood;
