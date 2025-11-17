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
body { font-family: 'Orbitron', sans-serif; background: #0d0d14; color: #00fff0; overflow-x: hidden; scroll-behavior: smooth; }

/* Animated tech wallpaper */
#tech-wallpaper { position: fixed; top:0; left:0; width:100%; height:100%; z-index:0; }
canvas { display: block; }

section.hero { min-height:100vh; display:flex; justify-content:center; align-items:center; text-align:center; flex-direction:column; position:relative; z-index:1; }

h1 { font-size:3em; text-shadow:0 0 10px #00fff0,0 0 20px #00fff0,0 0 40px #00fff0; margin-bottom:20px; }
p { font-size:1.2em; margin:10px 0; }

.btn { display:inline-block; margin:10px; padding:15px 30px; font-size:1.1em; font-weight:bold; color:#00fff0; text-decoration:none; border:2px solid #00fff0; border-radius:15px; background: linear-gradient(135deg, rgba(0,255,255,0.1), rgba(0,255,255,0)); position:relative; overflow:hidden; transition:0.4s; cursor:pointer; box-shadow:0 0 20px rgba(0,255,255,0.3); }
.btn::before { content:''; position:absolute; top:-100%; left:-100%; width:300%; height:300%; background: rgba(0,255,255,0.2); transform: rotate(45deg); transition:0.5s; }
.btn:hover::before { top:0; left:0; }
.btn:hover { color:#000; background:#00fff0; box-shadow:0 0 40px #00fff0,0 0 80px rgba(0,255,255,0.5); }

/* Panels */
.panel { background: rgba(0,0,30,0.85); padding:30px; border-radius:20px; box-shadow:0 0 50px rgba(0,255,255,0.5); margin:20px auto; max-width:800px; animation: float 6s ease-in-out infinite; }
@keyframes float {0%,100%{ transform: translateY(0px);}50%{ transform: translateY(-10px);}}

/* Dashboard Panel */
#dashboard-panel { position:fixed; top:0; right:-100%; width:100%; max-width:1000px; height:100%; background: rgba(10,10,20,0.95); box-shadow: -10px 0 50px rgba(0,255,255,0.5); transition:0.6s; z-index:5; overflow-y:auto; padding:50px 20px; }
#dashboard-panel.open { right:0; }
#dashboard-panel h2 { text-shadow:0 0 10px #00fff0,0 0 20px #00fff0,0 0 40px #00fff0; color:#00fff0; margin-bottom:20px; }
.card { background: rgba(0,0,30,0.7); border-radius:20px; padding:25px; margin:20px 0; box-shadow:0 0 40px rgba(0,255,255,0.3); transition:0.3s; }
.card:hover { transform: translateY(-5px); box-shadow:0 0 60px rgba(0,255,255,0.6); }
#close-dashboard { position:absolute; top:20px; right:20px; font-size:1.5em; background: transparent; border:none; color:#00fff0; cursor:pointer; text-shadow:0 0 10px #00fff0; }
#close-dashboard:hover { color:#00ff00; }

.lang-toggle { position: fixed; top:20px; left:20px; padding:12px 18px; border:2px solid #00fff0; border-radius:12px; background: transparent; color:#00fff0; font-weight:bold; cursor:pointer; z-index:6; transition:0.3s; }
.lang-toggle:hover { background:#00fff0; color:#000; }

/* Roblox Login */
#login-card { background: rgba(0,0,30,0.85); padding:40px; border-radius:25px; box-shadow:0 0 60px rgba(0,255,255,0.5); max-width:400px; width:90%; margin:20px auto; animation: float 6s ease-in-out infinite; }
#login-card h2 { margin-bottom:20px; }
#login-card input { width:100%; padding:15px; margin:10px 0; border-radius:10px; border:none; outline:none; }
#login-card button { width:100%; margin-top:10px; }

/* Server Selection */
#server-select { margin:20px 0; padding:15px; border-radius:12px; border:none; outline:none; width:100%; background: rgba(0,0,50,0.7); color:#00fff0; font-weight:bold; }

/* Command Toggle */
.command { display:flex; justify-content:space-between; align-items:center; margin:10px 0; padding:10px 15px; border-radius:12px; background: rgba(0,0,50,0.5); }
.switch { position: relative; display: inline-block; width:50px; height:25px; }
.switch input { opacity:0; width:0; height:0; }
.slider { position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background-color:#555; transition:.4s; border-radius:25px; }
.slider:before { position:absolute; content:""; height:21px; width:21px; left:2px; bottom:2px; background-color:#00fff0; transition:.4s; border-radius:50%; }
input:checked + .slider { background-color:#00fff0; }
input:checked + .slider:before { transform: translateX(25px); }

</style>
</head>
<body>

<button class="lang-toggle" onclick="toggleLang()">عربي</button>

<section class="hero">
  <h1>EpicVerse Bot Dashboard</h1>
  <p id="desc">Welcome! Manage your server with our futuristic bot dashboard.</p>
  <div>
    <button class="btn" onclick="openDashboard()">Open Dashboard</button>
  </div>
</section>

<!-- Roblox Login -->
<div id="login-card">
  <h2>Roblox Login</h2>
  <input type="text" placeholder="Username" id="roblox-username">
  <input type="password" placeholder="Password" id="roblox-password">
  <button class="btn" onclick="loginRoblox()">Login</button>
  <p id="login-status"></p>
</div>

<!-- Dashboard Panel -->
<div id="dashboard-panel">
  <button id="close-dashboard" onclick="closeDashboard()">✖</button>

  <h2>Select Your Server</h2>
  <select id="server-select">
    <option>Server 1 - My Roblox Group</option>
    <option>Server 2 - EpicVerse Adventures</option>
    <option>Server 3 - Vynox Fan Club</option>
  </select>

  <div class="card">
    <h2>Commands & Modules</h2>
    <div class="command">
      <span>Welcome Messages</span>
      <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
    </div>
    <div class="command">
      <span>Moderation</span>
      <label class="switch"><input type="checkbox"><span class="slider"></span></label>
    </div>
    <div class="command">
      <span>Fun Commands</span>
      <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
    </div>
    <div class="command">
      <span>Music</span>
      <label class="switch"><input type="checkbox"><span class="slider"></span></label>
    </div>
  </div>

  <div class="card">
    <h2>Premium Features</h2>
    <div class="command">
      <span>Custom Prefix</span>
      <label class="switch"><input type="checkbox"><span class="slider"></span></label>
    </div>
    <div class="command">
      <span>Priority Support</span>
      <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
    </div>
  </div>

  <div class="card">
    <h2>Support & Invite</h2>
    <a href="https://discord.gg/CQfr6aTe6f" class="btn" target="_blank">Join Support Server</a>
    <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&integration_type=1&scope=bot" class="btn" target="_blank">Invite Bot</a>
  </div>

</div>

<div id="tech-wallpaper"><canvas id="canvas"></canvas></div>

<script>
  // Open/Close Dashboard
  const panel=document.getElementById('dashboard-panel');
  function openDashboard(){ panel.classList.add('open'); }
  function closeDashboard(){ panel.classList.remove('open'); }

  // Language toggle
  const translations={ar:{desc:"مرحباً! إدارة السيرفر الخاص بك باستخدام داشبورد بوت مستقبلية.",btnLang:"English"},en:{desc:"Welcome! Manage your server with our futuristic bot dashboard.",btnLang:"عربي"}};
  let currentLang='en';
  function toggleLang(){currentLang=currentLang==='en'?'ar':'en'; document.getElementById('desc').innerText=translations[currentLang].desc; document.querySelector('.lang-toggle').innerText=translations[currentLang].btnLang; document.dir=currentLang==='ar'?'rtl':'ltr';}

  // Roblox Login Simulation
  function loginRoblox(){
    const user=document.getElementById('roblox-username').value;
    const pass=document.getElementById('roblox-password').value;
    const status=document.getElementById('login-status');
    if(!user||!pass){ status.innerText="Please enter username and password"; status.style.color="#ff0000"; return; }
    status.innerText="Logging in..."; status.style.color="#00fff0";
    setTimeout(()=>{ status.innerText="Login successful! Welcome "+user; status.style.color="#00ff00"; openDashboard(); },1500);
  }

  // Tech animated wallpaper
  const canvas=document.getElementById('canvas'); const ctx=canvas.getContext('2d'); let w,h,lines=[];
  function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
  window.addEventListener('resize',resize); resize();
  class Line{constructor(){this.x=Math.random()*w;this.y=Math.random()*h;this.vx=(Math.random()-0.5)*1.5;this.vy=(Math.random()-0.5)*1.5;this.length=Math.random()*100+50;}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>w)this.vx*=-1;if(this.y<0||this.y>h)this.vy*=-1;}draw(){ctx.beginPath();ctx.moveTo(this.x,this.y);ctx.lineTo(this.x+this.length,this.y+this.length);ctx.strokeStyle='rgba(0,255,255,0.1)';ctx.lineWidth=1;ctx.stroke();}}
  for(let i=0;i<80;i++)lines.push(new Line());
  function animate(){ctx.clearRect(0,0,w,h); lines.forEach(l=>{l.update();l.draw();}); requestAnimationFrame(animate);}
  animate();

</script>
</body>
</html>
  `);
}
