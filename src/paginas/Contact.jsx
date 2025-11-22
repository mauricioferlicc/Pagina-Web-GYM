function Contact() {
  return (
    <div className="min-h-screen bg-white">

      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1920&h=600&fit=crop"
          alt="Contacto Gym El Templo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-14 sm:pt-12 md:pt-16">
          <div className="bg-black p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 shadow-2xl">
            <i className="fas fa-envelope text-white text-2xl sm:text-3xl md:text-4xl"></i>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 tracking-tight drop-shadow-2xl text-center">
            CONTÁCTANOS
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-white"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          <div className="bg-black rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-black">
            <div className="text-center mb-6">
              <div className="bg-white p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-5 shadow-xl">
                <i className="fas fa-info-circle text-black text-2xl sm:text-3xl"></i>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                INFORMACIÓN
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-white mx-auto mt-2"></div>
            </div>

            <div className="flex flex-col gap-4">

              <div className="group bg-white rounded-2xl p-4 shadow-xl border-4 border-white hover:scale-105 transition-all duration-500">
                <div className="flex gap-5">
                  <div className="bg-black p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg">
                    <i className="fas fa-map-marker-alt text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-black mb-1 text-xl sm:text-2xl">Dirección</h3>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Av. Principal 123</p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">San Miguel de Tucumán</p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Tucumán, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-4 shadow-xl border-4 border-white hover:scale-105 transition-all duration-500">
                <div className="flex gap-5">
                  <div className="bg-black p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg">
                    <i className="fas fa-phone text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-black mb-1 text-xl sm:text-2xl">WhatsApp</h3>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">+54 9 381 5511 470</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-4 shadow-xl border-4 border-white hover:scale-105 transition-all duration-500">
                <div className="flex gap-5">
                  <div className="bg-black p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg">
                    <i className="fas fa-envelope text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-black mb-1 text-xl sm:text-2xl">Email</h3>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">infogym@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-4 shadow-xl border-4 border-white hover:scale-105 transition-all duration-500">
                <div className="flex gap-5">
                  <div className="bg-black p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg">
                    <i className="fas fa-clock text-white text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-black mb-1 text-xl sm:text-2xl">Horarios</h3>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Lunes a Viernes: 6:00 - 22:00</p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Sábados: 8:00 - 20:00</p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">Domingos: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-black">
              <div className="text-center mb-6">
                <div className="bg-black p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-5 shadow-xl">
                  <i className="fas fa-map-marked-alt text-white text-2xl sm:text-3xl"></i>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-black">ENCUÉNTRANOS</h2>
                <div className="w-20 sm:w-24 h-1 bg-black mx-auto mt-2"></div>
              </div>

              <div className="w-full h-64 sm:h-72 md:h-60 rounded-2xl overflow-hidden border-4 border-black shadow-xl">
                <iframe
                  title="Mapa de ubicación del gimnasio"
                  src="https://www.google.com/maps/embed?pb=!4v1763591362214!6m8!1m7!1sSZd3TIJuTPrSTarjdT23zg!2m2!1d-26.81603716183611!2d-65.21561811345269!3f81.471634!4f0!5f0.7820865974627469"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                ></iframe>

              </div>
            </div>

            <div className="bg-black rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-black">
              <div className="text-center mb-6">
                <div className="bg-white p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-5 shadow-xl">
                  <i className="fas fa-share-nodes text-black text-2xl sm:text-3xl"></i>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">NUESTRAS REDES</h3>
                <div className="w-20 sm:w-24 h-1 bg-white mx-auto mt-2"></div>
              </div>

              <div className="flex justify-center gap-5">
                {[
                  { icon: 'whatsapp', href: 'https://wa.me/5493815511470' },
                  { icon: 'instagram', href: 'https://instagram.com/' }
                ].map((item) => (
                  <a
                    key={item.icon}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl border-2 border-white"
                  >
                    <i className={`fab fa-${item.icon} text-black text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;