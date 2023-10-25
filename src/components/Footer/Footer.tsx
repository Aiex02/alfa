export function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between text-white">
          <div>
            <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="/privacy-policy">Política de Privacidade</a>
              </li>
              <li>
                <a href="/terms-of-service">Termos de Serviço</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


