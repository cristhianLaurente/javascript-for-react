function component(strings, ...values) {
    return function (props) {
      let newContent = strings.slice();
      values.forEach((value, index) => {
        newContent[index] += props[value];
      });
      return newContent.join("");
    };
  }
  
  function render(component, container) {
    container.innerHTML = component;
  }
  
  function createStyledApi(htmlTag) {
    return (styles) => (content) => `
      <${htmlTag} style="${styles}">${content}</${htmlTag}>
    `;
  }
  
  const tags = ["h1", "h2", "h3", "p", "div"];
  
  function createObjectStyled(tags) {
    return tags.reduce((acc, tag) => {
      let attr = tag;
      let newObj = { ...acc };
      newObj[attr] = createStyledApi(tag);
      return newObj;
    }, {});
  }
  
  const styledApi = createObjectStyled(tags);
  console.log(styledApi);
  
  // Creando los estilos
  const TitleStyled = styledApi.h3`
    color: orange;
    font-family: system-ui;
    font-size: 30px;
    text-shadow: 1px 1px 0 black;
  `;
  
  // Agregando el contenido
  const props = {
    firstName: "Mauro",
    lastName: "Quinteros",
  };
  const TitleContent = component`Hola ${"firstName"} ${"lastName"}`(props);
  console.log(TitleContent);
  
  // Combinando el contenido con los estilos
  const TitleComponent = TitleStyled(TitleContent);
  render(TitleComponent, window.container);