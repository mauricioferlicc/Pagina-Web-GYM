import React, { useState, useEffect } from 'react';

function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
    title: "BIENVENIDO AL GYM"
  },
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=600&fit=crop",
    title: "ALCANZÁ TUS METAS"
  },
  {
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&h=600&fit=crop",
    title: "ENTRENAMIENTO FUNCIONAL"
  },
  {
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1200&h=600&fit=crop",
    title: "FUERZA Y DISCIPLINA"
  },
  {
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=1200&h=600&fit=crop",
    title: "AMBIENTE PROFESIONAL"
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      
      <div className="w-full relative">
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 md:w-16 md:h-16 shadow-2xl transition-all duration-300 z-20 hover:scale-110 flex items-center justify-center focus:outline-none"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-black text-lg md:text-2xl"></i>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 md:w-16 md:h-16 shadow-2xl transition-all duration-300 z-20 hover:scale-110 flex items-center justify-center focus:outline-none"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-black text-lg md:text-2xl"></i>
        </button>

        <div className="relative h-[310px] md:h-[600px] lg:h-[739px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-center pb-10 md:pb-20">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white text-center px-4 drop-shadow-2xl tracking-tight">
                  {slide.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 md:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8 md:w-12'
                  : 'bg-white/40 hover:bg-white/70 w-2 md:w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center pt-8 md:pt-10 text-black mb-4 md:mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">HORARIOS</h1>
          <div className="w-20 md:w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="bg-black rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 lg:p-10 mb-8 md:mb-10 border-2 border-gray-800 relative overflow-hidden">
          <div className="grid md:grid-cols-2 relative z-10">
            <div className="md:col-span-2">
              <div className="flex items-center justify-center mb-4 md:mb-6 pb-4 md:pb-6 border-b-4 border-white">
                <div className="bg-white p-3 md:p-4 rounded-full mr-3 md:mr-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
                  <i className="fas fa-clock text-black text-2xl md:text-3xl"></i>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  SALÓN DE PESAS
                </h3>
              </div>
              
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border-2 md:border-4 border-black transition-all duration-500 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-300 hover:border-black transition-all duration-300 shadow-md hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                      <span className="font-black text-gray-900 text-lg md:text-xl">Lunes a Viernes</span>
                      <span className="text-gray-700 font-bold text-xl md:text-2xl tracking-tight">6:00 - 00:00</span>
                    </div>
                    <div className="mt-3 pt-3 border-t-2 border-gray-300">
                      <p className="text-xs md:text-sm text-gray-600 font-semibold italic">
                        Con entrenadores todos los días
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-300 hover:border-black transition-all duration-300 shadow-md hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                      <span className="font-black text-gray-900 text-lg md:text-xl">Sábados y Feriados</span>
                      <span className="text-gray-700 font-bold text-xl md:text-2xl tracking-tight">9:00 - 21:00</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                      <span className="font-black text-gray-900 text-lg md:text-xl">Domingos</span>
                      <span className="text-gray-700 font-bold text-xl md:text-2xl tracking-tight">16:00 - 21:00</span>
                    </div>
                    <div className="mt-3 pt-3 border-t-2 border-gray-300">
                      <p className="text-xs md:text-sm text-gray-600 font-semibold italic">
                        Sin entrenadores
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/Mauricio Fernández Licciardi-CV.pdf';
                      link.download = 'Cronograma-Pesas-Gym';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="group/btn relative w-full bg-black text-white font-black py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl border-2 md:border-4 border-black overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-black transition-colors duration-300 text-sm md:text-lg">
                      <i className="fas fa-download"></i>
                      <span className="hidden sm:inline">DESCARGAR CRONOGRAMA DE PESAS</span>
                      <span className="sm:hidden">DESCARGAR CRONOGRAMA</span>
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center justify-center mb-4 md:mb-6 pb-4 md:pb-6 border-b-4 border-white mt-8 md:mt-12">
                <div className="bg-white p-3 md:p-4 rounded-full mr-3 md:mr-4 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
                  <i className="fas fa-calendar-alt text-black text-2xl md:text-3xl"></i>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  CLASES
                </h3>
              </div>
              
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border-2 md:border-4 border-black max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-300 hover:border-black transition-all duration-300 shadow-md hover:shadow-lg">
                    <p className="font-black text-gray-900 mb-4 md:mb-5 text-lg md:text-xl border-b-2 border-gray-300 pb-3">
                      Lunes / Miércoles / Viernes
                    </p>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">08.00HS</span>
                        <span className="font-black text-black text-base md:text-lg">PILATES</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">14.30HS</span>
                        <span className="font-black text-black text-base md:text-lg">DANZA</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">20.00HS</span>
                        <span className="font-black text-black text-base md:text-lg">STEP</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">21.00HS</span>
                        <span className="font-black text-black text-base md:text-lg">BOXEO</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-300 hover:border-black transition-all duration-300 shadow-md hover:shadow-lg">
                    <p className="font-black text-gray-900 mb-4 md:mb-5 text-lg md:text-xl border-b-2 border-gray-300 pb-3">
                      Martes / Jueves
                    </p>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">15.00HS</span>
                        <span className="font-black text-black text-base md:text-lg">SPINNING</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">17.00HS</span>
                        <span className="font-black text-black text-base md:text-lg">ZUMBA</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">19.00HS</span>
                        <span className="font-black text-black text-base md:text-lg">GAP</span>
                      </div>
                      <div className="flex justify-between items-center p-2 md:p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-gray-700 font-bold text-sm md:text-base">21.00HS</span>
                        <span className="font-black text-black text-base md:text-lg">YOGA</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8">
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/Mauricio Fernández Licciardi-CV.pdf';
                      link.download = 'Cronograma-Clases-Gym';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="group/btn relative w-full bg-black text-white font-black py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl border-2 md:border-4 border-black overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-black transition-colors duration-300 text-sm md:text-lg">
                      <i className="fas fa-download"></i>
                      <span className="hidden sm:inline">DESCARGAR CRONOGRAMA DE CLASES</span>
                      <span className="sm:hidden">DESCARGAR CRONOGRAMA</span>
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;