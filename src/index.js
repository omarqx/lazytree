function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}


function createTextElement(type, text, id) {
  const element = document.createElement(type);
  element.appendChild(document.createTextNode(text));
  element.setAttribute('id', (id === undefined) ? guid() : id);
  return element;
}

function treeview(list) {
  const ul = document.createElement('ul');
  list.map(item => createTextElement('li', item.value, item.id))
    .forEach((element) => {
      ul.appendChild(element);
    });
  return ul;
}

module.exports = treeview;
