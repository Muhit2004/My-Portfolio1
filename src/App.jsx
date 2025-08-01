import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

const App = () => {
  return (
    
   <main className="max-w-7xl mx-auto">
    <Navbar />
    <div className="pt-20">
        <Hero />
      </div>
   </main>
   
  
  );
}
export default App;