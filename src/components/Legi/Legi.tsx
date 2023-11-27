export function Legi() {
  return (
    <div id="legi" className="relative overflow-hidden bg-center bg-cover bg-no-repeat bg-image1 h-screen">
      <div className="absolute inset-0 bg-primary bg-opacity-10 backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mt-4">Legislação Aplicada</h1>
          <div className="text-left mt-6 p-6 rounded-lg backdrop-blur-md">
            <h2 className="text-xl font-semibold">Legislações do Procon Fumaça Preta:</h2>
            <ul className="list-disc list-inside">
              <li>Resolução CONAMA n° 418/09</li>
              <li>Resolução CONEMA n° 58/13</li>
              <li>Resolução CONEMA n° 70</li>
              <li>NOP-INEA-13.R-1</li>
              <li>NOP-INEA-14</li>
              <li>DZ 582. R-1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
