const navMenu = [
    {
        name: "Home",
        link: "/index.html",
        class: "nav-item"
    },
  

    {
        name: "Register",
        link: "/registration.html",
        class: "nav-item"
    },
    {
        name: "Posts",
        link: "/post/index.html",
        class: "nav-item"
    },
    {
        name: "Profile",
        link: "/profile.html",
        class: "nav-item"
    }

]





document.addEventListener("DOMContentLoaded", () => {

    // creating bootstrap CSS Link
    const bootstrapCSSLink = document.createElement("link");
    bootstrapCSSLink.rel = "stylesheet";
    bootstrapCSSLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    bootstrapCSSLink.integrity = "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM";
    bootstrapCSSLink.crossOrigin = "anonymous";

    document.head.appendChild(bootstrapCSSLink);

    // creating bootstrap javascript source
    const bootstrapJS = document.createElement("script");
    bootstrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    bootstrapJS.integrity = "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz";
    bootstrapJS.crossOrigin = "anonymous";

    document.body.appendChild(bootstrapJS);


    //Creating a navbar
    const nav = document.createElement("nav")
    nav.classList.add("navbar")
    function navLink(item) {

        const navSublist = document.createElement('li');// create nav items in list format
        navSublist.classList.add(item.class)// assigning class as nav-item for nav links

        const link = document.createElement("a"); //setting the htmlPage to link


        //setting name and link for the nav-items
        link.innerHTML = item.name;

        link.href = item.link

        // navSublist.classList.add(item.class);
        navList.classList.add('navbar-nav');

        navSublist.appendChild(link);

        return navSublist
    }




    const navList = document.createElement("ul")

    //append each nav-item with appropriate links
    navMenu.forEach((item) => {

        navList.appendChild(navLink(item));

    });
    nav.appendChild(navList);
    document.body.appendChild(nav);
    let mainContent = document.querySelector(".main-content")
    document.body.insertBefore(nav, mainContent)




    const footer = document.createElement("footer")
    footer.id = "footer"
    const year = document.createElement('span')
    year.id = 'year'

    footer.appendChild(year);

    const copyright = document.createTextNode(' \u00A9 Presented by Team Jefferey. All right reserved.')
    footer.appendChild(copyright);

    document.body.appendChild(footer);
    const currentYear = new Date().getFullYear();

    document.getElementById('year').textContent = currentYear


})