export function loadHeader(headerElement) {
    const header = document.getElementById(headerElement);
    let HTML = `
        <nav class="navbar">
            <div class="logo">
                <img src="images/logo.png" alt="Sip & Slurp Ramen Bar Logo" />
            </div>
            <div class="nav-section">
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    viewBox="0 -960 960 960"
                    width="50px"
                    fill="#ffffff"
                    id="hamburgerBtn"
                    >
                    <path
                        d="M120-700v-60h720v60H120Zm0 500v-60h720v60H120Zm0-250v-60h720v60H120Z"
                    />
                    </svg>
                </div>
            </div>
        </nav>
    `;

    if (header.children !== null) {
        header.innerHTML = HTML;

        const hamburger = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('active');
        });
    } 
}