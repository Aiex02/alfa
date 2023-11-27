export function Services() {
  return (
    <div id="service" className="p-8 mx-auto ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center">Serviços</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Box 1 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">Vinculação ao Programa Procon Fumaça Preta no INEA:</h2>
            <p>
              Fazemos a vinculação da sua empresa no INEA no programa Procon Fumaça Preta. Para a vinculação da frota veicular a Diesel, é necessário encaminhar no Formulário de Vinculação de Empresas os seguintes documentos:
            </p>
            <ul className="list-disc list-inside">
              <li>Carta em papel timbrado da empresa solicitando a vinculação.</li>
              <li>Cópia do Contrato Social.</li>
              <li>Cópia do Cartão CNPJ da empresa.</li>
              <li>Planilha de Vinculação.</li>
            </ul>
            <p>As medições devem ocorrer obrigatoriamente a cada 4 meses.</p>
          </div>
          {/* Box 2 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">Documentos para a Realização do Teste de Opacidade:</h2>
            <p>
              O contratante tem que enviar no aceite da proposta a cópia do documento do veículo (CRLV).
            </p>
          </div>
          {/* Box 3 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">Procedimentos após o Teste de Opacidade:</h2>
            <ul className="list-disc list-inside">
              <li>Envio para o INEA do Certificado de Aprovação e do boletim com as medições de opacidade em até 72 horas úteis.</li>
              <li>Envio para o contratante do Certificado de Aprovação e do boletim com as medições.</li>
              <li>Fixação do adesivo do programa Procon Fumaça Preta no veículo aprovado.</li>
              <li>Análise e envio do Protocolo de entrega do boletim pelo INEA.</li>
            </ul>
          </div>
          {/* Box 4 */}
          <div className="bg-white p-4 mt-2 rounded-md shadow-2xl">
            <h2 className="text-xl font-semibold">Outras Informações Importantes:</h2>
            <ul className="list-disc list-inside">
              <li>O veículo deve estar no local, data e hora previamente definidos para o teste de opacidade.</li>
              <li>Qualquer mudança na hora, data e local deve ser avisada com 24 horas de antecedência através de três canais de comunicação (Email, Telefone e WhatsApp).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
