'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Scissors, Phone, MapPin, Clock, Star, Menu, X, Zap, Sparkles } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFirstTimeClient, setIsFirstTimeClient] = useState(false)

  // Get today's hours based on current day
  const getTodaysHours = () => {
    const today = new Date().getDay() // 0 = Sunday, 1 = Monday, etc.

    switch (today) {
      case 0: // Sunday
        return "Closed"
      case 1: // Monday
        return "Closed"
      case 2: // Tuesday
      case 3: // Wednesday
        return "10:00 AM - 6:00 PM"
      case 4: // Thursday
      case 5: // Friday
        return "10:00 AM - 7:00 PM"
      case 6: // Saturday
        return "9:00 AM - 4:00 PM"
      default:
        return "Closed"
    }
  }

  const barbers = [
    {
      name: "Marcello",
      title: "Master Barber & Owner",
      experience: "17+ years",
      image: "/barbers/peters-hair-cutting-place-barber-marcello.jpg",
      description: "Marcello is a seasoned master barber with over 17 years of experience in the industry. Known for his precision and attention to detail, he has honed his craft through years of dedicated practice, making him a trusted name for stylish haircuts and grooming services. His expertise and passion for barbering ensure every client leaves looking sharp and confident."
    },
    {
      name: "Mir",
      title: "Senior Barber",
      experience: "10+ years",
      image: "/barbers/peters-hair-cutting-place-barber-mir.jpg",
      description: "With a decade of expertise, Mir delivers sharp fades, precise cuts, and clean beard trims tailored to your style. Known for attention to detail and friendly service, Mir ensures every client leaves looking and feeling their best."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
        <div className="bg-barbershop-green text-white text-center py-1 text-xs font-light tracking-wider">
          PROUDLY SERVING SCARBOROUGH SINCE 1964
        </div>
        <nav className="container-max section-padding py-4 md:py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="nav-logo w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center p-1 border border-white/40 shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Peters Barbershop Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="nav-brand hidden xs:block">
                <h1 className="font-script text-lg sm:text-xl md:text-2xl font-normal text-white tracking-wide leading-tight text-shadow-lg">Peters</h1>
                <p className="font-body text-xs text-white/90 font-light tracking-widest text-shadow">HAIR CUTTING PLACE</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu hidden lg:flex space-x-8 xl:space-x-12">
              <a href="#home" className="text-white hover:text-barbershop-green font-light text-sm tracking-wider transition-colors whitespace-nowrap text-shadow">HOME</a>
              <a href="#services" className="text-white hover:text-barbershop-green font-light text-sm tracking-wider transition-colors whitespace-nowrap text-shadow">SERVICES</a>
              <a href="#barbers" className="text-white hover:text-barbershop-green font-light text-sm tracking-wider transition-colors whitespace-nowrap text-shadow">BARBERS</a>
              <a href="#gallery" className="text-white hover:text-barbershop-green font-light text-sm tracking-wider transition-colors whitespace-nowrap text-shadow">GALLERY</a>
              <a href="#contact" className="text-white hover:text-barbershop-green font-light text-sm tracking-wider transition-colors whitespace-nowrap text-shadow">CONTACT</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="nav-menu lg:hidden text-white bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" />}
            </button>
          </div>

                      {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 md:mt-6 py-6 md:py-8 bg-barbershop-dark/95 backdrop-blur-lg rounded-lg border border-white/30 shadow-2xl">
                <div className="flex flex-col space-y-4 md:space-y-6 text-center">
                  <a href="#home" className="text-white hover:text-barbershop-green font-light text-base tracking-wider py-2 px-4 rounded transition-colors duration-300 text-shadow" onClick={() => setIsMenuOpen(false)}>HOME</a>
                  <a href="#services" className="text-white hover:text-barbershop-green font-light text-base tracking-wider py-2 px-4 rounded transition-colors duration-300 text-shadow" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
                  <a href="#barbers" className="text-white hover:text-barbershop-green font-light text-base tracking-wider py-2 px-4 rounded transition-colors duration-300 text-shadow" onClick={() => setIsMenuOpen(false)}>BARBERS</a>
                  <a href="#gallery" className="text-white hover:text-barbershop-green font-light text-base tracking-wider py-2 px-4 rounded transition-colors duration-300 text-shadow" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
                  <a href="#contact" className="text-white hover:text-barbershop-green font-light text-base tracking-wider py-2 px-4 rounded transition-colors duration-300 text-shadow" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                </div>
              </div>
            )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: `url('/shop/peters-hair-cutting-place-inside.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 hero-spacing">
          <div className="mb-8">
            <div className="w-40 h-40 bg-white/30 backdrop-blur-md rounded-full mx-auto mb-6 flex items-center justify-center p-2 border border-white/40 shadow-2xl">
              <Image
                src="/logo.png"
                alt="Peters Barbershop Logo Est. 1964"
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h1 className="font-script text-6xl md:text-8xl font-normal mb-6 tracking-wide text-shadow-lg">
              Peters
            </h1>
            <h2 className="font-body text-xl md:text-2xl font-light mb-8 tracking-widest text-white/95">
              HAIR CUTTING PLACE
            </h2>
            <p className="font-body text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed text-white/90">
              Where tradition meets excellence. Experience the art of classic barbering at<br />
              Peter&apos;s Hair Cutting Place, Scarborough&apos;s most distinguished establishment since 1964.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <a href="#contact" className="bg-barbershop-green/90 backdrop-blur-sm hover:bg-barbershop-green text-white font-body font-light py-4 px-8 text-sm tracking-wider transition-all duration-300 border border-white/20 rounded-lg shadow-lg">
                GET IN TOUCH
              </a>
              <a href="#services" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-body font-light py-4 px-8 text-sm tracking-wider transition-all duration-300 border border-white/30 rounded-lg">
                OUR SERVICES
              </a>
            </div>
          </div>
        </div>


      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-barbershop-dark mb-6 tracking-wider">OUR SERVICES</h2>
            <div className="w-16 h-px bg-barbershop-green mx-auto mb-8"></div>
            <p className="font-body text-lg font-light text-barbershop-grey max-w-2xl mx-auto leading-relaxed">
              Precision craftsmanship meets timeless tradition in every service at<br />
              Peter&apos;s Hair Cutting Place
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-3 sm:p-2 rounded-lg shadow-lg border border-gray-200 max-w-sm sm:max-w-none">
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <span className={`text-xs sm:text-sm font-light tracking-wider text-center sm:text-left ${!isFirstTimeClient ? 'text-barbershop-dark' : 'text-barbershop-grey'}`}>
                  REGULAR PRICING
                </span>
                <button
                  onClick={() => setIsFirstTimeClient(!isFirstTimeClient)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isFirstTimeClient ? 'bg-barbershop-green' : 'bg-gray-300'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isFirstTimeClient ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
                <span className={`text-xs sm:text-sm font-light tracking-wider text-center sm:text-left ${isFirstTimeClient ? 'text-barbershop-dark' : 'text-barbershop-grey'}`}>
                  FIRST TIME CLIENT
                </span>
              </div>
            </div>
          </div>

          {isFirstTimeClient && (
            <div className="bg-barbershop-green/10 border border-barbershop-green/20 rounded-lg p-6 mb-12 max-w-2xl mx-auto">
              <h3 className="text-xl font-light text-barbershop-dark mb-2 tracking-wider text-center">🎉 FIRST TIME CLIENT SPECIAL</h3>
              <p className="text-barbershop-grey font-light text-sm text-center">
                Welcome to Peter&apos;s! Enjoy special pricing on your first visit (regular prices apply thereafter)
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Haircuts */}
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-barbershop-green/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Scissors className="w-6 h-6 text-barbershop-green" />
              </div>
              <h3 className="font-heading text-xl font-normal text-barbershop-dark mb-6 tracking-wider text-center">HAIRCUTS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Regular Haircut</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '$25' : '$35'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Fades/Skin Fade</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '$30' : '$40'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Seniors Haircut</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '$20' : '$30'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Children Haircut</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '$20' : '$25'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Haircut + Wash</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '—' : '$50'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Beard w/ Clippers</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '—' : '+$5'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Beard w/ Clippers + Razor</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '—' : '+$10'}</span>
                </div>
              </div>
            </div>

            {/* Beard Services */}
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-barbershop-green/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-6 h-6 text-barbershop-green" />
              </div>
              <h3 className="font-heading text-xl font-normal text-barbershop-dark mb-6 tracking-wider text-center">BEARD SERVICES</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Beard Trim/Line-up</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '$20' : '$20'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Hot Towel Shave</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '$25' : '$30'}</span>
                </div>
                {isFirstTimeClient && (
                  <div className="flex justify-between items-center">
                    <span className="text-barbershop-grey font-light text-sm">Hair Line-up</span>
                    <span className="text-barbershop-green font-light">$10</span>
                  </div>
                )}
              </div>
            </div>

            {/* Combo & Specialty */}
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-barbershop-green/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-barbershop-green" />
              </div>
              <h3 className="font-heading text-xl font-normal text-barbershop-dark mb-6 tracking-wider text-center">COMBO & SPECIALTY</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Haircut + Full Shave</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '—' : '$60'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-barbershop-grey font-light text-sm">Hair Coloring</span>
                  <span className="text-barbershop-green font-light">{isFirstTimeClient ? '—' : '$80'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="relative py-32 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-barbershop-dark mb-6 tracking-wider">MASTER BARBERS</h2>
            <div className="w-16 h-px bg-barbershop-green mx-auto mb-8"></div>
            <p className="font-body text-lg font-light text-barbershop-grey max-w-2xl mx-auto leading-relaxed">
              Every cut crafted with years of expertise and genuine passion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {barbers.map((barber, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={barber.image}
                    alt={barber.name}
                    width={256}
                    height={320}
                    className="w-64 h-80 mx-auto object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-barbershop-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-heading text-2xl font-normal text-barbershop-dark mb-2 tracking-wider">{barber.name}</h3>
                <p className="font-body text-barbershop-green font-light mb-2 tracking-wider">{barber.title}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-8 h-px bg-barbershop-green/30"></div>
                  <span className="font-body text-barbershop-dark font-light text-sm tracking-widest">{barber.experience}</span>
                  <div className="w-8 h-px bg-barbershop-green/30"></div>
                </div>
                <p className="font-body text-barbershop-grey font-light text-sm leading-relaxed mb-6 max-w-xs mx-auto">{barber.description}</p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-barbershop-green fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-32 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight text-barbershop-dark mb-6 tracking-wider">OUR GALLERY</h2>
            <div className="w-16 h-px bg-barbershop-green mx-auto mb-8"></div>
            <p className="text-lg font-light text-barbershop-grey max-w-2xl mx-auto leading-relaxed">
              Take a look at our craftsmanship and the classic barbershop experience at<br />
              Peter&apos;s Hair Cutting Place
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "/gallery/peters-hair-cutting-place-inside-haircut-1.png",
              "/gallery/peters-hair-cutting-place-inside-haircut-2.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-3.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-4.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-5.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-7.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-9.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-10.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-12.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-13.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-14.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-15.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-16.jpg",
              "/gallery/peters-hair-cutting-place-inside-haircut-17.jpg",
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1} - Peter's Hair Cutting Place`}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-barbershop-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-barbershop-grey font-light mb-6 tracking-wider">
              Visit us to experience the tradition firsthand
            </p>
            <a href="#contact" className="inline-flex items-center space-x-3 bg-barbershop-green hover:bg-barbershop-green-dark text-white font-light py-4 px-8 text-sm tracking-wider transition-all duration-300">
              <span>VISIT OUR SHOP</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 md:py-32 bg-barbershop-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/shop/peters-hair-cutting-place-inside-seating.png')`
          }}
        />
        <div className="relative z-10 container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight mb-8 md:mb-12 tracking-wider">VISIT US</h2>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-barbershop-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-barbershop-green" />
                  </div>
                  <div>
                    <h3 className="font-light mb-2 tracking-wider text-base md:text-lg">ADDRESS</h3>
                    <p className="text-white/80 font-light leading-relaxed text-sm md:text-base">
                      2676 Eglinton Ave E<br />
                      Scarborough, ON M1K 2S3<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-barbershop-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-barbershop-green" />
                  </div>
                  <div>
                    <h3 className="font-light mb-2 tracking-wider text-base md:text-lg">PHONE</h3>
                    <p className="text-white/80 font-light text-sm md:text-base">(416) 261-2716</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-barbershop-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-barbershop-green" />
                  </div>
                  <div>
                    <h3 className="font-light mb-2 tracking-wider text-base md:text-lg">HOURS</h3>
                    <div className="text-white/80 font-light space-y-1 leading-relaxed text-sm md:text-base">
                      <p>Monday: Closed</p>
                      <p>Tuesday - Wednesday: 10:00 AM - 6:00 PM</p>
                      <p>Thursday - Friday: 10:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
                <h3 className="text-lg md:text-xl font-light mb-3 md:mb-4 tracking-wider">WALK-INS WELCOME</h3>
                <p className="text-white/80 font-light mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  No appointment necessary. Experience the tradition of exceptional grooming at Peter&apos;s Hair Cutting Place.
                </p>
                <a href="tel:4162612716" className="inline-flex items-center space-x-3 bg-barbershop-green/90 hover:bg-barbershop-green text-white font-light py-3 md:py-4 px-6 md:px-8 text-sm tracking-wider transition-all duration-300 rounded">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span>CALL NOW</span>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-lg border border-white/10">
              <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8 tracking-wider">GET IN TOUCH</h3>
              <form name="contact" method="POST" data-netlify="true" className="space-y-4 md:space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="p-3 md:p-4 bg-black/40 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/80 font-light focus:border-barbershop-green focus:outline-none transition-colors text-sm md:text-base shadow-inner"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="p-3 md:p-4 bg-black/40 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/80 font-light focus:border-barbershop-green focus:outline-none transition-colors text-sm md:text-base shadow-inner"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 md:p-4 bg-black/40 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/80 font-light focus:border-barbershop-green focus:outline-none transition-colors text-sm md:text-base shadow-inner"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 md:p-4 bg-black/40 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/80 font-light focus:border-barbershop-green focus:outline-none transition-colors text-sm md:text-base shadow-inner"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full p-3 md:p-4 bg-black/40 backdrop-blur-sm border border-white/40 rounded text-white placeholder-white/80 font-light focus:border-barbershop-green focus:outline-none transition-colors resize-none text-sm md:text-base shadow-inner"
                ></textarea>
                <button type="submit" className="w-full bg-barbershop-green hover:bg-barbershop-green-dark text-white font-light py-3 md:py-4 text-sm tracking-wider transition-colors duration-300 rounded">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-barbershop-dark mb-4 tracking-wider">FIND US</h2>
            <div className="w-16 h-px bg-barbershop-green mx-auto mb-6"></div>
            <p className="text-lg font-light text-barbershop-grey max-w-2xl mx-auto leading-relaxed">
              Located on Eglinton Avenue East by Brimley Road in Scarborough
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d857.0393597186279!2d-79.2492659179513!3d43.737035587262994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce2eb1c89a15%3A0x7971bde870dbfca2!2sPeters%20Hair%20Cutting%20Place!5e0!3m2!1sen!2sca!4v1750650973200!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peter's Hair Cutting Place Location"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-6 md:p-8 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="flex items-center justify-start md:justify-center space-x-3">
                    <div className="w-10 h-10 bg-barbershop-green/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-barbershop-green" />
                    </div>
                    <div className="text-left">
                      <p className="font-light text-barbershop-dark text-sm tracking-wider">ADDRESS</p>
                      <p className="text-barbershop-grey font-light text-sm">2676 Eglinton Ave E</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-start md:justify-center space-x-3">
                    <div className="w-10 h-10 bg-barbershop-green/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-barbershop-green" />
                    </div>
                    <div className="text-left">
                      <p className="font-light text-barbershop-dark text-sm tracking-wider">PHONE</p>
                      <a href="tel:4162612716" className="text-barbershop-grey hover:text-barbershop-green font-light text-sm transition-colors">
                        (416) 261-2716
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-start md:justify-center space-x-3">
                    <div className="w-10 h-10 bg-barbershop-green/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-barbershop-green" />
                    </div>
                    <div className="text-left">
                      <p className="font-light text-barbershop-dark text-sm tracking-wider">TODAY&apos;S HOURS</p>
                      <p className={`font-light text-sm ${getTodaysHours() === 'Closed' ? 'text-red-600' : 'text-barbershop-grey'}`}>
                        {getTodaysHours()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="https://www.google.com/maps/dir//2676+Eglinton+Ave+E,+Scarborough,+ON+M1K+2S3,+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-barbershop-green hover:bg-barbershop-green-dark text-white font-light py-3 px-6 text-sm tracking-wider transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>GET DIRECTIONS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-barbershop-dark border-t border-white/10 py-12">
        <div className="container-max section-padding">
          <div className="text-center text-white/60">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-barbershop-green/20 rounded-full flex items-center justify-center p-1 border border-barbershop-green/30">
                <Image
                  src="/logo.png"
                  alt="Peters Barbershop Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-light tracking-widest">PETER&apos;S HAIR CUTTING PLACE</span>
            </div>
            <p className="font-light text-sm tracking-wider mb-2">© {new Date().getFullYear()} Peter&apos;s Hair Cutting Place. All rights reserved.</p>
            <p className="font-light text-xs tracking-wider">Peter&apos;s Hair Cutting Place proudly serving Scarborough since 1964.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 