import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
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
       <div className="text-white space-y-3">
  <h3 className="text-lg font-semibold">Contact</h3>

  {/* Email */}
  <div className="flex items-center gap-3">
    <Mail className="w-5 h-5 text-gray-400" />
    <a 
      href="mailto:ruleyourmarket@eelaagroup.com"
      className="hover:text-gray-300"
    >
      ruleyourmarket@eelaagroup.com
    </a>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-3">
    <Phone className="w-5 h-5 text-gray-400" />
    <a 
      href="tel:+918300271850"
      className="hover:text-gray-300"
    >
      +91 83002 71850
    </a>
  </div>

  {/* Location */}
  <div className="flex items-center gap-3">
    <MapPin className="w-5 h-5 text-gray-400" />
    <span>Dharmapuri, TamilNadu, India</span>
  </div>
</div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            
             <a href="https://instagram.com/eelaagroup?igsh=ZG15ejB5bHpha2l0" target="_blank">
    <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
  </a>

  <a href="https://www.facebook.com/profile.php?id=61569106396079" target="_blank">
    <FaFacebook className="w-6 h-6 text-white hover:text-blue-500 transition" />
  </a>

  <a href="https://wa.me/8300271850" target="_blank">
    <FaWhatsapp className="w-6 h-6 text-white hover:text-green-500 transition" />
  </a>
          </div>
        </div>

      </div>

      
    </footer>
  );
}