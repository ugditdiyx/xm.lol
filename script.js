const background = document.getElementById('background');
const container = document.querySelector('.container');

document.addEventListener('mousemove', (e) => {
    const xPercent = e.clientX / window.innerWidth;
    const yPercent = e.clientY / window.innerHeight;

    // background parallax
    const bgX = (xPercent - 0.5) * 50;
    const bgY = (yPercent - 0.5) * 50;
    background.style.transform = `translate(${bgX}px, ${bgY}px)`;

    // background color shift dynamically
    const hueRotation = xPercent * 360;
    const saturation = 50 + yPercent * 50;
    background.style.filter = `blur(100px) saturate(${saturation}%) hue-rotate(${hueRotation}deg)`;

    // content moves slightly with cursor
    const containerX = (xPercent - 0.5) * 30;
    const containerY = (yPercent - 0.5) * 15;
    container.style.transform = `translate(calc(-50% + ${containerX}px), calc(-50% + ${containerY}px))`;
});

// === COOL STATUS BOX (Static, JS-only, editable only in code) ===

// ---- EDIT THIS TEXT TO CHANGE STATUS ----
const MY_STATUS_TEXT = 'Operational'; // <-- change this to whatever you want
// -----------------------------------------

// Create the box
const statusBox = document.createElement('div');
statusBox.style.cssText = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.15);
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.5), 0 0 60px rgba(255,255,255,0.2) inset;
  backdrop-filter: blur(15px) saturate(150%);
  color: #fff;
  font-family: sans-serif;
  z-index: 1000;
  animation: glowPulse 2.5s infinite alternate;
`;

// Title
const statusTitle = document.createElement('h1');
statusTitle.textContent = 'Service Status';
statusTitle.style.marginBottom = '20px';
statusTitle.style.textShadow = '0 0 10px #ffffff, 0 0 20px #4b6cb7';
statusBox.appendChild(statusTitle);

// Status text
const statusText = document.createElement('div');
statusText.textContent = MY_STATUS_TEXT; // only editable in code
statusText.style.cssText = `
  font-size: 20px;
  font-weight: bold;
  padding: 15px 30px;
  border-radius: 15px;
  background: linear-gradient(135deg, #28a745, #3edc6e);
  box-shadow: 0 0 15px #28a745, 0 0 30px #3edc6e inset;
  text-shadow: 0 0 10px #28a745;
`;
statusBox.appendChild(statusText);

// Append to body
document.body.appendChild(statusBox);

// Glow pulse animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes glowPulse {
  0% { box-shadow: 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2) inset; }
  50% { box-shadow: 0 0 35px rgba(255,255,255,0.6), 0 0 70px rgba(255,255,255,0.3) inset; }
  100% { box-shadow: 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2) inset; }
}`;
document.head.appendChild(styleSheet);
