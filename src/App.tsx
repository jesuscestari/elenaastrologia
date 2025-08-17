// removed default styles to avoid conflicts with Tailwind
import { useCallback, useState } from 'react'
import { LazyMotion, domMax, m } from 'framer-motion'
import { fadeInUp, staggerContainer, fadeIn, cardItem, slideInLeft, slideInRight, zoomSubtle } from './animations'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight, FiPlus, FiMinus, FiPhone } from 'react-icons/fi'
import { GiCrystalBall, GiPalm, GiSpiralShell, GiPathDistance, GiHearts, GiCandles } from 'react-icons/gi'

const WHATSAPP_LINK = 'https://wa.me/5491125376233?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20sesiones'
const INSTAGRAM_LINK = 'https://www.instagram.com/'

// Assets
import image2 from './assets/2.webp'
import image3 from './assets/3.webp'
import image4 from './assets/4.webp'
import image5 from './assets/5.webp'
import image6 from './assets/6.webp'

function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      <span className="sr-only">WhatsApp</span>
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-900/40 ring-1 ring-white/20 transition hover:bg-emerald-400">
        <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
      <span className="pointer-events-none absolute -inset-2 rounded-full bg-emerald-500/20 opacity-0 blur-xl transition group-hover:opacity-100" />
      </span>
    </a>
  )
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between container-px py-3">
        <a href="#hero" className="text-xl font-semibold tracking-tight font-display text-zinc-900">Elena Astrologa</a>
        <ul className="hidden gap-6 md:flex text-sm text-zinc-600">
          <li><a href="#servicios" className="hover:text-zinc-900">Servicios</a></li>
          <li><a href="#sobre-mi" className="hover:text-zinc-900">Sobre mí</a></li>
          <li><a href="#galeria" className="hover:text-zinc-900">Galería</a></li>
          <li><a href="#testimonios" className="hover:text-zinc-900">Testimonios</a></li>
          <li><a href="#faq" className="hover:text-zinc-900">FAQ</a></li>
          <li><a href="#contacto" className="hover:text-zinc-900">Contacto</a></li>
        </ul>
        
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28 overflow-x-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src={image5} 
          alt="Fondo místico" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 aurora" />
      <div className="absolute inset-0 -z-10 bg-white/20" />
      <div className="mx-auto max-w-6xl container-px py-20">
        <m.div
          className="mx-auto max-w-3xl text-center bg-white/85 backdrop-blur p-6 md:p-8 rounded-2xl border border-zinc-200 shadow-lg shadow-black/5"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <m.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-normal tracking-tight text-zinc-900">Elena Astrologa</m.h1>
          <m.p variants={fadeInUp} className="mt-5 text-zinc-700">Tarot, Astrología y Videncia.</m.p>
          <m.p variants={fadeInUp} className="mt-2 text-zinc-700">Lectura de manos · Ayuda espiritual y laboral · Abre caminos · Unión de parejas</m.p>
          <m.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Reserva una sesión</a>
            <a href="#servicios" className="btn-ghost">Ver servicios</a>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}

function Servicios() {
  const items = [
    {
      title: 'Astrología y Videncia',
      desc: 'Orientación clara para tomar decisiones y encontrar paz interior.',
      icon: GiCrystalBall,
    },
    {
      title: 'Lectura de manos',
      desc: 'Mensajes a través de quiromancia para comprender tu camino.',
      icon: GiPalm,
    },
    {
      title: 'Ayuda espiritual y laboral',
      desc: 'Acompañamiento para desbloquear situaciones y avanzar con confianza.',
      icon: GiSpiralShell,
    },
    {
      title: 'Abre caminos',
      desc: 'Rituales y guía para destrabar y atraer nuevas oportunidades.',
      icon: GiPathDistance,
    },
    {
      title: 'Unión de parejas',
      desc: 'Trabajo energético y orientación para armonizar vínculos afectivos.',
      icon: GiHearts,
    },
    {
      title: 'Limpieza energética',
      desc: 'Rituales de purificación para eliminar energías negativas y renovar tu aura.',
      icon: GiCandles,
    },
  ]
  return (
    <section id="servicios" className="mx-auto max-w-6xl container-px py-20">
      <m.div className="mx-auto max-w-2xl text-center" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={staggerContainer}>
        <m.h2 variants={fadeInUp} className="font-display text-4xl tracking-tight text-zinc-900">Servicios</m.h2>
        <m.p variants={fadeInUp} className="mt-3 text-zinc-600">Sesiones online por videollamada. Grabación incluida.</m.p>
      </m.div>
      <m.div className="mt-10 grid gap-6 md:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={staggerContainer}>
        {items.map((s) => {
          const IconComponent = s.icon
          return (
            <m.div key={s.title} className="card p-6" variants={cardItem}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-purple-600">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{s.title}</h3>
              </div>
              <p className="text-sm text-zinc-600">{s.desc}</p>
            </m.div>
          )
        })}
      </m.div>
    </section>
  )
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl container-px py-20">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <m.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={staggerContainer}>
          <m.h2 variants={fadeInUp} className="font-display text-4xl tracking-tight text-zinc-900">Sobre mí</m.h2>
          <m.p variants={fadeInUp} className="mt-3 text-zinc-600">
            Soy Elena, astróloga y vidente. Trabajo con enfoque humano y respetuoso para ayudarte a
            encontrar claridad, alivio y soluciones concretas en temas personales, laborales y afectivos.
          </m.p>
          <m.ul variants={fadeInUp} className="mt-4 space-y-2 text-zinc-600 text-sm">
            <li>• Sesiones privadas y talleres grupales</li>
            <li>• Atención cálida, directa y honesta</li>
          </m.ul>
        </m.div>
        <m.div className="relative h-64 rounded-2xl overflow-hidden border border-zinc-200" initial="hidden" whileInView="show" viewport={{ once: true }} variants={zoomSubtle}>
          <img 
            src={image3} 
            alt="Elena Astrologa" 
            className="w-full h-full object-cover"
          />
        </m.div>
      </div>
    </section>
  )
}

function Testimonios() {
  const data = [
    {
      name: 'Anónima',
      text: 'Consulté con Elena en un momento de mucha incertidumbre laboral. Su lectura fue muy precisa y me ayudó a entender aspectos de mi personalidad que no tenía claros. Gracias a su orientación pude tomar mejores decisiones.',
    },
    {
      name: 'Anónima',
      text: 'La quiromancia con Elena fue lo más. Me leyó las manos y me explicó todo bárbaro. Me ayudó una bocha con el tema de mi pareja, ahora estamos mejor que nunca.',
    },
    {
      name: 'Anónima',
      text: 'Estaba pasando una mala racha y una amiga me recomendó a Elena. Me hizo una limpieza energética que me cambió la vida, boluda. Siento que me saqué un peso de encima.',
    },
  ]
  return (
    <section id="testimonios" className="mx-auto max-w-6xl container-px py-20">
      <m.h2 className="font-display text-4xl tracking-tight text-center text-zinc-900" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp}>Testimonios</m.h2>
      <m.div className="mt-8 grid gap-6 md:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={staggerContainer}>
        {data.map((t, idx) => (
          <m.figure key={t.name} className="card p-6" variants={idx % 2 === 0 ? slideInLeft : slideInRight}>
            <blockquote className="text-zinc-700">“{t.text}”</blockquote>
            <figcaption className="mt-3 text-sm font-medium text-zinc-500">— {t.name}</figcaption>
          </m.figure>
        ))}
      </m.div>
    </section>
  )
}

function Galeria() {
  const images: string[] = [
    image4,
    image2,
    image5,
    image6,
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }) as any,
  ])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section id="galeria" className="mx-auto max-w-6xl container-px py-20">
      <m.div className="mx-auto mb-8 max-w-2xl text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
        <m.h2 variants={fadeInUp} className="font-display text-4xl tracking-tight text-zinc-900">Galería</m.h2>
        <m.p variants={fadeInUp} className="mt-3 text-zinc-600">Algunas escenas y símbolos que inspiran mi práctica.</m.p>
      </m.div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, idx) => (
              <div key={idx} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2">
                <m.div className="aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200" initial="hidden" whileInView="show" viewport={{ once: true }} variants={zoomSubtle}>
                  <img
                    src={src}
                    alt={`Galería ${idx + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </m.div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
          <button
            type="button"
            aria-label="Anterior"
            onClick={scrollPrev}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
          <button
            type="button"
            aria-label="Siguiente"
            onClick={scrollNext}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: '¿Cómo funcionan las sesiones online?',
      answer: 'Las sesiones se realizan por videollamada (WhatsApp, Zoom o la plataforma que prefieras). Durante la llamada grabo la sesión y te la envío para que puedas consultarla cuando necesites.'
    },
    {
      question: '¿Cuánto dura una sesión?',
      answer: 'Las sesiones tienen una duración aproximada de 45 a 60 minutos, dependiendo de la profundidad de la consulta y las preguntas que tengas.'
    },
    {
      question: '¿Qué necesito para la lectura?',
      answer: 'Solo necesitas un lugar tranquilo donde puedas concentrarte y una conexión estable a internet. Si es lectura de manos, necesitarás buena iluminación para mostrar las palmas.'
    },
    {
      question: '¿Con qué anticipación debo reservar?',
      answer: 'Recomiendo reservar con al menos 24-48 horas de anticipación. Para urgencias, puedes escribirme por WhatsApp y vemos la disponibilidad.'
    },
    {
      question: '¿Qué métodos de pago aceptas?',
      answer: 'Acepto transferencia bancaria, MercadoPago y efectivo para sesiones presenciales. El pago se realiza antes de la sesión.'
    },
    {
      question: '¿Puedo hacer preguntas específicas?',
      answer: 'Absolutamente. Puedes traer todas las preguntas que necesites sobre amor, trabajo, familia, decisiones importantes o cualquier tema que te preocupe.'
    }
  ]

  return (
    <section id="faq" className="mx-auto max-w-6xl container-px py-20">
      <m.div className="mx-auto max-w-2xl text-center mb-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
        <m.h2 variants={fadeInUp} className="font-display text-4xl tracking-tight text-zinc-900">Preguntas Frecuentes</m.h2>
        <m.p variants={fadeInUp} className="mt-3 text-zinc-600">Resuelve tus dudas sobre las sesiones y el proceso.</m.p>
      </m.div>
      
      <m.div className="mx-auto max-w-3xl" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={staggerContainer}>
        {faqs.map((faq, index) => (
          <m.div key={index} className="border-b border-zinc-200 last:border-b-0" variants={fadeInUp}>
            <button
              className="w-full py-6 text-left flex items-center justify-between hover:text-rose-600 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold pr-4">{faq.question}</span>
              <span className="flex-shrink-0 text-rose-500">
                {openIndex === index ? <FiMinus className="h-5 w-5" /> : <FiPlus className="h-5 w-5" />}
              </span>
            </button>
            
            <m.div
              initial={false}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pb-6 text-zinc-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </m.div>
          </m.div>
        ))}
      </m.div>
    </section>
  )
}

function CTAFinal() {
  return (
    <section className="relative isolate overflow-hidden py-32">
      <div className="absolute inset-0 -z-10">
        <img 
          src={image5} 
          alt="Fondo místico" 
          className="w-full h-full object-cover parallax-bg"
        />
        <div className="absolute inset-0 bg-white/25" />
      </div>
      <div className="mx-auto max-w-4xl container-px text-center">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-3xl bg-white/85 backdrop-blur p-8 rounded-2xl border border-zinc-200 shadow-lg shadow-black/5"
        >
          <m.h2 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-normal tracking-tight text-zinc-900">
            ¿Lista para descubrir tu camino?
          </m.h2>
          <m.div variants={fadeInUp} className="mt-10">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-lg px-8 py-4 shadow-2xl hover:scale-105 transition-transform"
            >
              Reserva tu sesión ahora
            </a>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl container-px py-20">
      <m.div className="card p-8" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="font-display text-4xl tracking-tight text-zinc-900">Contacto y reservas</h2>
        <p className="mt-2 text-zinc-600">Escríbeme por WhatsApp para turnos. También atiendo por llamada.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <FaInstagram className="h-4 w-4" />
            Instagram
          </a>
          <a
            href="tel:+5491125376233"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <FiPhone className="h-4 w-4" />
            Llamar ahora
          </a>
         
        </div>
      </m.div>
      <p className="mt-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Elena Astrologa. Todos los derechos reservados.</p>
    </section>
  )
}

function App() {
  return (
    <LazyMotion features={domMax} strict>
      <div className="min-h-dvh overflow-x-hidden">
        <Nav />
        <main>
          <Hero />
          <Servicios />
          <SobreMi />
          <Galeria />
          <Testimonios />
          <FAQ />
          <CTAFinal />
          <Contacto />
        </main>
        <WhatsappFloat />
      </div>
    </LazyMotion>
  )
}

export default App
