async function import_component(component) {
   try {
      const targetElement = document.querySelector(component.parent_selector);

      if (targetElement) {
         if(component.position == "start"){
            targetElement.prepend(component.to_node());
         } else if(component.position == "end") {
            targetElement.appendChild(component.to_node());
         } else {
            console.error('Posição inválida:', component.position);
         }
      } else {
         console.error('Elemento alvo não encontrado:', component.parent_selector);
      }
   } catch (error) {
      console.error('Erro ao importar o HTML:', error);
   }
}