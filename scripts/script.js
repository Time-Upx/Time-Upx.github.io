const companies_container = document.getElementById("companies_container");
const menu_list = document.getElementById("search_menu_list");
const menu = document.getElementById("search_menu");
const menu_button = document.getElementById("menu_button");

const companies = []

for(let i = 0; i < 8; i++){
    companies.push({
        img: "./../assets/noImage.jpg",
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

    var company_card = document.createElement("div");
    company_card.className = "company__card";
    company_card.id = element.name;

    company_card.appendChild(company_card_img);
    company_card.appendChild(company_card_name);
    company_card.appendChild(company_card_description);

    companies_container.appendChild(company_card);

    var company_menu_item_anchor = document.createElement("a");
    company_menu_item_anchor.textContent = element.name;
    company_menu_item_anchor.className = "main__searchBox__menu__list__item__anchor";
    company_menu_item_anchor.href = "#" + element.name;

    var company_menu_item = document.createElement("li");
    company_menu_item.className = "main__searchBox__menu__list__item";
    company_menu_item.appendChild(company_menu_item_anchor);

    menu_list.appendChild(company_menu_item);
});

menu_button.addEventListener('click', function() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
menu.addEventListener('click', function() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
document.addEventListener('click', function(event) {
    if (menu.style.display === 'block' && !menu.contains(event.target) && event.target !== menu_button) {
        menu.style.display = 'none';
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && menu.style.display === 'block') {
        menu.style.display = 'none';
    }
});