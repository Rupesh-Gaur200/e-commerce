import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div name="Contact" className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-10">
      <div className="flex justify-center cursor-pointer">
        <h1 className="text-4xl font-bold border-b-4 border-purple-600 duration-300 hover:scale-125">
          Connect With Me
        </h1>
      </div>

      <div className="flex justify-center pt-8 md:pt-16">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <form
            action="https://getform.io/f/9a137ae2-dd7f-4f00-b029-789815a9d27d"
            method="post"
            className="flex flex-col gap-8"
          >
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="px-3 py-2 text-black"
              type="text"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Drop Your Email"
              name="email"
              className="px-3 py-2 text-black"
              type="text"
            />
            <textarea
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              value={msg}
              placeholder="Drop a Message here"
              name="Message"
              className="px-3 py-2 h-32 text-black"
              type="text"
            />

            <button
              type="Submit"
              className="border-2 border-white w-48 md:w-1/4 h-10 hover:bg-pink-500 hover:scale-110 duration-300"
            >
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
