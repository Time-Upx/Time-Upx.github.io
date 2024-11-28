class Header extends Component {
   links;

   constructor(parent_selector, position, ...links){
      super(parent_selector, position);
      this.links = links;
   }

   to_node() {
      let node = document.createElement('header');
      
      let html_links = "";
      this.links.forEach(element => {
         let link_text = 
            element.indexOf("index.html") !== -1? "Início" :
            element.indexOf("about.html") !== -1? "Sobre" :
            "Link";
         
         html_links += 
            `<li class="header__navigation__list__item">
               <a class="header__navigation__list__item__anchor" href="${element}">${link_text}</a>
            </li>`
      })

      node.innerHTML = `
         <h1 class="header__pageTitle">SolarBridge</h1>
         <nav class="header__navigation">
            <ul class="header__navigation__list">
               ${html_links}
            </ul>
         </nav>
      `
      return node;
   }
}