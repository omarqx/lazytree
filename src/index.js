function createTextElement(type, text, id) {
  const element = document.createElement(type);
  element.appendChild(document.createTextNode(text));
  element.setAttribute('id', id);
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
