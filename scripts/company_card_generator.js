const companies_container = document.getElementById("companies_container");
const menu_list = document.getElementById("search_menu_list");

const companies = []

companies.push({
    img: "./../../assets/noImage.jpg",
    name: "Example",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus tortor arcu, et consectetur ante aliquet sed. Nam quam risus, varius quis lectus ac, congue tristique lacus. Fusce risus magna."
})

for(let i = 0; i < 8; i++){
    companies.push({
        img: "./../../assets/noImage.jpg",
        name: "Company "+(i+1),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus tortor arcu, et consectetur ante aliquet sed. Nam quam risus, varius quis lectus ac, congue tristique lacus. Fusce risus magna."
    })    
}

companies.forEach(element => {
    var company_card_img = document.createElement("img");
    company_card_img.alt = element.name + " Photo";
    company_card_img.src = element.img;
    company_card_img.className = "company__card__img";

    var company_card_name = document.createElement("h6");
    company_card_name.textContent = element.name;
    company_card_name.className = "company__card__name";

    var company_card_description = document.createElement("p");
    company_card_description.textContent = element.description;
    company_card_description.className = "company__card__description";

    var company_card = document.createElement("a");
    company_card.className = "company__card";
    company_card.href = "./../../companies/" + element.name.toLowerCase() + ".html";

    company_card.appendChild(company_card_img);
    company_card.appendChild(company_card_name);
    company_card.appendChild(company_card_description);

    companies_container.appendChild(company_card);

    var company_menu_item_anchor = document.createElement("a");
    company_menu_item_anchor.textContent = element.name;
    company_menu_item_anchor.className = "main__searchBox__menu__list__item__anchor";
    company_menu_item_anchor.href = "./../../companies/" + element.name.toLowerCase() + ".html";

    var company_menu_item = document.createElement("li");
    company_menu_item.className = "main__searchBox__menu__list__item";
    company_menu_item.appendChild(company_menu_item_anchor);

    menu_list.appendChild(company_menu_item);
});