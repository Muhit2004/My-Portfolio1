import { ComputersCanvas } from "../canvas";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
