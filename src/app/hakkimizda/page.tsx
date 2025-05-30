"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  CalendarDaysIcon,
  TrophyIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  StarIcon,
  PhoneIcon,
  UsersIcon,
  HeartIcon,
  LightBulbIcon,
  ScaleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  DocumentTextIcon,
  EyeIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  HomeIcon,
  TruckIcon,
  BanknotesIcon,
  BookOpenIcon,
  MapIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

export default function Hakkimizda() {
  const stats = [
    { number: "15+", label: "Yıllık Deneyim", icon: CalendarDaysIcon },
    { number: "500+", label: "Başarılı Proje", icon: TrophyIcon },
    { number: "50+", label: "Ülkede Hizmet", icon: GlobeAltIcon },
    { number: "98%", label: "Müşteri Memnuniyeti", icon: StarIcon },
    { number: "24/7", label: "Destek Hizmeti", icon: ChatBubbleLeftRightIcon },
    { number: "100+", label: "Uzman Kadro", icon: UsersIcon }
  ];

  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Güvenilirlik",
      description: "15+ yıllık deneyimimizle müşterilerimize güvenilir hizmet sunuyoruz. Her projede kalite ve güven önceliğimizdir.",
      color: "text-primary-500"
    },
    {
      icon: LightBulbIcon,
      title: "İnovasyon",
      description: "Sürekli gelişen teknoloji ve yöntemlerle hizmetlerimizi yeniliyor, müşterilerimize en iyi çözümleri sunuyoruz.",
      color: "text-accent-500"
    },
    {
      icon: HeartIcon,
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyeti bizim için en önemli değerdir. Her projede müşteri ihtiyaçlarını önceleyerek çalışırız.",
      color: "text-success-500"
    },
    {
      icon: ScaleIcon,
      title: "Etik Değerler",
      description: "Tüm işlemlerimizde etik kurallara uygun hareket eder, şeffaf ve dürüst bir yaklaşım benimseriz.",
      color: "text-secondary-500"
    },
    {
      icon: RocketLaunchIcon,
      title: "Hızlı Çözüm",
      description: "Optimize edilmiş süreçlerimizle hızlı ve etkili sonuçlar elde ederek müşterilerimizin zamanını değerlendiririz.",
      color: "text-primary-500"
    },
    {
      icon: UsersIcon,
      title: "Takım Ruhu",
      description: "Güçlü takım ruhumuz ve işbirliği anlayışımızla her projede başarıya ulaşmak için birlikte çalışırız.",
      color: "text-accent-500"
    }
  ];

  const team = [
    {
      name: "Dr. Ahmet Yılmaz",
      position: "Kurucu Ortak & Genel Müdür",
      experience: "20+ yıl",
      expertise: ["Fikri Mülkiyet Hukuku", "Marka Tescil", "Patent Hukuku"],
      education: "İstanbul Üniversitesi Hukuk Fakültesi",
      image: "👨‍💼",
      description: "Fikri mülkiyet hukuku alanında 20 yılı aşkın deneyime sahip. 1000+ başarılı marka tescil sürecini yönetmiştir."
    },
    {
      name: "Mühendis Elif Kaya",
      position: "Kalite Yönetim Direktörü",
      experience: "15+ yıl",
      expertise: ["ISO Standartları", "Kalite Yönetimi", "Süreç İyileştirme"],
      education: "ODTÜ Endüstri Mühendisliği",
      image: "👩‍💼",
      description: "ISO belgelendirme süreçlerinde uzman. 200+ işletmeye kalite yönetim sistemi kurmuştur."
    },
    {
      name: "Av. Mehmet Demir",
      position: "Hukuk Müşaviri",
      experience: "12+ yıl",
      expertise: ["Ticaret Hukuku", "Fikri Mülkiyet", "Sözleşme Hukuku"],
      education: "Ankara Üniversitesi Hukuk Fakültesi",
      image: "👨‍⚖️",
      description: "Ticaret ve fikri mülkiyet hukuku alanında uzman. Karmaşık hukuki süreçlerde danışmanlık sağlar."
    },
    {
      name: "Dr. Ayşe Özkan",
      position: "Uluslararası İlişkiler Müdürü",
      experience: "18+ yıl",
      expertise: ["Uluslararası Hukuk", "Madrid Protokolü", "AB Hukuku"],
      education: "Galatasaray Üniversitesi Hukuk Fakültesi",
      image: "👩‍🎓",
      description: "Uluslararası marka tescil süreçlerinde uzman. 50+ ülkede başarılı projeler yürütmüştür."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Şirket Kuruluşu",
      description: "İstanbul'da fikri mülkiyet danışmanlığı alanında faaliyete başladık.",
      icon: BuildingOfficeIcon,
      color: "primary"
    },
    {
      year: "2010",
      title: "İlk 100 Müşteri",
      description: "İlk 100 müşterimize başarılı hizmet vererek güven kazandık.",
      icon: UsersIcon,
      color: "success"
    },
    {
      year: "2012",
      title: "ISO Belgelendirme",
      description: "Hizmet portföyümüzü ISO belgelendirme ile genişlettik.",
      icon: DocumentTextIcon,
      color: "accent"
    },
    {
      year: "2015",
      title: "Uluslararası Genişleme",
      description: "Madrid Protokolü ile uluslararası marka tescil hizmetlerine başladık.",
      icon: GlobeAltIcon,
      color: "secondary"
    },
    {
      year: "2018",
      title: "Dijital Dönüşüm",
      description: "Süreçlerimizi dijitalleştirerek müşteri deneyimini iyileştirdik.",
      icon: ComputerDesktopIcon,
      color: "primary"
    },
    {
      year: "2020",
      title: "500+ Başarılı Proje",
      description: "500'üncü başarılı projemizi tamamlayarak önemli bir kilometre taşına ulaştık.",
      icon: TrophyIcon,
      color: "accent"
    },
    {
      year: "2023",
      title: "Yeni Ofis",
      description: "Büyüyen ekibimiz için yeni ve modern ofisimizi açtık.",
      icon: BuildingOfficeIcon,
      color: "success"
    },
    {
      year: "2024",
      title: "Gelecek Vizyonu",
      description: "Yapay zeka destekli hizmetlerle geleceğin danışmanlığını sunuyoruz.",
      icon: RocketLaunchIcon,
      color: "secondary"
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Kalite Yönetim Sistemi Sertifikası",
      icon: DocumentTextIcon,
      year: "2020"
    },
    {
      title: "WIPO Akredite",
      description: "Dünya Fikri Mülkiyet Örgütü Akreditasyonu",
      icon: GlobeAltIcon,
      year: "2019"
    },
    {
      title: "TSE Yetki Belgesi",
      description: "Türk Standartları Enstitüsü Yetki Belgesi",
      icon: ShieldCheckIcon,
      year: "2021"
    },
    {
      title: "TÜRKAK Akreditasyon",
      description: "Türk Akreditasyon Kurumu Belgesi",
      icon: CubeIcon,
      year: "2022"
    }
  ];

  const industries = [
    { name: "Teknoloji", icon: ComputerDesktopIcon, projects: "120+", description: "Yazılım, donanım ve IT hizmetleri" },
    { name: "Tekstil", icon: HomeIcon, projects: "85+", description: "Giyim, ev tekstili ve moda" },
    { name: "Gıda", icon: BeakerIcon, projects: "95+", description: "Gıda üretimi ve içecek sektörü" },
    { name: "İnşaat", icon: BuildingOfficeIcon, projects: "70+", description: "İnşaat malzemeleri ve yapı sektörü" },
    { name: "Otomotiv", icon: TruckIcon, projects: "45+", description: "Otomotiv yan sanayi ve parça üretimi" },
    { name: "Sağlık", icon: HeartIcon, projects: "60+", description: "Medikal cihaz ve sağlık hizmetleri" },
    { name: "Eğitim", icon: BookOpenIcon, projects: "35+", description: "Eğitim teknolojileri ve kurumları" },
    { name: "Turizm", icon: MapIcon, projects: "40+", description: "Otel, restoran ve turizm hizmetleri" },
    { name: "Enerji", icon: BoltIcon, projects: "25+", description: "Yenilenebilir enerji ve teknolojileri" },
    { name: "Finans", icon: BanknotesIcon, projects: "30+", description: "Fintech ve finansal hizmetler" }
  ];

  const awards = [
    {
      title: "Yılın En İyi Danışmanlık Firması",
      organization: "Türkiye Fikri Mülkiyet Derneği",
      year: "2023",
      icon: TrophyIcon
    },
    {
      title: "Müşteri Memnuniyeti Ödülü",
      organization: "İstanbul Ticaret Odası",
      year: "2022",
      icon: StarIcon
    },
    {
      title: "İnovasyon Ödülü",
      organization: "KOSGEB",
      year: "2021",
      icon: LightBulbIcon
    },
    {
      title: "Kalite Mükemmellik Ödülü",
      organization: "Türk Standartları Enstitüsü",
      year: "2020",
      icon: ShieldCheckIcon
    }
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
              <SparklesIcon className="h-6 w-6 text-accent-400" />
              <span className="text-accent-400 font-semibold">15+ Yıllık Deneyim</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif">
              Hakkımızda
              <span className="text-gradient-warm block">Hikayemiz</span>
            </h1>
            <p className="text-xl text-secondary-100 mb-8 leading-relaxed">
              2008 yılından bu yana fikri mülkiyet hakları ve kalite yönetim sistemleri alanında 
              <strong className="text-primary-300"> güvenilir danışmanlık hizmetleri</strong> sunuyoruz. 
              Müşterilerimizin başarısı bizim başarımızdır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="btn-primary flex items-center justify-center group"
              >
                Bizimle İletişime Geçin
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/hizmetler"
                className="btn-outline flex items-center justify-center"
              >
                Hizmetlerimizi İnceleyin
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-warm-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <EyeIcon className="h-8 w-8 text-primary-500" />
                <h2 className="text-3xl font-bold text-secondary-900 font-serif">Vizyonumuz</h2>
              </div>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                Türkiye&apos;nin ve bölgenin en güvenilir fikri mülkiyet ve kalite yönetim danışmanlığı firması olmak. 
                İnovatif çözümlerimizle müşterilerimizin global pazarlarda rekabet avantajı elde etmelerine katkı sağlamak.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Sektörde liderlik</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Global standartlarda hizmet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Sürekli inovasyon</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <RocketLaunchIcon className="h-8 w-8 text-accent-500" />
                <h2 className="text-3xl font-bold text-secondary-900 font-serif">Misyonumuz</h2>
              </div>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                İşletmelerin fikri mülkiyet haklarını korumak ve kalite standartlarını yükseltmek için 
                uzman kadromuz ve deneyimimizle en iyi danışmanlık hizmetlerini sunmak. 
                Müşteri memnuniyetini her zaman öncelemek.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Müşteri odaklı yaklaşım</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Kaliteli ve hızlı hizmet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-success-500 flex-shrink-0" />
                  <span className="text-secondary-700">Etik değerlere bağlılık</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-warm-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Değerlerimiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz, her projede rehberimizdir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift p-8 text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{value.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Tarihçemiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              15+ yıllık yolculuğumuzda önemli kilometre taşlarımız ve başarılarımız.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-warm rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 bg-${milestone.color}-100 rounded-lg flex items-center justify-center`}>
                          <milestone.icon className={`h-6 w-6 text-${milestone.color}-600`} />
                        </div>
                        <div>
                          <div className={`text-2xl font-bold text-${milestone.color}-600 font-serif`}>
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-bold text-secondary-900">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-secondary-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className={`w-6 h-6 bg-${milestone.color}-500 rounded-full border-4 border-white shadow-lg`}></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-warm-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Uzman Ekibimiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ve tutkulu ekibimizle size en iyi hizmeti sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover-lift p-8 text-center"
              >
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-secondary-500 mb-4">{member.experience} deneyim</p>
                <p className="text-secondary-600 text-sm mb-6 leading-relaxed">{member.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2 text-sm">Uzmanlık Alanları:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-1 text-sm">Eğitim:</h4>
                    <p className="text-xs text-secondary-600">{member.education}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8 font-serif">
                Sertifikalarımız
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="card p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cert.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-secondary-900">{cert.title}</h3>
                      <p className="text-secondary-600 text-sm">{cert.description}</p>
                    </div>
                    <div className="text-primary-600 font-semibold text-sm">
                      {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-8 font-serif">
                Ödüllerimiz
              </h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="card p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <award.icon className="h-6 w-6 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-secondary-900">{award.title}</h3>
                      <p className="text-secondary-600 text-sm">{award.organization}</p>
                    </div>
                    <div className="text-accent-600 font-semibold text-sm">
                      {award.year}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-2">{industry.projects} proje</p>
                <p className="text-xs text-secondary-500">{industry.description}</p>
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
              Bizimle Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              15+ yıllık deneyimimiz ve uzman ekibimizle işletmenizin ihtiyaçlarına 
              en uygun çözümleri birlikte geliştirelim.
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
                href="tel:+905342989276"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Hemen Arayın
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 