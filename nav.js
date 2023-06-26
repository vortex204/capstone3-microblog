const navMenu = [
    {
        name: "Home",
        link: "index.html",
        class: "nav-item"
    },
    {
        name: "Login",
        link: "login.html",
        class: "nav-item"
    },

    {
        name: "Register",
        link: "registration.html",
        class: "nav-item"
    },
    {
        name: "Posts",
        link: "posts.html",
        class: "nav-item"
    },
    {
        name: "Profile",
        link: "profile.html",
        class: "nav-item"
    }

]





document.addEventListener("DOMContentLoaded", () => {
    
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