import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BsTelephone } from 'react-icons/bs'
import { VscLocation } from 'react-icons/vsc'
import { Ri24HoursFill } from 'react-icons/ri'

import { styles } from "../styles";
import { slideIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_iby6vtb",
      "template_gwlsa42",
      {
        from_name: form.name,
        to_name: "Gabriel",
        from_email: form.email,
        to_email: "bielformigoni2311@gmail.com",
        message: form.message,
      },
      "yBF0FYKc3XOJwxWSy"
    )
    .then(() => {
      setLoading(false)
      
      setForm({
        name: '',
        email: '',
        message: '',
      })
      alert('Thank you. I will get back to you as soon as possible.')
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    })
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contact"
      className={`px-6 md:px-24 sm:py-16 py-10 md:py-16 flex xl:flex-row flex-col gap-10 overflow-hidden relative`}
    >
      <div className="absolute top-1/4 left-0 w-full bg-black-100 bg-opacity-80 h-[500px] z-0 hidden xl:block" />
      <motion.div
        variants={slideIn("left", "tween", 0.1, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl z-[9999] shadow-xl shadow-primary"
      >
        <p className={styles.sectionSubText}>Mande uma mensagem</p>
        <h2 className={styles.sectionHeadText}>Contato.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual o seu nome?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Seu email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual o seu endereço de email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Sua mensagem</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="O que você gostaria de dizer?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-xl shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 flex flex-col gap-20 text-white justify-center lg:ml-56"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <BsTelephone size={20} />
            <p className="lg:text-2xl text-lg font-semibold">Entre em contato</p>
          </div>
          <p className="lg:text-lg text-sm">(99) 99999-9999</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <VscLocation size={20} />
            <p className="lg:text-2xl text-lg font-semibold">Localização</p>
          </div>
          <p className="lg:text-lg text-sm">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <Ri24HoursFill size={20} />
            <p className="lg:text-2xl text-lg font-semibold">Horário de atendimento</p>
          </div>
          <p className="lg:text-lg text-sm">Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</p>
        </div>
        
      </motion.div>
    </motion.div>
  );
};

export default Contact
