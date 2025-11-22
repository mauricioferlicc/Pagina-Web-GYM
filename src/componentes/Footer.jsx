import React from 'react';

function Footer() {
  const socialLinks = [
    { icon: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/5493815511470' },
    { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/' },
  ];

  const contactInfo = [
    { icon: 'map-marker-alt', text: 'San Miguel de Tucumán, Argentina' },
    { icon: 'phone', text: '+54 9 381 5511 470' },
    { icon: 'envelope', text: 'infogym@gmail.com' }
  ];

  return (
    <footer className="bg-black relative overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-4 pt-6 sm:px-6 lg:px-2 py-12 lg:py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-32 lg:gap-60 mb-8">

          <div className="text-left space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="bg-black border-2 border-white p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-2xl">
                <i className="fas fa-dumbbell text-white text-3xl"></i>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">
                GYM
              </h3>
            </div>

            <p className="text-white leading-relaxed text-base sm:text-lg md:text-xl font-medium">
              Tu destino para alcanzar tus metas fitness. Transformamos vidas a través del entrenamiento y la dedicación.
            </p>

            <div className="pt-2">
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">HORARIOS</h4>
              <div className="space-y-2">

                <p className="flex items-center gap-2 text-white leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                  <i className="far fa-clock text-white"></i>
                  <span>Lunes - Viernes : 6:00 - 00:00</span>
                </p>

                <p className="flex items-center gap-2 text-white leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                  <i className="far fa-clock text-white"></i>
                  <span>Sábados - Feriados : 9:00 - 21:00</span>
                </p>

                <p className="flex items-center gap-2 text-white leading-relaxed text-base sm:text-lg md:text-xl font-medium">
                  <i className="far fa-clock text-white"></i>
                  <span>Domingos : 16:00 - 21:00</span>
                </p>

              </div>
            </div>
          </div>

          <div className="text-left space-y-6">
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Contáctanos</h4>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group text-white leading-relaxed text-base sm:text-lg md:text-xl font-medium"
                >
                  <div className="bg-black border-2 border-white p-2 rounded-full">
                    <i className={`fas fa-${item.icon} text-white text-xl`}></i>
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-0">
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">SÍGUENOS</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black border-2 border-white p-3 rounded-full w-12 h-12 flex items-center justify-center"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <i className={`fab fa-${social.icon} text-white text-2xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t-2 border-white pt-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-white font-medium text-sm text-center lg:text-left order-2 lg:order-1">
              &copy; 2025 <span className="font-bold text-white">GYM</span>. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-white font-medium text-sm order-1 lg:order-2">
              <a
                href="https://wa.me/5493815511470"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
              >
                Política de Privacidad
              </a>
              <span className="hidden sm:inline text-white">|</span>
              <a
                href="https://wa.me/5493815511470"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
