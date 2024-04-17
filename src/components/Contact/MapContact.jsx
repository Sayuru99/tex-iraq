
const MapContact = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.377989227148!2d43.97632687581019!3d36.18168807242986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722c322eee95f%3A0x9ad17e6b21d0bcb5!2sJustice%20Tower!5e0!3m2!1sen!2slk!4v1713350800423!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapContact;
