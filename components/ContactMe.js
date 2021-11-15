import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 200) {
      toast("Thank you for contacting me!", { type: "success" });
    } else {
      toast("Please re-check your inputs.", { type: "error" });
    }
  };

  return (
    <div className='mt-4 p-6 bg-[#2d333b] rounded'>
      <ToastContainer />
      <form className='px-3 py-5' onSubmit={handleSubmit}>
        <h2 className='text-gray-500 font-semibold text-3xl my-2 '>
          Contact Me
        </h2>
        <div className='grid grid-flow-col grid-cols-2 gap-4'>
          <input
            className='bg-[#111111] border border-gray-600 focus:outline-none rounded text-sm p-2 '
            type='text'
            placeholder='Name'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className='bg-[#111111] border border-gray-600 focus:outline-none rounded text-sm p-2 '
            type='text'
            placeholder='Email'
            value={email}
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <textarea
          className='bg-[#111111] border border-gray-600 focus:outline-none w-full mt-3 h-40 rounded text-sm p-2'
          name='message'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type='submit'
          className='bg-[#238636] w-full py-2 font-semibold text-sm text-center focus:outline-none mt-2 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
