const author_list = document.querySelector(".main__list");

const authors = [{
   name: "Gabriel Rosa da Silva",
   github_user: "GabrielRosa835",
   linkedin_user: "Gabriel Rosa da Silva",
   link_linkedin: "https://www.linkedin.com/in/gabrielrosadasilva/",
   facens_ra: 237069,
}, {
   name: "Guilherme A. E. Souza",
   github_user: "itsguisouza",
   linkedin_user: "Guilherme Augusto",
   link_linkedin: "http://www.linkedin.com/in/guilherme-souza-379352165/",
   facens_ra: 237306,
}, {
   name: "Lucas M. O. Freitas",
   github_user: "Lumarcone",
   linkedin_user: "Lucas Marcone",
   link_linkedin: "https://www.linkedin.com/in/lucas-marcone29/",
   facens_ra: 121708,
}, {
   name: "Milena Mazzei Barcia",
   github_user: "milenabarcia",
   linkedin_user: "Milena Barcia",
   link_linkedin: "https://www.linkedin.com/in/milena-barcia-3b00aa2b3/",
   facens_ra: 237291,
}, {
   name: "Thomas Soares da Silveira",
   github_user: "ThomasJanoski",
   linkedin_user: "Thomas Janoski",
   link_linkedin: "https://www.linkedin.com/in/thomas-janoski-0156b7234/",
   facens_ra: 235751,
}, {
   name: "Wesley Matheus Silva",
   github_user: "Weslethai",
   linkedin_user: "Wesley Matheus",
   link_linkedin: "https://www.linkedin.com/in/wesley-silva-bb6312179/",
   facens_ra: 236896,
}]

authors.forEach(element => {
   var author_card = document.createElement("li");
   author_card.className = "author";

   var author_img = document.createElement("img");
   author_img.className = "author__img";
   author_img.src = "/assets/" + element.github_user + ".jpg";
   author_img.alt = element.github_user + "_image";

   // ===================================================================

   var author_info = document.createElement("div");
   author_info.className = "author__info";

   // ===================================================================

   var author_name = document.createElement("h4");
   author_name.className = "author__name";
   author_name.textContent = element.name;

   // ===================================================================

   var author_github = document.createElement("a");
   author_github.className = "author__data";
   author_github.href = "https://github.com/" + element.github_user;
   author_github.target = "_blank";
   author_github.rel = "noopener noreferrer";

   var author_github_icon = document.createElement("span");
   author_github_icon.className = "fa-brands fa-github";

   var author_github_user = document.createElement("span");
   author_github_user.textContent = element.github_user;

   // ===================================================================

   var author_linkedin = document.createElement("a");
   author_linkedin.className = "author__data";
   author_linkedin.href = element.link_linkedin;
   author_linkedin.target = "_blank";
   author_linkedin.rel = "noopener noreferrer";

   var author_linkedin_icon = document.createElement("span");
   author_linkedin_icon.className = "fa-brands fa-linkedin";

   var author_linkedin_user = document.createElement("span");
   author_linkedin_user.textContent = element.linkedin_user;

   // ===================================================================

   var author_facens = document.createElement("div");
   author_facens.className = "author__data";

   var author_facens_logo = document.createElement("img");
   author_facens_logo.className = "author__facens__logo";
   author_facens_logo.src = "./../../assets/facens_logo.png";
   author_facens_logo.alt = "facens_logo";

   var author_facens_ra = document.createElement("span");
   author_facens_ra.innerHTML = `<b>RA:</b> ${element.facens_ra}`;

   // ===================================================================   

   author_info.appendChild(author_name);

   author_github.appendChild(author_github_icon);
   author_github.appendChild(author_github_user);
   author_info.appendChild(author_github);

   author_linkedin.appendChild(author_linkedin_icon);
   author_linkedin.appendChild(author_linkedin_user);
   author_info.appendChild(author_linkedin);

   author_facens.appendChild(author_facens_logo);
   author_facens.appendChild(author_facens_ra);
   author_info.appendChild(author_facens);

   author_card.appendChild(author_img);
   author_card.appendChild(author_info);

   author_list.appendChild(author_card);
})