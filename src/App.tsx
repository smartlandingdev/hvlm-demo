import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <div className="container">
            <div className="nav-wrapper">
              <div className="logo">
                <h1>HVLM<span>Advocacia</span></h1>
              </div>
              <button
                className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>Início</a></li>
                <li><a href="#atuacao" onClick={() => scrollToSection('atuacao')}>Áreas de Atuação</a></li>
                <li><a href="#sobre" onClick={() => scrollToSection('sobre')}>Quem Somos</a></li>
                <li><a href="#parcerias" onClick={() => scrollToSection('parcerias')}>Parcerias</a></li>
                <li><a href="#avaliacoes" onClick={() => scrollToSection('avaliacoes')}>Avaliações</a></li>
                <li><a href="#contato" className="btn-contact" onClick={() => scrollToSection('contato')}>Fale Conosco</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">Escritório de Advocacia com Atuação em Defesa em Busca e Apreensão de Veículos e no Direito de Família</h2>
            <p className="hero-subtitle">Somos especialistas na recuperação de veículos apreendidos em ação de busca e apreensão. Atuamos em todas as áreas do Direito de Família, oferecendo suporte jurídico completo para as mais diversas necessidades.</p>
            <a href="#contato" className="btn-primary" onClick={(e) => {e.preventDefault(); scrollToSection('contato')}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="20" height="20">
                <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
              </svg>
              Fale com um Especialista
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="24" height="24">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/>
                </svg>
              </div>
              <h3>Dedicação para o Melhor Resultado</h3>
              <p>Especialistas capacitados e comprometidos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                  <path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"/>
                </svg>
              </div>
              <h3>Atendimento Online e Imediato</h3>
              <p>Comodidade e rapidez no primeiro contato</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                </svg>
              </div>
              <h3>Acompanhamento em Tempo Real</h3>
              <p>Transparência total sobre seu processo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas de Atuação */}
      <section id="atuacao" className="areas-atuacao">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Áreas de Atuação</h2>
            <div className="title-underline"></div>
          </div>
          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                </svg>
              </div>
              <h3>Defesa em Busca e Apreensão de Veículos</h3>
              <p>Atuamos de forma eficaz em processos de busca e apreensão de veículos, defendendo os direitos dos proprietários que enfrentam dificuldades devido a inadimplência ou ações de credores.</p>
              <ul className="area-benefits">
                <li><span className="check-icon">✓</span> Análise detalhada do caso</li>
                <li><span className="check-icon">✓</span> Estratégia personalizada</li>
                <li><span className="check-icon">✓</span> Proteção do patrimônio</li>
              </ul>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                </svg>
              </div>
              <h3>Direito de Família</h3>
              <p>Cuidando do seu futuro com empatia e profissionalismo. O direito de família trata de questões sensíveis, e estamos aqui para oferecer apoio em cada etapa do processo.</p>
              <ul className="area-benefits">
                <li><span className="check-icon">✓</span> Divórcio</li>
                <li><span className="check-icon">✓</span> Partilha de Bens</li>
                <li><span className="check-icon">✓</span> Guarda e Visitas</li>
                <li><span className="check-icon">✓</span> Pensão Alimentícia</li>
              </ul>
            </div>
            <div className="area-card highlighted">
              <div className="area-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                  <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352l41.8 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-76 0-4 0-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/>
                </svg>
              </div>
              <h3>Parcerias Estratégicas</h3>
              <p>Atendimento jurídico completo e personalizado para sua necessidade, através de parcerias estratégicas com especialistas nas diversas áreas do direito.</p>
              <ul className="area-benefits">
                <li><span className="check-icon">✓</span> Rede de especialistas</li>
                <li><span className="check-icon">✓</span> Atendimento multidisciplinar</li>
                <li><span className="check-icon">✓</span> Soluções personalizadas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="quem-somos">
        <div className="container">
          <h2 className="section-title">Quem Somos</h2>
          <div className="title-underline"></div>
          <div className="quem-somos-content">
            <div className="quem-somos-text">
              <p className="intro-text">Somos um escritório de advocacia especializado em oferecer soluções jurídicas personalizadas com excelência e comprometimento.</p>

              <div className="sobre-detalhes">
                <div className="sobre-item">
                  <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="20" height="20">
                      <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                    </svg>
                    Defesa em Busca e Apreensão de Veículos
                  </h4>
                  <p>Defendemos os direitos dos proprietários em processos de busca e apreensão de veículos, analisando cada caso estrategicamente para proteger o patrimônio do cliente.</p>
                </div>

                <div className="sobre-item">
                  <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="20" height="20">
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                    </svg>
                    Direito de Família
                  </h4>
                  <p>Oferecemos apoio em questões de divórcio, partilha de bens, guarda e pensão alimentícia com empatia e profissionalismo, buscando soluções justas e personalizadas para cada família.</p>
                </div>

                <div className="sobre-item">
                  <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" width="20" height="20">
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                    </svg>
                    Nosso Compromisso
                  </h4>
                  <p>Oferecer soluções personalizadas e cuidar dos aspectos legais e emocionais, garantindo tranquilidade e confiança.</p>
                </div>
              </div>
            </div>
            <div className="quem-somos-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcerias Estrategicas */}
      <section id="parcerias" className="parcerias">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Parcerias Estratégicas</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Seus direitos protegidos com expertise e dedicação</p>
          </div>

          <div className="parcerias-intro">
            <p className="intro-text">Em um mundo onde as leis mudam constantemente e os problemas legais se acumulam, você precisa de um guia confiável para alcançar seus objetivos.</p>
          </div>

          <div className="parcerias-grid">
            <div className="parceria-card">
              <div className="parceria-number">01</div>
              <h3>Seu caso é único e merece uma solução sob medida</h3>
              <p>Com nosso atendimento jurídico completo e personalizado, você terá mais do que informações: terá uma estratégia individualizada, construída para você.</p>
            </div>

            <div className="parceria-card">
              <div className="parceria-number">02</div>
              <h3>Equipe multidisciplinar de especialistas renomados</h3>
              <p>Conte com uma equipe multidisciplinar de especialistas renomados em cada área do direito. Nossa equipe trabalha em sinergia para oferecer uma análise completa e soluções inovadoras para o seu caso.</p>
            </div>

            <div className="parceria-card">
              <div className="parceria-number">03</div>
              <h3>Deixe a burocracia conosco e foque no que realmente importa</h3>
              <p>Com nosso acompanhamento dedicado, você terá a tranquilidade de saber que seus direitos estão protegidos e seus interesses são representados com ética e profissionalismo.</p>
            </div>
          </div>

          <div className="parcerias-cta">
            <h3>Não perca mais tempo com dúvidas e incertezas</h3>
            <p>Agende sua consulta agora e dê o primeiro passo para conquistar seus objetivos.</p>
            <a href="#contato" className="btn-primary" onClick={(e) => {e.preventDefault(); scrollToSection('contato')}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="20" height="20">
                <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm329 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"/>
              </svg>
              Dê o Primeiro Passo Rumo à Solução que Você Busca
            </a>
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section id="avaliacoes" className="avaliacoes">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
            <div className="title-underline"></div>
          </div>
          <div className="avaliacoes-grid">
            <div className="avaliacao-card">
              <div className="avaliacao-header">
                <div className="avaliacao-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                  </svg>
                </div>
                <div className="avaliacao-info">
                  <h4>Marcelo Leal</h4>
                  <div className="avaliacao-stars">
                    <span>★★★★★</span>
                  </div>
                  <p className="avaliacao-data">Há 6 meses</p>
                </div>
              </div>
            </div>

            <div className="avaliacao-card">
              <div className="avaliacao-header">
                <div className="avaliacao-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                  </svg>
                </div>
                <div className="avaliacao-info">
                  <h4>Leandro Hediger</h4>
                  <div className="avaliacao-stars">
                    <span>★★★★★</span>
                  </div>
                  <p className="avaliacao-data">Há 6 meses</p>
                </div>
              </div>
            </div>

            <div className="avaliacao-card">
              <div className="avaliacao-header">
                <div className="avaliacao-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                  </svg>
                </div>
                <div className="avaliacao-info">
                  <h4>Rosangela Santos</h4>
                  <div className="avaliacao-stars">
                    <span>★★★★★</span>
                  </div>
                  <p className="avaliacao-data">Há 8 meses</p>
                </div>
              </div>
              <p className="avaliacao-texto">Dr Humberto é um excelente profissional, extremamente confiável, trabalha com dedicação respeitando prazos e sempre deixa o cliente atualizado sobre o processo.</p>
            </div>
          </div>
          <div className="avaliacoes-link">
            <a href="https://share.google/o4ntyTJuD2imK444u" target="_blank" rel="noopener noreferrer" className="btn-google-reviews">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" fill="currentColor" width="20" height="20">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
              </svg>
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contato">
        <div className="contato-map-bg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.738261949474!2d-49.20700192378056!3d-25.48360147759829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f1f1e0e0e1%3A0x1e1e1e1e1e1e1e1e!2sAv.%20Sen.%20Salgado%20Filho%2C%206465%20-%20Curitiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Escritório"
          ></iframe>
          <a href="https://maps.app.goo.gl/VpfagVcKwfRYT4SL6" target="_blank" rel="noopener noreferrer" className="map-overlay"></a>
        </div>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Entre em Contato</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Estamos prontos para atender você</p>
          </div>
          <div className="contato-info">
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
              </div>
              <h3>Telefone</h3>
              <a href="tel:+5541984199347">(41) 98419-9347</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </div>
              <h3>Email</h3>
              <a href="mailto:hvlmadv@gmail.com">hvlmadv@gmail.com</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </div>
              <h3>Instagram</h3>
              <a href="https://instagram.com/hvlm_advocacia" target="_blank" rel="noopener noreferrer">@hvlm_advocacia</a>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
              </div>
              <h3>Endereço</h3>
              <p>Escritório residencial<br/>Avenida Senador Salgado Filho 6465<br/>Curitiba-PR, CEP 81580-000</p>
              <a href="https://maps.app.goo.gl/VpfagVcKwfRYT4SL6" target="_blank" rel="noopener noreferrer" className="btn-maps">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" width="18" height="18">
                  <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </svg>
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/5541984199347" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>HVLM Advocacia</h3>
              <p className="footer-description">Escritório de advocacia especializado em Defesa em Busca e Apreensão de Veículos e Direito de Família, oferecendo soluções jurídicas personalizadas com excelência e comprometimento.</p>
              <p className="footer-oab">OAB/PR 94864</p>
            </div>

            <div className="footer-section">
              <h4>Contato</h4>
              <ul className="footer-contact">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="16" height="16">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                  </svg>
                  <a href="tel:+5541984199347">(41) 98419-9347</a>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="16" height="16">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                  <a href="mailto:hvlmadv@gmail.com">hvlmadv@gmail.com</a>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" width="16" height="16">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                  </svg>
                  <span>Av. Sen. Salgado Filho, 6465<br/>Curitiba-PR, CEP 81580-000</span>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Áreas de Atuação</h4>
              <ul className="footer-links">
                <li><a href="#atuacao" onClick={() => scrollToSection('atuacao')}>Busca e Apreensão de Veículos</a></li>
                <li><a href="#atuacao" onClick={() => scrollToSection('atuacao')}>Direito de Família</a></li>
                <li><a href="#parcerias" onClick={() => scrollToSection('parcerias')}>Parcerias Estratégicas</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="footer-social">
                <a href="https://instagram.com/hvlm_advocacia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </a>
                <a href="https://wa.me/5541984199347" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 HVLM Advocacia. Todos os direitos reservados.</p>
            <p className="footer-credits">Desenvolvido por <a href="https://smartlanding.com.br" target="_blank" rel="noopener noreferrer">Smart Landing</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
