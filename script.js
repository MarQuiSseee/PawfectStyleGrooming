document.getElementById('calculateTotal').addEventListener('click', calculateTotal);
document.getElementById('sendBooking').addEventListener('click', sendBooking);
document.getElementById('dogSize').addEventListener('change', calculateTotal);
document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.addEventListener('change', calculateTotal));

function calculateTotal() {
    const basePrices = {
        small: 50,
        medium: 75,
        large: 100
    };

    const dogSize = document.getElementById('dogSize').value;
    const extraServices = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => parseInt(cb.value) || 0);
    const totalPrice = (basePrices[dogSize] || 0) + extraServices.reduce((acc, val) => acc + val, 0);

    document.getElementById('totalPrice').value = `Total: ${totalPrice} RON`;
}

function sendBooking() {
    calculateTotal();
    const customerName = document.getElementById('customerName').value;
    const dogName = document.getElementById('dogName').value;
    const dogSizeSelect = document.getElementById('dogSize');
    const dogSize = dogSizeSelect.options[dogSizeSelect.selectedIndex].text;
    const extraServices = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.parentElement.innerText.trim());
    const appointmentDateTime = document.getElementById('appointmentDateTime').value;
    const totalPrice = document.getElementById('totalPrice').value;

    const message = `Customer Name: ${customerName}\nDog Name: ${dogName}\nDog Size: ${dogSize}\nSelected Services: ${extraServices.length ? extraServices.join(', ') : 'None'}\nAppointment Date & Time: ${appointmentDateTime}\n${totalPrice}`;

    const url = `https://wa.me/40749941560?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}
