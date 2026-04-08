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

// === COOL STATUS BOX (Static, top-right, JS-only) ===

// ---- EDIT THIS TEXT TO CHANGE STATUS ----
const MY_STATUS_TEXT = 'Operational'; // <-- change this to whatever you want
// -----------------------------------------

// Create the box
const statusBox = document.createElement('div');
statusBox.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.15);
  padding: 25px 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.2) inset;
  backdrop-filter: blur(12px) saturate(150%);
  color: #fff;
  font-family: sans-serif;
  z-index: 1000;
  animation: glowPulse 2.5s infinite alternate;
`;

// Title
const statusTitle = document.createElement('h3');
statusTitle.textContent = 'Service Status';
statusTitle.style.margin = '0 0 10px 0';
statusTitle.style.textShadow = '0 0 6px #ffffff, 0 0 12px #4b6cb7';
statusBox.appendChild(statusTitle);

// Status text
const statusText = document.createElement('div');
statusText.textContent = MY_STATUS_TEXT; // only editable in code
statusText.style.cssText = `
  font-size: 16px;
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 12px;
  background: linear-gradient(135deg, #28a745, #3edc6e);
  box-shadow: 0 0 12px #28a745, 0 0 25px #3edc6e inset;
  text-shadow: 0 0 8px #28a745;
`;
statusBox.appendChild(statusText);

// Append to body
document.body.appendChild(statusBox);

// Glow pulse animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes glowPulse {
  0% { box-shadow: 0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.2) inset; }
  50% { box-shadow: 0 0 25px rgba(255,255,255,0.6), 0 0 50px rgba(255,255,255,0.3) inset; }
  100% { box-shadow: 0 0 15px rgba(255,255,255,0.4), 0 0 30px rgba(255,255,255,0.2) inset; }
}`;
document.head.appendChild(styleSheet);
