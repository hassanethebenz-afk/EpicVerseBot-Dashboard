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
body { font-family: 'Orbitron', sans-serif; background: #0b0b17; color:#00fff0; overflow-x:hidden; scroll-behavior:smooth; }

/* Animated Background */
#tech-wallpaper { position:fixed; top:0; left:0; width:100%; height:100%; z-index:0; }
canvas { display:block; }

/* Hero Section */
section.hero { min-height:100vh; display:flex; justify-content:center; align-items:center; text-align:center; flex-direction:column; position:relative; z-index:1; background: linear-gradient(145deg,#0b0b17,#02020a); }
h1 { font-size:3em; text-shadow:0 0 15px #00fff0,0 0 30px #00fff0; margin-bottom:20px; }
p { font-size:1.3em; margin-bottom:30px; }

/* Buttons */
.btn { display:inline-block; margin:10px; padding:15px 35px; font-size:1.1em; font-weight:bold; color:#00fff0; text-decoration:none; border-radius:12px; background: rgba(0,255,255,0.1); border:2px solid #00fff0; position:relative; overflow:hidden; cursor:pointer; transition:0.4s; box-shadow:0 0 20px rgba(0,255,255,0.2);}
.btn:hover { background:#00fff0; color:#000; box-shadow:0 0 50px #00fff0,0 0 100px rgba(0,255,255,0.5); }

/* Panels Glassmorphism */
.panel { backdrop-filter: blur(15px); background: rgba(0,0,30,0.5); border:1px solid rgba(0,255,255,0.2); border-radius:25px; padding:30px; margin:20px auto; max-width:900px; box-shadow:0 0 60px rgba(0,255,255,0.3); transition:0.4s; }
.panel:hover { box-shadow:0 0 80px rgba(0,255,255,0.6); transform: translateY(-5px); }

/* Dashboard Panel */
#dashboard-panel { position:fixed; top:0; right:-100%; width:100%; max-width:1200px; height:100%; background: rgba(5,5,20,0.95); backdrop-filter:blur(10px); box-shadow: -10px 0 60px rgba(0,255,255,0.5); transition:0.6s; z-index:5; overflow-y:auto; padding:60px 40px; }
#dashboard-panel.open { right:0; }
#dashboard-panel h2 { color:#00fff0; text-shadow:0 0 10px #00fff0,0 0 20px #00fff0; margin-bottom:25px; }
.card { padding:25px; border-radius:25px; margin:20px 0; background: rgba(0,0,30,0.4); box-shadow:0 0 40px rgba(0,255,255,0.3); }
#close-dashboard { position:absolute; top:25px; right:25px; font-size:1.5em; background: transparent; border:none; color:#00fff0; cursor:pointer; text-shadow:0 0 15px #00fff0; }
#close-dashboard:hover { color:#00ff00; }

/* Language toggle */
.lang-toggle { position: fixed; top:20px; left:20px; padding:12px 18px; border-radius:12px; background: rgba(0,255,255,0.1); border:2px solid #00fff0; color:#00fff0; font-weight:bold; cursor:pointer; z-index:6; transition:0.3s; }
.lang-toggle:hover { background:#00fff0; color:#000; }

/* Discord Login Button */
#login-card { background: rgba(0,0,30,0.7); padding:50px; border-radius:30px; max-width:400px; width:90%; margin:30px auto; box-shadow:0 0 80px rgba(0,255,255,0.5); text-align:center; animation: float 6s ease-in-out infinite; }
#login-card h2 { margin-bottom:20px; font-size:1.5em; }
#login-card button { width:100%; padding:18px; font-size:1.1em; border-radius:15px; border:none; background:#7289da; color:white; font-weight:bold; cursor:pointer; transition:0.3s; box-shadow:0 0 30px rgba(114,137,218,0.5);}
#login-card button:hover { background:#5b6eae; box-shadow:0 0 50px rgba(114,137,218,0.7); }

/* Command Toggles */
.command { display:flex; justify-content:space-between; align-items:center; margin:12px 0; padding:12px 20px; border-radius:15px; background: rgba(0,0,50,0.3); transition:0.3s; }
.switch { position: relative; display: inline-block; width:50px; height:25px; }
.switch input { opacity:0; width:0; height:0; }
.slider { position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background-color:#555; transition:.4s; border-radius:25px; }
.slider:before { position:absolute; content:""; height:21px; width:21px; left:2px; bottom:2px; background-color:#00fff0; transition:.4s; border-radius:50%; }
input:checked + .slider { background-color:#00fff0; }
input:checked + .slider:before { transform: translateX(25px); }

/* Mini support chat */
#support-chat { position: fixed; bottom:20px; right:20px; width:320px; max-height:420px; background: rgba(0,0,30,0.85); border-radius:25px; box-shadow:0 0 60px rgba(0,255,255,0.5); overflow:hidden; display:none; flex-direction:column; z-index:10; }
#support-chat-header { background:#00fff0; color:#000; padding:12px; font-weight:bold; cursor:pointer; text-align:center; font-size:1.1em; }
#support-chat-messages { flex:1; padding:12px; overflow-y:auto; color:#00fff0; font-size:0.95em; }
#support-chat-input { display:flex; border-top:1px solid #00fff0; }
#support-chat-input input { flex:1; padding:12px; border:none; outline:none; border-radius:0; background:#0b0b17; color:#00fff0; }
#support-chat-input button { padding:12px; border:none; background:#00fff0; color:#000; cursor:pointer; transition:0.3s; }
#support-chat-input button:hover { background:#00ff99; }

#support-btn { position:fixed; bottom:20px; right:360px; padding:18px 25px; background:#00fff0; color:#000; font-weight:bold; border-radius:20px; cursor:pointer; box-shadow:0 0 50px rgba(0,255,255,0.5); z-index:10; transition:0.3s; font-size:1em; }
#support-btn:hover { background:#00ff99; }

/* Subscription Cards */
.subscription { display:flex; justify-content:center; margin-top:25px; gap:25px; }
.sub-card { padding:25px 40px; border-radius:25px; text-align:center; font-weight:bold; cursor:pointer; transition:0.3s; box-shadow:0 0 50px rgba(0,255,255,0.3); font-size:1.2em; }
.sub-alpha { background:#111; color:#fff; border:2px solid #333; }
.sub-alpha:hover { box-shadow:0 0 80px rgba(255,255,255,0.6);}
.sub-premium { background:gold; color:#000; border:2px solid #e6c200; }
.sub-premium:hover { box-shadow:0 0 80px rgba(255,215,0,0.8);}
</style>
</head>
<body>

<button class="lang-toggle" onclick="toggleLang()">عربي</button>

<section class="hero">
  <h1>EpicVerse Bot Dashboard</h1>
  <p id="desc">Manage your Discord server professionally with futuristic tools.</p>
  <div>
    <button class="btn" onclick="openDashboard()">Open Dashboard</button>
  </div>
</section>

<!-- Discord Login Button -->
<div id="login-card">
  <h2>Login with Discord</h2>
  <button onclick="discordLogin()">Login with Discord</button>
</div>

<!-- Dashboard Panel -->
<div id="dashboard-panel">
  <button id="close-dashboard" onclick="closeDashboard()">✖</button>

  <h2>Select Your Server</h2>
  <select id="server-select">
    <option>Server 1 - EpicVerse Fans</option>
    <option>Server 2 - Discord Adventure</option>
    <option>Server 3 - Vynox Group</option>
  </select>

  <div class="card">
    <h2>Commands & Modules</h2>
    <div class="command"><span>Moderation</span><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></div>
    <div class="command"><span>Fun Commands</span><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></div>
    <div class="command"><span>Music</span><label class="switch"><input type="checkbox"><span class="slider"></span></label></div>
    <div class="command"><span>Custom Commands</span><label class="switch"><input type="checkbox"><span class="slider"></span></label></div>
  </div>

  <div class="card">
    <h2>Subscriptions</h2>
    <div class="subscription">
      <div class="sub-card sub-alpha">Alpha Subscription</div>
      <div class="sub-card sub-premium">Premium Subscription</div>
    </div>
  </div>

  <div class="card">
    <h2>Support & Invite</h2>
    <a href="https://discord.gg/CQfr6aTe6f" class="btn" target="_blank">Join Support Server</a>
    <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&scope=bot" class="btn" target="_blank">Invite Bot</a>
  </div>
</div>

<!-- Mini Support Chat -->
<div id="support-chat">
  <div id="support-chat-header" onclick="toggleChat()">Support Chat</div>
  <div id="support-chat-messages"></div>
  <div id="support-chat-input">
    <input type="text" placeholder="Type a question..." id="support-msg">
    <button onclick="sendMsg()">Send</button>
  </div>
</div>
<div id="support-btn" onclick="toggleChat()">💬 Support</div>

<div id="tech-wallpaper"><canvas id="canvas"></canvas></div>

<script>
const panel=document.getElementById('dashboard-panel');
function openDashboard(){ panel.classList.add('open'); }
function closeDashboard(){ panel.classList.remove('open'); }

const translations={ar:{desc:"إدارة سيرفرك على Discord بطريقة احترافية باستخدام أدوات مستقبلية.",btnLang:"English"},en:{desc:"Manage your Discord server professionally with futuristic tools.",btnLang:"عربي"}};
let currentLang='en';
function toggleLang(){currentLang=currentLang==='en'?'ar':'en'; document.getElementById('desc').innerText=translations[currentLang].desc; document.querySelector('.lang-toggle').innerText=translations[currentLang].btnLang; document.dir=currentLang==='ar'?'rtl':'ltr';}

function discordLogin(){ alert("Redirecting to Discord OAuth2 login..."); openDashboard(); }

// Mini support chat
const chat=document.getElementById('support-chat'); let chatOpen=false;
function toggleChat(){ chatOpen=!chatOpen; chat.style.display=chatOpen?'flex':'none'; }
function sendMsg(){
  const input=document.getElementById('support-msg');
  const messages=document.getElementById('support-chat-messages');
  if(input.value.trim()==="") return;
  const msg=document.createElement('div'); msg.innerText="You: "+input.value; messages.appendChild(msg);
  const reply=document.createElement('div'); reply.innerText="Support: We'll answer soon 😉"; reply.style.color="#00ff99"; messages.appendChild(reply);
  input.value=""; messages.scrollTop=messages.scrollHeight;
}

// Animated tech wallpaper
const canvas=document.getElementById('canvas'); const ctx=canvas.getContext('2d'); let w,h,lines=[];
function resize(){ w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight; }
window.addEventListener('resize',resize); resize();
class Line{constructor(){this.x=Math.random()*w;this.y=Math.random()*h;this.vx=(Math.random()-0.5)*1.5;this.vy=(Math.random()-0.5)*1.5;this.length=Math.random()*100+50;}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>w)this.vx*=-1;if(this.y<0||this.y>h)this.vy*=-1;}draw(){ctx.beginPath();ctx.moveTo(this.x,this.y);ctx.lineTo(this.x+this.length,this.y+this.length);ctx.strokeStyle='rgba(0,255,255,0.1)';ctx.lineWidth=1;ctx.stroke();}}
for(let i=0;i<150;i++)lines.push(new Line());
function animate(){ctx.clearRect(0,0,w,h); lines.forEach(l=>{l.update();l.draw();}); requestAnimationFrame(animate);}
animate();
</script>
</body>
</html>
  `);
}
