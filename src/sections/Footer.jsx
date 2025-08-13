import React from 'react'

const Footer = () => {
    return (
 <section className="c-space pt-7 pb-3 border-t border-black-300
 flex justify-between items-center flex-wrap gap-5">

     <div className="text-white-500 flex gap-2">
    <p>Term & Condition</p>
         <p>|</p>
         <p>Privacy Policy</p>
     </div>

     <div className=" flex gap-3">
         <div className="social-icon">
             <a  className="w-1/2 h-1/2" href="https://github.com/Muhit2004/My-Portfolio1.git" target="_blank" rel="noopener noreferrer">
                 <img src="/assets/github.svg" alt="github"  /></a>

         </div>
         <div className="social-icon">
             <a  className="w-1/2 h-1/2"
                 href="https://www.linkedin.com/in/mustabir-islam-b51a441b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
 " target="_blank" rel="noopener noreferrer">
                 <img src="/assets/linkedin1.jpg" alt="linked in" className="rounded" /></a>

         </div>
         <div className="social-icon">
             <a  className="w-1/2 h-1/2" href="https://www.instagram.com/_muhiii.t/" target="_blank" rel="noopener noreferrer">
                 <img src="/assets/instagram.svg" alt="instagram" /></a>

         </div>


     </div>
     <p className="text-white-500">Copyright &copy; {new Date().getFullYear()} Muhit</p>

 </section>
    )
}
export default Footer
