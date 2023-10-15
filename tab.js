document.addEventListener("DOMContentLoaded", function() {
    const stealthInput = document.getElementById('stealth');
    const ticketInput = document.getElementById('ticket');

    if (stealthInput) {
        stealthInput.setAttribute('tabindex', '-1');
    }

    if (ticketInput) {
        ticketInput.setAttribute('tabindex', '-1');
    }
});
