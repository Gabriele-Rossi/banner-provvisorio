// Funzione per avviare il countdown basato su una data specifica e un offset orario
function startCountdown(targetDate, offsetMinutes) {
    const cdElement = document.getElementById('demo');
    const bannerElement = document.getElementById('banner');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            cdElement.textContent = "EXPIRED";
            bannerElement.style.display = 'block'; 
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            cdElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Imposta la data di scadenza del countdown a una data e un orario specifici
const targetDate = new Date("Nov 12, 2023 12:18:03 GMT+01:00").getTime();

// Specifica l'offset orario in minuti (ad esempio: 60 minuti per UTC+1)
const offsetMinutes = 60;

// Calcola la data di scadenza in base all'offset orario
const targetDateWithOffset = new Date(targetDate);
targetDateWithOffset.setMinutes(targetDateWithOffset.getMinutes() + offsetMinutes);

// Avvia il countdown con la nuova data di scadenza e l'offset orario specifici
document.addEventListener('DOMContentLoaded', () => {
    startCountdown(targetDateWithOffset, offsetMinutes);
});
