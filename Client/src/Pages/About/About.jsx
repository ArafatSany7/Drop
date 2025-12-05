import React from "react";
import { Award, Heart, MapPin, ShieldCheck, Users } from "lucide-react";

const stats = [
  { label: "Active donors", value: "12k+" },
  { label: "Successful matches", value: "28k" },
  { label: "Districts covered", value: "22" },
  { label: "Average response", value: "45 min" },
];

const values = [
  {
    title: "Community first",
    description:
      "People over everything. Every process is designed to help a patient faster.",
    icon: Users,
  },
  {
    title: "Verified donors",
    description:
      "We verify donors and surface availability so responders can trust the data.",
    icon: ShieldCheck,
  },
  {
    title: "Transparency",
    description:
      "Clear communication between donor, requester, and hospital at every step.",
    icon: Award,
  },
];

const team = [
  {
    name: "Arman Rahim",
    role: "Coordinator",
    focus: "Connects donors with urgent cases and manages verifications.",
  },
  {
    name: "Sumaiya Noor",
    role: "Medical Advisor",
    focus:
      "Ensures donation guidelines are followed and safety stays priority.",
  },
  {
    name: "Tasnim Hossain",
    role: "Community Lead",
    focus: "Onboards volunteers and runs awareness campaigns in campuses.",
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-base-100 pt-28 pb-16 px-4 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-900 via-black to-black text-white p-10 shadow-2xl">
          <div className="absolute inset-0 opacity-70" aria-hidden>
            <div className="absolute -inset-24 bg-rose-700/25 blur-3xl" />
          </div>
          <div className="relative space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              About Drop
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold font-secondary">
              A community built to save lives
            </h1>
            <p className="text-sm md:text-base text-white/80 font-secondary">
              We connect voluntary donors with people who urgently need blood.
              By combining a trusted database, rapid communication, and
              community-driven verification, we reduce the time it takes to find
              a safe donor.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Heart size={16} /> 100% non-profit mission
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <MapPin size={16} /> Serving campuses & cities
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-rose-100 bg-white p-5 text-center shadow-md"
            >
              <p className="text-3xl font-semibold text-rose-700">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Our mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We are here to ensure no one loses a loved one because blood could
              not be found in time. Drop empowers donors to respond faster,
              hospitals to verify quicker, and families to get transparent
              updates at every step.
            </p>
            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
              <p className="text-sm text-rose-700 font-semibold">How we help</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>
                  Smart search by blood group, district, and availability.
                </li>
                <li>Verified donor profiles with donation history.</li>
                <li>
                  Emergency board that highlights the most critical cases.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm flex gap-3"
              >
                <div className="rounded-full bg-black text-white p-2 h-fit">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-1 rounded-full bg-rose-600" />
            <h2 className="text-2xl font-semibold">Team & volunteers</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm hover:-translate-y-1 transition duration-200"
              >
                <p className="text-sm text-rose-700 font-semibold">
                  {person.role}
                </p>
                <p className="text-lg font-semibold mt-1">{person.name}</p>
                <p className="text-sm text-gray-700 mt-2">{person.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
