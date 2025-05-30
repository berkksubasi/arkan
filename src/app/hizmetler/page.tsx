"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  GlobeAltIcon, 
  DocumentCheckIcon, 
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  TrophyIcon,
  ScaleIcon,
  HandRaisedIcon,
  DocumentTextIcon,
  CogIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  HeartIcon,
  TruckIcon,
  BanknotesIcon,
  BookOpenIcon,
  MapIcon,
  BoltIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';

export default function Hizmetler() {
  const [activeTab, setActiveTab] = useState<'marka' | 'iso' | 'tse' | 'uluslararasi'>('marka');

  const serviceCategories = [
    { id: 'marka' as const, title: 'Marka Tescil Hizmetleri', icon: ShieldCheckIcon, color: 'primary' },
    { id: 'iso' as const, title: 'ISO Belgelendirme', icon: DocumentCheckIcon, color: 'success' },
    { id: 'tse' as const, title: 'TSE Belgelendirme', icon: CogIcon, color: 'accent' },
    { id: 'uluslararasi' as const, title: 'Uluslararası Hizmetler', icon: GlobeAltIcon, color: 'secondary' }
  ];

  const services = {
    marka: [
      {
        title: "Ulusal Marka Tescil",
        description: "Türkiye'de marka tescil işlemlerinizi hızlı ve güvenli şekilde gerçekleştiriyoruz.",
        features: ["Marka araştırması", "Başvuru hazırlığı", "Takip ve bilgilendirme", "Hukuki destek"],
        price: "6.000 TL'den başlayan fiyatlar",
        duration: "6-12 ay",
        icon: ShieldCheckIcon,
        popular: true,
        industries: ["Teknoloji", "Tekstil", "Gıda", "Hizmet"],
        benefits: ["Marka koruması", "Rekabet avantajı", "Değer artışı", "Hukuki güvence"]
      },
      {
        title: "Marka Yenileme",
        description: "Mevcut markalarınızın süresini uzatarak korunmaya devam etmesini sağlıyoruz.",
        features: ["Süre takibi", "Yenileme işlemleri", "Belge teslimi", "Danışmanlık"],
        price: "Değerlendirmeye bağlı",
        duration: "2-4 ay",
        icon: ClockIcon,
        popular: false,
        industries: ["Tüm sektörler"],
        benefits: ["Sürekli koruma", "Maliyet tasarrufu", "Hızlı işlem", "Güvenilir hizmet"]
      },
      {
        title: "Marka İtiraz ve Savunma",
        description: "Marka itirazlarına karşı hukuki savunma ve stratejik danışmanlık hizmetleri.",
        features: ["Hukuki analiz", "Savunma hazırlığı", "Müzakere", "Mahkeme süreci"],
        price: "Değerlendirmeye bağlı",
        duration: "3-8 ay",
        icon: ScaleIcon,
        popular: false,
        industries: ["Hukuki destek gereken tüm sektörler"],
        benefits: ["Hukuki koruma", "Uzman destek", "Stratejik yaklaşım", "Başarı odaklı"]
      }
    ],
    iso: [
      {
        title: "ISO 9001 Kalite Yönetim Sistemi",
        description: "Kalite yönetim sisteminizi uluslararası standartlara uygun şekilde kurmak ve belgelendirmek.",
        features: ["Sistem kurulumu", "Dokümantasyon", "Eğitim", "Belgelendirme"],
        price: "Değerlendirmeye bağlı",
        duration: "3-6 ay",
        icon: DocumentCheckIcon,
        popular: true,
        industries: ["İmalat", "Hizmet", "Teknoloji", "Sağlık"],
        standards: ["ISO 9001:2015", "Kalite politikası", "Süreç yönetimi", "Müşteri memnuniyeti"]
      },
      {
        title: "ISO 14001 Çevre Yönetim Sistemi",
        description: "Çevresel performansınızı iyileştirmek ve sürdürülebilirlik hedeflerinize ulaşmak.",
        features: ["Çevre analizi", "Sistem kurulumu", "Eğitim", "Belgelendirme"],
        price: "Değerlendirmeye bağlı",
        duration: "4-7 ay",
        icon: HeartIcon,
        popular: false,
        industries: ["İmalat", "Enerji", "İnşaat", "Kimya"],
        standards: ["ISO 14001:2015", "Çevre politikası", "Yasal uyum", "Sürekli iyileştirme"]
      },
      {
        title: "ISO 45001 İş Sağlığı ve Güvenliği",
        description: "İş sağlığı ve güvenliği yönetim sisteminizi kurmak ve çalışan güvenliğini sağlamak.",
        features: ["Risk analizi", "Sistem kurulumu", "Eğitim", "Belgelendirme"],
        price: "Değerlendirmeye bağlı",
        duration: "4-8 ay",
        icon: ShieldCheckIcon,
        popular: false,
        industries: ["İmalat", "İnşaat", "Madencilik", "Enerji"],
        standards: ["ISO 45001:2018", "Güvenlik politikası", "Risk yönetimi", "Çalışan katılımı"]
      }
    ],
    tse: [
      {
        title: "TSE Hizmet Yeterlilik Belgesi",
        description: "Hizmet kalitesini belgeleyen TSE sertifikasyonu ile müşteri güveninizi artırın.",
        features: ["Hizmet analizi", "Sistem kurulumu", "Eğitim", "Belgelendirme"],
        price: "Değerlendirmeye bağlı",
        duration: "2-4 ay",
        icon: CogIcon,
        popular: true,
        industries: ["Hizmet", "Turizm", "Eğitim", "Sağlık"],
        standards: ["TSE standartları", "Hizmet kalitesi", "Müşteri memnuniyeti", "Sürekli iyileştirme"]
      },
      {
        title: "TSE Ürün Belgesi",
        description: "Ürünlerinizin TSE standartlarına uygunluğunu belgeleyen sertifikasyon hizmeti.",
        features: ["Ürün testi", "Fabrika denetimi", "Belgelendirme", "Takip"],
        price: "Değerlendirmeye bağlı",
        duration: "1-3 ay",
        icon: CheckCircleIcon,
        popular: false,
        industries: ["İmalat", "Gıda", "Tekstil", "Elektronik"],
        standards: ["TSE ürün standartları", "Kalite kontrol", "Uygunluk değerlendirmesi", "Pazar güveni"]
      }
    ],
    uluslararasi: [
      {
        title: "Madrid Protokolü Marka Tescil",
        description: "Tek başvuru ile 100+ ülkede marka koruması sağlayan uluslararası tescil hizmeti.",
        features: ["Ülke seçimi", "Başvuru hazırlığı", "Takip", "Hukuki destek"],
        price: "Değerlendirmeye bağlı",
        duration: "12-18 ay",
        icon: GlobeAltIcon,
        popular: true,
        countries: ["AB Ülkeleri", "ABD", "Çin", "Japonya", "Rusya", "Brezilya"],
        advantages: ["Tek başvuru", "Maliyet avantajı", "Merkezi yönetim", "Geniş koruma"]
      },
      {
        title: "AB Marka Tescil",
        description: "Avrupa Birliği genelinde geçerli marka tescil işlemleri ve danışmanlık hizmetleri.",
        features: ["AB araştırması", "Başvuru", "İtiraz savunması", "Takip"],
        price: "Değerlendirmeye bağlı",
        duration: "8-12 ay",
        icon: StarIcon,
        popular: false,
        countries: ["27 AB Ülkesi"],
        advantages: ["Tek marka", "Geniş pazar", "Güçlü koruma", "Ticari avantaj"]
      }
    ]
  };

  const whyChooseUs = [
    {
      icon: AcademicCapIcon,
      title: "15+ Yıl Deneyim",
      description: "Alanında uzman kadromuzla 15 yılı aşkın deneyim",
      color: "text-primary-500"
    },
    {
      icon: TrophyIcon,
      title: "500+ Başarılı Proje",
      description: "Farklı sektörlerden 500'den fazla başarılı proje",
      color: "text-success-500"
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
      description: "Tüm işlemlerimiz tam yasal güvence altında",
      color: "text-secondary-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "İlk Görüşme",
      description: "Ücretsiz danışmanlık ve ihtiyaç analizi",
      icon: HandRaisedIcon
    },
    {
      step: "02",
      title: "Teklif Hazırlama",
      description: "Detaylı analiz sonrası özel teklif",
      icon: DocumentTextIcon
    },
    {
      step: "03",
      title: "Süreç Başlatma",
      description: "Anlaşma sonrası hızlı süreç başlatma",
      icon: BoltIcon
    },
    {
      step: "04",
      title: "Takip & Sonuç",
      description: "Süreç boyunca takip ve başarılı sonuçlandırma",
      icon: CheckCircleIcon
    }
  ];

  const industries = [
    { name: "Teknoloji", icon: ComputerDesktopIcon, projects: "120+" },
    { name: "Tekstil", icon: HomeIcon, projects: "85+" },
    { name: "Gıda", icon: BeakerIcon, projects: "95+" },
    { name: "İnşaat", icon: BuildingOfficeIcon, projects: "70+" },
    { name: "Otomotiv", icon: TruckIcon, projects: "45+" },
    { name: "Sağlık", icon: HeartIcon, projects: "60+" },
    { name: "Eğitim", icon: BookOpenIcon, projects: "35+" },
    { name: "Turizm", icon: MapIcon, projects: "40+" },
    { name: "Enerji", icon: BoltIcon, projects: "25+" },
    { name: "Finans", icon: BanknotesIcon, projects: "30+" }
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif">
              Profesyonel
              <span className="text-gradient-warm block">Hizmetlerimiz</span>
            </h1>
            <p className="text-xl text-secondary-100 mb-8 leading-relaxed">
              Fikri mülkiyet hakları ve kalite yönetim sistemleri alanında 
              kapsamlı çözümler sunuyoruz. 15+ yıllık deneyimimizle işletmenizi geleceğe hazırlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="btn-primary flex items-center justify-center group"
              >
                Ücretsiz Danışmanlık
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:+905342989276"
                className="btn-outline flex items-center justify-center"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Hemen Arayın
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-serif">
              Hizmet Kategorilerimiz
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              İhtiyacınıza uygun hizmet kategorisini seçin ve detaylı bilgileri inceleyin.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? `bg-${category.color}-500 text-white shadow-lg`
                    : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-6 w-6" />
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card hover-lift p-8 relative ${service.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popüler
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-warm rounded-xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-secondary-500 mt-1">
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CurrencyDollarIcon className="h-4 w-4" />
                        <span className="text-primary-600 font-medium">{service.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Hizmet Kapsamı:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                          <CheckCircleIcon className="h-4 w-4 text-success-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {'industries' in service && service.industries && (
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Uygun Sektörler:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry: string, industryIndex: number) => (
                          <span
                            key={industryIndex}
                            className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {(('benefits' in service && service.benefits) || 
                    ('advantages' in service && service.advantages) || 
                    ('standards' in service && service.standards)) && (
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">
                        {'benefits' in service ? 'Faydalar:' : 
                         'advantages' in service ? 'Avantajlar:' : 'Standartlar:'}
                      </h4>
                      <ul className="space-y-1">
                        {(() => {
                          const items = 'benefits' in service ? service.benefits :
                                       'advantages' in service ? service.advantages :
                                       'standards' in service ? service.standards : [];
                          return items.map((item: string, itemIndex: number) => (
                            <li key={itemIndex} className="flex items-center text-sm text-secondary-600">
                              <StarIcon className="h-4 w-4 text-accent-400 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ));
                        })()}
                      </ul>
                    </div>
                  )}

                  {'countries' in service && service.countries && (
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Kapsanan Ülkeler:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.countries.map((country: string, countryIndex: number) => (
                          <span
                            key={countryIndex}
                            className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/iletisim"
                  className="btn-primary w-full text-center block"
                >
                  Teklif Al
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

      {/* Why Choose Us */}
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
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                <p className="text-sm text-primary-600 font-medium">{industry.projects} proje</p>
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
              Hizmetlerimiz Hakkında Detaylı Bilgi Alın
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
                Ücretsiz Danışmanlık
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