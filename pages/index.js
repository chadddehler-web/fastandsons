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
        className="relative bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center text-white flex flex-col items-center justify-center text-center h-[70vh]"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-md">
            Raising the Standard in Roofing
          </h2>
          <p className="text-lg mb-8">
            Fast & Son Roofing is family owned and operated. We serve Portland,
            OR and the surrounding areas. With over 25 years of roofing
            experience, we offer reliable and proven roofing materials and
            systems by skilled technicians.
          </p>
          <a
            href="#about"
            className="bg-orange-600 hover:bg-orange-500 px-8 py-3 text-white rounded-full font-semibold shadow-md transition"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* --- About Section --- */}
      <section
        id="about"
        className="py-20 px-6 text-center bg-white border-t border-orange-100"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We work with a wide range of roofing materials such as asphalt
            shingles, flat roofing products, metal and artificial cedar shake
            roofs to meet your needs. To ensure your peace of mind, our work is
            backed by maximum warranty coverage.
          </p>
          <h3 className="text-3xl font-bold text-orange-700 mb-8">
            Complete Roofing Services for Homes and Businesses
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Fast & Son Roofing, we offer a full range of services for both
            homeowners and businesses. Whether you need a roof repair, roof
            replacement, or new gutters, call us. We are dedicated to serving
            our community.
          </p>
          <h4 className="text-2xl font-semibold text-gray-800 mt-10">
            About Us
          </h4>
          <p className="text-gray-700 mt-3">
            We’re committed to excellence. As a family-owned roofing company,
            Fast and Son Roofing can help you with any roofing issues.
          </p>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-orange-50 to-yellow-50 text-center"
      >
        <h3 className="text-4xl font-bold mb-6 text-orange-700">
          Get in Touch
        </h3>
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
