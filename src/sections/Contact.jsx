import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from "@emailjs/browser";
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name:"",
        email:"",
        message:""
    });

    // Responsive breakpoints
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
    const isSmallMobile = useMediaQuery({ maxWidth: 480 });

    const handleChange =({target:{name, value}}) => {
        setForm({...form, [name]: value})
    };

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

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong");
        }
    }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen">
                {/* Responsive CSS Background - Option 1 */}
                <div 
                    className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
                    style={{
                        backgroundImage: "url('/assets/terminal.png')",
                        backgroundSize: isMobile ? 'cover' : 'contain',
                        backgroundPosition: 'center',
                        borderRadius: isMobile ? '100px' : '0px',

                    }}
                />
                
                {/* Mobile background overlay for better readability */}
                {isMobile && (
                    <div className="absolute inset-0 w-full h-full " />
                )}
                
                {/* Scrollable container for overflow handling */}
                <div className="relative z-10 min-h-screen overflow-y-auto flex items-center justify-center py-4 sm:py-8">
                    {/* Dynamic sizing based on screen size - Option 4 */}
                    <div className={`contact-container w-full mx-auto ${
                        isSmallMobile ? 'px-3 py-4 max-w-xs' : 
                        isMobile ? 'px-4 py-6 max-w-sm' : 
                        isTablet ? 'px-6 py-8 max-w-lg' : 
                        'px-8 py-12 max-w-2xl'
                    }`}>
                        <h3 className={`head-text text-center sm:text-left ${
                            isSmallMobile ? 'text-lg' :
                            isMobile ? 'text-xl' : 
                            'text-2xl lg:text-3xl'
                        }`}>
                            Let's get in touch
                        </h3>
                        
                        <p className={`text-white-600 mt-3 text-center sm:text-left ${
                            isSmallMobile ? 'text-xs leading-relaxed' :
                            isMobile ? 'text-sm' : 
                            'text-base lg:text-lg'
                        }`}>
                            Whether you are looking to collaborate on a project and bring unique project to life or
                            Just want to build a new website, improve your existing platform,
                            I'm here to help.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit}
                              className={`flex flex-col ${
                                  isSmallMobile ? 'mt-4 space-y-3' :
                                  isMobile ? 'mt-5 space-y-4' : 
                                  isTablet ? 'mt-6 space-y-5' :
                                  'mt-8 space-y-6'
                              }`}>
                            
                            <label className="space-y-2">
                                <span className={`field-label ${
                                    isMobile ? 'text-sm' : 'text-base'
                                }`}>Full Name</span>
                                <input 
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className={`field-input ${
                                        isMobile ? 'text-sm py-2 px-3' : 'py-3 px-4'
                                    }`}
                                    placeholder="Mustabir Islam"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className={`field-label ${
                                    isMobile ? 'text-sm' : 'text-base'
                                }`}>Email</span>
                                <input 
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className={`field-input ${
                                        isMobile ? 'text-sm py-2 px-3' : 'py-3 px-4'
                                    }`}
                                    placeholder="muhit@gmail.com"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className={`field-label ${
                                    isMobile ? 'text-sm' : 'text-base'
                                }`}>Your Message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={isSmallMobile ? "3" : isMobile ? "4" : "5"}
                                    className={`field-input resize-none ${
                                        isMobile ? 'text-sm py-2 px-3' : 'py-3 px-4'
                                    }`}
                                    placeholder="Hi, I wanna give you a job ..."
                                />
                            </label>

                            <button
                                type="submit"
                                className={`field-btn ${
                                    isMobile ? 'text-sm py-2 px-4' : 'py-3 px-6'
                                }`}
                                disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                                <img 
                                    src="/assets/arrow-up.png"
                                    alt="arrow up" 
                                    className={`field-btn_arrow ${
                                        isMobile ? 'w-3 h-3' : 'w-4 h-4'
                                    }`} 
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact