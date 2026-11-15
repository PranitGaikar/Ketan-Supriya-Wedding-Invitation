const weddingDate = new Date("2026-12-03T17:15:00+05:30");
const pad = n => String(n).padStart(2,"0");
function tick(){
  const diff = weddingDate.getTime() - Date.now();
  const box = document.querySelector(".countdown");
  if(diff <= 0){box.innerHTML="<p class='countdown-note'>Today is the day! With love, Ketan & Surpriya.</p>";return;}
  document.getElementById("days").textContent=Math.floor(diff/86400000);
  document.getElementById("hours").textContent=pad(Math.floor(diff%86400000/3600000));
  document.getElementById("minutes").textContent=pad(Math.floor(diff%3600000/60000));
  document.getElementById("seconds").textContent=pad(Math.floor(diff%60000/1000));
}
tick();setInterval(tick,1000);

const welcome=document.querySelector(".welcome");
document.getElementById("enterButton").addEventListener("click",()=>{
  welcome.classList.add("opened");
  document.getElementById("journey").scrollIntoView({behavior:"smooth"});
  showerPetals(42);
});
const menuButton=document.getElementById("menuButton"),nav=document.getElementById("navigation");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

function showerPetals(amount=18){
  const layer=document.getElementById("petals");
  for(let i=0;i<amount;i++){
    const p=document.createElement("i");p.className="petal";
    p.style.left=Math.random()*100+"%";
    p.style.animationDuration=(6+Math.random()*7)+"s";
    p.style.animationDelay=(Math.random()*2)+"s";
    p.style.setProperty("--drift",(Math.random()*180-90)+"px");
    layer.appendChild(p);setTimeout(()=>p.remove(),15000);
  }
}
showerPetals(24);setInterval(()=>showerPetals(5),5000);

// Ambient sound is intentionally opt-in. It uses a soft synthesized chime and no external audio file.
let audioContext=null, soundTimer=null, soundOn=false;
const soundButton=document.getElementById("soundButton");
soundButton.addEventListener("click",()=>{
  soundOn=!soundOn;soundButton.setAttribute("aria-pressed",String(soundOn));
  soundButton.querySelector("span").textContent=soundOn?"Sound on":"Sound off";
  if(soundOn){
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC){soundButton.querySelector("span").textContent="Sound unavailable";return;}
    audioContext=audioContext||new AC();
    const chime=()=>{if(!soundOn||!audioContext)return;const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type="sine";osc.frequency.value=660;gain.gain.setValueAtTime(.0001,audioContext.currentTime);gain.gain.exponentialRampToValueAtTime(.018,audioContext.currentTime+.08);gain.gain.exponentialRampToValueAtTime(.0001,audioContext.currentTime+1.1);osc.connect(gain);gain.connect(audioContext.destination);osc.start();osc.stop(audioContext.currentTime+1.2);};
    chime();soundTimer=setInterval(chime,4500);
  }else{clearInterval(soundTimer);}
});

document.querySelectorAll(".gallery-card").forEach(card=>card.addEventListener("click",()=>{
  document.getElementById("modalCaption").textContent=card.dataset.caption;
  document.getElementById("photoModal").classList.add("open");
  document.getElementById("photoModal").setAttribute("aria-hidden","false");
}));
function closeModal(){document.getElementById("photoModal").classList.remove("open");document.getElementById("photoModal").setAttribute("aria-hidden","true");}
document.getElementById("closeModal").addEventListener("click",closeModal);
document.getElementById("photoModal").addEventListener("click",e=>{if(e.target.id==="photoModal")closeModal();});

document.getElementById("rsvpForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("guestName").value.trim();
  const count=document.getElementById("guestCount").value;
  const attendance=document.getElementById("attendance").value;
  // Replace with the family's WhatsApp number: country code + number, digits only.
  const whatsappNumber="91XXXXXXXXXX";
  if(whatsappNumber.includes("X")){alert("Please add the family's WhatsApp number in script.js before enabling RSVP.");return;}
  const message=`Hello! This is ${name}. ${attendance} to केतन आणि सुप्रिया यांच्या ३ डिसेंबर २०२६ रोजी सायंकाळी ५:१५ वाजता होणाऱ्या विवाह सोहळ्यास. पाहुण्यांची संख्या: ${count}.`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
document.getElementById("shareButton").addEventListener("click",async()=>{
  const data={title:"केतन आणि सुप्रिया — शुभविवाह सोहळा",text:"३ डिसेंबर २०२६ रोजी सायंकाळी ५:१५ वाजता आमच्यासोबत आनंदात सहभागी व्हा.",url:location.href};
  if(navigator.share){try{await navigator.share(data);}catch(e){}}
  else if(navigator.clipboard){await navigator.clipboard.writeText(location.href);alert("Invitation link copied!");}
  else{prompt("Copy the invitation link:",location.href);}
});