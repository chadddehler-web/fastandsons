import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You’d connect this to your lead collection / email logic
    alert(`Thanks, ${name}! We’ll reach out soon.`);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <header className="relative bg-gray-800 text-white h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fast & Son Roofing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Trusted roofing for Portland — repairs, replacements, and gutters.
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-400 transition">
            Request Free Quote
          </button>
        </div>
      </header>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Roof Repair", desc: "Fix leaks, damaged shingles, and more." },
            { title: "Roof Replacement", desc: "New roofs with durable materials." },
            { title: "Gutters & Downspouts", desc: "Proper drainage for your roof." },
          ].map((svc, i) => (
            <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-gray-700">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Family-owned with 25+ years experience. Licensed, insured, and
            committed to quality and your peace of mind.
          </p>
          {/* Add logo badges, small icons for trust, team image etc */}
        </div>
      </section>

      {/* Lead Form / Contact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Get Your Free Roofing Estimate
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded"
            />
            <textarea
              placeholder="Message / Details"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-400 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-gray-300 py-6 px-6 text-center">
        <p>© {new Date().getFullYear()} Fast & Son Roofing</p>
        <p>Portland, OR | (503) 254-2046</p>
      </footer>
    </div>
  );
}
