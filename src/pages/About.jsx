import { OurVisionSection, OurApproachSection } from "../components/About/AboutSecOne";
import AboutUsHead from '../components/About/AboutUsHead';

const About = () => {
  return (
    <>
      <AboutUsHead />
      <div className="flex justify-center items-center">
        <div className="mx-auto">
          <div className="lg:hidden">
            <div className="p-8 rounded-lg">
              <OurVisionSection />
            </div>
            <div className="p-8 rounded-lg mt-8">
              <OurApproachSection />
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-8">
            <div className="p-8 rounded-lg">
              <OurVisionSection />
            </div>
            <div className="p-8 rounded-lg text-black">
              <OurApproachSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;