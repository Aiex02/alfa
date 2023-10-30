export function Tech() {
  return (
    <div className="text-center p-4 bg-black mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-white font-bold mt-4">Tecnologias</h1>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum diam eu nisl eleifend,
          ac tristique sapien accumsan. Vivamus non consectetur lectus, a euismod felis. Nulla facilisi.
          Phasellus id vehicula dui. Integer pretium mi non justo tristique dapibus. Fusce viverra, justo
          eget feugiat cursus, ex nisl interdum purus, ac laoreet neque tellus ut est. Vestibulum ac elit
          auctor, sodales purus in, volutpat metus.
        </p>
        <div className="mt-6">
          <iframe
            width="70%"
            height="500"
            src="https://www.youtube.com/embed/EbFA4RQrc0w"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
