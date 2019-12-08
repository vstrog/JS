const CLOCK = document.getElementById('clock');

setInterval(() => {
    const NOW = moment(); 
    const TIMING = NOW.format('HH:mm:ss');
    CLOCK.textContent = TIMING;
}, 1000);