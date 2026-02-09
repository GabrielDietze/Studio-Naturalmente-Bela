import React, { useState } from 'react';
import './App.css';
import { IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io5';
import { HiSparkles, HiHeart } from 'react-icons/hi2';

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

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
            Naturalmente Bela
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
            <h1 className="logo" role="banner">Naturalmente Bela</h1>
            <p className="subtitle">Salão de Beleza & Estética</p>
            <p className="hero-description">
              Um espaço dedicado ao cuidado integral, onde beleza e bem-estar 
              caminham juntos de forma equilibrada, natural e humanizada.
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
          Mais do que oferecer serviços estéticos, o Studio Naturalmente Bela entrega experiência, 
          acolhimento e transformação emocional, respeitando a individualidade de cada cliente.
        </p>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 3 - PILARES DO STUDIO */}
      <section className="section pillars" id="pilares" aria-label="Nossos Pilares">
        <div className="section-cta-top">
          <button 
            className="cta-button-inline cta-instagram-inline" 
            onClick={handleInstagramClick}
            aria-label="Ver no Instagram"
          >
            <IoLogoInstagram className="cta-icon" />
            Veja nosso trabalho no Instagram
          </button>
        </div>
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
              Massoterapia humanizada e consciente, voltada ao equilíbrio físico e emocional. 
              Técnicas naturais que respeitam o corpo, escutam suas necessidades e promovem 
              acolhimento, equilíbrio e reconexão.
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
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 5 - SERVIÇOS */}
      <section className="section services" id="servicos" aria-label="Serviços Oferecidos">
        <h2 className="section-title">Serviços</h2>
        
        <div className="section-cta-services">
          <p className="cta-text">Interessada em algum serviço?</p>
          <div className="cta-group">
            <button 
              className="cta-button-small cta-whatsapp" 
              onClick={handleWhatsAppClick}
              aria-label="Agendar pelo WhatsApp"
            >
              <IoLogoWhatsapp className="cta-icon" />
              WhatsApp
            </button>
            <button 
              className="cta-button-small cta-instagram" 
              onClick={handleInstagramClick}
              aria-label="Ver no Instagram"
            >
              <IoLogoInstagram className="cta-icon" />
              Instagram
            </button>
          </div>
        </div>
        
        <div className="service-category">
          <h3 className="service-category-title">Beleza</h3>
          <ul className="service-list">
            <li>Escova e hidratação capilar</li>
            <li>Coloração capilar</li>
            <li>Design de sobrancelhas</li>
            <li>Depilação</li>
          </ul>
        </div>

        <div className="service-category">
          <h3 className="service-category-title">Estética & Bem-estar</h3>
          <ul className="service-list">
            <li>Drenagem linfática</li>
            <li>Massagem relaxante</li>
            <li>Reflexologia podal</li>
            <li>Revitalização facial</li>
          </ul>
        </div>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 6 - DIFERENCIAIS */}
      <section className="section differentials" id="diferenciais" aria-label="Nossos Diferenciais">
        <h2 className="section-title">O que nos torna diferentes</h2>
        
        <div className="differential-list">
          <p className="differential-item">
            Atendimento individualizado, sem pressa, baseado na escuta ativa das suas necessidades.
          </p>
          <p className="differential-item">
            Cada procedimento começa com conversa, avaliação e orientação personalizada.
          </p>
          <p className="differential-item">
            Ambiente tranquilo e seguro, onde você faz uma pausa da rotina.
          </p>
          <p className="differential-item">
            Mais de duas décadas de experiência somadas à formação contínua.
          </p>
          <p className="differential-item">
            Ética profissional: respeito, responsabilidade e transparência em cada atendimento.
          </p>
          <p className="differential-item">
            Não trabalhamos com padrões impostos, mas com valorização da sua beleza real.
          </p>
        </div>
      </section>

      {/* DIVISÓRIA */}
      <div className="divider"></div>

      {/* SEÇÃO 7 - CONTATO */}
      <section className="section contact" id="contato" aria-label="Contato">
        <h2 className="section-title">Agende seu horário</h2>
        <p className="contact-text">
          Entre em contato pelo WhatsApp e reserve um momento de cuidado para você.
        </p>
        <button 
          className="whatsapp-button" 
          onClick={handleWhatsAppClick}
          aria-label="Enviar mensagem pelo WhatsApp"
        >
          <IoLogoWhatsapp className="cta-icon" />
          Falar pelo WhatsApp
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-text">Studio Naturalmente Bela</p>
        <p className="footer-tagline">Beleza com propósito. Cuidado com verdade. Bem-estar de forma natural.</p>
      </footer>
    </div>
  );
}

export default App;
