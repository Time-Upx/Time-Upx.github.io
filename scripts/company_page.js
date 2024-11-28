const company_name_container = document.querySelector(".company_name");
const company_logo_container = document.querySelector(".company_logo");
const company_long_description_container = document.querySelector(".company_description");

const company_adress_container = document.querySelector("#adress");
const company_operation_container = document.querySelector("#local_of_operation");
const company_experience_container = document.querySelector("#experience_years");
const company_average_score_container = document.querySelector("#average_score");

const company_contact_email_container = document.querySelector("#contact_email");
const company_contact_zap_container = document.querySelector("#contact_zap");
const company_contact_phone_container = document.querySelector("#contact_phone");

const company_facebook_container = document.querySelector("#facebook_link");
const company_linkedin_container = document.querySelector("#linkedin_link");
const company_instagram_container = document.querySelector("#instagram_link");

// ==========================================================================================

const urlParams = new URLSearchParams(window.location.search);
const target = urlParams.get('target');

import { companies_data } from "/companies/companies_content.js"
const company = companies_data[target]

company_name_container.innerHTML = company.name;
company_logo_container.src = company.logo;
company_long_description_container.innerHTML = company.description_b;

let adress_data = company.adress
let adress = `${adress_data.street} ${adress_data.number}, ${adress_data.city}-${adress_data.state}, 
${adress_data.cep}`

company_adress_container.innerHTML = adress;
company_operation_container.innerHTML = company.local_of_operation;
company_experience_container.innerHTML = company.experience_years;
company_average_score_container.innerHTML = company.average_score;

const packages_container = document.getElementById("packages_container")
let packages_html = ""

company.packages.forEach(element => {
    packages_html += "<li class=\"package\">"
    packages_html += `<h4>${element.name}</h4>`
    packages_html += `<p>${element.description}</p>`
    packages_html += `<span>R$ ${element.price}</span>`
    packages_html += "</li>"
})

packages_container.innerHTML = packages_html

const services_container = document.getElementById("services_container")
let services_html = ""

company.services.forEach(element => {
    services_html += "<li class=\"service\">"
    services_html += "<div class=\"client\">"
    services_html += `<img class="service_img" src='${element.img}'>`
    services_html += `<span>${element.client}</span>`
    services_html += `<img class="service_score" src="/assets/EstrelaIcone.png">`
    services_html += `<span>${element.satisfaction.score}</span>`
    services_html += "</div>"
    services_html += `<p>${element.satisfaction.comment}</p>`
    services_html += "</li>"
})

services_container.innerHTML = services_html

company_contact_email_container.innerHTML = company.contact.email;
company_contact_zap_container.innerHTML = company.contact.whatsapp;
company_contact_phone_container.innerHTML = company.contact.phone;

company_facebook_container.href = company.social_medias.facebook;
company_linkedin_container.href = company.social_medias.linkedin;
company_instagram_container.href = company.social_medias.instagram;