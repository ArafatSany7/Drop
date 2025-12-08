const fallbackBase =
  typeof window !== "undefined" && import.meta.env?.DEV
    ? "http://localhost:5000"
    : typeof window !== "undefined"
    ? window.location.origin
    : "http://localhost:5000";

const API_BASE = (import.meta.env.VITE_API_URL || fallbackBase).replace(
  /\/$/,
  ""
);
const DONORS_ENDPOINT = `${API_BASE}/api/donors`;

const handleResponse = async (response) => {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const message = data?.message || "Request failed";
    throw new Error(message);
  }
  return data;
};

export const getDonors = async (filters = {}) => {
  const url = new URL(DONORS_ENDPOINT);

  if (filters.group && filters.group !== "all") {
    url.searchParams.set("group", filters.group);
  }

  if (filters.location) {
    url.searchParams.set("location", filters.location);
  }

  const response = await fetch(url.toString());
  return handleResponse(response);
};

export const addDonor = async (donor) => {
  const response = await fetch(DONORS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donor),
  });

  return handleResponse(response);
};

export const seedDonors = async () => {
  const response = await fetch(`${DONORS_ENDPOINT}/seed`, {
    method: "POST",
  });

  return handleResponse(response);
};
