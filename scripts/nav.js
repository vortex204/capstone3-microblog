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
  






    const footer = document.createElement("footer");
    footer.id = "footer";
    
    const year = document.createElement("span");
    year.id = "year";
    footer.appendChild(year);
    
    const teamMembers = [
      { name: "Anita Grant Anderson", link: "https://github.com/agrant1876" },
      { name: "Claudia Gonzalez", link: "https://github.com/claudiagonzalez0305" },
      { name: "Jeffrey Espinal", link: "https://github.com/vortex204" },
      { name: "Mohamed Al Chorbaji", link: "https://github.com/mohamedalchorbaji" },
      { name: "Paulette Yigo", link: "https://github.com/pyigo" },
      { name: "Yonesh Thapa", link: "https://github.com/ayuwayang" },
    ];
    
    const teamList = document.createElement("ul");
    teamMembers.forEach((member) => {
      const listItem = document.createElement("li");
     
      const link = document.createElement("a");
      link.classList.add("teamMember")
      link.href = member.link;
      link.textContent = member.name;
      listItem.appendChild(link);
      teamList.appendChild(listItem);
    });
    
    const copyright = document.createTextNode(`\u00A9 Presented by Team Jefferey. All rights reserved.`);
    footer.appendChild(copyright)
    footer.appendChild(document.createElement("br"));
    footer.appendChild(document.createTextNode("Team Members:"));
    footer.appendChild(document.createElement("br"));
    footer.appendChild(teamList);
    footer.appendChild(document.createElement("br"));
    footer.appendChild(document.createTextNode("All rights reserved."));
    
    document.body.appendChild(footer);
    
    const currentYear = new Date().getFullYear();
    document.getElementById("year").textContent = currentYear;
    


})