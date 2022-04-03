const currentYear = new Date().getFullYear();
const footer = document.getElementById('footer');
const myFooter = `
    <p>Copyright ©
        ${currentYear}
        <img class='d-none d-sm-inline' src="./Images/PRFlagAnimated.gif" style='height: 2rem;' alt="Wepa!">
        <span style="color:blue;">DIR</span><span style="color:red;">Web</span><span style="color:white;">Development</span>
    </p>
    <a href="https://www.facebook.com/OhhNoo" class="icon facebook">
                    <div class="tooltip">Facebook</div>
                    <span><i class="fab fa-facebook-f"></i></span>
                </a>
                <a href="https://twitter.com/Boricua2150" class="icon twitter">
                    <div class="tooltip">Twitter</div>
                    <span><i class="fab fa-twitter"></i></span>
                </a>
                <a href="https://www.instagram.com/ohhnoo2150/" class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <span><i class="fab fa-instagram"></i></span>
                </a>
                <a href="https://github.com/OhhNoo2150" class="icon github">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                </a>
                <a href="https://www.linkedin.com/in/danielrivera/" class="icon linkedin">
                    <div class="tooltip">LinkedIn</div>
                    <span><i class="fab fa-linkedin"></i></span>
                </a>`;

const injectMyFooter = () => footer.innerHTML = myFooter;

const footerBackground = () => {
    footer.style.backgroundColor = 'rgb(135, 206, 235)';
    footer.style.height = '3rem';
    footer.style.marginTop = '0';
}