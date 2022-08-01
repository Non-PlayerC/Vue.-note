function render(obj, root) {
  const el = document.createElement(obj.tag)
  
  if(typrof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if(obj.children) {
    obj.children.forEach((child) => render(child,el))
  };
  //将元素添加到 root
  root.appendChild(el)
}
