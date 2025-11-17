export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EpicVerse Bot Dashboard</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">

<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family: 'Orbitron', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: #0d0d14;
    color: #00fff0;
    position: relative;
  }

  /* Technological animated wallpaper */
  #tech-wallpaper {
    position: fixed; top:0; left:0; width:100%; height:100%; z-index:0;
  }
  canvas { display: block; }

  /* Hero Section */
  section.hero {
    min-height:100vh;
    display:flex; justify-content:center; align-items:center;
    text-align:center; flex-direction:column; position:relative; z-index:1;
  }

  h1 { font-size:3em; text-shadow:0 0 10px #00fff0,0 0 20px #00fff0,0 0 40px #00fff0; margin-bottom:20px; }
  p { font-size:1.2em; margin:10px 0; }

  .btn {
    display:inline-block;
    margin:10px;
    padding:15px 30px;
    font-size:1.1em;
    font-weight:bold;
    color:#00fff0;
    text-decoration:none;
    border:2px solid #00fff0;
    border-radius:15px;
    background: linear-gradient(135deg, rgba(0,255,255,0.1), rgba(0,255,255,0));
    position:relative;
    overflow:hidden;
    transition:0.4s;
    cursor:pointer;
    box-shadow:0 0 20px rgba(0,255,255,0.3);
  }
  .btn::before {
    content:'';
    position:absolute;
    top:-100%; left:-100%;
    width:300%; height:300%;
    background: rgba(0,255,255,0.2);
    transform: rotate(45deg);
    transition:0.5s;
  }
  .btn:hover::before { top:0; left:0; }
  .btn:hover {
    color:#000;
    background:#00fff0;
    box-shadow:0 0 40px #00fff0,0 0 80px rgba(0,255,255,0.5);
  }

  /* Dashboard Panel */
  #dashboard-panel {
    position:fixed;
    top:0; right:-100%;
    width:100%; max-width:1000px;
    height:100%;
    background: rgba(10,10,20,0.95);
    box-shadow: -10px 0 50px rgba(0,255,255,0.5);
    transition:0.6s;
    z-index:5;
    overflow-y:auto;
    padding:50px 20px;
  }

  #dashboard-panel.open { right:0; }

  #dashboard-panel h2 {
    text-shadow:0 0 10px #00fff0,0 0 20px #00fff0,0 0 40px #00fff0;
    color:#00fff0;
    margin-bottom:20px;
  }

  .card {
    background: rgba(0,0,30,0.7);
    border-radius:20px;
    padding:25px;
    margin:20px 0;
    box-shadow:0 0 40px rgba(0,255,255,0.3);
    transition:0.3s;
  }
  .card:hover { transform: translateY(-5px); box-shadow:0 0 60px rgba(0,255,255,0.6); }

  /* Close button */
  #close-dashboard {
    position:absolute;
    top:20px; right:20px;
    font-size:1.5em;
    background: transparent;
    border:none;
    color:#00fff0;
    cursor:pointer;
    text-shadow:0 0 10px #00fff0;
  }
  #close-dashboard:hover { color:#00ff00; }

  /* Language toggle */
  .lang-toggle {
    position: fixed; top:20px; left:20px;
    padding:12px 18px;
    border:2px solid #00fff0;
    border-radius:12px;
    background: transparent;
    color:#00fff0;
    font-weight:bold;
    cursor:pointer;
    z-index:6;
    transition:0.3s;
  }
  .lang-toggle:hover { background:#00fff0; color:#000; }

</style>
</head>
<body>

<button class="lang-toggle" onclick="toggleLang()">عربي</button>

<section class="hero">
  <h1>EpicVerse Bot Dashboard</h1>
  <p id="desc">Welcome! EpicVerse is a futuristic bot with amazing features.</p>
  <div>
    <button class="btn" onclick="openDashboard()">Open Dashboard</button>
  </div>
</section>

<!-- Dashboard Panel -->
<div id="dashboard-panel">
  <button id="close-dashboard" onclick="closeDashboard()">✖</button>

  <!-- Bot Info Card -->
  <div class="card">
    <h2>Bot Info</h2>
    <p>Bot Status: <span class="status">Online 🟢</span></p>
    <p>Bot Creator: Vynox</p>
    <p>Bot Commands: Multi-purpose, premium, fun, admin & more.</p>
  </div>

  <!-- Roblox Game Card -->
  <div class="card">
    <h2>Our Roblox Game</h2>
    <p>Immersive Roblox adventure where players explore magical worlds, complete challenges, and earn exclusive rewards.</p>
  </div>

  <!-- Premium Subscription Card -->
  <div class="card">
    <h2>Premium Subscription</h2>
    <p>Unlock exclusive commands, priority support, and futuristic features.</p>
    <a href="#" class="btn">Subscribe Now</a>
  </div>

  <!-- Support & Invite Buttons -->
  <div class="card">
    <h2>Support & Invite</h2>
    <a href="https://discord.gg/CQfr6aTe6f" class="btn" target="_blank">Join Support Server</a>
    <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&integration_type=1&scope=bot" class="btn" target="_blank">Invite Bot</a>
  </div>
</div>

<!-- Tech Animated Canvas -->
<div id="tech-wallpaper"><canvas id="canvas"></canvas></div>

<script>
  /* Open/Close Dashboard */
  const panel = document.getElementById('dashboard-panel');
  function openDashboard(){ panel.classList.add('open'); }
  function closeDashboard(){ panel.classList.remove('open'); }

  /* Language toggle */
  const translations = {
    ar: {
      desc:"مرحباً! EpicVerse هو بوت مستقبلي مع ميزات مذهلة.",
      btnLang:"English"
    },
    en: {
      desc:"Welcome! EpicVerse is a futuristic bot with amazing features.",
      btnLang:"عربي"
    }
  };
  let currentLang='en';
  function toggleLang(){
    currentLang = currentLang==='en'?'ar':'en';
    document.getElementById('desc').innerText = translations[currentLang].desc;
    document.querySelector('.lang-toggle').innerText = translations[currentLang].btnLang;
    document.dir=currentLang==='ar'?'rtl':'ltr';
  }

  /* Tech animated wallpaper */
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let w,h,lines=[];
  function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
  window.addEventListener('resize',resize); resize();

  class Line{
    constructor(){
      this.x=Math.random()*w; this.y=Math.random()*h;
      this.vx=(Math.random()-0.5)*1.5; this.vy=(Math.random()-0.5)*1.5;
      this.length=Math.random()*100+50;
    }
    update(){ this.x+=this.vx; this.y+=this.vy; if(this.x<0||this.x>w) this.vx*=-1; if(this.y<0||this.y>h) this.vy*=-1; }
    draw(){ ctx.beginPath(); ctx.moveTo(this.x,this.y); ctx.lineTo(this.x+this.length,this.y+this.length); ctx.strokeStyle='rgba(0,255,255,0.1)'; ctx.lineWidth=1; ctx.stroke(); }
  }
  for(let i=0;i<80;i++) lines.push(new Line());
  function animate(){ ctx.clearRect(0,0,w,h); lines.forEach(l=>{ l.update(); l.draw(); }); requestAnimationFrame(animate); }
  animate();

</script>

</body>
</html>
  `);
}
