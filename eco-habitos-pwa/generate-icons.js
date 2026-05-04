const sharp = require('sharp');

const svgIcon = `<svg width="512" height="512" viewBox="0 0 680 680" xmlns="http://www.w3.org/2000/svg">
  <circle cx="340" cy="340" r="300" fill="#22c55e"/>
  <path d="M340 180 C260 220 200 310 240 400 C270 460 310 480 340 480 C370 480 410 460 440 400 C480 310 420 220 340 180Z" fill="#ffffff" opacity="0.95"/>
  <path d="M340 480 C340 380 340 280 340 180" stroke="#22c55e" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M340 350 C310 330 280 320 260 310" stroke="#22c55e" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M340 350 C370 330 400 320 420 310" stroke="#22c55e" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M340 290 C318 275 295 268 278 262" stroke="#22c55e" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M340 290 C362 275 385 268 402 262" stroke="#22c55e" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M340 230 C325 220 310 216 298 214" stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M340 230 C355 220 370 216 382 214" stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M180 260 C160 300 155 340 165 375" stroke="#ffffff" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.85"/>
  <polygon points="155,370 175,390 185,365" fill="#ffffff" opacity="0.85"/>
  <path d="M230 500 C280 530 340 535 395 520" stroke="#ffffff" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.85"/>
  <polygon points="390,510 405,530 415,508" fill="#ffffff" opacity="0.85"/>
  <path d="M500 370 C515 335 510 295 490 260" stroke="#ffffff" stroke-width="12" fill="none" stroke-linecap="round" opacity="0.85"/>
  <polygon points="478,255 498,245 500,270" fill="#ffffff" opacity="0.85"/>
</svg>`;

const svgBuffer = Buffer.from(svgIcon);

sharp(svgBuffer).resize(192, 192).toFile('public/logo192.png', (err) => {
  if (err) console.error('Error 192:', err);
  else console.log('✅ logo192.png generado');
});

sharp(svgBuffer).resize(512, 512).toFile('public/logo512.png', (err) => {
  if (err) console.error('Error 512:', err);
  else console.log('✅ logo512.png generado');
});

sharp(svgBuffer).resize(64, 64).toFile('public/favicon.ico', (err) => {
  if (err) console.error('Error favicon:', err);
  else console.log('✅ favicon.ico generado');
});