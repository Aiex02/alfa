import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center text-md-left">
        <div className="mb-2 md:mb-0">
          <h1 className="text-3xl font-bold text-white">*LOGO*</h1>
          <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4 items-center">
            <FaWhatsapp size={24} />
            <a href="#">WhatsApp</a>
          </div>
          <div className="flex space-x-4 items-center">
            <FaLinkedin size={24} />
            <a href="#">LinkedIn</a>
          </div>
          <div className="flex space-x-4 items-center">
            <FaInstagram size={24} />
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
