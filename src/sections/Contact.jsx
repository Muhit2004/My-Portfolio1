import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from "@emailjs/browser";
const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        name:"",
        email:"",
        message:""

    });
    const handleChange =({target:{name, value}}) => {
        setForm({...form, [name]: value})

    };
    //service_o3j20js

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        try{
          await emailjs.send('service_o3j20js',
                'template_h0kievo', {
                    from_name: form.name,
                    to_name: "Muhit",
                    from_email: form.email,
                    to_email: "themuhit123@gmail.com",
                    message: form.message,},
                "-D4CDDLgu2zRhA0HM");

            setLoading(false);

            setForm({
                name: "",
                email: "",
                message: "",
            })



            alert("Your message has been sent");


        }catch (error) {
                setLoading(false);
                console.log(error);
                alert("Something went wrong");
            }
    }

    return (
       <section className="c-space my-20">

           <div className=" relative min-h-screen
           flex items-center justify-center flex-col">
<img src="/assets/terminal.png"
     alt="terminal banground" className="inset-0 min-h-screen absolute" />

               <div className="contact-container">
                   <h3 className="head-text">Let's get in touch</h3>
<p className="text-white-600 text-lg mt-3 "> Whether you are looking
    to collaborate on a project and bring unique project to life or
    Just want to build a new website, improve you existing platform ,
    I'm here to help.</p>

                   <form ref ={formRef} onSubmit={handleSubmit}
                   className="mt-10 flex flex-col space-y-7 ">
                       <label  className="space-y-3">
                           <span className="field-label ">Full Name</span>
                           <input type="text"
                                  name="name"
                                  value={form.name}
                                  onChange={handleChange}
                                  required
                                  className="field-input"
                                  placeholder="Mustabir Islam"
                           />
                       </label>

                       <label  className="space-y-3">
                           <span className="field-label ">Email</span>
                           <input type="email"
                                  name="email"
                                  value={form.email}
                                  onChange={handleChange}
                                  required
                                  className="field-input"
                                  placeholder="muhit@gmail.com"
                           />
                       </label>

                       <label  className="space-y-3">
                           <span className="field-label "> Your Message</span>
                           <textarea
                                  name="message"
                                  value={form.message}
                                  onChange={handleChange}
                                  required
                                  rows="5"
                                  className="field-input"
                                  placeholder="Hi, I wanna give you a job ..."
                           />
                       </label>

                       <button
                                type="submit"
                                className="field-btn"
                                disabled={loading}>
                           {loading ? "Sending..." : "Send Message"}
                           <img src="/assets/arrow-up.png"
                                alt="arrow up" className="field-btn_arrow" />
                           </button>


                   </form>

               </div>

           </div>




       </section>
    )
}
export default Contact
