export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-10 pb-6 bg-black">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-xl font-bold mb-3">EELA GROUP</h2>
          <p className="text-gray-400">
            We build high-converting digital systems that help businesses scale faster.
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
            <a href="#">LinkedIn</a>
            <a href="https://www.instagram.com/eelaagroup/">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61569106396079">Facebook</a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} EELA GROUP. All rights reserved.
      </div>
    </footer>
  );
}