import { useState, useEffect } from 'react';

function SobreNosotros() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const teamMembers = [
    {
      nombre: "Carlos Martínez",
      especialidad: "Entrenador Personal",
      descripcion: "Especialista en musculación y nutrición deportiva, enfocado en mejorar fuerza, salud y rendimiento general.",
      imagen: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop"
    },
    {
      nombre: "Laura Fernández",
      especialidad: "Instructora de Spinning",
      descripcion: "Certificada en clases grupales y entrenamiento cardiovascular, enfocada en mejorar resistencia y motivación.",
      imagen: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop"
    },
    {
      nombre: "Miguel Ángel Torres",
      especialidad: "Coach de Boxeo",
      descripcion: "Entrenador de boxeo especializado en técnica, defensa y acondicionamiento físico para mejorar fuerza y agilidad.",
      imagen: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop"
    },
    {
      nombre: "Sofia Ramírez",
      especialidad: "Instructora de Zumba",
      descripcion: "Especialista en fitness dance y rutinas aeróbicas dinámicas que ayudan a mejorar coordinación, energía y bienestar.",
      imagen: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop"
    }
  ];

  const testimonials = [
    {
      comentario: "El mejor gimnasio de la zona. Los entrenadores son muy profesionales y el ambiente es increíble. Logré mis objetivos en tiempo récord.",
      autor: "Juan Pérez"
    },
    {
      comentario: "Las clases de spinning son adictivas. Excelente atención y las instalaciones están impecables. Totalmente recomendable.",
      autor: "María González"
    },
    {
      comentario: "Llevo 2 años entrenando aquí y no lo cambio por nada. El equipo de profesionales es de primera y siempre te motivan a dar lo mejor.",
      autor: "Roberto Silva"
    }
  ];

  useEffect(() => {
    const itemsPerSlide = isMobile ? 1 : 2;
    const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 10000);
    return () => clearInterval(timer);
  }, [teamMembers.length, isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 2;
    const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    const itemsPerSlide = isMobile ? 1 : 2;
    const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">

      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1920&h=600&fit=crop" 
          alt="Planes Gym El Templo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-14 sm:pt-12 md:pt-16">
          <div className="bg-black p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 shadow-2xl">
             <i className="fas fa-users text-white text-2xl sm:text-3xl md:text-4xl"></i>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 sm:mb-3 tracking-tight drop-shadow-2xl text-center">
            ¿QUIÉNES SOMOS?
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-white mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-4">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-3 md:gap-4">
                  <div className="bg-black p-2 sm:p-3 md:p-4 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center shadow-xl flex-shrink-0">
                    <i className="fas fa-dumbbell text-white text-lg sm:text-2xl md:text-3xl"></i>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight">
                    NUESTRA HISTORIA
                  </h2>
                </div>
              <div className="w-20 sm:w-24 md:w-32 h-1 bg-black mx-auto"></div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                Gym nació hace más de 15 años con una visión clara: crear un espacio donde 
                cada persona pueda alcanzar su máximo potencial físico y mental. Lo que comenzó como 
                un pequeño gimnasio de barrio se ha convertido en uno de los centros de entrenamiento 
                más completos y modernos de la ciudad.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                Nuestro compromiso es ofrecer no solo equipamiento de primera calidad, sino también 
                un equipo de profesionales capacitados que te acompañen en cada paso de tu transformación. 
                Creemos que el fitness es mucho más que levantar pesas o correr en una cinta: es un 
                estilo de vida que transforma cuerpo y mente.
              </p>
            </div>
            
            <div className="relative mt-0 sm:mt-8 lg:mt-0">
              <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-3 md:border-4 border-black">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop" 
                  alt="Instalaciones Gym El Templo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 sm:py-10 md:py-12 bg-black rounded-xl sm:rounded-2xl md:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-16 shadow-2xl relative overflow-hidden my-6 sm:my-8 md:my-0">
          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <div className="bg-white p-2 sm:p-3 md:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl">
                  <i className="fas fa-heart text-black text-2xl sm:text-3xl md:text-4xl"></i>
                </div>
              </div>
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">
                NUESTROS VALORES
              </h2>
              <div className="w-20 sm:w-24 md:w-32 h-1 bg-white mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border-2 sm:border-3 md:border-4 border-white hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-2 sm:mb-3 text-center">
                  COMPROMISO
                </h3>
                <p className="text-gray-700 text-center leading-relaxed font-medium text-base sm:text-lg md:text-xl">
                  Estamos comprometidos con tu éxito y trabajamos cada día para brindarte las mejores herramientas y el apoyo que necesitas.
                </p>
              </div>

              <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border-2 sm:border-3 md:border-4 border-white hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-2 sm:mb-3 text-center">
                  EXCELENCIA
                </h3>
                <p className="text-gray-700 text-center leading-relaxed font-medium text-base sm:text-lg md:text-xl">
                  La calidad es nuestra prioridad. Desde nuestras instalaciones hasta nuestro personal, todo está pensado para ofrecerte lo mejor.
                </p>
              </div>

              <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border-2 sm:border-3 md:border-4 border-white hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-2 sm:mb-3 text-center">
                  COMUNIDAD
                </h3>
                <p className="text-gray-700 text-center leading-relaxed font-medium text-base sm:text-lg md:text-xl">
                  Somos una familia que se apoya mutuamente. Aquí encontrarás motivación, amistad y un ambiente positivo para crecer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 sm:py-12 md:py-16 lg:py-15">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <div className="bg-black p-2 sm:p-3 md:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl">
                <i className="fas fa-user-friends text-white text-2xl sm:text-3xl md:text-4xl"></i>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">
              NUESTRO EQUIPO
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-black mx-auto mb-2 sm:mb-3 md:mb-4"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl font-semibold max-w-3xl mx-auto px-4">
              Profesionales apasionados dedicados a ayudarte a alcanzar tus objetivos
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {isMobile ? (
                  teamMembers.map((member, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-2 sm:border-3 md:border-4 border-black hover:border-gray-700 transition-all duration-500 group max-w-md mx-auto">
                        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 overflow-hidden">
                          <img 
                            src={member.imagen} 
                            alt={member.nombre}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-2 tracking-tight">
                            {member.nombre}
                          </h3>
                          <p className="text-gray-600 font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg border-b-2 border-gray-300 pb-2 inline-block">
                            {member.especialidad}
                          </p>
                          <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                            {member.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  Array.from({ length: Math.ceil(teamMembers.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex gap-3 sm:gap-4 px-2 sm:px-4">
                      {teamMembers.slice(slideIndex * 2, slideIndex * 2 + 2).map((member, index) => (
                        <div key={index} className="w-1/2 flex-shrink-0">
                          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border-2 sm:border-3 md:border-4 border-black hover:border-gray-700 transition-all duration-500 group">
                            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-200 overflow-hidden">
                              <img 
                                src={member.imagen} 
                                alt={member.nombre}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            <div className="p-4 sm:p-5 md:p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-2 tracking-tight">
                                {member.nombre}
                              </h3>
                              <p className="text-gray-600 font-bold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg border-b-2 border-gray-300 pb-2 inline-block">
                                {member.especialidad}
                              </p>
                              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base font-medium">
                                {member.descripcion}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute -left-1 sm:-left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-white/95 border-2 border-black rounded-full p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-xl transition-all duration-300 z-10 hover:scale-110"
              aria-label="Anterior"
            >
              <i className="fas fa-chevron-left text-black text-base sm:text-lg md:text-xl lg:text-2xl"></i>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute -right-1 sm:-right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-white/95 border-2 border-black rounded-full p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-xl transition-all duration-300 z-10 hover:scale-110"
              aria-label="Siguiente"
            >
              <i className="fas fa-chevron-right text-black text-base sm:text-lg md:text-xl lg:text-2xl"></i>
            </button>

            <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 gap-2 sm:gap-2.5 md:gap-3">
              {Array.from({ length: Math.ceil(teamMembers.length / (isMobile ? 1 : 2)) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 sm:h-2.5 md:h-3.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-black w-8 sm:w-10 md:w-14'
                      : 'bg-gray-400 hover:bg-gray-600 w-2 sm:w-2.5 md:w-3.5'
                  }`}
                  aria-label={`Ir a miembro ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="py-4 sm:py-12 md:py-16 lg:py-2">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
              <div className="bg-black p-2 sm:p-3 md:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shadow-xl">
                <i className="fas fa-quote-left text-white text-2xl sm:text-3xl md:text-4xl"></i>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">
              TESTIMONIOS
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-black mx-auto mb-2 sm:mb-3 md:mb-4"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl font-semibold max-w-3xl mx-auto px-4">
              Lo que dicen nuestros miembros sobre su experiencia
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-black rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center text-center border-2 sm:border-3 md:border-4 border-black relative overflow-hidden min-h-[240px] sm:min-h-[280px] md:min-h-[300px]">
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 right-10 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-white rounded-full blur-3xl"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="mb-3 sm:mb-4 md:mb-6">
                          <i className="fas fa-quote-left text-white text-2xl sm:text-3xl md:text-4xl opacity-20"></i>
                        </div>
                        <p className="text-white text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6 leading-relaxed font-medium max-w-3xl">
                          {testimonial.comentario}
                        </p>
                        <div className="flex items-center justify-center">
                          <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-white/50 mr-2 sm:mr-3 md:mr-4"></div>
                          <p className="text-white font-black text-sm sm:text-base md:text-lg tracking-wide">
                            {testimonial.autor}
                          </p>
                          <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-white/50 ml-2 sm:ml-3 md:ml-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute -left-1 sm:-left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-white/95 border-2 border-black rounded-full p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-xl transition-all duration-300 z-10 hover:scale-110"
              aria-label="Testimonio anterior"
            >
              <i className="fas fa-chevron-left text-black text-base sm:text-lg md:text-xl lg:text-2xl"></i>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute -right-1 sm:-right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-white/95 border-2 border-black rounded-full p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-xl transition-all duration-300 z-10 hover:scale-110"
              aria-label="Siguiente testimonio"
            >
              <i className="fas fa-chevron-right text-black text-base sm:text-lg md:text-xl lg:text-2xl"></i>
            </button>

            <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 gap-2 sm:gap-2.5 md:gap-3 lg:pb-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`h-2 sm:h-2.5 md:h-3.5 rounded-full transition-all duration-300 ${
                    index === testimonialIndex
                      ? 'bg-black w-8 sm:w-10 md:w-14'
                      : 'bg-gray-400 hover:bg-gray-600 w-2 sm:w-2.5 md:w-3.5'
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;