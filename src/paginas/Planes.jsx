function Planes() {

  const planes = [
    { tipo: 'MENSUAL', precio: '$------' },
    { tipo: 'TRIMESTRAL', precio: '$------' },
    { tipo: 'SEMESTRAL', precio: '$------' },
    { tipo: 'ANUAL', precio: '$------' }
  ];

  const clases = [
    {
      id: 1,
      nombre: 'PILATES',
      duracion: '1 hora',
      beneficios: 'Mejora la postura, aumenta la flexibilidad y fortalece el core. Reduce dolores musculares y mejora el control corporal.',
      queEs: 'Método de entrenamiento que combina respiración, control y precisión para trabajar fuerza y estabilidad. Ideal para quienes buscan tonificar sin impacto y mejorar su postura.',
      imagen: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      nombre: 'DANZA',
      duracion: '1 hora',
      beneficios: 'Mejora la coordinación, quema calorías, aumenta la elasticidad y eleva el ánimo.',
      queEs: 'Clase dinámica donde se combinan movimientos de baile con rutinas fitness. Perfecta para quienes buscan divertirse mientras entrenan y mejoran su condición física.',
      imagen: 'https://images.unsplash.com/photo-1520975922071-a232cbeff8f3?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      nombre: 'STEP',
      duracion: '1 hora',
      beneficios: 'Mejora la resistencia cardiovascular, tonifica piernas y glúteos, y ayuda a quemar calorías rápidamente.',
      queEs: 'Entrenamiento aeróbico realizado sobre una plataforma elevada (step), combinando subidas, bajadas y coreografías rítmicas. Ideal para mejorar la coordinación y la resistencia.',
      imagen: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      nombre: 'BOXEO',
      duracion: '1 hora',
      beneficios: 'Aumenta fuerza, agilidad y coordinación. Libera estrés y mejora la confianza personal.',
      queEs: 'Entrenamiento integral que combina técnica de golpes, desplazamientos y trabajo físico para mejorar fuerza, coordinación y resistencia.',
      imagen: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      nombre: 'ZUMBA',
      duracion: '1 hora',
      beneficios: 'Tonifica todo el cuerpo con bajo impacto. Libera estrés y eleva el ánimo. Mejora la coordinación y el ritmo.',
      queEs: 'Clase de baile fitness que mezcla ritmos latinos y movimientos aeróbicos para entrenar todo el cuerpo de manera divertida.',
      imagen: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      nombre: 'GAP',
      duracion: '1 hora',
      beneficios: 'Aporta firmeza muscular, mejora la postura y brinda mayor estabilidad.',
      queEs: 'Sesión enfocada en glúteos, abdominales y piernas con rutinas dinámicas y efectivas.',
      imagen: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      nombre: 'SPINNING',
      duracion: '1 hora',
      beneficios: 'Mejora la resistencia cardiovascular, quema calorías, fortalece el tren inferior y no genera impacto.',
      queEs: 'Sesión intensa de ciclismo indoor con cambios de ritmo y música motivadora. Ideal para liberar estrés y mejorar la condición física.',
      imagen: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      nombre: 'YOGA',
      duracion: '1 hora',
      beneficios: 'Reduce el estrés, mejora la flexibilidad, fortalece el cuerpo y aumenta la concentración.',
      queEs: 'Práctica que combina posturas físicas, respiración y relajación para equilibrar cuerpo y mente. Perfecta para quienes buscan bienestar físico y mental.',
      imagen: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop'
    }

  ];

  const handlePlanWhatsApp = (plan) => {
    const phoneNumber = '5493815511470';
    const message = `Hola, me gustaría contratar el plan ${plan.tipo}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleClaseWhatsApp = (clase) => {
    const phoneNumber = '5493815511470';
    const message = `Hola, me gustaría inscribirme en la clase de ${clase.nombre}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };


  return (
    <div className="min-h-screen bg-white">

      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1920&h=600&fit=crop
"
          alt="Contacto Gym El Templo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-14 sm:pt-12 md:pt-16">
          <div className="bg-black p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 shadow-2xl">
            <i className="fas fa-tags text-white text-4xl"></i> 
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 tracking-tight drop-shadow-2xl text-center">
            PLANES
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-white"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-8 sm:py-10 md:py-12">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">
              ELEGI TU PLAN IDEAL
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-black mx-auto mb-2 sm:mb-3 md:mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-9">
            {planes.map((plan, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 sm:p-5 text-center transition-all duration-500 hover:scale-105 shadow-xl border-4 border-black relative"
              >
                <div className="bg-black group-hover:bg-gray-800 p-3 sm:p-4 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors duration-300 shadow-lg">
                  <i className="fas fa-calendar-check text-white text-xl sm:text-2xl"></i>
                </div>
                
                <h3 className="text-2xl sm:text-xl md:text-2xl font-black text-black mb-4 sm:mb-5 tracking-wide">
                  {plan.tipo}
                </h3>
                
                <p className="text-3xl sm:text-4xl font-black text-black mb-6 sm:mb-8">
                  {plan.precio}
                </p>
            
                <button 
                  onClick={() => handlePlanWhatsApp(plan)}
                  className="group/btn relative block w-full bg-black text-white font-black py-3 sm:py-4 px-4 rounded-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl border-4 border-black text-center overflow-hidden text-sm sm:text-base"
                >
                  UNIRSE AL PLAN
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-black p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl">
                <i className="fas fa-fire text-white text-3xl sm:text-4xl"></i>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight">
              NUESTRAS CLASES
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-black mx-auto mb-4"></div>
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-5">

            {clases.map((clase) => (
              <div 
                key={clase.id}
                className="group bg-white border-8 border-black hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] cursor-pointer shadow-xl hover:shadow-2xl rounded-2xl"
              >
                <div className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0 flex sm:block items-center gap-4 sm:gap-0">
                    <div className="bg-black group-hover:bg-gray-800 p-3 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-xl transition-colors duration-300">
                      <i className="fas fa-dumbbell text-white text-xl sm:text-2xl"></i>
                    </div>
                    
                    <div className="sm:hidden">
                      <h3 className="text-xl font-black text-black tracking-wide">
                        {clase.nombre}
                      </h3>
                      <div className="flex items-center text-black font-black text-sm mt-1">
                        <i className="fas fa-clock mr-1.5 text-xs"></i>
                        {clase.duracion}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="hidden sm:flex sm:items-center sm:justify-between sm:mb-4">
                      <h3 className="text-2xl font-black text-black tracking-wide">
                        {clase.nombre}
                      </h3>
                      <div className="flex items-center text-black font-black text-lg ml-4">
                        <i className="fas fa-clock mr-2 text-lg"></i>
                        {clase.duracion}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                      <div className="flex-1 text-left bg-white rounded-2xl p-3 sm:p-4 border-2 border-black shadow-md">
                        <h4 className="font-black text-lg sm:text-lg mb-2 flex items-center">
                          <i className="fas fa-bolt mr-2 text-xs sm:text-sm"></i>
                          Beneficios
                        </h4>
                        <p className="text-gray-700 text-lg sm:text-lg leading-relaxed">{clase.beneficios}</p>
                      </div>

                      <div className="flex-1 text-left bg-white rounded-2xl p-3 sm:p-4 border-2 border-black shadow-md">
                        <h4 className="font-black text-lg sm:text-lg mb-2 flex items-center">
                          <i className="fas fa-bullseye mr-2 text-xs sm:text-sm"></i>
                          ¿Qué es?
                        </h4>
                        <p className="text-gray-700 text-lg sm:text-lg leading-relaxed">{clase.queEs}</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleClaseWhatsApp(clase)}
                      className="w-full bg-black hover:bg-gray-800 text-white font-black py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 group-hover:shadow-lg border-2 border-black text-sm sm:text-base"
                    >
                      INSCRIBIRME 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planes;