const fs = require('fs');

const companies = []

for(let i = 0; i < 2; i++){
   companies.push({
      img: "./../assets/noImage.jpg",
      name: "Company "+(i+1),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus tortor arcu, et consectetur ante aliquet sed. Nam quam risus, varius quis lectus ac, congue tristique lacus. Fusce risus magna."
   })    
}

async function create_company_page(company) {
   try {
      await fs.writeFile(
         './../companies/' + company.name.toLowerCase(),
         'Conteúdo do arquivo'
      );
      console.log('Página criada com sucesso!');
   } catch (err) {
      console.error('Erro ao criar a página:', err);
   }
}