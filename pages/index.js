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
    appendMessage("Fast & Son AI is typing...", "bot");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
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
    <>
      <nav className="bg-orange-600 text-white flex justify-between items-center p-4 sticky top-0 z-50 shadow-lg">
        <h1 className="text-xl m-0 font-semibold">Fast & Son Roofing</h1>
        <ul className="flex gap-5 m-0 p-0 list-none">
          <li><a href="#home" className="hover:text-yellow-100 font-medium">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-100 font-medium">Services</a></li>
          <li><a href="#contact" className="hover:text-yellow-100 font-medium">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="relative text-white text-center py-28">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Roofing hero"
          layout="fill"
          objectFit="cover"
          className="z-0 brightness-75"
        />
        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-4">Raising the Standard in Roofing</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Family owned and operated for over 25 years — reliable roofing services you can trust.
          </p>
        </div>
      </header>

      <section id="services" className="py-16 text-center bg-orange-50">
        <h3 className="text-4xl font-bold mb-10 text-gray-900">Our Services</h3>
        <div className="flex flex-wrap justify-center gap-10 px-5">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80">
            <Image
              src="https://tse1.mm.bing.net/th/id/OIP.2V_-eijYyATc4sS_cO7nMAHaE8?pid=Api"
              alt="Roof Repair"
              width={400}
              height={250}
              className="object-cover w-full h-52"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold text-orange-700 mb-2">Roof Repair</h4>
              <p className="text-gray-600">Fix leaks, missing shingles, and storm damage fast.</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80">
            <Image
              src="https://tse2.mm.bing.net/th/id/OIP.IZgIGRWFPx1PsMsW6HqBNAHaE7?pid=Api"
              alt="Roofing Work"
              width={400}
              height={250}
              className="object-cover w-full h-52"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold text-orange-700 mb-2">Roof Replacement</h4>
              <p className="text-gray-600">
                Durable materials, expert craftsmanship, and guaranteed results.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80">
            <Image
              src="https://images.unsplash.com/photo-1590337164801-b7b1f72f0935?auto=format&fit=crop&w=1600&q=80"
              alt="Gutters and Drainage"
              width={400}
              height={250}
              className="object-cover w-full h-52"
            />
            <div className="p-5">
              <h4 className="text-xl font-semibold text-orange-700 mb-2">Gutters & Drainage</h4>
              <p className="text-gray-600">
                Keep your property safe from water damage with expert drainage systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-white">
        <h3 className="text-4xl font-bold mb-6 text-gray-900">About Us</h3>
        <p className="max-w-2xl mx-auto text-gray-700 mb-10">
          Fast & Son Roofing is a family-owned company serving Portland and surrounding areas.
          With 25+ years of experience, we specialize in roof repair, replacement, and gutter
          installation. All backed by maximum warranty coverage.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
          alt="Roofing Team"
          width={900}
          height={500}
          className="rounded-2xl mx-auto shadow-lg"
        />
      </section>

      <section id="contact" className="py-16 text-center bg-orange-50">
        <h3 className="text-3xl font-bold mb-3 text-gray-900">Get In Touch</h3>
        <p className="text-gray-700">📞 (503) 254-2046</p>
        <p className="text-gray-700">
          📍 18022 SE Clay St, Portland, OR 97233
        </p>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Fast & Son Roofing • Portland, OR
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
