import React, { useState } from 'react';
import { navLinks } from '../constants/index.js';
const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // ADDED: smooth scroll handler to navigate to sections and close the mobile menu.
  // Reason: Ensure clicking any nav item scrolls smoothly to its target and collapses the sidebar on mobile.
  const handleNavClick = (e, href) => {
    // Prevent default jump so we can control smooth scrolling
    e.preventDefault();
    if (!href || !href.startsWith('#')) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optionally reflect the hash in the URL without an abrupt jump
      if (history.replaceState) {
        history.replaceState(null, '', href);
      } else {
        window.location.hash = href; // fallback
      }
    }
    // Close the mobile menu after navigation
    setIsOpen(false);
  };

  const NavItems = ()=>{
    return(
      <>
      <ul className='nav-ul'>
        { navLinks.map(({ id, name, href }) => (
          <li key={id} className="nav-li">
            {/* CHANGED: attach smooth scroll click handler */}
            <a href={href} className="nav-li_a" onClick={(e) => handleNavClick(e, href)}>
            {name}
            </a>
          </li>
        ))}
      </ul>
      

      </>
    )
  }
  return (
    <header  className=" fixed top-0 left-0
    right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between 
         py-5  mx-auto c-space  ">

<a href="/" className="text-neutral-400 font-bold 
text-xl 
hover:text-white transition-colors">Muhit</a>

<button onClick ={toggleMenu} 

className="text-neutral-400 hover:text-white
focus:outline-none sm:hidden flex" aria-label="Toggle menu"> 

  <img  src=
  {isOpen ? "assets/close.svg" : "assets/menu.svg"}
   alt="toggle" 
  className="w-6 h-6">
  </img>

</button>

<nav className="sm:flex hidden" aria-label="Main navigation">
  <NavItems/>
</nav>
        </div>
      </div>

      <div className={`nav-sidebar 
        ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>

<nav className='p-5'><NavItems/></nav>
      </div>
       
    </header>
  )
}

export default Navbar