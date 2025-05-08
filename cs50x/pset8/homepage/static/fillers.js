let page = document.currentScript.getAttribute("data-page");

// Head Tag

let head = `
      <link href="/static/${page}.css" rel="stylesheet">`
document.querySelector("head").insertAdjacentHTML("beforeend", head);

document.querySelector("title").innerHTML = `Aishik's Page - ${page.toUpperCase()}`

// Body Tag
const bodyTag = document.querySelector("body");

let nav = `<nav class="navbar navbar-dark bg-body-white sticky-top">
            <div class="container">
                <a class="navbar-brand xanh-mono-regular-italic" href="index.html">Aishik's Page</a>
                <button class="navbar-toggler xanh-mono-regular-italic" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <i class="bi bi-list"></i> Menu
                </button>
                <div class="offcanvas offcanvas-top text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header container">
                        <h5 class="offcanvas-title xanh-mono-regular-italic" id="offcanvasNavbarLabel">Site Map</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body container">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="work.html">Work</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>`

bodyTag.insertAdjacentHTML("afterbegin", nav);

document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href == (window.location.protocol + '//' + window.location.host + window.location.pathname)) {
    link.classList.add("active");
    link.ariaCurrent = "page";
  };
})

let footer = `<footer>
            <div class="footer container">
              <hr>
              <div class="mt-5">
                <p>Created by Aishik Nath</p>
                <p>
                  &copy; Aishik Nath, 2025
                </p>
              </div>
            </div>

        </footer>`

bodyTag.insertAdjacentHTML("beforeend", footer);

