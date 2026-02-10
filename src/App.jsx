import React, { useState } from 'react';
import './App.css';
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io5';
import { HiSparkles, HiHeart } from 'react-icons/hi2';
import { MdLocationOn, MdHearing, MdEco, MdSelfImprovement, MdSchool, MdHome, MdFavoriteBorder } from 'react-icons/md';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp (formato: 5511999999999)
    const phoneNumber = '5511999999999';
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário no Studio Naturalmente Bela.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    // Substitua pelo seu Instagram
    const instagramHandle = 'naturalmente.bela';
    window.open(`https://www.instagram.com/${instagramHandle}`, '_blank');
  };

  const handleMapsClick = () => {
    const address = 'Rua Cordelina Silveira Mattos, 77, Estoril, Belo Horizonte - MG';
    window.open(`https://www.google.com/maps?q=${encodeURIComponent(address)}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const servicesClean = [
    { name: "Massoterapia", desc: "Relaxamento profundo e alívio de tensões" },
    { name: "Estética Facial", desc: "Tratamentos para renovação e equilíbrio da pele" },
    { name: "SPA & Rituais", desc: "Experiências sensoriais completas" },
    { name: "Corpo & Drenagem", desc: "Sensação de leveza e bem-estar" },
    { name: "Pés & Reflexologia", desc: "Equilíbrio do corpo através dos pés" },
    { name: "Tratamentos Especiais", desc: "Protocolos exclusivos do studio" }
  ];

  return (
    <div className="app">
      {/* MENU DE NAVEGAÇÃO */}
      <nav className="navbar" role="navigation" aria-label="Menu principal">
        <div className="nav-container">
          <button 
            className="logo-nav" 
            onClick={() => scrollToSection('home')}
            aria-label="Voltar ao início"
          >
            <img
              src="/images/logo.png"
              alt="Naturalmente Bela"
              className="logo-image"
            />
          </button>
          
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')}>Início</button></li>
            <li><button onClick={() => scrollToSection('pilares')}>Pilares</button></li>
            <li><button onClick={() => scrollToSection('profissionais')}>Profissionais</button></li>
            <li><button onClick={() => scrollToSection('servicos')}>Serviços</button></li>
            <li><button onClick={() => scrollToSection('diferenciais')}>Diferenciais</button></li>
            <li><button onClick={() => scrollToSection('contato')} className="nav-cta">Agendar</button></li>
          </ul>
        </div>
      </nav>

      {/* SEÇÃO 1 - HEADER/TOPO - HERO */}
      <header className="section header hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <img 
              src="/images/logo.png" 
              alt="Naturalmente Bela" 
              className="hero-logo"
            />
            <p className="subtitle">Massoterapia, Bem-estar & Beleza</p>
            <p className="hero-description">
              Um espaço dedicado ao cuidado integral, onde massoterapia humanizada, 
              bem-estar e beleza natural caminham juntos de forma equilibrada e consciente.
            </p>
            <div className="hero-cta">
              <button 
                className="cta-button cta-whatsapp" 
                onClick={handleWhatsAppClick}
                aria-label="Agendar pelo WhatsApp"
              >
                <IoLogoWhatsapp className="cta-icon" />
                Agendar Horário
              </button>
              <button 
                className="cta-button cta-instagram" 
                onClick={handleInstagramClick}
                aria-label="Seguir no Instagram"
              >
                <IoLogoInstagram className="cta-icon" />
                Instagram
              </button>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image" role="img" aria-label="Studio Naturalmente Bela"></div>
          </div>
        </div>
      </header>

      {/* SEÇÃO 2 - FRASE INSTITUCIONAL */}
      <section className="section intro" aria-label="Apresentação">
        <p className="intro-text">
          Mais do que oferecer serviços estéticos, o Studio Naturalmente Bela entrega 
          experiências de massoterapia humanizada, acolhimento genuíno e transformação 
          através do toque consciente, respeitando a individualidade de cada cliente.
        </p>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 3 - PILARES DO STUDIO */}
      <section className="section pillars" id="pilares" aria-label="Nossos Pilares">
        <div className="pillars-grid">
          <div className="pillar">
            <div className="pillar-image pillar-image-beauty" role="img" aria-label="Serviços de Beleza">
              <div className="pillar-icon">
                <HiSparkles />
              </div>
            </div>
            <h2>Beleza</h2>
            <p>
              Realçar a beleza natural, elevar a autoestima e garantir conforto em cada atendimento. 
              Com 20 anos de experiência, cada serviço é tratado como um momento de cuidado pessoal, 
              onde você se sente valorizada e bem atendida.
            </p>
          </div>
          <div className="pillar">
            <div className="pillar-image pillar-image-wellness" role="img" aria-label="Serviços de Bem-estar">
              <div className="pillar-icon">
                <HiHeart />
              </div>
            </div>
            <h2>Bem-estar</h2>
            <p>
              Massoterapia humanizada, técnicas naturais de relaxamento e revitalização 
              que promovem equilíbrio físico e emocional. Cada sessão é um convite à reconexão, 
              ao acolhimento e à transformação através do toque consciente, respeitando 
              as necessidades individuais do seu corpo e espírito.
            </p>
          </div>
        </div>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 4 - PROFISSIONAIS */}
      <section className="section professionals" id="profissionais" aria-label="Nossas Profissionais">
        <h2 className="section-title">Profissionais</h2>
        
        <div className="professional-card">
          <div className="professional-image professional-image-maria" role="img" aria-label="Maria do Socorro Magalhães"></div>
          <div className="professional-content">
            <h3 className="professional-name">Maria do Socorro Magalhães</h3>
            <p className="professional-area">Massoterapia & Estética Natural</p>
            <p className="professional-description">
              Formada em Massoterapia Humanizada e Estética Natural, com participação no Congresso 
              TopCorpus (SP) e cursos como TFP – Terapia Facial. Maria atua com uma abordagem 
              humanizada e consciente, voltada ao equilíbrio físico e emocional. Seu trabalho é 
              baseado em técnicas naturais, respeito ao corpo e escuta das necessidades individuais. 
              Aqui, o toque é entendido como um instrumento de acolhimento, equilíbrio e reconexão.
            </p>
          </div>
        </div>

        <div className="professional-card">
          <div className="professional-image professional-image-andreia" role="img" aria-label="Andreia Silva Nogueira"></div>
          <div className="professional-content">
            <h3 className="professional-name">Andreia Silva Nogueira</h3>
            <p className="professional-area">Área da Beleza</p>
            <p className="professional-description">
              Com 20 anos de trajetória, Andreia trabalha com sensibilidade estética para realçar 
              a beleza natural de cada cliente. Seu trabalho vai além da técnica: é um momento de 
              cuidado pessoal onde você experimenta conforto, atenção genuína e sai do studio mais 
              confiante. O foco está na saúde dos fios, harmonia do visual e resultados naturais 
              que respeitam quem você é.
            </p>
          </div>
        </div>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 5 - SERVIÇOS */}
      <section className="section services" id="servicos" aria-label="Serviços Oferecidos">
        <div className="services-header">
          <h2 className="services-title">Serviços</h2>
          <span className="services-title-line" aria-hidden="true"></span>
        </div>

        <div className="services-clean-grid">
          {servicesClean.map((service, idx) => (
            <div key={idx} className="services-clean-item">
              <h3 className="services-clean-name">{service.name}</h3>
              <p className="services-clean-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-clean-cta">
          <button className="services-clean-link" onClick={handleWhatsAppClick}>
            Agendar Experiência
          </button>
        </div>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 6 - DIFERENCIAIS */}
      <section className="section differentials" id="diferenciais" aria-label="Nossos Diferenciais">
        <h2 className="section-title">O que nos torna diferentes</h2>
        
        <div className="differential-grid">
          <div className="differential-card">
            <div className="differential-icon differential-icon-1">
              <MdHearing size={40} />
            </div>
            <h3>Escuta Ativa</h3>
            <p>Cada cliente é único. Conversamos antes, durante e depois para entender suas verdadeiras necessidades.</p>
          </div>
          
          <div className="differential-card">
            <div className="differential-icon differential-icon-2">
              <MdEco size={40} />
            </div>
            <h3>Abordagem Natural</h3>
            <p>Técnicas humanizadas e conscientes que respeitam seu corpo, sua pele e seu bem-estar integral.</p>
          </div>

          <div className="differential-card">
            <div className="differential-icon differential-icon-3">
              <MdSelfImprovement size={40} />
            </div>
            <h3>Toque Terapêutico</h3>
            <p>O toque é um instrumento de acolhimento. Cada movimento é pensado para sua reconexão e equilíbrio.</p>
          </div>

          <div className="differential-card">
            <div className="differential-icon differential-icon-4">
              <MdSchool size={40} />
            </div>
            <h3>Expertise & Evolução</h3>
            <p>Mais de 20 anos de experiência + formação contínua em cursos especializados. Conhecimento que se renova.</p>
          </div>

          <div className="differential-card">
            <div className="differential-icon differential-icon-5">
              <MdHome size={40} />
            </div>
            <h3>Espaço de Paz</h3>
            <p>Ambiente tranquilo e acolhedor onde você realmente se desconecta, descansa e se reconecta consigo mesma.</p>
          </div>

          <div className="differential-card">
            <div className="differential-icon differential-icon-6">
              <MdFavoriteBorder size={40} />
            </div>
            <h3>Sem Padrões</h3>
            <p>Não acreditamos em beleza única. Valorizamos sua singularidade, sua personalidade, sua beleza real.</p>
          </div>
        </div>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 7 - CONTATO */}
      <section className="section contact" id="contato" aria-label="Contato">
        <h2 className="section-title">Venha nos conhecer</h2>
        <p className="contact-text">
          Studio Naturalmente Bela – Um espaço dedicado ao seu bem-estar e beleza.
        </p>

        <div className="contact-wrapper">
          {/* Contact Info Cards */}
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <MdLocationOn size={32} />
              </div>
              <h3>Localização</h3>
              <p className="contact-info">
                Rua Cordelina Silveira Mattos, 77<br/>
                Estoril, Belo Horizonte - MG
              </p>
              <div className="contact-actions">
                <button 
                  className="contact-button contact-button-outline" 
                  onClick={handleMapsClick}
                  aria-label="Abrir localização no Google Maps"
                >
                  Abrir no Maps
                </button>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <IoLogoWhatsapp size={32} />
              </div>
              <h3>WhatsApp</h3>
              <p className="contact-info">Fale conosco e agende seu atendimento</p>
              <div className="contact-actions">
                <button 
                  className="contact-button whatsapp-button" 
                  onClick={handleWhatsAppClick}
                  aria-label="Enviar mensagem pelo WhatsApp"
                >
                  <IoLogoWhatsapp className="cta-icon" />
                  Enviar Mensagem
                </button>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <IoLogoInstagram size={32} />
              </div>
              <h3>Instagram</h3>
              <p className="contact-info">Veja nossos trabalhos e novidades</p>
              <div className="contact-actions">
                <button 
                  className="contact-button instagram-button" 
                  onClick={handleInstagramClick}
                  aria-label="Seguir no Instagram"
                >
                  <IoLogoInstagram className="cta-icon" />
                  Seguir
                </button>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="maps-container">
            <iframe 
              src="https://www.google.com/maps?q=Rua%20Cordelina%20Silveira%20Mattos,%2077,%20Estoril,%20Belo%20Horizonte%20-%20MG&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen={true}
              loading="lazy"
              title="Studio Naturalmente Bela - Localização"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img
          src="/images/logo.png"
          alt="Naturalmente Bela"
          className="footer-logo"
        />
        <p className="footer-tagline">Beleza com propósito. Cuidado com verdade. Bem-estar de forma natural.</p>
      </footer>
    </div>
  );
}

export default App;
