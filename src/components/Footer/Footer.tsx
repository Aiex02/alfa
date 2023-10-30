import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center text-md-left">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-white">*LOGO*</h1>
          <p className="text-xs">&copy; 2023 Seu Site. Todos os direitos reservados.</p>
        </div>
        <div className="text-sm">
          <div className="flex space-x-4 items-center mb-2">
            <div>
              <h2 className="font-semibold text-white mb-1">Setor Operacional:</h2>
              <p className="mb-1">+55 (22) 99878-0228</p>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-1">Setor Comercial:</h2>
              <p className="mb-1">+55 (22) 99878-0228</p>
            </div>
          </div>
          <div className="text-xs space-x-4 items-center">
            <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <FaMapMarkerAlt size={15} />
              <span>Av.Atlântica, nº 2650, Cavaleiros - Macaé/RJ</span>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4 items-center">
            <FaWhatsapp size={24} />
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
