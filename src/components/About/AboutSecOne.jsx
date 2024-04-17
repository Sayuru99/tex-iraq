import React from 'react';

const OurVisionSection = () => {
  return (
    <div className="p-8 text-[#00419C]">
      <h2 className="lg:text-[36px] sm:text-[26px] font-bold mb-4">Our Vision</h2>
      <p className='text-[#00419C] lg:text-[25px] sm:text-[18px]'>
        To foster the optimal development of the local market, we aspire to achieve unparalleled excellence in all the diverse divisions in which we operate. By maximizing the potential of our expertise and technologies, we aim to create perfect outcomes that contribute to the growth and prosperity of the communities and businesses we serve. 
      </p>
    </div>
  );
};

const OurApproachSection = () => {
  return (
    <div className="p-8 rounded-lg">
      <h2 className="lg:text-[36px] sm:text-[26px] text-[#00419C] font-bold mb-4">Our Approach</h2>
      <p className='lg:text-[25px] sm:text-[18px]'>
        At TEx, we understand the importance of accessibility and flexibility in fostering strong partnerships. We pride ourselves on being more than just service providers; we are your dedicated collaborators, ready to adapt and align with your unique requirements. Our team of experts is not confined by office hours or locations; we are wherever you need us to be. Whether it's an on-site consultation, a strategic planning session, or urgent technical support, we are just a call away. We believe in the power of personal connections and are committed to being right next to you as our valued client, ensuring that your goals are met and your challenges are overcome effectively and efficiently.
      </p>
    </div>
  );
};

export { OurVisionSection, OurApproachSection };
