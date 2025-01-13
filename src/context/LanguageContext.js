import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    contactUs: 'Contact Us',
    priceCalculator: 'Price Calculator',
    portfolio: 'Portfolio',
    partners: 'Partners',

    // Hero Section
    heroSlogan: 'You Dream, We Create',
    heroSubtitle: 'Transforming visions into digital reality',
    hireUs: 'Hire Us',

    // Services Section
    webDevelopment: 'Web Development',
    webDevelopmentDesc: 'Custom websites and web applications built with cutting-edge technologies',
    uiuxDesign: 'UI/UX Design',
    uiuxDesignDesc: 'Beautiful, intuitive interfaces that enhance user experience',
    mobileDev: 'Mobile Development',
    mobileDevDesc: 'Native and cross-platform mobile applications',
    logodev: 'Logo Development',
    logodevDesc: 'Custom logo design and branding services',
    learnMore: 'Learn More',

    // Portfolio Section
    recentWorks: 'Our Recent Works',
    viewProject: 'View Project',
    prt1: 'Miguel AM tranports',
    prt1Desc: 'A React-based platform to a small logistics company based in Portugal',
    prt2: 'OKOA Gallery',
    prt2Desc: 'A React-powered online art gallery with dynamic galleries, responsive design, and seamless navigation, showcasing modern web development skills. This company is based in Estonia.',
    prt3: 'Little Lemon Restaurant',
    prt3Desc: 'A fully functional restaurant website with a modern design, easy-to-use interface and table reservation system.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'A React-based e-commerce platform for kids clothes, offering a wide range of products, secure payment and ordering system, company based in Portugal',
    prt5: 'Cardoso SARL Landscapes',
    prt5Desc: 'A React-based website for a landscaping company based in Switzerland.',

    // Partners Section
    ourPartners: 'Our Partner Network',
    partnershipCTA: 'Interested in becoming a partner?',
    partnerWithUs: 'Partner With Us',
    collaborating: 'Collaborating with industry leaders to deliver excellence',

    // Contact Section
    getInTouch: 'Get in Touch',
    letsTalk: "Let's Talk About Your Project",
    projectVision: 'Ready to take your digital presence to the next level?',
    name: 'Your Name',
    email: 'Your Email',
    subject: 'Subject',
    message: 'Your Message',
    send: 'Send Message',
    messageSent: 'Message Sent!',
    phone: 'Phone',
    address: 'Address',

    // Footer Section
    footerDescription: 'We are a creative digital agency specializing in web development, design, and digital solutions. Our passion is turning your ideas into reality.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    subscribeNewsletter: 'Subscribe to Our Newsletter',
    subscribePlaceholder: 'Enter your email',
    subscribe: 'Subscribe',
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    backToTop: 'Back to Top',
    companyAddress: 'Tallinn, Estonia',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Follow us on Facebook',
      twitter: 'Follow us on Twitter',
      instagram: 'Follow us on Instagram',
      linkedin: 'Connect on LinkedIn'
    }
  },
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    contactUs: 'Contactez-nous',
    priceCalculator: 'Calculateur de Prix',
    portfolio: 'Portfolio',
    partners: 'Partenaires',

    // Hero Section
    heroSlogan: 'Vous Rêvez, Nous Créons',
    heroSubtitle: 'Transformer les visions en réalité digitale',
    hireUs: 'Engagez-nous',

    // Services Section
    webDevelopment: 'Développement Web',
    webDevelopmentDesc: 'Sites web et applications personnalisés construits avec des technologies de pointe',
    uiuxDesign: 'Design UI/UX',
    uiuxDesignDesc: 'Interfaces belles et intuitives qui améliorent l\'expérience utilisateur',
    mobileDev: 'Développement Mobile',
    mobileDevDesc: 'Applications mobiles natives et multiplateformes',
    logodev: 'Création de Logo',
    logodevDesc: 'Design de logo personnalisé et services de branding',
    learnMore: 'En Savoir Plus',

    // Portfolio Section
    recentWorks: 'Nos Travaux Récents',
    viewProject: 'Voir le Projet',
    prt1: 'Miguel AM Transports',
    prt1Desc: 'Une plateforme basée sur React pour une petite entreprise de logistique basée au Portugal',
    prt2: 'Galerie OKOA',
    prt2Desc: 'Une galerie d\'art en ligne propulsée par React avec des galeries dynamiques, un design responsive et une navigation fluide, démontrant des compétences modernes en développement web. Cette entreprise est basée en Estonie.',
    prt3: 'Restaurant Little Lemon',
    prt3Desc: 'Un site web de restaurant entièrement fonctionnel avec un design moderne, une interface facile à utiliser et un système de réservation de table.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'Une plateforme e-commerce basée sur React pour vêtements enfants, offrant une large gamme de produits, un système de paiement et de commande sécurisé, entreprise basée au Portugal',
    prt5: 'Cardoso SARL Paysages',
    prt5Desc: 'Un site web basé sur React pour une entreprise de paysagisme basée en Suisse.',

    // Partners Section
    ourPartners: 'Notre Réseau de Partenaires',
    partnershipCTA: 'Intéressé à devenir partenaire ?',
    partnerWithUs: 'Devenez Partenaire',
    collaborating: 'Collaboration avec les leaders de l\'industrie pour offrir l\'excellence',

    // Contact Section
    getInTouch: 'Contactez-nous',
    letsTalk: 'Parlons de Votre Projet',
    projectVision: 'Prêt à faire passer votre présence digitale au niveau supérieur ?',
    name: 'Votre Nom',
    email: 'Votre Email',
    subject: 'Sujet',
    message: 'Votre Message',
    send: 'Envoyer le Message',
    messageSent: 'Message Envoyé !',
    phone: 'Téléphone',
    address: 'Adresse',

    // Footer Section
    footerDescription: 'Nous sommes une agence digitale créative spécialisée dans le développement web, le design et les solutions digitales. Notre passion est de transformer vos idées en réalité.',
    quickLinks: 'Liens Rapides',
    contactInfo: 'Informations de Contact',
    followUs: 'Suivez-nous',
    subscribeNewsletter: 'Abonnez-vous à Notre Newsletter',
    subscribePlaceholder: 'Entrez votre email',
    subscribe: 'S\'abonner',
    allRightsReserved: 'Tous Droits Réservés',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
    backToTop: 'Retour en Haut',
    companyAddress: 'Tallinn, Estonie',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Suivez-nous sur Facebook',
      twitter: 'Suivez-nous sur Twitter',
      instagram: 'Suivez-nous sur Instagram',
      linkedin: 'Connectez-vous sur LinkedIn'
    }
  },
  es: {
    // Navigation
    home: 'Inicio',
    services: 'Servicios',
    contactUs: 'Contáctanos',
    priceCalculator: 'Calculadora de Precios',
    portfolio: 'Portafolio',
    partners: 'Socios',

    // Hero Section
    heroSlogan: 'Tú Sueñas, Nosotros Creamos',
    heroSubtitle: 'Transformando visiones en realidad digital',
    hireUs: 'Contrátanos',

    // Services Section
    webDevelopment: 'Desarrollo Web',
    webDevelopmentDesc: 'Sitios web y aplicaciones personalizadas construidas con tecnologías de vanguardia',
    uiuxDesign: 'Diseño UI/UX',
    uiuxDesignDesc: 'Interfaces hermosas e intuitivas que mejoran la experiencia del usuario',
    mobileDev: 'Desarrollo Móvil',
    mobileDevDesc: 'Aplicaciones móviles nativas y multiplataforma',
    logodev: 'Desarrollo de Logo',
    logodevDesc: 'Diseño personalizado de logos y servicios de marca',
    learnMore: 'Saber Más',

    // Portfolio Section
    recentWorks: 'Nuestros Trabajos Recientes',
    viewProject: 'Ver Proyecto',
    prt1: 'Miguel AM Transportes',
    prt1Desc: 'Una plataforma basada en React para una pequeña empresa de logística con sede en Portugal',
    prt2: 'Galería OKOA',
    prt2Desc: 'Una galería de arte en línea desarrollada con React con galerías dinámicas, diseño responsivo y navegación fluida, mostrando habilidades modernas de desarrollo web. Esta empresa está ubicada en Estonia.',
    prt3: 'Restaurante Little Lemon',
    prt3Desc: 'Un sitio web de restaurante completamente funcional con diseño moderno, interfaz fácil de usar y sistema de reserva de mesas.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'Una plataforma de comercio electrónico basada en React para ropa de niños, que ofrece una amplia gama de productos, sistema seguro de pago y pedidos, empresa con sede en Portugal',
    prt5: 'Cardoso SARL Paisajes',
    prt5Desc: 'Un sitio web basado en React para una empresa de paisajismo con sede en Suiza.',

    // Partners Section
    ourPartners: 'Nuestra Red de Socios',
    partnershipCTA: '¿Interesado en ser socio?',
    partnerWithUs: 'Asóciate con Nosotros',
    collaborating: 'Colaborando con líderes de la industria para entregar excelencia',

    // Contact Section
    getInTouch: 'Ponte en Contacto',
    letsTalk: 'Hablemos de Tu Proyecto',
    projectVision: '¿Listo para llevar tu presencia digital al siguiente nivel?',
    name: 'Tu Nombre',
    email: 'Tu Email',
    subject: 'Asunto',
    message: 'Tu Mensaje',
    send: 'Enviar Mensaje',
    messageSent: '¡Mensaje Enviado!',
    phone: 'Teléfono',
    address: 'Dirección',

    // Footer Section
    footerDescription: 'Somos una agencia digital creativa especializada en desarrollo web, diseño y soluciones digitales. Nuestra pasión es convertir tus ideas en realidad.',
    quickLinks: 'Enlaces Rápidos',
    contactInfo: 'Información de Contacto',
    followUs: 'Síguenos',
    subscribeNewsletter: 'Suscríbete a Nuestro Boletín',
    subscribePlaceholder: 'Ingresa tu email',
    subscribe: 'Suscribirse',
    allRightsReserved: 'Todos los Derechos Reservados',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    backToTop: 'Volver Arriba',
    companyAddress: 'Tallin, Estonia',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Síguenos en Facebook',
      twitter: 'Síguenos en Twitter',
      instagram: 'Síguenos en Instagram',
      linkedin: 'Conéctate en LinkedIn'
    }
  },
  de: {
    // Navigation
    home: 'Startseite',
    services: 'Dienstleistungen',
    contactUs: 'Kontakt',
    priceCalculator: 'Preisrechner',
    portfolio: 'Portfolio',
    partners: 'Partner',

    // Hero Section
    heroSlogan: 'Sie Träumen, Wir Erschaffen',
    heroSubtitle: 'Visionen in digitale Realität verwandeln',
    hireUs: 'Beauftragen Sie uns',

    // Services Section
    webDevelopment: 'Webentwicklung',
    webDevelopmentDesc: 'Maßgeschneiderte Websites und Webanwendungen mit modernster Technologie',
    uiuxDesign: 'UI/UX Design',
    uiuxDesignDesc: 'Schöne, intuitive Benutzeroberflächen für bessere Nutzererfahrung',
    mobileDev: 'Mobile Entwicklung',
    mobileDevDesc: 'Native und plattformübergreifende mobile Anwendungen',
    logodev: 'Logo-Entwicklung',
    logodevDesc: 'Individuelles Logo-Design und Branding-Services',
    learnMore: 'Mehr Erfahren',

    // Portfolio Section
    recentWorks: 'Unsere Aktuellen Arbeiten',
    viewProject: 'Projekt Ansehen',
    prt1: 'Miguel AM Transporte',
    prt1Desc: 'Eine React-basierte Plattform für ein kleines Logistikunternehmen mit Sitz in Portugal',
    prt2: 'OKOA Galerie',
    prt2Desc: 'Eine React-betriebene Online-Kunstgalerie mit dynamischen Galerien, responsivem Design und nahtloser Navigation, die moderne Webentwicklungsfähigkeiten demonstriert. Dieses Unternehmen hat seinen Sitz in Estland.',
    prt3: 'Little Lemon Restaurant',
    prt3Desc: 'Eine voll funktionsfähige Restaurant-Website mit modernem Design, benutzerfreundlicher Oberfläche und Tischreservierungssystem.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'Eine React-basierte E-Commerce-Plattform für Kinderkleidung, die eine breite Produktpalette, sicheres Zahlungs- und Bestellsystem bietet, Unternehmen mit Sitz in Portugal',
    prt5: 'Cardoso SARL Landschaftsbau',
    prt5Desc: 'Eine React-basierte Website für ein Landschaftsbauunternehmen mit Sitz in der Schweiz.',

    // Partners Section
    ourPartners: 'Unser Partnernetzwerk',
    partnershipCTA: 'Interesse an einer Partnerschaft?',
    partnerWithUs: 'Partner Werden',
    collaborating: 'Zusammenarbeit mit Branchenführern für exzellente Ergebnisse',

    // Contact Section
    getInTouch: 'Kontaktieren Sie Uns',
    letsTalk: 'Lassen Sie uns über Ihr Projekt sprechen',
    projectVision: 'Bereit, Ihre digitale Präsenz auf die nächste Stufe zu heben?',
    name: 'Ihr Name',
    email: 'Ihre E-Mail',
    subject: 'Betreff',
    message: 'Ihre Nachricht',
    send: 'Nachricht Senden',
    messageSent: 'Nachricht Gesendet!',
    phone: 'Telefon',
    address: 'Adresse',

    // Footer Section
    footerDescription: 'Wir sind eine kreative Digitalagentur, spezialisiert auf Webentwicklung, Design und digitale Lösungen. Unsere Leidenschaft ist es, Ihre Ideen Wirklichkeit werden zu lassen.',
    quickLinks: 'Schnelllinks',
    contactInfo: 'Kontaktinformationen',
    followUs: 'Folgen Sie Uns',
    subscribeNewsletter: 'Newsletter Abonnieren',
    subscribePlaceholder: 'E-Mail eingeben',
    subscribe: 'Abonnieren',
    allRightsReserved: 'Alle Rechte Vorbehalten',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    backToTop: 'Nach Oben',
    companyAddress: 'Tallinn, Estland',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Folgen Sie uns auf Facebook',
      twitter: 'Folgen Sie uns auf Twitter',
      instagram: 'Folgen Sie uns auf Instagram',
      linkedin: 'Vernetzen Sie sich auf LinkedIn'
    }
  },

  pt: {
    // Navigation
    home: 'Início',
    services: 'Serviços',
    contactUs: 'Contacte-nos',
    priceCalculator: 'Calculadora de Preços',
    portfolio: 'Portfólio',
    partners: 'Parceiros',

    // Hero Section
    heroSlogan: 'Você Sonha, Nós Criamos',
    heroSubtitle: 'Transformando visões em realidade digital',
    hireUs: 'Contrate-nos',

    // Services Section
    webDevelopment: 'Desenvolvimento Web',
    webDevelopmentDesc: 'Sites e aplicações web personalizadas com tecnologias de ponta',
    uiuxDesign: 'Design UI/UX',
    uiuxDesignDesc: 'Interfaces bonitas e intuitivas que melhoram a experiência do usuário',
    mobileDev: 'Desenvolvimento Mobile',
    mobileDevDesc: 'Aplicativos nativos e multiplataforma',
    logodev: 'Desenvolvimento de Logotipo',
    logodevDesc: 'Serviços de design de logotipo e marca personalizada',
    learnMore: 'Saiba Mais',

    // Portfolio Section
    recentWorks: 'Nossos Trabalhos Recentes',
    viewProject: 'Ver Projeto',
    prt1: 'Miguel AM Transportes',
    prt1Desc: 'Uma plataforma baseada em React para uma pequena empresa de logística sediada em Portugal',
    prt2: 'Galeria OKOA',
    prt2Desc: 'Uma galeria de arte online desenvolvida em React com galerias dinâmicas, design responsivo e navegação fluida, demonstrando habilidades modernas de desenvolvimento web. Esta empresa está sediada na Estónia.',
    prt3: 'Restaurante Little Lemon',
    prt3Desc: 'Um site de restaurante totalmente funcional com design moderno, interface fácil de usar e sistema de reserva de mesas.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'Uma plataforma de e-commerce baseada em React para roupas infantis, oferecendo uma ampla gama de produtos, sistema seguro de pagamento e pedidos, empresa sediada em Portugal.',
    prt5: 'Cardoso SARL Paisagismo',
    prt5Desc: 'Um site baseado em React para uma empresa de paisagismo sediada na Suíça.',

    // Partners Section
    ourPartners: 'Nossa Rede de Parceiros',
    partnershipCTA: 'Interessado em se tornar um parceiro?',
    partnerWithUs: 'Seja Nosso Parceiro',
    collaborating: 'Colaborando com líderes do setor para entregar excelência',

    // Contact Section
    getInTouch: 'Entre em Contato',
    letsTalk: 'Vamos Falar Sobre Seu Projeto',
    projectVision: 'Pronto para elevar sua presença digital?',
    name: 'Seu Nome',
    email: 'Seu Email',
    subject: 'Assunto',
    message: 'Sua Mensagem',
    send: 'Enviar Mensagem',
    messageSent: 'Mensagem Enviada!',
    phone: 'Telefone',
    address: 'Endereço',

    // Footer Section
    footerDescription: 'Somos uma agência digital criativa especializada em desenvolvimento web, design e soluções digitais. Nossa paixão é transformar suas ideias em realidade.',
    quickLinks: 'Links Rápidos',
    contactInfo: 'Informações de Contato',
    followUs: 'Siga-nos',
    subscribeNewsletter: 'Assine Nossa Newsletter',
    subscribePlaceholder: 'Digite seu email',
    subscribe: 'Assinar',
    allRightsReserved: 'Todos os Direitos Reservados',
    privacyPolicy: 'Política de Privacidade',
    termsOfService: 'Termos de Serviço',
    backToTop: 'Voltar ao Topo',
    companyAddress: 'Tallinn, Estônia',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Siga-nos no Facebook',
      twitter: 'Siga-nos no Twitter',
      instagram: 'Siga-nos no Instagram',
      linkedin: 'Conecte-se no LinkedIn'
    }
  },

  et: {
    // Navigation
    home: 'Avaleht',
    services: 'Teenused',
    contactUs: 'Võta Ühendust',
    priceCalculator: 'Hinna Kalkulaator',
    portfolio: 'Portfoolio',
    partners: 'Partnerid',

    // Hero Section
    heroSlogan: 'Sina Unistad, Meie Loome',
    heroSubtitle: 'Muudame visioonid digitaalseks reaalsuseks',
    hireUs: 'Palka Meid',

    // Services Section
    webDevelopment: 'Veebiarendus',
    webDevelopmentDesc: 'Kohandatud veebisaidid ja -rakendused tipptasemel tehnoloogiaga',
    uiuxDesign: 'UI/UX Disain',
    uiuxDesignDesc: 'Ilusad ja intuitiivsed liidesed kasutajakogemuse parandamiseks',
    mobileDev: 'Mobiiliarendus',
    mobileDevDesc: 'Natiivsed ja platvormideülesed mobiilirakendused',
    logodev: 'Logo Arendus',
    logodevDesc: 'Kohandatud logo kujundus ja bränding teenused',
    learnMore: 'Loe Rohkem',

    // Portfolio Section
    recentWorks: 'Meie Viimased Tööd',
    viewProject: 'Vaata Projekti',
    prt1: 'Miguel AM Transport',
    prt1Desc: 'Portugalis asuvale väikelogistikaettevõttele loodud React-põhine platvorm',
    prt2: 'OKOA Galerii',
    prt2Desc: 'React-põhine veebigalerii dünaamiliste galeriidega, responsiivsese disaini ja sujuva navigeerimisega, demonstreerides kaasaegseid veebiarenduse oskusi. See ettevõte asub Eestis.',
    prt3: 'Little Lemon Restoran',
    prt3Desc: 'Täielikult funktsioneeriv restorani veebileht modernse disaini, kasutajasõbraliku liidese ja laudade broneerimissüsteemiga.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'React-põhine e-kaubanduse platvorm lastelõiete jaoks, pakkudes laia tootevalikut, turvalist makse- ja tellimissüsteemi, ettevõte asub Portugalis.',
    prt5: 'Cardoso SARL Maastikukujundus',
    prt5Desc: 'React-põhine veebileht Šveitsis asuvale maastikukujunduse ettevõttele.',

    // Partners Section
    ourPartners: 'Meie Partnerivõrgustik',
    partnershipCTA: 'Huvitatud partneriks saamisest?',
    partnerWithUs: 'Saa Partneriks',
    collaborating: 'Koostöö tööstuse liidritega täiuslikkuse saavutamiseks',

    // Contact Section
    getInTouch: 'Võta Ühendust',
    letsTalk: 'Räägime Sinu Projektist',
    projectVision: 'Valmis oma digitaalset kohalolu tõstma?',
    name: 'Sinu Nimi',
    email: 'Sinu E-post',
    subject: 'Teema',
    message: 'Sinu Sõnum',
    send: 'Saada Sõnum',
    messageSent: 'Sõnum Saadetud!',
    phone: 'Telefon',
    address: 'Aadress',

    // Footer Section
    footerDescription: 'Oleme loov digitaalagentuur, mis on spetsialiseerunud veebiarendusele, disainile ja digitaalsetele lahendustele. Meie kirg on muuta teie ideed reaalsuseks.',
    quickLinks: 'Kiirlingid',
    contactInfo: 'Kontaktinfo',
    followUs: 'Jälgi meid',
    subscribeNewsletter: 'Telli meie uudiskiri',
    subscribePlaceholder: 'Sisesta oma e-post',
    subscribe: 'Telli',
    allRightsReserved: 'Kõik õigused kaitstud',
    privacyPolicy: 'Privaatsuspoliitika',
    termsOfService: 'Teenuse tingimused',
    backToTop: 'Tagasi üles',
    companyAddress: 'Tallinn, Eesti',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Jälgi meid Facebookis',
      twitter: 'Jälgi meid Twitteris',
      instagram: 'Jälgi meid Instagramis',
      linkedin: 'Ühenda LinkedInis'
    }
  },
  fi: {
    // Navigation
    home: 'Etusivu',
    services: 'Palvelut',
    contactUs: 'Ota Yhteyttä',
    priceCalculator: 'Hintalaskuri',
    portfolio: 'Portfolio',
    partners: 'Kumppanit',

    // Hero Section
    heroSlogan: 'Sinä Unelmoit, Me Luomme',
    heroSubtitle: 'Muutamme visiot digitaaliseksi todellisuudeksi',
    hireUs: 'Palkkaa Meidät',

    // Services Section
    webDevelopment: 'Verkkokehitys',
    webDevelopmentDesc: 'Räätälöidyt verkkosivut ja sovellukset huipputeknologialla',
    uiuxDesign: 'UI/UX Suunnittelu',
    uiuxDesignDesc: 'Kauniit ja intuitiiviset käyttöliittymät käyttökokemuksen parantamiseksi',
    mobileDev: 'Mobiilisovelluskehitys',
    mobileDevDesc: 'Natiivit ja monialustaiset mobiilisovellukset',
    logodev: 'Logon Kehitys',
    logodevDesc: 'Mukautettu logosuunnittelu ja brändäyspalvelut',
    learnMore: 'Lue Lisää',

    // Portfolio Section
    recentWorks: 'Viimeisimmät Työt',
    viewProject: 'Katso Projekti',
    prt1: 'Miguel AM Kuljetukset',
    prt1Desc: 'React-pohjainen alusta pienelle portugalilaiselle logistiikkayritykselle',
    prt2: 'OKOA Galleria',
    prt2Desc: 'React-pohjainen verkkotaidegalleria dynaamisilla gallerioilla, responsiivisella suunnittelulla ja sujuvalla navigoinnilla, esitellen moderneja web-kehitystaitoja. Tämä yritys sijaitsee Virossa.',
    prt3: 'Little Lemon Ravintola',
    prt3Desc: 'Täysin toimiva ravintolan verkkosivusto modernilla suunnittelulla, helppokäyttöisellä käyttöliittymällä ja pöytävarausjärjestelmällä.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'React-pohjainen verkkokauppa-alusta lastenvaatteille, tarjoten laajan tuotevalikoiman, turvallisen maksu- ja tilausjärjestelmän, yritys sijaitsee Portugalissa.',
    prt5: 'Cardoso SARL Maisemointi',
    prt5Desc: 'React-pohjainen verkkosivusto sveitsiläiselle maisemointiyritykselle.',

    // Partners Section
    ourPartners: 'Kumppaniverkostomme',
    partnershipCTA: 'Kiinnostaako kumppanuus?',
    partnerWithUs: 'Ryhdy Kumppaniksi',
    collaborating: 'Yhteistyössä alan johtajien kanssa erinomaisuuden saavuttamiseksi',

    // Contact Section
    getInTouch: 'Ota Yhteyttä',
    letsTalk: 'Keskustellaan Projektistasi',
    projectVision: 'Valmis nostamaan digitaalista läsnäoloasi?',
    name: 'Nimesi',
    email: 'Sähköpostisi',
    subject: 'Aihe',
    message: 'Viestisi',
    send: 'Lähetä Viesti',
    messageSent: 'Viesti Lähetetty!',
    phone: 'Puhelin',
    address: 'Osoite',

    // Footer Section
    footerDescription: 'Olemme luova digitaalitoimisto, joka on erikoistunut verkkokehitykseen, suunnitteluun ja digitaalisiin ratkaisuihin. Intohimomme on muuttaa ideasi todellisuudeksi.',
    quickLinks: 'Pikalinkit',
    contactInfo: 'Yhteystiedot',
    followUs: 'Seuraa meitä',
    subscribeNewsletter: 'Tilaa uutiskirjeemme',
    subscribePlaceholder: 'Syötä sähköpostisi',
    subscribe: 'Tilaa',
    allRightsReserved: 'Kaikki oikeudet pidätetään',
    privacyPolicy: 'Tietosuojakäytäntö',
    termsOfService: 'Käyttöehdot',
    backToTop: 'Takaisin ylös',
    companyAddress: 'Tallinna, Viro',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Seuraa meitä Facebookissa',
      twitter: 'Seuraa meitä Twitterissä',
      instagram: 'Seuraa meitä Instagramissa',
      linkedin: 'Yhdistä LinkedInissä'
    }
  },
  zh: {
    // Navigation
    home: '首页',
    services: '服务',
    contactUs: '联系我们',
    priceCalculator: '价格计算器',
    portfolio: '作品集',
    partners: '合作伙伴',

    // Hero Section
    heroSlogan: '你梦想，我们创造',
    heroSubtitle: '将愿景转化为数字现实',
    hireUs: '雇用我们',

    // Services Section
    webDevelopment: '网站开发',
    webDevelopmentDesc: '使用尖端技术构建的定制网站和网络应用程序',
    uiuxDesign: 'UI/UX设计',
    uiuxDesignDesc: '美观、直观的界面，提升用户体验',
    mobileDev: '移动应用开发',
    mobileDevDesc: '原生和跨平台移动应用程序',
    logodev: '标志设计',
    logodevDesc: '定制标志设计和品牌服务',
    learnMore: '了解更多',

    // Portfolio Section
    recentWorks: '近期作品',
    viewProject: '查看项目',
    prt1: 'Miguel AM 运输',
    prt1Desc: '为葡萄牙一家小型物流公司开发的基于React的平台',
    prt2: 'OKOA画廊',
    prt2Desc: '基于React的在线艺术画廊，具有动态画廊、响应式设计和流畅的导航，展示现代网络开发技能。该公司总部位于爱沙尼亚。',
    prt3: 'Little Lemon餐厅',
    prt3Desc: '功能完善的餐厅网站，具有现代设计、易用的界面和餐桌预订系统。',
    prt4: 'BCocoon Kids',
    prt4Desc: '基于React的儿童服装电子商务平台，提供广泛的产品、安全的支付和订购系统，公司总部位于葡萄牙',
    prt5: 'Cardoso SARL景观设计',
    prt5Desc: '为瑞士一家景观公司开发的基于React的网站。',

    // Partners Section
    ourPartners: '我们的合作伙伴网络',
    partnershipCTA: '有兴趣成为合作伙伴吗？',
    partnerWithUs: '与我们合作',
    collaborating: '与行业领导者合作，追求卓越',

    // Contact Section
    getInTouch: '联系我们',
    letsTalk: '让我们谈谈您的项目',
    projectVision: '准备好提升您的数字形象了吗？',
    name: '您的姓名',
    email: '您的邮箱',
    subject: '主题',
    message: '您的留言',
    send: '发送信息',
    messageSent: '信息已发送！',
    phone: '电话',
    address: '地址',

    // Footer Section
    footerDescription: '我们是一家专注于网络开发、设计和数字解决方案的创意数字机构。我们的热情是将您的想法变为现实。',
    quickLinks: '快速链接',
    contactInfo: '联系信息',
    followUs: '关注我们',
    subscribeNewsletter: '订阅我们的通讯',
    subscribePlaceholder: '输入您的邮箱',
    subscribe: '订阅',
    allRightsReserved: '版权所有',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    backToTop: '返回顶部',
    companyAddress: '塔林，爱沙尼亚',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: '在Facebook上关注我们',
      twitter: '在Twitter上关注我们',
      instagram: '在Instagram上关注我们',
      linkedin: '在LinkedIn上关注我们'
    }
  },
  it: {
    // Navigation
    home: 'Home',
    services: 'Servizi',
    contactUs: 'Contattaci',
    priceCalculator: 'Calcolatore Prezzi',
    portfolio: 'Portfolio',
    partners: 'Partner',

    // Hero Section
    heroSlogan: 'Tu Sogni, Noi Creiamo',
    heroSubtitle: 'Trasformiamo le visioni in realtà digitale',
    hireUs: 'Assumi Noi',

    // Services Section
    webDevelopment: 'Sviluppo Web',
    webDevelopmentDesc: 'Siti web e applicazioni personalizzate costruite con tecnologie all\'avanguardia',
    uiuxDesign: 'Design UI/UX',
    uiuxDesignDesc: 'Interfacce belle e intuitive che migliorano l\'esperienza utente',
    mobileDev: 'Sviluppo Mobile',
    mobileDevDesc: 'Applicazioni mobili native e multipiattaforma',
    logodev: 'Sviluppo Logo',
    logodevDesc: 'Design di logo personalizzato e servizi di branding',
    learnMore: 'Scopri di Più',

    // Portfolio Section
    recentWorks: 'I Nostri Lavori Recenti',
    viewProject: 'Visualizza Progetto',
    prt1: 'Miguel AM Trasporti',
    prt1Desc: 'Una piattaforma basata su React per una piccola azienda di logistica con sede in Portogallo',
    prt2: 'Galleria OKOA',
    prt2Desc: 'Una galleria d\'arte online basata su React con gallerie dinamiche, design responsivo e navigazione fluida, che mostra competenze moderne nello sviluppo web. Questa azienda ha sede in Estonia.',
    prt3: 'Ristorante Little Lemon',
    prt3Desc: 'Un sito web completamente funzionale per ristorante con design moderno, interfaccia facile da usare e sistema di prenotazione tavoli.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'Una piattaforma e-commerce basata su React per abbigliamento bambini, che offre una vasta gamma di prodotti, sistema di pagamento e ordini sicuro, azienda con sede in Portogallo',
    prt5: 'Cardoso SARL Paesaggi',
    prt5Desc: 'Un sito web basato su React per un\'azienda di paesaggistica con sede in Svizzera.',

    // Partners Section
    ourPartners: 'La Nostra Rete di Partner',
    partnershipCTA: 'Interessato a diventare partner?',
    partnerWithUs: 'Diventa Partner',
    collaborating: 'Collaboriamo con i leader del settore per fornire eccellenza',

    // Contact Section
    getInTouch: 'Mettiti in Contatto',
    letsTalk: 'Parliamo del Tuo Progetto',
    projectVision: 'Pronto a portare la tua presenza digitale al livello successivo?',
    name: 'Il Tuo Nome',
    email: 'La Tua Email',
    subject: 'Oggetto',
    message: 'Il Tuo Messaggio',
    send: 'Invia Messaggio',
    messageSent: 'Messaggio Inviato!',
    phone: 'Telefono',
    address: 'Indirizzo',

    // Footer Section
    footerDescription: 'Siamo un\'agenzia digitale creativa specializzata nello sviluppo web, design e soluzioni digitali. La nostra passione è trasformare le tue idee in realtà.',
    quickLinks: 'Link Rapidi',
    contactInfo: 'Informazioni di Contatto',
    followUs: 'Seguici',
    subscribeNewsletter: 'Iscriviti alla Nostra Newsletter',
    subscribePlaceholder: 'Inserisci la tua email',
    subscribe: 'Iscriviti',
    allRightsReserved: 'Tutti i Diritti Riservati',
    privacyPolicy: 'Politica sulla Privacy',
    termsOfService: 'Termini di Servizio',
    backToTop: 'Torna in Cima',
    companyAddress: 'Tallinn, Estonia',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Seguici su Facebook',
      twitter: 'Seguici su Twitter',
      instagram: 'Seguici su Instagram',
      linkedin: 'Connettiti su LinkedIn'
    }
  },
  ru: {
    // Navigation
    home: 'Главная',
    services: 'Услуги',
    contactUs: 'Связаться с нами',
    priceCalculator: 'Калькулятор цен',
    portfolio: 'Портфолио',
    partners: 'Партнеры',

    // Hero Section
    heroSlogan: 'Вы Мечтаете, Мы Создаем',
    heroSubtitle: 'Превращаем видение в цифровую реальность',
    hireUs: 'Нанять нас',

    // Services Section
    webDevelopment: 'Веб-разработка',
    webDevelopmentDesc: 'Индивидуальные веб-сайты и приложения, созданные с использованием передовых технологий',
    uiuxDesign: 'UI/UX Дизайн',
    uiuxDesignDesc: 'Красивые, интуитивно понятные интерфейсы, улучшающие пользовательский опыт',
    mobileDev: 'Мобильная разработка',
    mobileDevDesc: 'Нативные и кроссплатформенные мобильные приложения',
    logodev: 'Разработка логотипа',
    logodevDesc: 'Индивидуальный дизайн логотипа и услуги брендинга',
    learnMore: 'Узнать больше',

    // Portfolio Section
    recentWorks: 'Наши Последние Работы',
    viewProject: 'Посмотреть проект',
    prt1: 'Miguel AM Транспорт',
    prt1Desc: 'Платформа на React для небольшой логистической компании в Португалии',
    prt2: 'Галерея OKOA',
    prt2Desc: 'Онлайн-галерея искусств на React с динамическими галереями, адаптивным дизайном и плавной навигацией, демонстрирующая современные навыки веб-разработки. Компания базируется в Эстонии.',
    prt3: 'Ресторан Little Lemon',
    prt3Desc: 'Полнофункциональный веб-сайт ресторана с современным дизайном, удобным интерфейсом и системой бронирования столиков.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'Платформа электронной коммерции на React для детской одежды, предлагающая широкий ассортимент продукции, безопасную систему оплаты и заказов, компания базируется в Португалии',
    prt5: 'Cardoso SARL Ландшафты',
    prt5Desc: 'Веб-сайт на React для ландшафтной компании в Швейцарии.',

    // Partners Section
    ourPartners: 'Наша Сеть Партнеров',
    partnershipCTA: 'Хотите стать партнером?',
    partnerWithUs: 'Стать партнером',
    collaborating: 'Сотрудничество с лидерами отрасли для достижения совершенства',

    // Contact Section
    getInTouch: 'Свяжитесь с нами',
    letsTalk: 'Давайте обсудим ваш проект',
    projectVision: 'Готовы поднять ваше цифровое присутствие на новый уровень?',
    name: 'Ваше имя',
    email: 'Ваш email',
    subject: 'Тема',
    message: 'Ваше сообщение',
    send: 'Отправить сообщение',
    messageSent: 'Сообщение отправлено!',
    phone: 'Телефон',
    address: 'Адрес',

    // Footer Section
    footerDescription: 'Мы креативное цифровое агентство, специализирующееся на веб-разработке, дизайне и цифровых решениях. Наша страсть - воплощать ваши идеи в реальность.',
    quickLinks: 'Быстрые ссылки',
    contactInfo: 'Контактная информация',
    followUs: 'Подписывайтесь',
    subscribeNewsletter: 'Подпишитесь на нашу рассылку',
    subscribePlaceholder: 'Введите ваш email',
    subscribe: 'Подписаться',
    allRightsReserved: 'Все права защищены',
    privacyPolicy: 'Политика конфиденциальности',
    termsOfService: 'Условия использования',
    backToTop: 'Наверх',
    companyAddress: 'Таллин, Эстония',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Следите за нами на Facebook',
      twitter: 'Следите за нами в Twitter',
      instagram: 'Следите за нами в Instagram',
      linkedin: 'Присоединяйтесь к нам в LinkedIn'
    }
  },

  sv: {
    // Navigation
    home: 'Hem',
    services: 'Tjänster',
    contactUs: 'Kontakta Oss',
    priceCalculator: 'Priskalkylator',
    portfolio: 'Portfolio',
    partners: 'Partners',

    // Hero Section
    heroSlogan: 'Du Drömmer, Vi Skapar',
    heroSubtitle: 'Förvandlar visioner till digital verklighet',
    hireUs: 'Anlita Oss',

    // Services Section
    webDevelopment: 'Webbutveckling',
    webDevelopmentDesc: 'Skräddarsydda webbplatser och applikationer med toppmodern teknik',
    uiuxDesign: 'UI/UX Design',
    uiuxDesignDesc: 'Vackra och intuitiva gränssnitt som förbättrar användarupplevelsen',
    mobileDev: 'Mobilutveckling',
    mobileDevDesc: 'Nativa och plattformsoberoende mobilapplikationer',
    logodev: 'Logotyputveckling',
    logodevDesc: 'Anpassad logotypdesign och varumärkestjänster',
    learnMore: 'Läs Mer',

    // Portfolio Section
    recentWorks: 'Våra Senaste Arbeten',
    viewProject: 'Visa Projekt',
    prt1: 'Miguel AM Transporter',
    prt1Desc: 'En React-baserad plattform för ett litet logistikföretag baserat i Portugal',
    prt2: 'OKOA Galleri',
    prt2Desc: 'Ett React-drivet online-konstgalleri med dynamiska gallerier, responsiv design och sömlös navigering, som visar moderna webbutvecklingsfärdigheter. Detta företag är baserat i Estland.',
    prt3: 'Little Lemon Restaurang',
    prt3Desc: 'En fullt funktionell restaurangwebbplats med modern design, användarvänligt gränssnitt och bordsreserveringssystem.',
    prt4: 'BCocoon Kids',
    prt4Desc: 'En React-baserad e-handelsplattform för barnkläder, som erbjuder ett brett utbud av produkter, säkert betalnings- och beställningssystem, företaget är baserat i Portugal.',
    prt5: 'Cardoso SARL Landskapsarkitektur',
    prt5Desc: 'En React-baserad webbplats för ett landskapsföretag baserat i Schweiz.',

    // Partners Section
    ourPartners: 'Vårt Partnernätverk',
    partnershipCTA: 'Intresserad av att bli partner?',
    partnerWithUs: 'Bli Partner',
    collaborating: 'Samarbetar med branschledare för att leverera excellens',

    // Contact Section
    getInTouch: 'Kontakta Oss',
    letsTalk: 'Låt Oss Prata Om Ditt Projekt',
    projectVision: 'Redo att ta din digitala närvaro till nästa nivå?',
    name: 'Ditt Namn',
    email: 'Din E-post',
    subject: 'Ämne',
    message: 'Ditt Meddelande',
    send: 'Skicka Meddelande',
    messageSent: 'Meddelande Skickat!',
    phone: 'Telefon',
    address: 'Adress',

    // Footer Section
    footerDescription: 'Vi är en kreativ digital byrå specialiserad på webbutveckling, design och digitala lösningar. Vår passion är att förvandla dina idéer till verklighet.',
    quickLinks: 'Snabblänkar',
    contactInfo: 'Kontaktinformation',
    followUs: 'Följ Oss',
    subscribeNewsletter: 'Prenumerera på vårt nyhetsbrev',
    subscribePlaceholder: 'Ange din e-post',
    subscribe: 'Prenumerera',
    allRightsReserved: 'Alla rättigheter förbehållna',
    privacyPolicy: 'Integritetspolicy',
    termsOfService: 'Användarvillkor',
    backToTop: 'Tillbaka till toppen',
    companyAddress: 'Tallinn, Estland',
    companyPhone: '+372 58 34 9800',
    companyEmail: 'info@tgwebdesign.net',
    socialMedia: {
      facebook: 'Följ oss på Facebook',
      twitter: 'Följ oss på Twitter',
      instagram: 'Följ oss på Instagram',
      linkedin: 'Anslut på LinkedIn'
    }
  }
};

const languages = [
  { 
    code: 'pt', 
    label: 'Português',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#ff0000"/>
        <rect width="240" height="480" fill="#006600"/>
        <circle cx="240" cy="240" r="80" fill="#ffff00"/>
        <circle cx="240" cy="240" r="72" fill="#ff0000"/>
        <circle cx="240" cy="240" r="64" fill="#fff"/>
      </svg>
    )
  },
  { 
    code: 'en', 
    label: 'English',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#012169"/>
        <path fill="#FFF" d="M75,0l244,181L562,0h78v62L400,241l240,178v61h-80L320,301L81,480H0v-60l239-178L0,64V0h75z"/>
        <path fill="#C8102E" d="M424,281l216,159v40L369,281H424z M240,301l6,35L54,480H0L240,301z M640,0v3L391,191l2-44L590,0H640z M0,0l239,176h-60L0,42V0z"/>
        <path fill="#FFF" d="M241,0v480h160V0H241zM0,160v160h640V160H0z"/>
        <path fill="#C8102E" d="M0,193v96h640v-96H0zM273,0v480h96V0H273z"/>
      </svg>
    )
  },
  {
    code: 'et',
    label: 'Eesti',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="160" fill="#0072CE"/>
        <rect y="160" width="640" height="160" fill="#000000"/>
        <rect y="320" width="640" height="160" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    code: 'fi',
    label: 'Suomi',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#FFFFFF"/>
        <rect y="175" width="640" height="130" fill="#003580"/>
        <rect x="175" width="130" height="480" fill="#003580"/>
      </svg>
    )
  },
  {
    code: 'sv',
    label: 'Svenska',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#006AA7"/>
        <rect x="200" width="40" height="480" fill="#FECC00"/>
        <rect y="240" width="640" height="40" fill="#FECC00"/>
      </svg>
    )
  },
  // Add these to your languages array
  {
    code: 'fr',
    label: 'Français',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="213" height="480" fill="#002395"/>
        <rect x="213" width="214" height="480" fill="#FFFFFF"/>
        <rect x="427" width="213" height="480" fill="#ED2939"/>
      </svg>
    )
  },
  {
    code: 'es',
    label: 'Español',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#AA151B"/>
        <rect y="120" width="640" height="240" fill="#F1BF00"/>
      </svg>
    )
  },
  {
    code: 'de',
    label: 'Deutsch',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="160" fill="#000000"/>
        <rect y="160" width="640" height="160" fill="#DD0000"/>
        <rect y="320" width="640" height="160" fill="#FFCE00"/>
      </svg>
    )
  },
  // Add these to your languages array
  {
    code: 'zh',
    label: '中文',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="480" fill="#EE1C25"/>
        <g fill="#FFFF00">
          <path d="M128,96l9,26.5l24-15l-9,26.5l24-15l-9,26.5l24-15l-9,26.5l24-15l-9,26.5l24-15"/>
          <path d="M320,160 l-50,-36 20,58 -50,-36 20,58"/>
        </g>
      </svg>
    )
  },
  {
    code: 'it',
    label: 'Italiano',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="213" height="480" fill="#009246"/>
        <rect x="213" width="214" height="480" fill="#FFFFFF"/>
        <rect x="427" width="213" height="480" fill="#CE2B37"/>
      </svg>
    )
  },
  {
    code: 'ru',
    label: 'Русский',
    flag: (
      <svg className="flag-icon" viewBox="0 0 640 480">
        <rect width="640" height="160" fill="#FFFFFF"/>
        <rect y="160" width="640" height="160" fill="#0039A6"/>
        <rect y="320" width="640" height="160" fill="#D52B1E"/>
      </svg>
    )
  }
];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get the language from localStorage, fallback to browser language or 'en'
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
    
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'en';
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    translations,
    languages, // Export languages array for use in components
    t: translations[language] // Shorthand for current language translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Helper hook for getting translations
export const useTranslation = () => {
  const { t } = useLanguage();
  return t;
};