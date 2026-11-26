@import url('https://googleapis.com');

* {
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-image: url('bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-color: #1e293b;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 16px;
}

@media (max-width: 900px) {
    body {
        background-size: contain;
        background-position: center top;
        align-items: flex-start;
    }
    .container {
        margin-top: 180px;
    }
}

.container {
    background: rgba(255, 255, 255, 0.62);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.75);
    padding: 24px 20px;
    border-radius: 22px;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 440px;
}

.salon-logo {
    display: block;
    width: 92px;
    height: 92px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 10px;
    border: 3px solid #d4af37;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

h1 {
    font-size: 20px;
    font-weight: 700;
    color: #0f172a;
    text-align: center;
    margin: 4px 0 18px;
}

h2 {
    font-size: 17px;
    font-weight: 700;
    color: #0f172a;
    text-align: center;
    margin: 0 0 12px;
}

.lang-switch button {
    background: rgba(255, 255, 255, 0.78);
    color: #0f172a;
    border: 1px solid rgba(15, 23, 42, 0.25);
    border-radius: 10px;
    font-weight: 600;
    font-size: 13px;
    transition: all 0.2s ease;
}

.lang-switch button:hover {
    background: #0f172a;
    color: #ffffff;
}

.form-group {
    margin-bottom: 14px;
}

label {
    display: block;
    font-weight: 600;
    font-size: 13.5px;
    color: #0f172a;
    margin-bottom: 6px;
}

input[type="text"],
input[type="datetime-local"],
select,
textarea {
    width: 100%;
    padding: 11px 14px;
    border: 1.5px solid rgba(148, 163, 184, 0.85);
    border-radius: 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.88);
    color: #0f172a;
    resize: vertical;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25);
}

.form-group > div {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.75);
    border: 1.5px solid rgba(203, 213, 225, 0.85);
    border-radius: 12px;
    padding: 10px 12px;
    margin-bottom: 8px;
    transition: all 0.2s ease;
}

.form-group > div:hover {
    border-color: #d4af37;
    background: rgba(254, 252, 232, 0.92);
}

input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #0f172a;
    margin-right: 10px;
    cursor: pointer;
}

.form-group > div label {
    margin: 0;
    font-weight: 600;
    cursor: pointer;
    flex: 1;
}

#totalPrice {
    font-size: 17px;
    font-weight: 700;
    color: #064e3b;
    background: rgba(236, 253, 245, 0.92);
    border: 2px solid #10b981;
    text-align: center;
}

button {
    width: 100%;
    padding: 13px;
    border: none;
    border-radius: 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    transition: transform 0.15s ease;
}

button:active {
    transform: scale(0.98);
}

#calculateTotal {
    background: #0f172a;
    color: #ffffff;
}

#sendBooking {
    background: linear-gradient(135deg, #25d366, #128c7e);
    color: #ffffff;
    box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
}

.divider {
    border: none;
    border-top: 1.5px solid rgba(15, 23, 42, 0.15);
    margin: 24px 0 18px;
}

#gbSubmit {
    background: #d4af37;
    color: #0f172a;
}

.gb-list {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.gb-item {
    background: rgba(255, 255, 255, 0.85);
    border-left: 4px solid #d4af37;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 13.5px;
}

.gb-item strong {
    display: block;
    color: #0f172a;
    margin-bottom: 3px;
}

.gb-item span {
    font-size: 11.5px;
    color: #64748b;
}

.gb-item p {
    margin: 4px 0 0;
    color: #1e293b;
}
