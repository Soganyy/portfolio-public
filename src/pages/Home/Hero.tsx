import { AuroraText } from "@/components/magicui/aurora-text";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto relative py-20 h-[100vh] flex justify-center items-center"
    >
      <div className="flex justify-between items-center flex-col md:flex-row gap-8">
        <div className="md:w-[40%]">
          <div className="flex mb-6 gap-2 flex-wrap">
            <h1 className="text-6xl font-bold text-nowrap">Hello, I'm</h1>
            <h1 className="text-6xl font-bold">
              <AuroraText>Matin</AuroraText>
            </h1>
          </div>
          <p className="text-sm md:text-md text-muted-foreground mb-8">
            I’m a software engineer who is passionate about learning and creating. I’m always
            curious about the “why” behind the way things work, and technology is where I channel
            much of my energy and creativity.
            {/* <br /> */}
            {/* <br /> */}
            {/* Feel free to reach out. */}
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={onConnect}>Contact Me</Button>
          </div> */}
        </div>

        <div className="hidden md:flex flex-col gap-2 items-center md:items-start w-full md:w-[60%] h-[500px] md:h-[400px]">
          <Spline scene="https://prod.spline.design/TBifP7xTUmKlpzIO/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
