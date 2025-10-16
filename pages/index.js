import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Chat logic
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
      {/* --- Hero --- */}
      <header className="relative bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Fast & Son Roofing
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Portland’s trusted roofing experts for over 25 years.
          </p>
          <a
            href="#contact"
            className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* --- Services --- */}
      <section id="services" className="py-20 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold mb-10 text-orange-700">
          Our Roofing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Roof Repair",
              desc: "Fix leaks, missing shingles, and storm damage fast.",
              icon: "🧰",
            },
            {
              title: "Roof Replacement",
              desc: "Durable materials, expert craftsmanship, and guaranteed work.",
              icon: "🏠",
            },
            {
              title: "Gutters & Drainage",
              desc: "Protect your home with seamless gutters and proper drainage.",
              icon: "💧",
            },
          ].map((svc, i) => (
            <div
              key={i}
              className="bg-orange-50 border border-orange-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{svc.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{svc.title}</h3>
              <p className="text-gray-700">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- About --- */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-700 mb-6">
            Why Homeowners Trust Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Family-owned and serving Portland for over two decades, we’re proud to
            provide quality roofing, honest pricing, and dependable service.
            Every project is backed by our satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-700">
          Get Your Free Estimate
        </h2>
        <form className="max-w-lg mx-auto space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-500 font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Fast & Son Roofing</p>
        <p>Portland, OR • (503) 254-2046</p>
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
