import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const appendMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    appendMessage(input, "user");
    setInput("");
    appendMessage("Fast & Son Roofing AI is typing...", "bot");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "bot" &&
          msg.text === "Fast & Son Roofing AI is typing..."
            ? { text: data.reply, sender: "bot" }
            : msg
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "bot" &&
          msg.text === "Fast & Son Roofing AI is typing..."
            ? { text: "Error: Could not get response", sender: "bot" }
            : msg
        )
      );
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-orange-600 text-white flex justify-between items-center p-4 sticky top-0 z-50 shadow-lg">
        <h1 className="text-xl m-0 font-semibold">Fast and Son Roofing</h1>
        <ul className="flex gap-5 m-0 p-0 list-none">
          <li><a href="#home" className="hover:text-yellow-100 font-medium">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-100 font-medium">About Us</a></li>
          <li><a href="#contact" className="hover:text-yellow-100 font-medium">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative text-white text-center py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Roofing banner"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-75"
        />
        <div className="relative z-10 px-5">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Raising the standard in roofing.
          </h2>
          <p className="text-lg max-w-2xl mx-auto drop-shadow mb-8">
            Family-owned and operated — delivering reliable roofing solutions that protect your home and business.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition shadow-lg"
          >
            Get a Free Estimate
          </a>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 bg-white text-center px-6">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          Quality You Can Trust
        </h3>
        <Image
          src="https://tse4.mm.bing.net/th/id/OIP.2yQggm8ThLiA-ipOV9w8PAHaE8?cb=12&w=474&h=474&c=7&p=0"
          alt="Roofing you can trust"
          width={900}
          height={500}
          className="rounded-2xl mx-auto shadow-lg mb-8"
        />
        <p className="max-w-3xl mx-auto text-gray-700 mb-4">
          Fast & Son Roofing is family owned and operated. We serve Portland, OR and the
          surrounding areas. With over 25 years of roofing experience, we offer reliable
          and proven roofing materials and systems installed by skilled technicians.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700">
          We work with a wide range of roofing materials such as asphalt shingles, flat
          roofing products, metal, and artificial cedar shake roofs to meet your needs.
          To ensure your peace of mind, our work is backed by maximum warranty coverage.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">
          Complete Roofing Services for Homes and Businesses
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8">
          At Fast and Son Roofing, we offer a full range of services for both homeowners
          and businesses. Whether you need a roof repair, roof replacement, or new
          gutters — call us. We are dedicated to serving our community with honesty,
          craftsmanship, and care.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1596496050974-058a1e6fa74b?auto=format&fit=crop&w=1600&q=80"
          alt="Roofers working"
          width={900}
          height={500}
          className="rounded-2xl mx-auto shadow-lg"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center px-6">
        <h3 className="text-3xl font-bold mb-6 text-gray-900">We’re Committed to Excellence</h3>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          As a family-owned roofing company, Fast and Son Roofing can help you with any
          roofing issues. From small repairs to full replacements, we focus on quality,
          communication, and long-lasting results.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
          alt="Roofing Team"
          width={900}
          height={500}
          className="rounded-2xl mx-auto shadow-lg"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Get Your Free Roofing Estimate</h3>
            <p className="text-gray-700 mb-6">
              Fill out the quick form and we’ll reach out to schedule your free roofing estimate.
              Or call us directly — we’re happy to help with any roofing questions.
            </p>
            <form
              className="bg-white shadow-lg rounded-xl p-6 space-y-4 text-left"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-semibold mb-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 outline-none"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone Number</label>
                <input type="tel" placeholder="(503) 123-4567" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 outline-none"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 outline-none"/>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Message</label>
                <textarea placeholder="Tell us about your project..." rows="3" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 outline-none"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-500 transition"
              >
                Request Free Estimate
              </button>
            </form>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4 text-gray-900">Contact Info</h4>
            <p className="text-gray-700 mb-2">📞 (503) 254-2046</p>
            <p className="text-gray-700 mb-2">📍 18022 SE Clay St, Portland, OR 97233</p>
            <p className="text-gray-700 mb-2">✉️ fastandsonroofing@gmail.com</p>
            <p className="text-gray-700">Open Monday–Saturday, 8 AM – 6 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Fast and Son Roofing • Portland, OR<br />
        <span className="italic text-gray-500">
          Website inspired by original WordPress.com design
        </span>
      </footer>

      {/* Chatbot Widget */}
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
    </>
  );
}
