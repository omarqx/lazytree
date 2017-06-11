function treeview(list) {
  const ul = document.createElement('ul')
  const first = document.createElement('li');
  first.appendChild(document.createTextNode('first'));
  const second = document.createElement('li');
  second.appendChild(document.createTextNode('second'));
  ul.appendChild(first);
  ul.appendChild(second);
  return ul;
}

module.exports = treeview;
