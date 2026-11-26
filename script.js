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
const translations = {
    ro: {
        title: "Calculator Programare Salon Canin",
        customer: "Nume Client:",
        dog: "Nume Câine:",
        size: "Talie Câine:",
        small: "Mică (50 RON)",
        medium: "Medie (75 RON)",
        large: "Mare (100 RON)",
        services: "Servicii Extra:",
        bath: "Spălat Complet (+25 RON)",
        trim: "Tuns & Aranjat (+35 RON)",
        nails: "Tăiat Unghii (+15 RON)",
        ears: "Curățat Urechi (+15 RON)",
        date: "Data și Ora Programării:",
        totalLabel: "Preț Total (RON):",
        calcBtn: "Calculează Totalul",
        sendBtn: "Trimite Programarea pe WhatsApp"
    },
    hu: {
        title: "Kutyakozmetika Időpontfoglaló",
        customer: "Ügyfél neve:",
        dog: "Kutya neve:",
        size: "Kutya mérete:",
        small: "Kicsi (50 RON)",
        medium: "Közepes (75 RON)",
        large: "Nagy (100 RON)",
        services: "Extra szolgáltatások:",
        bath: "Teljes fürdetés (+25 RON)",
        trim: "Nyírás és igazítás (+35 RON)",
        nails: "Karomvágás (+15 RON)",
        ears: "Fültisztítás (+15 RON)",
        date: "Időpont dátuma és órája:",
        totalLabel: "Végösszeg (RON):",
        calcBtn: "Összeg kiszámítása",
        sendBtn: "Foglalás küldése WhatsAppon"
    },
    en: {
        title: "Dog Grooming Salon Booking Calculator",
        customer: "Customer Name:",
        dog: "Dog Name:",
        size: "Dog Size:",
        small: "Small (50 RON)",
        medium: "Medium (75 RON)",
        large: "Large (100 RON)",
        services: "Extra Services:",
        bath: "Full Bath (+25 RON)",
        trim: "Haircut & Trim (+35 RON)",
        nails: "Nail Clipping (+15 RON)",
        ears: "Ear Cleaning (+15 RON)",
        date: "Appointment Date & Time:",
        totalLabel: "Total Price (RON):",
        calcBtn: "Calculate Total",
        sendBtn: "Send Booking via WhatsApp"
    }
};

function setLang(lang) {
    const t = translations[lang];
    document.querySelector('h1').innerText = t.title;
    document.querySelector('label[for="customerName"]').innerText = t.customer;
    document.querySelector('label[for="dogName"]').innerText = t.dog;
    document.querySelector('label[for="dogSize"]').innerText = t.size;

    const sizeOpts = document.getElementById('dogSize').options;
    sizeOpts[0].text = t.small;
    sizeOpts[1].text = t.medium;
    sizeOpts[2].text = t.large;

    document.querySelector('label[for="fullBath"]').innerText = t.bath;
    document.querySelector('label[for="haircutTrim"]').innerText = t.trim;
    document.querySelector('label[for="nailClipping"]').innerText = t.nails;
    document.querySelector('label[for="earCleaning"]').innerText = t.ears;
    document.querySelector('label[for="appointmentDateTime"]').innerText = t.date;
    document.getElementById('calculateTotal').innerText = t.calcBtn;
    document.getElementById('sendBooking').innerText = t.sendBtn;
}
