function Tienda() {
  const productos = [
    {
      id: 1,
      nombre: "Remera Gym",
      precio: 16000,
      imagen: "https://con-actitud.com.ar/wp-content/uploads/2023/07/4-2.jpg",
    },
    {
      id: 2,
      nombre: "Musculosa Deportiva",
      precio: 14000,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_910761-MLU84707763495_052025-O.webp",
    },
    {
      id: 3,
      nombre: "Jogger / Pantalón Deportivo",
      precio: 22000,
      imagen: "https://cdn.shopify.com/s/files/1/0156/6146/files/GFXLIFTINGBADDIEJOGGERGSBlackB9A4Q-BB2J-1660_2048x.jpg?v=1716981402",
    }
  ];

  const handleWhatsApp = (producto) => {
    const mensaje = `Hola! Estoy interesado en comprar: ${producto.nombre} - $${producto.precio.toLocaleString()}`;
    const url = `https://wa.me/5493815511470?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">

      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e" 
          alt="Planes Gym El Templo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-14 sm:pt-12 md:pt-16">
          <div className="bg-black p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 shadow-2xl">
            <i className="fas fa-shopping-bag text-white text-3xl sm:text-4xl"></i> 
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 sm:mb-3 tracking-tight drop-shadow-2xl text-center">
            TIENDA
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-white mx-auto"></div>
        </div>
      </div>

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-4 md:gap-6 lg:gap-8">
            {productos.map(producto => (
              <div 
                key={producto.id}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl border-2 sm:border-3 md:border-4 border-black hover:border-gray-400 transition-all duration-500 hover:scale-105"
              >
                <div className="relative h-65 sm:h-80 md:h-96 lg:h-[390px] overflow-hidden">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-black mb-2 line-clamp-2">{producto.nombre}</h3>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-black">${producto.precio.toLocaleString()}</span>
                  </div>
                  
                  <button
                    onClick={() => handleWhatsApp(producto)}
                    className="block w-full bg-black text-white py-3 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl font-black text-sm sm:text-sm md:text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-md md:shadow-lg border-2 border-black text-center cursor-pointer"
                  >
                    <i className="fab fa-whatsapp mr-1 sm:mr-2"></i>
                    COMPRAR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-full w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-2xl">
              <i className="fas fa-credit-card text-black text-lg sm:text-xl md:text-2xl lg:text-3xl"></i>
            </div>
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">
              FORMAS DE PAGO
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-white mx-auto mb-3 sm:mb-4"></div>
            <p className="text-white leading-relaxed text-base sm:text-lg md:text-xl font-medium px-2">
              Aceptamos efectivo, transferencia bancaria y Mercado Pago
            </p>
          </div>
          
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white/20">
              <i className="fas fa-money-bill-wave text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl"></i>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white/20">
              <i className="fas fa-university text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl"></i>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white/20">
              <i className="fas fa-wallet text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border-2 sm:border-3 md:border-4 border-black shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-black to-gray-900 p-2 sm:p-3 md:p-4 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                <i className="fas fa-truck text-white text-sm sm:text-lg md:text-xl"></i>
              </div>
              <p className="text-gray-800 font-bold text-base sm:text-lg md:text-xl px-2 leading-relaxed">
                Si te encontrás en otra provincia o país y deseás adquirir alguna de nuestras prendas deportivas, comunicate con nosotros para realizar la compra y el envío.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tienda;