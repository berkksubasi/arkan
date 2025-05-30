"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  TrophyIcon,
  ScaleIcon,
  HandRaisedIcon,
  ShieldCheckIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  UsersIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: "Marka Tescil",
      description: "Markanızı Türkiye&apos;de güvenle tescil ettirin. Hızlı ve güvenilir süreç.",
      features: ["Ön araştırma", "Başvuru hazırlığı", "Takip süreci"],
      price: "1.500 TL'den başlayan fiyatlar",
      duration: "6-12 ay",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: GlobeAltIcon,
      title: "Uluslararası Marka Tescil",
      description: "WIPO Madrid Protokolü ile markanızı dünya çapında koruyun.",
      features: ["Madrid sistemi", "Çoklu ülke başvurusu", "Uzman danışmanlık"],
      price: "Ülke başına özel fiyat",
      duration: "12-18 ay",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "ISO Belgelendirme",
      description: "ISO standartları ile işletmenizin kalitesini belgeleyin.",
      features: ["ISO 9001", "ISO 14001", "ISO 45001"],
      price: "Sistem başına değişken",
      duration: "3-6 ay",
      color: "from-success-500 to-success-600"
    },
    {
      icon: UsersIcon,
      title: "TSE Belgelendirme",
      description: "Türk Standartları Enstitüsü belgelendirme süreçleri.",
      features: ["TSE standartları", "Ürün belgelendirme", "Sistem belgelendirme"],
      price: "Ürün/sistem bazında",
      duration: "2-4 ay",
      color: "from-secondary-500 to-secondary-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Başarılı Marka Tescil", icon: TrophyIcon },
    { number: "15+", label: "Yıllık Deneyim", icon: AcademicCapIcon },
    { number: "50+", label: "Ülkede Hizmet", icon: GlobeAltIcon },
    { number: "98%", label: "Müşteri Memnuniyeti", icon: StarIcon }
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      company: "Tech Solutions Ltd.",
      position: "Genel Müdür",
      text: "Marka tescil sürecimiz çok hızlı ve sorunsuz geçti. Profesyonel yaklaşımları ve detaylı bilgilendirmeleri için teşekkürler. Kesinlikle tavsiye ederim.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Elif Kaya",
      company: "Kaya Tekstil",
      position: "Kurucu Ortak",
      text: "Uluslararası marka tescil konusunda aldığımız danışmanlık hizmeti mükemmeldi. 15 ülkede markamızı başarıyla tescil ettirdik.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Mehmet Demir",
      company: "Demir İnşaat",
      position: "İcra Kurulu Üyesi",
      text: "ISO belgelendirme sürecinde bize rehberlik ettiler. Süreç boyunca her adımda yanımızda oldular. Çok memnun kaldık.",
      rating: 5,
      image: "👨‍🔧"
    }
  ];

  const whyChooseUs = [
    {
      icon: BuildingOfficeIcon,
      title: "Uzman Danışmanlık",
      description: "15+ yıllık deneyimle alanında uzman kadromuz",
      color: "text-primary-500"
    },
    {
      icon: ClockIcon,
      title: "Hızlı Süreç",
      description: "Optimize edilmiş süreçlerle hızlı sonuçlar",
      color: "text-accent-500"
    },
    {
      icon: ScaleIcon,
      title: "Yasal Güvence",
      description: "Tüm işlemlerimiz yasal güvence altında",
      color: "text-success-500"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Uygun Fiyat",
      description: "Rekabetçi fiyatlarla kaliteli hizmet",
      color: "text-secondary-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "İlk Görüşme",
      description: "Ücretsiz danışmanlık görüşmesi yapıyoruz",
      icon: HandRaisedIcon
    },
    {
      step: "02", 
      title: "Analiz & Planlama",
      description: "Detaylı analiz ve strateji belirliyoruz",
      icon: PresentationChartLineIcon
    },
    {
      step: "03",
      title: "Başvuru Süreci",
      description: "Profesyonel başvuru hazırlığı yapıyoruz",
      icon: ShieldCheckIcon
    },
    {
      step: "04",
      title: "Takip & Sonuç",
      description: "Süreç boyunca takip ederiz ve sonuçlandırırız",
      icon: CheckCircleIcon
    }
  ];

  const industries = [
    "Teknoloji", "Tekstil", "Gıda", "İnşaat", "Otomotiv", "Sağlık",
    "Eğitim", "Turizm", "Enerji", "Finans", "Perakende", "Üretim"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative container-custom py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <SparklesIcon className="h-6 w-6 text-accent-400" />
                <span className="text-accent-400 font-semibold">Türkiye'nin Güvenilir Markası</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 font-serif">
                Markanızı
                <span className="text-gradient-warm block">Güvence Altına Alın</span>
              </h1>
              <p className="text-xl text-secondary-100 mb-8 leading-relaxed">
                Fikri mülkiyet hakları ve kalite yönetim sistemleri alanında 
                <strong className="text-primary-300"> 15+ yıllık deneyimimizle</strong> işletmenizi geleceğe hazırlıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/iletisim"
                  className="btn-primary flex items-center justify-center group text-lg px-8 py-4"
                >
                  Ücretsiz Danışmanlık
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/hizmetler"
                  className="btn-outline text-lg px-8 py-4 text-center"
                >
                  Hizmetlerimizi İnceleyin
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-success-400" />
                  <span>24 saat içinde geri dönüş</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-success-400" />
                  <span>Ücretsiz ön değerlendirme</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="card-warm p-8 backdrop-blur-sm border border-primary-200/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-secondary-800">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-6 w-6 text-primary-600" />
                    <span className="text-secondary-700">24 saat içinde geri dönüş</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-success-500" />
                    <span className="text-secondary-700">Ücretsiz ön değerlendirme</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-6 w-6 text-primary-600" />
                    <span className="text-secondary-700">Uzman danışman desteği</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrophyIcon className="h-6 w-6 text-accent-500" />
                    <span className="text-secondary-700">15+ yıl deneyim</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-200">
                  <Link
                    href="tel:+90XXXXXXXXX"
                    className="btn-primary w-full text-center block"
                  >
                    Hemen Arayın
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-warm-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Profesyonel Hizmetlerimiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Fikri mülkiyet hakları ve kalite yönetim sistemleri alanında 
              kapsamlı çözümler sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift p-8 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-secondary-500">
                      <CheckCircleIcon className="h-4 w-4 text-success-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary-500">Süre:</span>
                    <span className="font-medium text-secondary-700">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-secondary-500">Fiyat:</span>
                    <span className="font-medium text-primary-600">{service.price}</span>
                  </div>
                </div>
                <Link
                  href="/hizmetler"
                  className="btn-outline w-full text-center block"
                >
                  Detaylı Bilgi
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-warm-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              4 adımda profesyonel hizmet anlayışımızla size en iyi çözümü sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto shadow-warm">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <ArrowRightIcon className="h-6 w-6 text-primary-400 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Deneyimimiz, uzmanlığımız ve müşteri odaklı yaklaşımımızla fark yaratıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift p-8 text-center"
              >
                <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{item.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-warm-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Hizmet Verdiğimiz Sektörler
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Farklı sektörlerden 500+ başarılı projeyle deneyimimizi kanıtladık.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-secondary-700 font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-secondary-600">
              Hizmetlerimizden memnun kalan müşterilerimizin görüşleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-accent-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-500">{testimonial.position}</div>
                    <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 font-serif">
              Markanızı Korumaya Bugün Başlayın
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle iletişime geçin ve işletmeniz için en uygun 
              çözümleri birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group"
              >
                Hemen İletişime Geçin
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:+90XXXXXXXXX"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Hemen Arayın
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}