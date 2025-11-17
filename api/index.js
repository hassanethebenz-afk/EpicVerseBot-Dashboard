export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EpicVerse Bot Dashboard</title>
<style>
  /* Import Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Orbitron', sans-serif;
    background: radial-gradient(circle at top left, #0f0c29, #302b63, #24243e);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .dashboard {
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    padding: 50px;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(0,255,255,0.5);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  h1 {
    font-size: 3em;
    color: #00ffff;
    text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
  }

  p {
    font-size: 1.2em;
    margin: 10px 0;
  }

  .status {
    font-weight: bold;
    color: #00ff00;
  }

  .buttons {
    margin-top: 20px;
  }

  .btn {
    display: inline-block;
    margin: 10px;
    padding: 15px 25px;
    font-size: 1em;
    font-weight: bold;
    color: #0ff;
    background: transparent;
    border: 2px solid #0ff;
    border-radius: 15px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(0,255,255,0.2);
    transform: rotate(45deg);
    transition: 0.5s;
  }

  .btn:hover::before {
    top: 0;
    left: 0;
  }

  .btn:hover {
    color: #000;
    background: #0ff;
  }

  .premium {
    margin-top: 40px;
    padding: 20px;
    border: 2px solid #ff0;
    border-radius: 15px;
    background: rgba(255,255,0,0.05);
    text-shadow: 0 0 5px #ff0;
  }

  /* Language toggle button */
  .lang-toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    border: 2px solid #0ff;
    border-radius: 10px;
    background: transparent;
    color: #0ff;
    cursor: pointer;
    font-weight: bold;
  }
</style>
</head>
<body>
<button class="lang-toggle" onclick="toggleLang()">عربي</button>

<div class="dashboard">
  <h1>EpicVerse Bot Dashboard</h1>
  <p id="desc">Welcome! EpicVerse is a futuristic bot with amazing features.</p>
  <p>Bot Status: <span class="status">Online 🟢</span></p>
  <p>Bot Creator: <strong>Vynox</strong></p>

  <div class="buttons">
    <a href="https://discord.gg/CQfr6aTe6f" class="btn" target="_blank">Join Support Server</a>
    <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&integration_type=1&scope=bot" class="btn" target="_blank">Invite Bot</a>
  </div>

  <div class="premium">
    <h2>Premium Subscription</h2>
    <p>Unlock exclusive commands, priority support, and futuristic features.</p>
    <a href="#" class="btn">Subscribe Now</a>
  </div>
</div>

<script>
  const translations = {
    ar: {
      desc: "مرحباً! EpicVerse هو بوت مستقبلي مع ميزات مذهلة.",
      btnLang: "English",
      premiumTitle: "اشتراك بريميوم",
      premiumDesc: "افتح الأوامر الحصرية، دعم الأولوية، وميزات مستقبلية.",
      subscribe: "اشترك الآن"
    },
    en: {
      desc: "Welcome! EpicVerse is a futuristic bot with amazing features.",
      btnLang: "عربي",
      premiumTitle: "Premium Subscription",
      premiumDesc: "Unlock exclusive commands, priority support, and futuristic features.",
      subscribe: "Subscribe Now"
    }
  };

  let currentLang = 'en';

  function toggleLang() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.getElementById('desc').innerText = translations[currentLang].desc;
    document.querySelector('.lang-toggle').innerText = translations[currentLang].btnLang;
    document.querySelector('.premium h2').innerText = translations[currentLang].premiumTitle;
    document.querySelector('.premium p').innerText = translations[currentLang].premiumDesc;
    document.querySelector('.premium a').innerText = translations[currentLang].subscribe;
    document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }
</script>
</body>
</html>
  `);
}
