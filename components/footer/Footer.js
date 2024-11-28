class Footer extends Component {
   constructor(parent_selector, position, ...links){
      super(parent_selector, position);
   }

   to_node() {
      const node = document.createElement('footer');
      node.innerHTML = `
         <footer>
            <p>2024 ©</p>
         </footer>
      `
      return node;
   }
}