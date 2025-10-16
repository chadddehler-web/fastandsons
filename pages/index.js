import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // ---- Chat logic ----
  const appendMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    appendMessage(input, "user");
    setInput("");
    appendMessage("Fast & Son AI is typing...", "bot");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      if (!res.ok) throw new Error("Chat request failed");
      const data = await res.json();
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "bot" && msg.text === "Fast & Son AI is typing..."
            ? { text: data.reply, sender: "bot" }
            : msg
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "bot" && msg.text === "Fast & Son AI is typing..."
            ? { text: "Error: Could not get response", sender: "bot" }
            : msg
        )
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-900 font-sans bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* --- Navbar --- */}
      <nav className="bg-orange-600 text-white flex justify-between items-center px-8 py-4 shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Fast & Son Roofing</h1>
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-200 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-200 transition">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* --- Hero Section --- */}
      <header
        id="home"
        className="relative bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white flex flex-col items-center justify-center text-center h-[75vh]"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-md">
            Raising the Standard in Roofing
          </h2>
          <p className="text-lg mb-8">
            Fast & Son Roofing is family owned and operated. We serve Portland,
            OR and the surrounding areas. With over 25 years of roofing
            experience, we offer reliable and proven materials and systems by
            skilled technicians.
          </p>
          <a
            href="#about"
            className="bg-orange-600 hover:bg-orange-500 px-8 py-3 text-white rounded-full font-semibold shadow-md transition"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* --- Services --- */}
      <section id="services" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10 text-orange-700">
          Complete Roofing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Roof Repair",
              desc: "Fix leaks, missing shingles, and storm damage fast.",
              img: "https://cdn.pixabay.com/photo/2017/05/30/03/46/roof-2353008_1280.jpg",
            },
            {
              title: "Roof Replacement",
              desc: "Durable materials, expert craftsmanship, and guaranteed work.",
              img: "https://cdn.pixabay.com/photo/2016/11/29/10/07/roof-1867187_1280.jpg",
            },
            {
              title: "Gutters & Drainage",
              desc: "Protect your home with seamless gutters and proper drainage.",
              img: "https://cdn.pixabay.com/photo/2016/04/19/19/59/gutter-1336359_1280.jpg",
            },
          ].map((svc, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-2xl transition"
            >
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-orange-700 mb-2">
                  {svc.title}
                </h3>
                <p className="text-gray-700">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- About Section --- */}
      <section
        id="about"
        className="py-20 px-6 text-center bg-gradient-to-br from-gray-100 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-orange-700 mb-6">
            Why Homeowners Trust Us
          </h3>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            We work with a wide range of roofing materials such as asphalt,
            metal, and flat roofing systems to meet your needs. Every project is
            backed by our workmanship warranty and attention to detail.
          </p>
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78834?auto=format&fit=crop&w=1200&q=80"
            alt="Roofing team at work"
            className="rounded-xl shadow-xl mx-auto mb-10 w-full max-w-3xl"
          />
          <h4 className="text-2xl font-semibold text-gray-800 mt-6">
            Family-Owned. Portland Proud.
          </h4>
          <p className="text-gray-700 mt-3">
            As a family-owned company, Fast & Son Roofing has served Portland
            for over 25 years with honesty, integrity, and quality you can
            count on.
          </p>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section
        id="contact"
        className="py-20 px-6 bg-white text-center border-t border-orange-100"
      >
        <h3 className="text-4xl font-bold mb-6 text-orange-700">
          Get in Touch
        </h3>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
          alt="House roof"
          className="rounded-xl shadow-md mx-auto mb-8 w-full max-w-3xl"
        />
        <div className="max-w-xl mx-auto text-lg text-gray-700 space-y-3">
          <p>
            <strong>Phone:</strong> (503) 254-2046
          </p>
          <p>
            <strong>Address:</strong> 18022 SE Clay St, Portland, OR 97233, USA
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@fastandsonroofing.com"
              className="text-orange-600 underline"
            >
              info@fastandsonroofing.com
            </a>
          </p>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Fast & Son Roofing • Portland, OR</p>
      </footer>

      {/* --- Chatbot Widget --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-orange-600 text-white rounded-full p-4 shadow-lg hover:bg-orange-500 transition"
        >
          💬
        </button>
        {isOpen && (
          <div className="bg-white shadow-2xl rounded-xl w-80 mt-3 overflow-hidden border border-gray-200 flex flex-col">
            <div className="bg-orange-600 text-white text-center font-semibold py-2">
              Fast & Son Roofing AI
            </div>
            <div className="flex-1 p-3 overflow-y-auto max-h-64">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`my-1 p-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-orange-600 text-white self-end ml-auto max-w-[80%]"
                      : "bg-gray-100 text-gray-900 self-start mr-auto max-w-[80%]"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex border-t border-gray-300">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-4 hover:bg-orange-500 transition"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
