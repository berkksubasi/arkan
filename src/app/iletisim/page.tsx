"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  TrophyIcon,
  UsersIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Telefon",
      details: ["+90 (212) 555 0123", "+90 (532) 555 0123"],
      description: "7/24 destek hattımızdan bize ulaşabilirsiniz",
      color: "primary"
    },
    {
      icon: EnvelopeIcon,
      title: "E-posta",
      details: ["info@arkanmarka.com", "destek@arkanmarka.com"],
      description: "E-posta ile sorularınızı iletebilirsiniz",
      color: "accent"
    },
    {
      icon: MapPinIcon,
      title: "Adres",
      details: ["Maslak Mahallesi, Büyükdere Cad.", "No: 123, Kat: 5, Sarıyer/İstanbul"],
      description: "Merkez ofisimizde randevu ile görüşebiliriz",
      color: "success"
    },
    {
      icon: ClockIcon,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 09:00 - 14:00"],
      description: "Acil durumlar için 7/24 destek",
      color: "secondary"
    }
  ];

  const services = [
    { value: "marka-tescil", label: "Marka Tescil" },
    { value: "uluslararasi-marka", label: "Uluslararası Marka Tescil" },
    { value: "iso-belgelendirme", label: "ISO Belgelendirme" },
    { value: "tse-belgelendirme", label: "TSE Belgelendirme" },
    { value: "patent-basvuru", label: "Patent Başvuru" },
    { value: "tasarim-tescil", label: "Tasarım Tescil" },
    { value: "telif-hakki", label: "Telif Hakkı" },
    { value: "diger", label: "Diğer" }
  ];

  const faqs = [
    {
      question: "Marka tescil süreci ne kadar sürer?",
      answer: "Ulusal marka tescil süreci ortalama 12-18 ay sürmektedir. Uluslararası başvurularda süre ülkeye göre değişiklik gösterebilir.",
      icon: ClockIcon
    },
    {
      question: "ISO belgelendirme maliyeti nedir?",
      answer: "ISO belgelendirme maliyeti işletmenizin büyüklüğü, çalışan sayısı ve seçilen standarda göre değişir. Detaylı fiyat teklifi için iletişime geçin.",
      icon: CurrencyDollarIcon
    },
    {
      question: "Uluslararası marka tescil hangi ülkelerde yapılabilir?",
      answer: "Madrid Protokolü kapsamında 100+ ülkede marka tescil işlemi gerçekleştirebiliriz. Ayrıca protokol dışı ülkeler için de hizmet vermekteyiz.",
      icon: GlobeAltIcon
    },
    {
      question: "Danışmanlık hizmeti ücretsiz mi?",
      answer: "İlk danışmanlık görüşmemiz ücretsizdir. Detaylı analiz ve proje bazlı çalışmalar için uygun fiyat teklifleri sunuyoruz.",
      icon: ChatBubbleLeftRightIcon
    },
    {
      question: "Başvuru sonrası takip nasıl yapılır?",
      answer: "Tüm başvurularınızı online sistemimiz üzerinden takip edebilirsiniz. Ayrıca her aşamada SMS ve e-posta ile bilgilendirilirsiniz.",
      icon: DocumentTextIcon
    },
    {
      question: "Başarı garantiniz var mı?",
      answer: "15+ yıllık deneyimimizle %98 başarı oranına sahibiz. Başvuru öncesi detaylı analiz yaparak risk faktörlerini minimize ediyoruz.",
      icon: ShieldCheckIcon
    }
  ];

  const whyChooseUs = [
    {
      icon: TrophyIcon,
      title: "15+ Yıl Deneyim",
      description: "Sektörde 15 yılı aşkın deneyimimizle güvenilir hizmet",
      color: "primary"
    },
    {
      icon: UsersIcon,
      title: "Uzman Kadro",
      description: "Alanında uzman avukat ve mühendislerden oluşan ekip",
      color: "accent"
    },
    {
      icon: BoltIcon,
      title: "Hızlı Süreç",
      description: "Optimize edilmiş süreçlerle hızlı ve etkili sonuçlar",
      color: "success"
    },
    {
      icon: ShieldCheckIcon,
      title: "Güvence",
      description: "%98 başarı oranı ve yasal güvence",
      color: "secondary"
    }
  ];

  const stats = [
    { number: "500+", label: "Başarılı Proje", icon: TrophyIcon },
    { number: "15+", label: "Yıl Deneyim", icon: CalendarDaysIcon },
    { number: "50+", label: "Ülke", icon: GlobeAltIcon },
    { number: "98%", label: "Başarı Oranı", icon: StarIcon }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-accent-400" />
              <span className="text-accent-400 font-semibold">7/24 Destek</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif">
              İletişim
              <span className="text-gradient-warm block">Bizimle İletişime Geçin</span>
            </h1>
            <p className="text-xl text-secondary-100 mb-8 leading-relaxed">
              Fikri mülkiyet hakları ve kalite yönetim sistemleri konusunda 
              <strong className="text-primary-300"> uzman danışmanlık</strong> almak için 
              bizimle iletişime geçin. İlk danışmanlık görüşmemiz ücretsizdir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+902125550123"
                className="btn-primary flex items-center justify-center group"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Hemen Arayın
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:info@arkanmarka.com"
                className="btn-outline flex items-center justify-center"
              >
                <EnvelopeIcon className="mr-2 h-5 w-5" />
                E-posta Gönderin
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-warm-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift p-8 text-center"
              >
                <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <info.icon className={`h-8 w-8 text-${info.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-secondary-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-secondary-500">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8 font-serif">
                Bize Mesaj Gönderin
              </h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success-50 border border-success-200 rounded-lg p-4 mb-6 flex items-center space-x-3"
                >
                  <CheckCircleIcon className="h-6 w-6 text-success-600" />
                  <p className="text-success-800">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Adınızı ve soyadınızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Telefon numaranızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Şirket adınızı girin"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                    İlgilendiğiniz Hizmet
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Hizmet seçiniz</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Mesajınızı detaylı olarak yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      Mesaj Gönder
                      <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-8 font-serif">
                  Ofis Konumumuz
                </h2>
                
                {/* Map Placeholder */}
                <div className="bg-gradient-warm-light rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPinIcon className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                    <p className="text-secondary-600 font-medium">Harita Yükleniyor...</p>
                    <p className="text-sm text-secondary-500">Maslak, Sarıyer/İstanbul</p>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">Merkez Ofis</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPinIcon className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-secondary-700 font-medium">Maslak Mahallesi, Büyükdere Cad.</p>
                        <p className="text-secondary-700">No: 123, Kat: 5, Sarıyer/İstanbul</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      <p className="text-secondary-700">+90 (212) 555 0123</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      <p className="text-secondary-700">info@arkanmarka.com</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ClockIcon className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-secondary-700">Pazartesi - Cuma: 09:00 - 18:00</p>
                        <p className="text-secondary-700">Cumartesi: 09:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-warm-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              15+ yıllık deneyimimiz ve uzman kadromuzla size en iyi hizmeti sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift p-8 text-center"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Müşterilerimizin en çok merak ettiği konulara yanıtlar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <faq.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-3">{faq.question}</h3>
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
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
              Hemen Başlayalım!
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              İlk danışmanlık görüşmemiz ücretsizdir. Projeleriniz için en uygun çözümleri 
              birlikte keşfedelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+902125550123"
                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Ücretsiz Danışmanlık
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:info@arkanmarka.com"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                <EnvelopeIcon className="mr-2 h-5 w-5" />
                E-posta Gönder
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}