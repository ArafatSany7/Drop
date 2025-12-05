const STORAGE_KEY = "local_donors";

const parseStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error("Failed to parse stored donors", error);
    return null;
  }
};

const persist = (donors) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(donors));
  } catch (error) {
    console.error("Failed to persist donors", error);
  }
};

export const seedDonors = async () => {
  const stored = parseStored();
  if (stored && Array.isArray(stored) && stored.length) {
    return stored;
  }

  try {
    const response = await fetch("/data/mockDonors.json");
    if (!response.ok) throw new Error("Failed to fetch seed donors");
    const data = await response.json();
    const fallback = Array.isArray(data) ? data : [];
    persist(fallback);
    return fallback;
  } catch (error) {
    console.error(error);
    const fallback = [];
    persist(fallback);
    return fallback;
  }
};

export const getDonors = async () => {
  const stored = parseStored();
  if (stored && Array.isArray(stored)) {
    return stored;
  }
  return seedDonors();
};

export const addDonor = async (donor) => {
  const donors = (await getDonors()) ?? [];
  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    availability: "Available today",
    donations: 0,
    ...donor,
  };
  const updated = [entry, ...donors];
  persist(updated);
  return entry;
};
