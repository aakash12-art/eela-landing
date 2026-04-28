import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-10 pb-6 bg-black">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-3">EELA GROUP</h2>
          <p className="text-gray-400">
            We build high-converting digital systems that help businesses scale faster.<br />
            MSME : UDAYAM-TN05-0092951
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">📧 ruleyourmarket@eelaagroup.com</p>
          <p className="text-gray-400">📞 +91 83002 71850</p>
          <p className="text-gray-400">📍 Dharmapuri, TamilNadu, India</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            
             <a href="https://instagram.com" target="_blank">
    <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
  </a>

  <a href="https://facebook.com" target="_blank">
    <FaFacebook className="w-6 h-6 text-white hover:text-blue-500 transition" />
  </a>

  <a href="https://wa.me/1234567890" target="_blank">
    <FaWhatsapp className="w-6 h-6 text-white hover:text-green-500 transition" />
  </a>
          </div>
        </div>

      </div>

      
    </footer>
  );
}