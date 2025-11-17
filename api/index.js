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
  /* Global styles */
  body {
    margin: 0;
    font-family: 'Orbitron', sans-serif;
    background: #0d0d14;
    color: #00fff0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  /* Particle background */
  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: radial-gradient(circle, rgba(0,255,255,0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: move 60s linear infinite;
    z-index: 0;
  }
  @keyframes move {
    0% { transform: translate(0,0); }
    100% { transform: translate(-50px,-50px); }
  }

  /* Section styles */
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    padding: 50px;
    text-align: center;
  }

  h1, h2 {
    color: #00fff0;
    text-shadow: 0 0 10px #00fff0, 0 0 20px #00fff0, 0 0 40px #00fff0;
  }

  p {
    max-width: 800px;
    line-height: 1.6;
    font-size: 1.2em;
  }

  /* Hero dashboard card */
  .dashboard {
    background: rgba(10,10,20,0.7);
    padding: 50px;
    border-radius: 25px;
    box-shadow: 0 0 50px rgba(0,255,255,0.5), 0 0 100px rgba(0,255,255,0.2);
    animation: float 6s ease-in-out infinite;
  }
  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }

  /* Buttons */
  .btn {
    display: inline-block;
    margin: 10px;
    padding: 15px 30px;
    font-size: 1.1em;
    font-weight: bold;
    color: #00fff0;
    text-decoration: none;
    border: 2px solid #00fff0;
    border-radius: 15px;
    background: linear-gradient(135deg, rgba(0,255,255,0.1), rgba(0,255,255,0));
    position: relative;
    overflow: hidden;
    transition: 0.4s;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0,255,255,0.3);
  }
  .btn::before {
    content: '';
    position: absolute;
    top: -100%; left: -100%;
    width: 300%; height: 300%;
    background: rgba(0,255,255,0.2);
    transform: rotate(45deg);
    transition: 0.5s;
  }
  .btn:hover::before {
    top: 0; left: 0;
  }
  .btn:hover {
    color: #000;
    background: #00fff0;
    box-shadow: 0 0 30px #00fff0, 0 0 60px rgba(0,255,255,0.5);
  }

  /* Premium card */
  .premium {
    margin-top: 40px;
    padding: 30px;
    border-radius: 20px;
    background: rgba(255,255,0,0.05);
    border: 2px solid #ff0;
    box-shadow: 0 0 20px #ff0, 0 0 50px rgba(255,255,0,0.3);
    animation: pulse 3s infinite;
  }
  @keyframes pulse {
    0%,100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  /* Language toggle */
  .lang-toggle {
    position: fixed;
    top: 20px; right: 20px;
    padding: 12px 18px;
    border: 2px solid #00fff0;
    border-radius: 12px;
    background: transparent;
    color: #00fff0;
    font-weight: bold;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;
  }
  .lang-toggle:hover { background: #00fff0; color: #000; }

  /* Scroll sections glow */
  section:nth-child(odd) { background: rgba(0,0,0,0.5); }
  section:nth-child(even) { background: rgba(10,10,20,0.7); }
</style>
</head>
<body>

<button class="lang-toggle" onclick="toggleLang()">عربي</button>

<!-- Hero Section -->
<section>
  <div class="dashboard">
    <h1>EpicVerse Bot Dashboard</h1>
    <p id="desc">Welcome! EpicVerse is a futuristic bot with amazing features.</p>
    <p>Bot Status: <span class="status">Online 🟢</span></p>
    <p>Bot Creator: <strong>Vynox</strong></p>
    <div class="buttons">
      <a href="https://discord.gg/CQfr6aTe6f" class="btn" target="_blank">Join Support Server</a>
      <a href="https://discord.com/oauth2/authorize?client_id=1248801648067739699&permissions=8&integration_type=1&scope=bot" class="btn" target="_blank">Invite Bot</a>
    </div>
  </div>
</section>

<!-- Bot Description Section -->
<section>
  <h2>About EpicVerse Bot</h2>
  <p id="bot-desc">
    EpicVerse is a multi-purpose Discord bot designed to bring futuristic features, interactive commands, and premium perks for server owners and gamers. From automating server tasks to giving exclusive commands to premium subscribers, it elevates any community experience.
  </p>
</section>

<!-- Roblox Game Section -->
<section>
  <h2>Our Roblox Game</h2>
  <p id="game-desc">
    Experience our immersive Roblox adventure where players explore magical worlds, complete challenges, and earn exclusive rewards. Built with love, frequent updates, and unique mechanics, it’s designed to keep the community engaged and entertained.
  </p>
</section>

<!-- Premium Section -->
<section>
  <div class="premium">
    <h2>Premium Subscription</h2>
    <p>Unlock exclusive commands, priority support, and futuristic features.</p>
    <a href="#" class="btn">Subscribe Now</a>
  </div>
</section>

<script>
  const translations = {
    ar: {
      desc: "مرحباً! EpicVerse هو بوت مستقبلي مع ميزات مذهلة.",
      botDesc: "EpicVerse هو بوت متعدد الاستخدامات مصمم لتقديم ميزات مستقبلية وأوامر تفاعلية ومزايا بريميوم لمالكي السيرفرات واللاعبين.",
      gameDesc: "استمتع بلعبتنا في Roblox حيث يستكشف اللاعبون عوالم سحرية، يكملون التحديات، ويحصلون على مكافآت حصرية.",
      btnLang: "English",
      premiumTitle: "اشتراك بريميوم",
      premiumDesc: "افتح الأوامر الحصرية، دعم الأولوية، وميزات مستقبلية.",
      subscribe: "اشترك الآن"
    },
    en: {
      desc: "Welcome! EpicVerse is a futuristic bot with amazing features.",
      botDesc: "EpicVerse is a multi-purpose Discord bot designed to bring futuristic features, interactive commands, and premium perks for server owners and gamers.",
      gameDesc: "Experience our immersive Roblox adventure where players explore magical worlds, complete challenges, and earn exclusive rewards.",
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
    document.getElementById('bot-desc').innerText = translations[currentLang].botDesc;
    document.getElementById('game-desc').innerText = translations[currentLang].gameDesc;
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
