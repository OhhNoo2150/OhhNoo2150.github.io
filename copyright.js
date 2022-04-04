const copyright = document.getElementById('copyright');
let date = new Date().getFullYear();
const myCopyright = `
<div class="copyright">
    <p class="copy-text">&copy ${date} Daniel Rivera</p>
    </div>
`;
const createCopyright = () => copyright.innerHTML = myCopyright