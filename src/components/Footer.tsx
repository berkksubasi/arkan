"use client";

import React from 'react';
import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  TrophyIcon,
  ArrowRightIcon,
  StarIcon,
  HeartIcon,
  UsersIcon,
  BoltIcon,
  CheckCircleIcon,
  SparklesIcon,
  LightBulbIcon,
  CogIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  HomeIcon,
  TruckIcon,
  BanknotesIcon,
  BookOpenIcon,
  MapIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  HandRaisedIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  const services = [
    { name: "Marka Tescil", href: "/hizmetler", icon: ShieldCheckIcon },
    { name: "Uluslararası Marka", href: "/hizmetler", icon: GlobeAltIcon },
    { name: "ISO Belgelendirme", href: "/hizmetler", icon: DocumentTextIcon },
    { name: "TSE Belgelendirme", href: "/hizmetler", icon: CheckCircleIcon },
    { name: "Patent Başvuru", href: "/hizmetler", icon: LightBulbIcon },
    { name: "Tasarım Tescil", href: "/hizmetler", icon: SparklesIcon }
  ];

  const quickLinks = [
    { name: "Ana Sayfa", href: "/", icon: HomeIcon },
    { name: "Hizmetlerimiz", href: "/hizmetler", icon: CogIcon },
    { name: "Hakkımızda", href: "/hakkimizda", icon: UsersIcon },
    { name: "İletişim", href: "/iletisim", icon: ChatBubbleLeftRightIcon },
    { name: "Blog", href: "/blog", icon: BookOpenIcon },
    { name: "SSS", href: "/sss", icon: HandRaisedIcon }
  ];

  const certifications = [
    { name: "ISO 9001:2015", icon: DocumentTextIcon },
    { name: "WIPO Akredite", icon: GlobeAltIcon },
    { name: "TSE Yetki Belgesi", icon: ShieldCheckIcon },
    { name: "TÜRKAK Akreditasyon", icon: CubeIcon }
  ];

  const stats = [
    { number: "500+", label: "Başarılı Proje", icon: TrophyIcon },
    { number: "15+", label: "Yıl Deneyim", icon: CalendarDaysIcon },
    { number: "50+", label: "Ülke", icon: GlobeAltIcon },
    { number: "98%", label: "Müşteri Memnuniyeti", icon: StarIcon }
  ];

  const industries = [
    { name: "Teknoloji", icon: ComputerDesktopIcon },
    { name: "Tekstil", icon: HomeIcon },
    { name: "Gıda", icon: BeakerIcon },
    { name: "İnşaat", icon: BuildingOfficeIcon },
    { name: "Otomotiv", icon: TruckIcon },
    { name: "Sağlık", icon: HeartIcon },
    { name: "Eğitim", icon: BookOpenIcon },
    { name: "Turizm", icon: MapIcon },
    { name: "Enerji", icon: BoltIcon },
    { name: "Finans", icon: BanknotesIcon }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "🔗" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center">
                  <BuildingOfficeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif">Arkan Marka</h3>
                  <p className="text-primary-300 text-sm">Patent & Danışmanlık</p>
                </div>
              </div>
              
              <p className="text-secondary-600 mb-4">
                Türkiye&apos;nin önde gelen fikri mülkiyet ve kalite yönetim danışmanlığı firması olarak, 
                15+ yıllık deneyimimizle işletmenizin başarısına katkı sağlıyoruz.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">+90 (212) 555 0123</p>
                    <p className="text-secondary-300 text-sm">7/24 Destek Hattı</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">info@arkanmarka.com</p>
                    <p className="text-secondary-300 text-sm">24 saat içinde yanıt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Maslak, Sarıyer/İstanbul</p>
                    <p className="text-secondary-300 text-sm">Merkez Ofis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Pzt-Cum: 09:00-18:00</p>
                    <p className="text-secondary-300 text-sm">Cumartesi: 09:00-14:00</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <CogIcon className="h-6 w-6 text-primary-400 mr-2" />
                Hizmetlerimiz
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-3 text-secondary-200 hover:text-white transition-colors duration-300 group"
                    >
                      <service.icon className="h-4 w-4 text-primary-400 group-hover:text-primary-300 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <TrophyIcon className="h-5 w-5 text-accent-400 mr-2" />
                  Sertifikalarımız
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-secondary-200"
                    >
                      <cert.icon className="h-4 w-4 text-accent-400" />
                      <span>{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links & Industries */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <ArrowRightIcon className="h-6 w-6 text-primary-400 mr-2" />
                Hızlı Linkler
              </h3>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 text-secondary-200 hover:text-white transition-colors duration-300 group"
                    >
                      <link.icon className="h-4 w-4 text-primary-400 group-hover:text-primary-300 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <BuildingOfficeIcon className="h-5 w-5 text-success-400 mr-2" />
                Hizmet Verdiğimiz Sektörler
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {industries.slice(0, 6).map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-secondary-200"
                  >
                    <industry.icon className="h-3 w-3 text-success-400" />
                    <span>{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats & Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <PresentationChartLineIcon className="h-6 w-6 text-primary-400 mr-2" />
                Başarılarımız
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary-300 font-serif">
                      {stat.number}
                    </div>
                    <div className="text-xs text-secondary-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-warm rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Bülten Aboneliği
                </h4>
                <p className="text-primary-100 text-sm mb-4">
                  Fikri mülkiyet ve kalite yönetimi konularında güncel bilgileri alın.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  />
                  <button className="bg-white text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm">
                    Abone Ol
                  </button>
                </div>
              </div>

              {/* Awards */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <StarIcon className="h-5 w-5 text-accent-400 mr-2" />
                  Ödüllerimiz
                </h4>
                <div className="space-y-2">
                  <div className="text-sm text-secondary-200">🏆 Yılın En İyi Danışmanlık Firması 2023</div>
                  <div className="text-sm text-secondary-200">⭐ Müşteri Memnuniyeti Ödülü 2022</div>
                  <div className="text-sm text-secondary-200">💡 İnovasyon Ödülü 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-secondary-300 text-sm">
                  © 2024 Arkan Marka Patent. Tüm hakları saklıdır.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <Link href="/gizlilik" className="text-secondary-300 hover:text-white transition-colors">
                    Gizlilik Politikası
                  </Link>
                  <span className="text-secondary-500">•</span>
                  <Link href="/kullanim" className="text-secondary-300 hover:text-white transition-colors">
                    Kullanım Şartları
                  </Link>
                  <span className="text-secondary-500">•</span>
                  <Link href="/cerez" className="text-secondary-300 hover:text-white transition-colors">
                    Çerez Politikası
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-secondary-300">
                  <HeartIcon className="h-4 w-4 text-red-400" />
                  <span>Türkiye&apos;de tasarlandı</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                  <div className="w-6 h-4 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 