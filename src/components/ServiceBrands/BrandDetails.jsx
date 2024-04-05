import { useParams } from "react-router-dom";
import ProductCarousel from "./ProductCarousel";
import BrandImage from "./BrandImage";
import BrandDescription from "./BrandDescription";

const brandData = {
  ConsulTEx: {
    name: "ConsulTEx",
    image:
      "https://sardargroup.iq/wp-content/uploads/2020/08/SG-Web-Banner-1900-924-Cars-7--1536x747.jpg",
    description: (
      <>
        Our consultancy services encompass a wide range of specialties tailored
        to enhance businesses' sales and marketing efforts. We devise
        personalized strategies aimed at driving market penetration and
        fostering revenue growth. Additionally, our expertise extends to
        logistic development, where we optimize operations to ensure efficient
        supply chains and streamlined distribution processes, contributing to
        overall operational effectiveness.
        <br />
        <br />
        Within the realm of heavy machinery and automotive business, we offer
        expert guidance to businesses seeking to enter or expand in these
        competitive sectors. Our comprehensive solutions cover everything from
        machinery and automotive spare parts procurement to services aimed at
        maximizing the lifespan and performance of machinery and vehicles. This
        holistic approach ensures clients receive tailored support for their
        specific needs.
        <br />
        <br />
        In the realm of digital transformation and IT consultancy, we leverage
        years of experience to provide cutting-edge solutions that streamline
        business processes and facilitate informed decision-making. Our services
        span from advising on proper IT and security infrastructure to
        recommending suitable ERP systems based on thorough analysis.
        Additionally, we offer general business consultancy, mechanical
        engineering solutions, and financial advising to support businesses
        across various domains in navigating challenges and fostering strategic
        growth.
      </>
    ),
    // products: ['product_image_1', 'product_image_2', 'product_image_3']
  },
  VendTEx: {
    name: "VendTEx",
    description: (
      <>
        Convenience is at the forefront of our priorities at VendTEx. We strive
        to ensure availability and accessibility for our customers, making their
        vending experience seamless and hassle-free. Whether it's a quick snack
        on the go or a refreshing beverage during a busy day, our vending
        machines are conveniently located to meet the needs of our customers
        whenever and wherever they may be.
        <br />
        <br /> Quality is the cornerstone of VendTEx. We are committed to
        providing the best-in-class vending machines and relevant materials,
        setting new standards for quality and durability in the market. Each
        product in our machines undergoes rigorous testing to ensure it meets
        our high standards of excellence, guaranteeing satisfaction with every
        purchase.
        <br />
        <br />
        Support for small businesses is a core value at VendTEx. We believe in
        empowering entrepreneurs and fostering economic growth by guiding small
        businesses to utilize vending machines as profitable investment
        projects. Through our support and guidance, small businesses can
        capitalize on the opportunities offered by vending machines,
        contributing to their success and the overall growth of the community.
        <br />
        <br />
        At VendTEx, we are dedicated to elevating the Iraqi market to new
        heights in vending machine technology. We are committed to setting
        benchmarks for innovation and service excellence, driving progress and
        transformation in the industry. By continuously pushing the boundaries
        of what's possible, we aim to enhance the vending experience for both
        customers and businesses alike, ultimately shaping the future of the
        Iraqi market.
      </>
    ),
    logos: [
      {
        image:
          "https://www.rheavendors.com/en/wp-content/uploads/2022/04/trademark-__old.png",
        url: "https://www.rheavendors.com/en/",
      },
      {
        image:
          "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/logo-black-new.svg",
        url: "https://azkoyenvending.com",
      },
    ],
    products: [
      {
        image:
          "https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhTT1.i-Cover-2-400x450.jpg",
        name: "rh TT1",
        logo: "https://www.rheavendors.com/en/wp-content/uploads/2022/04/trademark-__old.png",
        logoUrl: "https://www.rheavendors.com/en/",
      },
      {
        image:
          "https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhTT3-BLACK-Cover-1-800x900.jpg",
        name: "rh TT3 Pro",
        logo: "https://www.rheavendors.com/en/wp-content/uploads/2022/04/trademark-__old.png",
        logoUrl: "https://www.rheavendors.com/en/",
      },
      {
        image:
          "https://azkoyenvending.com/wp-content/blogs.dir/3/files/sites/3/2022/05/Azkoyen-NEO-Q_Front_600-1400.webp",
        name: "Neo Q",
        logo: "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/logo-black-new.svg",
        logoUrl: "https://azkoyenvending.com",
      },
      {
        image:
          "https://azkoyenvending.com/wp-content/blogs.dir/3/files/sites/3/2020/04/ZENSIA-2.png",
        name: "Zenia",
        logo: "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/logo-black-new.svg",
        logoUrl: "https://azkoyenvending.com",
      },
      {
        image:
          "https://azkoyenvending.com/wp-content/blogs.dir/3/files/sites/3/2020/03/zintro-3.png",
        name: "Zintro",
        logo: "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/logo-black-new.svg",
        logoUrl: "https://azkoyenvending.com",
      },
      {
        image:
          "https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS1.touch215-Cover-1-wood-800x900.jpg",
        name: "rh FS1 Touch",
        logo: "https://www.rheavendors.com/en/wp-content/uploads/2022/04/trademark-__old.png",
        logoUrl: "https://www.rheavendors.com/en/",
      },
      {
        image:
          "https://azkoyenvending.com/wp-content/blogs.dir/3/files/sites/3/2020/03/ZEN-2-1.png",
        name: "Zen",
        logo: "https://azkoyenvending.com/wp-content/themes/azkoyen-vending/home-new/assets/img/logo-black-new.svg",
        logoUrl: "https://azkoyenvending.com",
      },
      {
        image:
          "https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS1.buttons-Cover-1-wood-800x900.jpg",
        name: "rh FS1 Buttons",
        logo: "https://www.rheavendors.com/en/wp-content/uploads/2022/04/trademark-__old.png",
        logoUrl: "https://www.rheavendors.com/en/",
      },
    ],
  },
  SofTEx: {
    name: "SofTEx",
    description: (
      <>
        Our software development services are dedicated to providing affordable
        solutions tailored to businesses' needs. From website development to
        mobile app development, we aim to enhance business performance and
        provide a competitive advantage. By leveraging cutting-edge
        technologies, we ensure that our solutions are not only cost-effective
        but also efficient in meeting the unique requirements of each client,
        empowering them to thrive in their respective industries.
        <br />
        <br />
        When it comes to IT infrastructure, we specialize in deploying the
        proper setup to support businesses' operations. This includes setting up
        servers, data centers, operating systems, and various security measures
        such as CCTV, sound systems, fire alarms, emergency alarms, and
        firewalls. Additionally, we offer expertise in telematics and fleet
        management systems, as well as VOIP systems, ensuring that businesses
        have a robust and reliable IT infrastructure in place to support their
        day-to-day activities.
        <br />
        <br />
        In the realm of software systems, we provide comprehensive solutions
        aimed at optimizing business operations. This includes setting up ERP
        systems, managing databases, and handling data conversion and migration
        tasks. Furthermore, we offer expertise in data analysis and business
        intelligence systems, empowering businesses to derive actionable
        insights from their data. Our goal is to equip businesses with the tools
        they need to make informed decisions and drive growth effectively.
      </>
    ),
    // products: ["product_image_1", "product_image_2", "product_image_3"],
  },
  TradTEx: {
    name: "TradTEx",
    description: (
      <>
        TradTEx is dedicated to meeting the diverse needs of private businesses
        by offering a broad selection of top-tier products. We prioritize
        reliability and efficiency, ensuring that our clients receive
        high-quality solutions tailored to their requirements. Whether it's
        technology, equipment, or supplies, we strive to be the go-to provider
        for businesses seeking dependable and effective products.
        <br />
        <br />
        In addition to serving the private sector, TradTEx actively participates
        in government tenders, contributing to national projects and
        initiatives. We consistently deliver competitive and comprehensive
        proposals, demonstrating our commitment to supporting the development
        and progress of our country. By engaging in government tenders, we aim
        to play a vital role in advancing critical infrastructure and services.
        <br />
        <br />
        Furthermore, TradTEx extends its reach to non-governmental
        organizations, supplying essential goods to support humanitarian and
        community-driven initiatives. Through our partnership with NGOs, we
        contribute to various noble causes, ensuring that resources reach those
        in need efficiently and effectively. Our dedication to serving both
        public and private sectors reflects our commitment to making a positive
        impact on society while maintaining a strong presence in the local
        market through diverse trading activities.
      </>
    ),
    logos: [
      {
        image:
          "https://www.barry-callebaut.com/themes/custom/bccom/dist/img/brand-logos/header-logo--satroqualitydrinks.jpg",
        url: "https://www.barry-callebaut.com/en-SE/vending/satro-quality-drinks",
      },
      {
        image:
          "https://www.barry-callebaut.com/themes/custom/bccom/dist/img/brand-logos/header-logo--caprimo.png",
        url: "https://www.barry-callebaut.com/en-JO/vending/caprimo",
      },
    ],
    products: [
      {
        image:
          "https://cdn-productdbimages.barry-callebaut.com/sites/bc_productdb_images/files/styles/web_vend_bc-640x320/public/externals/8ce69fa0edfe901e3298c8cfbc6147ae.png",
        name: "Premium Choc 01 XD",
        description:
          "Satro Premium Choc 01 XDX offers a lovely hot chocolate that is extra creamy and extra chocolatey. It's based on milk, milk components and the finest cocoa powder.",
        logo: "https://www.barry-callebaut.com/themes/custom/bccom/dist/img/brand-logos/header-logo--satroqualitydrinks.jpg",
        logoUrl:
          "https://www.barry-callebaut.com/en-SE/vending/satro-quality-drinks",
      },
      {
        image:
          "https://cdn-productdbimages.barry-callebaut.com/sites/bc_productdb_images/files/styles/web_vend_bc-640x320/public/externals/8ce69fa0edfe901e3298c8cfbc6147ae.png",
        name: "Classic Choc 15",
        description:
          "Satro Classic Choc 15 is a well-balanced blend of milk, cocoa and sugar for a sweet, chocolatey hot chocolate drink.",
        logo: "https://www.barry-callebaut.com/themes/custom/bccom/dist/img/brand-logos/header-logo--satroqualitydrinks.jpg",
        logoUrl:
          "https://www.barry-callebaut.com/en-SE/vending/satro-quality-drinks",
      },
      {
        image:
          "https://cdn-productdbimages.barry-callebaut.com/sites/bc_productdb_images/files/styles/web_vend_bc-640x320/public/externals/8ce69fa0edfe901e3298c8cfbc6147ae.png",
        name: "Excellence Choc 16",
        description:
          "Satro Excellence Choc 16 is perfect for lovers of fine hot chocolate drinks. Based on the finest ingredients and it has a slightly sweet, creamy hot chocolate flavour.",
        logo: "https://www.barry-callebaut.com/themes/custom/bccom/dist/img/brand-logos/header-logo--satroqualitydrinks.jpg",
        logoUrl:
          "https://www.barry-callebaut.com/en-SE/vending/satro-quality-drinks",
      },
      {
        image:
          "https://cdn-productdbimages.barry-callebaut.com/sites/bc_productdb_images/files/styles/web_vend_bc-640x320/public/externals/6f45020f73ebe1be571f991fafa11543.jpg",
        name: "Caprimo Semi-Skimmed Milk Powder",
        description:
          "Caprimo semi-skimmed milk powder is sourced from sustainable farming, using renewable energy. This premium milk is rich, creamy and foamy from first to last sip. Add barista quality to your vending drinks with cappuccinos and lattes so delightful, you’ll think you’re in your favourite coffee shop.",
        logo: "https://www.barry-callebaut.com/themes/custom/bccom/dist/img/brand-logos/header-logo--caprimo.png",
        logoUrl: "https://www.barry-callebaut.com/en-JO/vending/caprimo",
      },
    ],
  },
};

const BrandDetails = () => {
  const { brandName } = useParams();
  const brand = brandData[brandName];
  const handleLogoClick = (logoUrl) => {
    window.open(logoUrl, "_blank");
  };
  return (
    <div>
      <div className="lg:w-1/2">
        {brand.image && <BrandImage image={brand.image} />}
        {brand.description && (
          <BrandDescription
            brandName={brand.name}
            description={brand.description}
          />
        )}
      </div>
      {brand.logos && brand.logos.length > 0 && (
        <div className="flex justify-center m-8">
          {brand.logos.map((logo, index) => (
            <img
              key={index}
              src={logo.image}
              alt={`Logo ${index + 1}`}
              className="h-12 w-auto mx-4"
              onClick={() => handleLogoClick(logo)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      )}
      {brand.products && brand.products.length > 0 && (
        <ProductCarousel products={brand.products} />
      )}
    </div>
  );
};

export default BrandDetails;
