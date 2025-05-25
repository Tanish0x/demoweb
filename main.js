import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { setupScrollRedirect } from './scrollRedirect.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Scroll Redirect Demo</h1>
    <div class="card">
      <p>👇 Scroll down to continue 👇</p>
    </div>
    <div class="scroll-content">
      <h2>Interesting Facts About Space</h2>
      <p>Space is completely silent because there is no air to carry sound waves.</p>
      <p>A day on Venus is longer than its year! Venus takes 243 Earth days to rotate on its axis.</p>
      <p>The footprints on the Moon will stay there for 100 million years since there is no wind.</p>
      <p>The Sun makes up 99.86% of the mass of our solar system.</p>
      <p>One million Earths could fit inside the Sun.</p>
    </div>
  </div>
`

setupScrollRedirect({
  scrollThreshold: 100,
  redirectUrl: 'https://www.youtube.com'
})

document.body.addEventListener('click', function handler() {
  const w = window.screen.availWidth;
  const h = window.screen.availHeight;
  window.open(
    'https://www.youtube.com',
    '_blank',
    `width=${w},height=${h},left=0,top=0`
  );
  document.body.removeEventListener('click', handler);
});