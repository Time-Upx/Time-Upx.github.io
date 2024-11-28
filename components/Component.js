class Component {
   parent_selector;
   position;

   constructor(parent_selector, position){
      this.parent_selector = parent_selector;
      this.position = position;
   }

   to_node() {return document.createElement('div');}
}