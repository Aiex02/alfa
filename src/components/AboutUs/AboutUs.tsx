

export function AboutUs() {
  return (
    <div className="p-4 bg-black shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-white mb-4">Sobre Nós</h1>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-4">
          <h2 className="text-xl font-semibold text-white">Nossa História</h2>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum diam eu nisl
            eleifend, ac tristique sapien accumsan. Vivamus non consectetur lectus, a euismod felis.
            Nulla facilisi.
          </p>
        </div>

        <div className="w-full md:w-1/2 pl-4 mt-4 md:mt-0">
          <h2 className="text-xl font-semibold textwhite">Nossa Missão</h2>
          <p className="text-white mt-2">
            Aliquam erat volutpat. Curabitur sed libero nec justo scelerisque fermentum. Vestibulum
            efficitur eget massa ut posuere. Vivamus malesuada lacus ut eleifend tincidunt. Integer
            sollicitudin dignissim bibendum.
          </p>
        </div>
      </div>
    </div>
  );
};



