const companies_container = document.getElementById("companies_container");
const menu_list = document.getElementById("search_menu_list");

import { companies_data } from "/companies/companies_content.js"

for (let i = 1; i <= 0; i++) {
   companies_data["Empresa "+i] = 
      {
         "name": "Empresa "+i,
         "logo": "./assets/noImage.jpg",
         "description_s": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus est, aliquet fermentum tempor in, convallis finibus mauris. Nam imperdiet non diam et suscipit. Praesent non faucibus nulla. Integer condimentum."
      }
}

for (let company_name in companies_data) {
    let element = companies_data[company_name]

    var company_card_logo = document.createElement("img");
    company_card_logo.alt = element.name + " Logo";
    company_card_logo.src = element.logo;
    company_card_logo.className = "company__card__logo";

    var company_card_name = document.createElement("h6");
    company_card_name.textContent = element.name;
    company_card_name.className = "company__card__name";

    var company_card_description = document.createElement("p");
    company_card_description.textContent = element.description_s;
    company_card_description.className = "company__card__description";

    var company_card = document.createElement("a");
    company_card.className = "company__card";
    company_card.href = `/company_page.html?target=${company_name}`

    company_card.appendChild(company_card_logo);
    company_card.appendChild(company_card_name);
    company_card.appendChild(company_card_description);

    companies_container.appendChild(company_card);

    var company_menu_item_anchor = document.createElement("a");
    company_menu_item_anchor.textContent = element.name;
    company_menu_item_anchor.className = "main__searchBox__menu__list__item__anchor";
    company_menu_item_anchor.href = `/company_page.html?target=${company_name}`

    var company_menu_item = document.createElement("li");
    company_menu_item.className = "main__searchBox__menu__list__item";
    company_menu_item.appendChild(company_menu_item_anchor);

    menu_list.appendChild(company_menu_item);
};