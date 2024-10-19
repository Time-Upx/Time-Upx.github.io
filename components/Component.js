class Component {
   url;
   parent_selector;
   position;

   constructor(url, parent_selector, position){
      this.url = url;
      this.parent_selector = parent_selector;
      this.position = position;
   }

   to_node() {return document.createElement('div');}
}