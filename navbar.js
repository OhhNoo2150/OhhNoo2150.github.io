const header = document.getElementById('header');
const myNavBar = `
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
<div class="container-fluid" id="nav-wrap">
  <a id="navbar-brand" class="navbar-brand"><img src="./Images/TitleImageForNavbar.png" alt="Daniel Rivera over Taino Coqui"></a>
  <ul id="navbar-nav" class="navbar-nav d-flex flex-row bd-highlight">
    <li class="nav-item">
      <a
        class="nav-link active"
        aria-current="page"
        href="./index.html"><img class="homeButton" src="./Images/NavbarHomeButton.gif" alt="home button"></a>
     </li>
    <li class="nav-item">
      <a class="nav-link active" href="./about.html"><img class="aboutButton" src="./Images/NavbarAboutButton.gif" alt="about button"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="./projects.html"><img class="projectsButton" src="./Images/NavbarProjectsButton.gif" alt="projects button"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="./map.html"><img class="mapButton" src="./Images/NavbarMapButton.gif" alt="map button"></a>
    </li>
  </ul>
</div>
</nav>
`;

const createNavBar = () => header.innerHTML = myNavBar;