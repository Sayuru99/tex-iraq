import backgroundImage from '../../assets/about.jpg';

const AboutUsHead = () => {
  return (
    <div className="relative h-screen flex items-center">
      <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="max-w-4xl mx-auto px-8 text-white z-10">
        <h1 className="text-4xl font-bold mb-4">Our History</h1>
        <p className="text-lg">
        A Technology Company established in 2022 by two visionary Business Experts, who are committed to leveraging Technology utilization in the region and contributing to the development of the Iraqi society, TEx embarked on its journey in Erbil City, Iraq. From its humble beginnings, the company rapidly expanded its operations, establishing itself as a prominent player in the technology and business development landscape of Iraq. With a firm foothold in Erbil, TEx has set its sights on covering all Iraqi cities, bringing cutting-edge solutions and expert consultancy to businesses across the nation.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHead;
