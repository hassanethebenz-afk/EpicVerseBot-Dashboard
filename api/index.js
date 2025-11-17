export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EpicVerse Pro | Premium Discord Bot</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
* { 
  margin:0; 
  padding:0; 
  box-sizing:border-box; 
}

:root {
  --neon-cyan: #00fff0;
  --neon-purple: #b967ff;
  --neon-pink: #ff00ff;
  --neon-green: #00ff88;
  --dark-space: #0a0a1a;
  --deep-space: #050510;
  --cosmic-purple: #1a0a2a;
  --stardust: rgba(255,255,255,0.1);
}

body { 
  font-family: 'Exo 2', sans-serif; 
  background: linear-gradient(135deg, var(--deep-space), var(--dark-space), var(--cosmic-purple));
  color: var(--neon-cyan);
  overflow-x: hidden;
  scroll-behavior: smooth;
  min-height: 100vh;
}

/* Cosmic Background */
.cosmic-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 255, 240, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(185, 103, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 0, 255, 0.05) 0%, transparent 50%);
  animation: cosmicPulse 8s ease-in-out infinite;
}

@keyframes cosmicPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

/* Grid Overlay */
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 240, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 240, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  z-index: -1;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Premium Header */
.premium-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(20px);
  background: rgba(10, 10, 26, 0.3);
  border-bottom: 1px solid rgba(0, 255, 240, 0.2);
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 255, 240, 0.5);
}

.header-controls {
  display: flex;
  gap: 15px;
  align-items: center;
}

/* Premium Buttons */
.premium-btn {
  padding: 14px 28px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
  color: #000;
  box-shadow: 0 0 30px rgba(0, 255, 240, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 50px rgba(0, 255, 240, 0.8), 0 0 80px rgba(185, 103, 255, 0.4);
}

.btn-secondary {
  background: rgba(0, 255, 240, 0.1);
  color: var(--neon-cyan);
  border: 1px solid rgba(0, 255, 240, 0.3);
}

.btn-secondary:hover {
  background: rgba(0, 255, 240, 0.2);
  box-shadow: 0 0 30px rgba(0, 255, 240, 0.3);
  transform: translateY(-2px);
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 120px 20px 80px;
  position: relative;
}

.hero-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 30px;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 50px rgba(0, 255, 240, 0.5);
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% { text-shadow: 0 0 30px rgba(0, 255, 240, 0.5), 0 0 60px rgba(185, 103, 255, 0.3); }
  100% { text-shadow: 0 0 50px rgba(0, 255, 240, 0.8), 0 0 100px rgba(255, 0, 255, 0.4); }
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 40px;
  color: rgba(0, 255, 240, 0.9);
  max-width: 600px;
  line-height: 1.6;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin: 60px auto;
  max-width: 1000px;
  padding: 0 20px;
}

.stat-card {
  background: rgba(10, 10, 26, 0.6);
  border: 1px solid rgba(0, 255, 240, 0.2);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: float 6s ease-in-out infinite;
}

.stat-card:nth-child(2) { animation-delay: 1s; }
.stat-card:nth-child(3) { animation-delay: 2s; }
.stat-card:nth-child(4) { animation-delay: 3s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink));
  animation: scanLine 2s linear infinite;
}

@keyframes scanLine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 50px rgba(0, 255, 240, 0.3);
  border-color: var(--neon-purple);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(0, 255, 240, 0.8);
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Premium Dashboard */
.dashboard-panel {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(5, 5, 20, 0.98), rgba(10, 5, 30, 0.95));
  backdrop-filter: blur(30px);
  box-shadow: -20px 0 100px rgba(0, 255, 240, 0.3);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 2000;
  overflow-y: auto;
  padding: 80px 50px;
  border-left: 1px solid rgba(0, 255, 240, 0.3);
}

.dashboard-panel.open {
  right: 0;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(0, 255, 240, 0.3);
}

.dashboard-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.close-dashboard {
  background: rgba(255, 0, 0, 0.2);
  border: 1px solid rgba(255, 0, 0, 0.5);
  color: #ff4444;
  padding: 12px 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.close-dashboard:hover {
  background: rgba(255, 0, 0, 0.3);
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
}

/* Feature Cards */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 40px 0;
}

.feature-card {
  background: rgba(10, 10, 26, 0.6);
  border: 1px solid rgba(0, 255, 240, 0.2);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 240, 0.1), transparent);
  transition: left 0.6s ease;
}

.feature-card:hover::before {
  left: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--neon-purple);
  box-shadow: 0 15px 40px rgba(0, 255, 240, 0.2);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--neon-cyan);
}

.feature-description {
  color: rgba(0, 255, 240, 0.8);
  line-height: 1.6;
}

/* Premium Subscription Cards */
.subscription-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 50px 0;
}

.subscription-card {
  background: linear-gradient(135deg, rgba(20, 20, 40, 0.8), rgba(10, 10, 30, 0.9));
  border: 2px solid;
  border-radius: 25px;
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.subscription-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple));
}

.subscription-card.alpha {
  border-color: rgba(0, 255, 240, 0.5);
}

.subscription-card.premium {
  border-color: rgba(255, 215, 0, 0.5);
}

.subscription-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 60px rgba(0, 255, 240, 0.3);
}

.subscription-card.premium:hover {
  box-shadow: 0 25px 60px rgba(255, 215, 0, 0.4);
}

.subscription-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
  color: #000;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.subscription-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subscription-card.premium .subscription-title {
  background: linear-gradient(45deg, #ffd700, #ff6b00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subscription-price {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 30px;
  color: var(--neon-cyan);
}

.subscription-card.premium .subscription-price {
  color: #ffd700;
}

.subscription-features {
  list-style: none;
  margin-bottom: 30px;
}

.subscription-features li {
  padding: 10px 0;
  color: rgba(0, 255, 240, 0.9);
  border-bottom: 1px solid rgba(0, 255, 240, 0.1);
}

.subscription-features li:last-child {
  border-bottom: none;
}

.subscription-features li i {
  margin-right: 10px;
  color: var(--neon-green);
}

/* Language Toggle */
.lang-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 12px 20px;
  border-radius: 12px;
  background: rgba(0, 255, 240, 0.1);
  border: 1px solid rgba(0, 255, 240, 0.3);
  color: var(--neon-cyan);
  font-weight: 600;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: 'Exo 2', sans-serif;
}

.lang-toggle:hover {
  background: rgba(0, 255, 240, 0.2);
  box-shadow: 0 0 20px rgba(0, 255, 240, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .subscription-grid {
    grid-template-columns: 1fr;
  }
  
  .dashboard-panel {
    padding: 60px 20px;
  }
  
  .premium-header {
    padding: 15px 20px;
  }
  
  .header-controls {
    flex-direction: column;
    gap: 10px;
  }
}

/* Particle Animation */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
</head>
<body>

<!-- Animated Background -->
<div class="cosmic-bg"></div>
<div class="grid-overlay"></div>
<div id="particles-js"></div>

<!-- Premium Header -->
<header class="premium-header">
  <div class="logo">EPICVERSE PRO</div>
  <div class="header-controls">
    <button class="premium-btn btn-secondary" onclick="toggleLang()">
      <i class="fas fa-globe"></i> عربي
    </button>
    <button class="premium-btn btn-primary" onclick="openDashboard()">
      <i class="fas fa-rocket"></i> Launch Dashboard
    </button>
  </div>
</header>

<!-- Hero Section -->
<section class="hero-section">
  <h1 class="hero-title" id="heroTitle">EPICVERSE PRO</h1>
  <p class="hero-subtitle" id="heroSubtitle">Next-generation Discord bot with AI-powered moderation, premium features, and futuristic design</p>
  
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon"><i class="fas fa-server"></i></div>
      <div class="stat-number" id="serverCount">15K+</div>
      <div class="stat-label">Active Servers</div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon"><i class="fas fa-users"></i></div>
      <div class="stat-number" id="userCount">2.5M+</div>
      <div class="stat-label">Users Served</div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon"><i class="fas fa-bolt"></i></div>
      <div class="stat-number" id="uptimeCount">99.9%</div>
      <div class="stat-label">Uptime</div>
    </div>
    
    <div class="stat-card">
      <div class="stat-icon"><i class="fas fa-star"></i></div>
      <div class="stat-number" id="ratingCount">4.9/5</div>
      <div class="stat-label">Rating</div>
    </div>
  </div>
</section>

<!-- Premium Dashboard -->
<div class="dashboard-panel" id="dashboardPanel">
  <div class="dashboard-header">
    <h2 class="dashboard-title">Control Center</h2>
    <button class="close-dashboard" onclick="closeDashboard()">
      <i class="fas fa-times"></i> Close
    </button>
  </div>

  <!-- Server Selection -->
  <div class="feature-card">
    <h3 class="feature-title"><i class="fas fa-shield-alt"></i> Server Management</h3>
    <select class="premium-btn btn-secondary" style="width: 100%; margin-top: 15px;">
      <option>🚀 EpicVerse Community</option>
      <option>🎮 Gaming Central</option>
      <option>💎 Premium Lounge</option>
      <option>🤖 Bot Testing</option>
    </select>
  </div>

  <!-- Features Grid -->
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-robot"></i></div>
      <h3 class="feature-title">AI Moderation</h3>
      <p class="feature-description">Advanced AI-powered moderation with automatic threat detection and smart filtering</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-music"></i></div>
      <h3 class="feature-title">Premium Music</h3>
      <p class="feature-description">High-quality audio streaming with YouTube, Spotify, and SoundCloud integration</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
      <h3 class="feature-title">Analytics</h3>
      <p class="feature-description">Detailed server analytics with real-time insights and growth tracking</p>
    </div>
    
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-gamepad"></i></div>
      <h3 class="feature-title">Mini Games</h3>
      <p class="feature-description">Engaging mini-games with leaderboards, rewards, and interactive features</p>
    </div>
  </div>

  <!-- Premium Subscriptions -->
  <h3 style="margin: 50px 0 30px; font-size: 2rem; text-align: center;">Premium Plans</h3>
  <div class="subscription-grid">
    <div class="subscription-card alpha">
      <div class="subscription-badge">Most Popular</div>
      <h3 class="subscription-title">Alpha Pro</h3>
      <div class="subscription-price">$9.99<span style="font-size: 1rem;">/month</span></div>
      <ul class="subscription-features">
        <li><i class="fas fa-check"></i> All Premium Features</li>
        <li><i class="fas fa-check"></i> Priority Support</li>
        <li><i class="fas fa-check"></i> Custom Commands</li>
        <li><i class="fas fa-check"></i> Advanced Analytics</li>
        <li><i class="fas fa-check"></i> Early Access Features</li>
      </ul>
      <button class="premium-btn btn-primary" style="width: 100%;">
        <i class="fas fa-bolt"></i> Subscribe Now
      </button>
    </div>
    
    <div class="subscription-card premium">
      <div class="subscription-badge">Ultimate</div>
      <h3 class="subscription-title">Premium Elite</h3>
      <div class="subscription-price">$19.99<span style="font-size: 1rem;">/month</span></div>
      <ul class="subscription-features">
        <li><i class="fas fa-check"></i> Everything in Alpha Pro</li>
        <li><i class="fas fa-check"></i> VIP Support 24/7</li>
        <li><i class="fas fa-check"></i> Unlimited Customization</li>
        <li><i class="fas fa-check"></i> Dedicated Server</li>
        <li><i class="fas fa-check"></i> Feature Requests Priority</li>
      </ul>
      <button class="premium-btn btn-primary" style="width: 100%; background: linear-gradient(135deg, #ffd700, #ff6b00);">
        <i class="fas fa-crown"></i> Go Elite
      </button>
    </div>
  </div>

  <!-- Action Buttons -->
  <div style="text-align: center; margin-top: 50px;">
    <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&scope=bot" 
       class="premium-btn btn-primary" target="_blank" style="margin: 0 10px;">
      <i class="fas fa-plus"></i> Invite Bot
    </a>
    <a href="https://discord.gg/j3AUBUup" 
       class="premium-btn btn-secondary" target="_blank" style="margin: 0 10px;">
      <i class="fas fa-headset"></i> Support Server
    </a>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
// Dashboard Controls
const dashboardPanel = document.getElementById('dashboardPanel');
function openDashboard() { dashboardPanel.classList.add('open'); }
function closeDashboard() { dashboardPanel.classList.remove('open'); }

// Language Toggle
const translations = {
  ar: {
    heroTitle: "إبيكفيرس برو",
    heroSubtitle: "بوت ديسكورد من الجيل القادم بميزات الذكاء الاصطناعي وتصميم مستقبلي متميز",
    btnLang: "English"
  },
  en: {
    heroTitle: "EPICVERSE PRO",
    heroSubtitle: "Next-generation Discord bot with AI-powered moderation, premium features, and futuristic design",
    btnLang: "عربي"
  }
};

let currentLang = 'en';
function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.getElementById('heroTitle').innerText = translations[currentLang].heroTitle;
  document.getElementById('heroSubtitle').innerText = translations[currentLang].heroSubtitle;
  document.querySelector('.lang-toggle').innerHTML = `<i class="fas fa-globe"></i> ${translations[currentLang].btnLang}`;
  document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

// Particles.js Background
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00fff0" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00fff0",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  }
});

// Animated counters
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
  // Add floating animation to stats cards
  const cards = document.querySelectorAll('.stat-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
  });
});
</script>
</body>
</html>
  `);
}
