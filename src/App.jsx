import logoIcon from './assets/logo-icon.png'
import './App.css'

const WHATSAPP_NUMBER = '15593074688'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Can we get more information about the service?'
)}`
const GMAIL_URL =
  'https://mail.google.com/mail/?view=cm&fs=1&to=flyingbucksdispatch@gmail.com&su=' +
  encodeURIComponent('Truck Dispatch Inquiry')

const SERVICES = [
  {
    icon: '🚚',
    title: 'Load Booking & Planning',
    text: 'We source and book the best-paying loads matched to your truck, lanes, and schedule.',
  },
  {
    icon: '💵',
    title: 'Rate Negotiation',
    text: 'Our dispatchers negotiate top rates with brokers and shippers on your behalf, every load.',
  },
  {
    icon: '📋',
    title: 'Paperwork & Invoicing',
    text: 'Rate confirmations, BOLs, and invoicing handled for you — less paperwork, more driving.',
  },
  {
    icon: '📍',
    title: 'Route Planning',
    text: 'Optimized routes that save fuel, time, and keep you compliant with hours-of-service.',
  },
  {
    icon: '📞',
    title: '24/7 Dispatch Support',
    text: 'Round-the-clock support for check calls, detention issues, and on-road emergencies.',
  },
  {
    icon: '✅',
    title: 'Compliance Tracking',
    text: 'We keep your documentation and broker packets current so you stay booking without delays.',
  },
]

const WHY_US = [
  { icon: '🧭', title: 'Experienced Dispatch Team', text: 'Dispatchers who know the lanes, the brokers, and how to keep your wheels turning.' },
  { icon: '💬', title: 'Transparent Communication', text: 'You always know what load is booked, what it pays, and when to be there.' },
  { icon: '⚡', title: 'Fast Response Time', text: 'Quick answers on WhatsApp or email — no waiting around for a callback.' },
  { icon: '🗺️', title: 'Nationwide Coverage', text: 'Load sourcing across regions, so your truck is never sitting idle for long.' },
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <img src={logoIcon} alt="Flying Bucks Dispatch logo" className="brand-logo" />
            <span className="brand-name">
              Flying Bucks <span className="brand-name-accent">Dispatch</span>
            </span>
          </a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-header">
            WhatsApp Us
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <p className="eyebrow">Truck Dispatch Services</p>
              <h1>
                We Keep Your Truck Loaded &amp; Your Wheels Moving
              </h1>
              <p className="hero-sub">
                Flying Bucks Dispatch handles load booking, rate negotiation, and
                paperwork for owner-operators and small fleets — so you can focus
                on the road, not the phone.
              </p>
              <div className="hero-actions">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  💬 Chat on WhatsApp
                </a>
                <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  ✉️ Email Us
                </a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-circle">
                <span className="hero-emoji">🚛</span>
              </div>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="container strip-inner">
            <div className="strip-item"><strong>Nationwide</strong><span>Load Coverage</span></div>
            <div className="strip-item"><strong>24/7</strong><span>Dispatch Support</span></div>
            <div className="strip-item"><strong>Direct</strong><span>WhatsApp &amp; Email Access</span></div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <p className="eyebrow center">What We Do</p>
            <h2 className="section-title center">Our Dispatch Services</h2>
            <p className="section-sub center">
              Everything you need off your plate so you can keep your truck on the road.
            </p>
            <div className="grid">
              {SERVICES.map((s) => (
                <div className="card" key={s.title}>
                  <div className="card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="section section-alt">
          <div className="container">
            <p className="eyebrow center">Why Flying Bucks</p>
            <h2 className="section-title center">Why Truckers Choose Us</h2>
            <div className="grid grid-4">
              {WHY_US.map((w) => (
                <div className="why-item" key={w.title}>
                  <div className="why-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-inner">
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="section-title">Built By People Who Understand the Road</h2>
              <p className="about-text">
                Flying Bucks Dispatch was started to give owner-operators and small
                fleets a dispatch partner they can trust — clear communication, fair
                rates, and someone who actually picks up the phone. We handle the
                back-office work of finding loads and negotiating rates, so you can
                spend more time driving and less time chasing paperwork.
              </p>
              <p className="about-text">
                Whether you're running solo or managing a small fleet, we work as an
                extension of your business to keep miles profitable and stress low.
              </p>
            </div>
            <div className="about-visual" aria-hidden="true">
              <span>📦</span>
              <span>🛣️</span>
              <span>🚚</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-inner">
            <p className="eyebrow center light">Get In Touch</p>
            <h2 className="section-title center light">Ready to Get Loaded?</h2>
            <p className="section-sub center light">
              Reach out on WhatsApp or email and let's get your truck booked.
            </p>
            <div className="contact-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                💬 WhatsApp: +1 559 307 4688
              </a>
              <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                ✉️ flyingbucksdispatch@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logoIcon} alt="Flying Bucks Dispatch logo" className="footer-logo" />
            <span>Flying Bucks Dispatch</span>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Flying Bucks Dispatch. All rights reserved.
          </p>
          <div className="footer-links">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fab"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  )
}

export default App
