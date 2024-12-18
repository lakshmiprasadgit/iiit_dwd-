// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM Elements
const loginPage = document.getElementById('login-page');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');

// Login Form Submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        alert('Login successful!');
        loginPage.classList.add('hidden');
        dashboard.classList.remove('hidden');
    } catch (error) {
        alert(error.message);
    }
});

// Logout Button
logoutBtn.addEventListener('click', async () => {
    await auth.signOut();
    alert('Logged out successfully!');
    dashboard.classList.add('hidden');
    loginPage.classList.remove('hidden');
});
