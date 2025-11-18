export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EpicVerse Pro | Enterprise Discord Bot Management</title>
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
  --neon-orange: #ff6b00;
  --neon-gold: #ffd700;
  --dark-space: #0a0a1a;
  --deep-space: #050510;
  --cosmic-purple: #1a0a2a;
  --matrix-green: #00ff41;
  --active-dev: #5865F2;
  --nexbot: #FF3366;
}

body { 
  font-family: 'Exo 2', sans-serif; 
  background: linear-gradient(135deg, var(--deep-space), var(--dark-space), var(--cosmic-purple));
  color: var(--neon-cyan);
  overflow-x: hidden;
  scroll-behavior: smooth;
  min-height: 100vh;
}

/* Advanced Cosmic Background with Parallax */
.parallax-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -3;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.layer-1 {
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 255, 240, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(185, 103, 255, 0.15) 0%, transparent 50%);
  animation: cosmicDrift 60s linear infinite;
}

.layer-2 {
  background: 
    radial-gradient(circle at 60% 30%, rgba(255, 0, 255, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 30% 70%, rgba(0, 255, 136, 0.1) 0%, transparent 40%);
  animation: cosmicDrift 40s linear infinite reverse;
}

.layer-3 {
  background: 
    radial-gradient(circle at 40% 40%, rgba(255, 107, 0, 0.05) 0%, transparent 30%),
    radial-gradient(circle at 70% 60%, rgba(255, 215, 0, 0.05) 0%, transparent 30%);
  animation: cosmicDrift 80s linear infinite;
}

@keyframes cosmicDrift {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-2%, 1%) scale(1.02); }
  50% { transform: translate(1%, -1%) scale(1.01); }
  75% { transform: translate(-1%, 2%) scale(1.03); }
  100% { transform: translate(0, 0) scale(1); }
}

/* Advanced Grid System */
.quantum-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 240, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 240, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: quantumGrid 30s linear infinite;
  z-index: -2;
}

@keyframes quantumGrid {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Premium Header with Advanced Effects */
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
  animation: headerSlideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes headerSlideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(45deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(0, 255, 240, 0.5);
  position: relative;
}

.logo::after {
  content: 'PRO';
  position: absolute;
  top: -8px;
  right: -35px;
  font-size: 0.7rem;
  background: var(--neon-orange);
  color: #000;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 900;
}

.creator-badge {
  background: linear-gradient(45deg, var(--neon-orange), var(--neon-gold));
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  margin-left: 15px;
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.header-controls {
  display: flex;
  gap: 15px;
  align-items: center;
}

/* Advanced Button System */
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
  animation: buttonFloat 6s ease-in-out infinite;
}

.premium-btn:nth-child(2) { animation-delay: 1s; }
.premium-btn:nth-child(3) { animation-delay: 2s; }

@keyframes buttonFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.premium-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.premium-btn:hover::before {
  left: 100%;
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

.btn-tertiary {
  background: rgba(255, 107, 0, 0.1);
  color: var(--neon-orange);
  border: 1px solid rgba(255, 107, 0, 0.3);
}

.btn-tertiary:hover {
  background: rgba(255, 107, 0, 0.2);
  box-shadow: 0 0 30px rgba(255, 107, 0, 0.3);
}

/* Enhanced Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 120px 20px 80px;
  position: relative;
  animation: heroEntrance 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes heroEntrance {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  animation: titleGlow 3s ease-in-out infinite alternate, titleFloat 6s ease-in-out infinite;
}

@keyframes titleGlow {
  0% { text-shadow: 0 0 30px rgba(0, 255, 240, 0.5), 0 0 60px rgba(185, 103, 255, 0.3); }
  100% { text-shadow: 0 0 50px rgba(0, 255, 240, 0.8), 0 0 100px rgba(255, 0, 255, 0.4); }
}

@keyframes titleFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(0.5deg); }
}

.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 40px;
  color: rgba(0, 255, 240, 0.9);
  max-width: 600px;
  line-height: 1.6;
  animation: subtitleFadeIn 1.5s ease 0.5s both;
}

@keyframes subtitleFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.quick-actions {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
  animation: actionsSlideUp 1s ease 0.8s both;
}

@keyframes actionsSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Quantum Stats Grid */
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
  animation: quantumFloat 6s ease-in-out infinite;
}

.stat-card:nth-child(1) { animation-delay: 0s; }
.stat-card:nth-child(2) { animation-delay: 1s; }
.stat-card:nth-child(3) { animation-delay: 2s; }
.stat-card:nth-child(4) { animation-delay: 3s; }

@keyframes quantumFloat {
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
  animation: quantumScan 2s linear infinite;
}

@keyframes quantumScan {
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
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
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

/* Enterprise Dashboard Panel */
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
  transform: scale(1.1);
}

/* Advanced Navigation System */
.dashboard-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.nav-tab {
  padding: 15px 25px;
  background: rgba(0, 255, 240, 0.1);
  border: 1px solid rgba(0, 255, 240, 0.3);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

.nav-tab::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 240, 0.2), transparent);
  transition: left 0.5s ease;
}

.nav-tab:hover::before {
  left: 100%;
}

.nav-tab.active {
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
  color: #000;
  box-shadow: 0 0 20px rgba(0, 255, 240, 0.4);
  transform: translateY(-2px);
}

.nav-tab:hover:not(.active) {
  background: rgba(0, 255, 240, 0.2);
  transform: translateY(-1px);
}

/* Tab Content System */
.tab-content {
  display: none;
  animation: contentFadeIn 0.5s ease;
}

.tab-content.active {
  display: block;
}

@keyframes contentFadeIn {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* Quantum Feature Grid */
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

/* Advanced Commands System */
.commands-container {
  background: rgba(10, 10, 26, 0.6);
  border: 1px solid rgba(0, 255, 240, 0.2);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  margin: 20px 0;
}

.command-search {
  width: 100%;
  padding: 15px 20px;
  background: rgba(0, 255, 240, 0.1);
  border: 1px solid rgba(0, 255, 240, 0.3);
  border-radius: 12px;
  color: var(--neon-cyan);
  font-size: 1rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.command-search:focus {
  outline: none;
  box-shadow: 0 0 20px rgba(0, 255, 240, 0.3);
  border-color: var(--neon-cyan);
}

.command-search::placeholder {
  color: rgba(0, 255, 240, 0.6);
}

.commands-list {
  max-height: 400px;
  overflow-y: auto;
}

.command-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 255, 240, 0.1);
  transition: all 0.3s ease;
}

.command-item:hover {
  background: rgba(0, 255, 240, 0.1);
  border-radius: 10px;
  transform: translateX(5px);
}

.command-info h4 {
  color: var(--neon-cyan);
  margin-bottom: 5px;
}

.command-info p {
  color: rgba(0, 255, 240, 0.7);
  font-size: 0.9rem;
}

.command-actions {
  display: flex;
  gap: 10px;
}

/* Quantum Toggle Switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #555;
  transition: .4s;
  border-radius: 25px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 21px;
  width: 21px;
  left: 2px;
  bottom: 2px;
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: var(--neon-cyan);
}

input:checked + .toggle-slider:before {
  transform: translateX(25px);
  background: #000;
}

/* Creator Section with Badges */
.creator-section {
  text-align: center;
  margin: 50px 0;
  padding: 40px;
  background: rgba(0, 255, 240, 0.05);
  border-radius: 25px;
  border: 1px solid rgba(0, 255, 240, 0.2);
  position: relative;
  overflow: hidden;
}

.creator-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--neon-cyan);
  margin-bottom: 20px;
  box-shadow: 0 0 30px rgba(0, 255, 240, 0.5);
  animation: avatarFloat 4s ease-in-out infinite;
}

@keyframes avatarFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.creator-name {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--neon-orange), var(--neon-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.creator-title {
  font-size: 1.2rem;
  color: rgba(0, 255, 240, 0.8);
  margin-bottom: 20px;
}

.badges-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: badgeGlow 2s ease-in-out infinite alternate;
}

.badge.active-dev {
  background: linear-gradient(45deg, var(--active-dev), #7983f5);
  box-shadow: 0 0 20px rgba(88, 101, 242, 0.5);
}

.badge.nexbot {
  background: linear-gradient(45deg, var(--nexbot), #ff6699);
  box-shadow: 0 0 20px rgba(255, 51, 102, 0.5);
}

.badge.verified {
  background: linear-gradient(45deg, var(--neon-green), #00cc66);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}

@keyframes badgeGlow {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
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

/* Advanced Subscription Cards */
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

/* Footer */
.footer {
  text-align: center;
  padding: 40px 20px;
  border-top: 1px solid rgba(0, 255, 240, 0.2);
  margin-top: 60px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.footer-link {
  color: rgba(0, 255, 240, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: var(--neon-cyan);
  transform: translateY(-2px);
}

.copyright {
  color: rgba(0, 255, 240, 0.5);
  font-size: 0.9rem;
  margin-top: 20px;
}

/* Responsive Design */
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
  
  .dashboard-nav {
    flex-direction: column;
  }
  
  .quick-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 15px;
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

<!-- Advanced Background System -->
<div class="parallax-bg">
  <div class="parallax-layer layer-1"></div>
  <div class="parallax-layer layer-2"></div>
  <div class="parallax-layer layer-3"></div>
</div>

<div class="quantum-grid"></div>
<div id="particles-js"></div>

<!-- Premium Header -->
<header class="premium-header">
  <div style="display: flex; align-items: center;">
    <div class="logo">EPICVERSE</div>
    <div class="creator-badge">by Vynox</div>
  </div>
  <div class="header-controls">
    <button class="premium-btn btn-secondary" onclick="toggleLang()">
      <i class="fas fa-globe"></i> عربي
    </button>
    <button class="premium-btn btn-tertiary" onclick="showCommands()">
      <i class="fas fa-terminal"></i> Commands
    </button>
    <button class="premium-btn btn-primary" onclick="openDashboard()">
      <i class="fas fa-rocket"></i> Launch Dashboard
    </button>
  </div>
</header>

<!-- Hero Section -->
<section class="hero-section">
  <h1 class="hero-title" id="heroTitle">EPICVERSE PRO</h1>
  <p class="hero-subtitle" id="heroSubtitle">Enterprise-grade Discord bot with AI-powered automation, advanced moderation, and quantum-level performance</p>
  
  <div class="quick-actions">
    <button class="premium-btn btn-secondary" onclick="showCommands()">
      <i class="fas fa-list"></i> View Commands
    </button>
    <button class="premium-btn btn-tertiary" onclick="showSettings()">
      <i class="fas fa-cog"></i> Bot Settings
    </button>
    <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&scope=bot" 
       class="premium-btn btn-primary" target="_blank">
      <i class="fas fa-plus"></i> Invite Bot
    </a>
    <a href="https://discord.gg/j3AUBUup" 
       class="premium-btn btn-secondary" target="_blank">
      <i class="fas fa-headset"></i> Support Server
    </a>
  </div>
  
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

<!-- Creator Section -->
<section class="creator-section">
  <img src="https://cdn.discordapp.com/avatars/566383841426800650/a_c5a7a3a3a3a3a3a3a3a3a3a3a3a3a3a3.webp?size=256" alt="Vynox" class="creator-avatar" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
  <h2 class="creator-name">Vynox</h2>
  <p class="creator-title">Quantum Developer & System Architect</p>
  
  <div class="badges-container">
    <div class="badge active-dev">
      <i class="fas fa-badge-check"></i>
      Active Developer
    </div>
    <div class="badge nexbot">
      <i class="fas fa-robot"></i>
      NexBot Certified
    </div>
    <div class="badge verified">
      <i class="fas fa-shield-alt"></i>
      Verified Bot
    </div>
  </div>
  
  <p style="color: rgba(0, 255, 240, 0.8); max-width: 600px; margin: 20px auto; line-height: 1.6;">
    Visionary developer pushing the boundaries of Discord automation. With over 3 years of experience in bot development, 
    Vynox has created EpicVerse Pro to deliver enterprise-grade performance with cutting-edge AI integration and quantum-level architecture.
  </p>
  
  <div class="quick-actions" style="margin-top: 30px;">
    <a href="https://discord.com/users/566383841426800650" class="premium-btn btn-secondary" target="_blank">
      <i class="fas fa-user"></i> Discord Profile
    </a>
    <a href="https://github.com/Vynox" class="premium-btn btn-tertiary" target="_blank">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="https://top.gg/bot/1248801648067739699" class="premium-btn btn-primary" target="_blank">
      <i class="fas fa-chart-line"></i> Top.gg
    </a>
  </div>
</section>

<!-- Enterprise Dashboard Panel -->
<div class="dashboard-panel" id="dashboardPanel">
  <div class="dashboard-header">
    <h2 class="dashboard-title">Quantum Control Center</h2>
    <button class="close-dashboard" onclick="closeDashboard()">
      <i class="fas fa-times"></i> Close
    </button>
  </div>

  <!-- Dashboard Navigation -->
  <div class="dashboard-nav">
    <div class="nav-tab active" onclick="switchTab('overview')">
      <i class="fas fa-tachometer-alt"></i> Overview
    </div>
    <div class="nav-tab" onclick="switchTab('commands')">
      <i class="fas fa-terminal"></i> Commands
    </div>
    <div class="nav-tab" onclick="switchTab('moderation')">
      <i class="fas fa-shield-alt"></i> Moderation
    </div>
    <div class="nav-tab" onclick="switchTab('automation')">
      <i class="fas fa-robot"></i> Automation
    </div>
    <div class="nav-tab" onclick="switchTab('music')">
      <i class="fas fa-music"></i> Music
    </div>
    <div class="nav-tab" onclick="switchTab('economy')">
      <i class="fas fa-coins"></i> Economy
    </div>
    <div class="nav-tab" onclick="switchTab('premium')">
      <i class="fas fa-crown"></i> Premium
    </div>
    <div class="nav-tab" onclick="switchTab('analytics')">
      <i class="fas fa-chart-bar"></i> Analytics
    </div>
  </div>

  <!-- Server Selection -->
  <div class="feature-card">
    <h3 class="feature-title"><i class="fas fa-shield-alt"></i> Server Management</h3>
    <select class="premium-btn btn-secondary" style="width: 100%; margin-top: 15px;" id="serverSelect">
      <option>🚀 EpicVerse Community</option>
      <option>🎮 Gaming Central</option>
      <option>💎 Premium Lounge</option>
      <option>🤖 Bot Testing</option>
    </select>
  </div>

  <!-- Overview Tab -->
  <div id="overview-tab" class="tab-content active">
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-robot"></i></div>
        <h3 class="feature-title">AI Moderation</h3>
        <p class="feature-description">Quantum AI-powered moderation with real-time threat detection and behavioral analysis</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-music"></i></div>
        <h3 class="feature-title">Premium Music</h3>
        <p class="feature-description">High-fidelity audio streaming with multi-platform support and advanced queue management</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
        <h3 class="feature-title">Analytics</h3>
        <p class="feature-description">Real-time server analytics with predictive insights and automated reporting</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-gamepad"></i></div>
        <h3 class="feature-title">Mini Games</h3>
        <p class="feature-description">Immersive gaming experiences with leaderboards, tournaments, and reward systems</p>
      </div>
    </div>
  </div>

  <!-- Commands Tab -->
  <div id="commands-tab" class="tab-content">
    <div class="commands-container">
      <input type="text" class="command-search" placeholder="Search 150+ commands..." onkeyup="filterCommands()">
      <div class="commands-list" id="commandsList">
        <!-- Commands will be populated by JavaScript -->
      </div>
    </div>
  </div>

  <!-- Moderation Tab -->
  <div id="moderation-tab" class="tab-content">
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-ban"></i></div>
        <h3 class="feature-title">Auto Moderation</h3>
        <p class="feature-description">AI-powered spam detection, raid protection, and content filtering</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-history"></i></div>
        <h3 class="feature-title">Audit Logs</h3>
        <p class="feature-description">Comprehensive moderation history with export capabilities</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-user-shield"></i></div>
        <h3 class="feature-title">Role Management</h3>
        <p class="feature-description">Advanced role systems with automation and permission controls</p>
      </div>
    </div>
  </div>

  <!-- Automation Tab -->
  <div id="automation-tab" class="tab-content">
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-bell"></i></div>
        <h3 class="feature-title">Welcome System</h3>
        <p class="feature-description">Custom welcome messages with auto-roles and verification</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-rss"></i></div>
        <h3 class="feature-title">RSS Feeds</h3>
        <p class="feature-description">Automated content delivery from your favorite sources</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-tasks"></i></div>
        <h3 class="feature-title">Scheduled Tasks</h3>
        <p class="feature-description">Automated messages, backups, and maintenance tasks</p>
      </div>
    </div>
  </div>

  <!-- Music Tab -->
  <div id="music-tab" class="tab-content">
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-headphones"></i></div>
        <h3 class="feature-title">24/7 Music</h3>
        <p class="feature-description">Never-ending music with queue persistence</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-list-ol"></i></div>
        <h3 class="feature-title">Playlists</h3>
        <p class="feature-description">Save and share custom music playlists</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-sliders-h"></i></div>
        <h3 class="feature-title">Audio Effects</h3>
        <p class="feature-description">Equalizer, bass boost, and audio enhancements</p>
      </div>
    </div>
  </div>

  <!-- Economy Tab -->
  <div id="economy-tab" class="tab-content">
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-store"></i></div>
        <h3 class="feature-title">Shop System</h3>
        <p class="feature-description">Customizable shop with items, roles, and perks</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-trophy"></i></div>
        <h3 class="feature-title">Leaderboards</h3>
        <p class="feature-description">Global and server-specific ranking systems</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-gift"></i></div>
        <h3 class="feature-title">Daily Rewards</h3>
        <p class="feature-description">Engagement-based reward systems</p>
      </div>
    </div>
  </div>

  <!-- Premium Tab -->
  <div id="premium-tab" class="tab-content">
    <h3 style="margin: 50px 0 30px; font-size: 2rem; text-align: center;">Quantum Premium Plans</h3>
    <div class="subscription-grid">
      <div class="subscription-card alpha">
        <div class="subscription-badge">Quantum Pro</div>
        <h3 class="subscription-title">Alpha Pro</h3>
        <div class="subscription-price">$9.99<span style="font-size: 1rem;">/month</span></div>
        <ul class="subscription-features">
          <li><i class="fas fa-check"></i> All Quantum Features</li>
          <li><i class="fas fa-check"></i> Priority AI Processing</li>
          <li><i class="fas fa-check"></i> Custom Commands</li>
          <li><i class="fas fa-check"></i> Advanced Analytics</li>
          <li><i class="fas fa-check"></i> Early Access Features</li>
        </ul>
        <button class="premium-btn btn-primary" style="width: 100%;">
          <i class="fas fa-bolt"></i> Subscribe Now
        </button>
      </div>
      
      <div class="subscription-card premium">
        <div class="subscription-badge">Quantum Elite</div>
        <h3 class="subscription-title">Premium Elite</h3>
        <div class="subscription-price">$19.99<span style="font-size: 1rem;">/month</span></div>
        <ul class="subscription-features">
          <li><i class="fas fa-check"></i> Everything in Quantum Pro</li>
          <li><i class="fas fa-check"></i> VIP Support 24/7</li>
          <li><i class="fas fa-check"></i> Unlimited Customization</li>
          <li><i class="fas fa-check"></i> Dedicated Server Instance</li>
          <li><i class="fas fa-check"></i> Feature Requests Priority</li>
        </ul>
        <button class="premium-btn btn-primary" style="width: 100%; background: linear-gradient(135deg, #ffd700, #ff6b00);">
          <i class="fas fa-crown"></i> Go Elite
        </button>
      </div>
    </div>
  </div>

  <!-- Analytics Tab -->
  <div id="analytics-tab" class="tab-content">
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-chart-bar"></i></div>
        <h3 class="feature-title">Server Growth</h3>
        <p class="feature-description">Predictive analytics and member retention insights</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-comments"></i></div>
        <h3 class="feature-title">Message Analytics</h3>
        <p class="feature-description">Engagement metrics and conversation analysis</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-gamepad"></i></div>
        <h3 class="feature-title">Command Usage</h3>
        <p class="feature-description">Usage patterns and optimization recommendations</p>
      </div>
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
    <button class="premium-btn btn-tertiary" style="margin: 0 10px;" onclick="exportConfig()">
      <i class="fas fa-download"></i> Export Config
    </button>
  </div>
</div>

<!-- Footer -->
<footer class="footer">
  <div class="footer-links">
    <a href="https://discord.gg/j3AUBUup" class="footer-link" target="_blank">
      <i class="fas fa-headset"></i> Support Server
    </a>
    <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&scope=bot" class="footer-link" target="_blank">
      <i class="fas fa-plus"></i> Invite Bot
    </a>
    <a href="https://top.gg/bot/1248801648067739699" class="footer-link" target="_blank">
      <i class="fas fa-chart-line"></i> Top.gg
    </a>
    <a href="https://discord.com/users/566383841426800650" class="footer-link" target="_blank">
      <i class="fas fa-user"></i> Contact Owner
    </a>
    <a href="https://github.com/Vynox" class="footer-link" target="_blank">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="#" class="footer-link" onclick="openDashboard()">
      <i class="fas fa-cog"></i> Dashboard
    </a>
  </div>
  <div class="copyright">
    &copy; 2024 EpicVerse Pro. Created with ❤️ by Vynox. All rights reserved.
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
// Quantum Dashboard Controls
const dashboardPanel = document.getElementById('dashboardPanel');
function openDashboard() { 
  dashboardPanel.classList.add('open');
  switchTab('overview');
}
function closeDashboard() { dashboardPanel.classList.remove('open'); }

// Advanced Tab Navigation
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active class from all nav tabs
  document.querySelectorAll('.nav-tab').forEach(nav => {
    nav.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(`${tabName}-tab`).classList.add('active');
  
  // Add active class to clicked nav tab
  event.target.classList.add('active');
}

// Quantum Language System
const translations = {
  ar: {
    heroTitle: "إبيكفيرس برو",
    heroSubtitle: "بوت ديسكورد بمستوى المؤسسات مع الأتمتة المدعومة بالذكاء الاصطناعي، الإشراف المتقدم، والأداء الكمي",
    btnLang: "English"
  },
  en: {
    heroTitle: "EPICVERSE PRO",
    heroSubtitle: "Enterprise-grade Discord bot with AI-powered automation, advanced moderation, and quantum-level performance",
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

// Quantum Commands Database
const commands = [
  { name: "help", description: "Shows all available commands", category: "Utility", enabled: true },
  { name: "ping", description: "Check bot latency and status", category: "Utility", enabled: true },
  { name: "ban", description: "Ban a user from the server", category: "Moderation", enabled: true },
  { name: "kick", description: "Kick a user from the server", category: "Moderation", enabled: true },
  { name: "mute", description: "Mute a user in voice/text channels", category: "Moderation", enabled: false },
  { name: "clear", description: "Clear messages from channel", category: "Moderation", enabled: true },
  { name: "play", description: "Play music in voice channel", category: "Music", enabled: false },
  { name: "skip", description: "Skip current music track", category: "Music", enabled: false },
  { name: "queue", description: "Show music queue", category: "Music", enabled: false },
  { name: "meme", description: "Get random memes from Reddit", category: "Fun", enabled: true },
  { name: "8ball", description: "Ask the magic 8-ball a question", category: "Fun", enabled: true },
  { name: "weather", description: "Get weather information for location", category: "Utility", enabled: true },
  { name: "serverinfo", description: "Display server information", category: "Information", enabled: true },
  { name: "userinfo", description: "Display user information", category: "Information", enabled: true }
];

// Quantum Commands System
function populateCommands() {
  const commandsList = document.getElementById('commandsList');
  commandsList.innerHTML = commands.map(cmd => `
    <div class="command-item">
      <div class="command-info">
        <h4>/${cmd.name}</h4>
        <p>${cmd.description} • ${cmd.category}</p>
      </div>
      <div class="command-actions">
        <label class="toggle-switch">
          <input type="checkbox" ${cmd.enabled ? 'checked' : ''} onchange="toggleCommand('${cmd.name}', this.checked)">
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>
  `).join('');
}

// Quantum Filter System
function filterCommands() {
  const searchTerm = document.querySelector('.command-search').value.toLowerCase();
  const commandItems = document.querySelectorAll('.command-item');
  
  commandItems.forEach(item => {
    const commandName = item.querySelector('h4').textContent.toLowerCase();
    const commandDesc = item.querySelector('p').textContent.toLowerCase();
    
    if (commandName.includes(searchTerm) || commandDesc.includes(searchTerm)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

// Quantum Command Toggle
function toggleCommand(commandName, enabled) {
  const command = commands.find(cmd => cmd.name === commandName);
  if (command) {
    command.enabled = enabled;
    console.log(`Quantum Command ${commandName} ${enabled ? 'activated' : 'deactivated'}`);
  }
}

// Quantum Quick Actions
function showCommands() {
  openDashboard();
  switchTab('commands');
}

function showSettings() {
  openDashboard();
  switchTab('moderation');
}

// Export functionality
function exportConfig() {
  const config = {
    server: document.getElementById('serverSelect').value,
    commands: commands.filter(cmd => cmd.enabled),
    timestamp: new Date().toISOString(),
    version: "EpicVerse Pro v2.0"
  };
  
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "epicverse-config.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

// Quantum Particles System
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
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

// Quantum Initialization
document.addEventListener('DOMContentLoaded', function() {
  populateCommands();
  
  // Quantum animations
  const cards = document.querySelectorAll('.stat-card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
  });
  
  console.log('🚀 EpicVerse Quantum Dashboard Initialized');
  console.log('👤 Owner: Vynox (566383841426800650)');
  console.log('📊 System Status: Optimal');
  console.log('⚡ Performance: Quantum Level');
  console.log('🎯 Features: 150+ Commands Available');
});
</script>
</body>
</html>
  `);
}
