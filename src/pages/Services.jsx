import ServiceCard from "../components/Services/ServiceCard";

export default function Services() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
          <ServiceCard 
            brandName="ConsulTEx"
            description="Strategic business development consultancy and outsourcing services."
            buttonText="SAS - Authorized Toyota Dealer"
          />
          <ServiceCard 
            brandName="VendTEx"
            description="Vending machine distribution, operation, and support for small businesses."
            buttonText="SAS - Authorized Toyota Dealer"
          />
          <ServiceCard 
            brandName="SofTEx"
            description="Innovative Software development and digital solutions for diverse business needs."
            buttonText="SAS - Authorized Toyota Dealer"
          />
          <ServiceCard 
            brandName="TradTEx"
            description="Specializing in general trading and customers special needs."
            buttonText="SAS - Authorized Toyota Dealer"
          />
        </div>
      </div>
    </div>
  );
}
