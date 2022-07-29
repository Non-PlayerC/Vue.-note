const MyComponent = function () {
  return {
    tag: "div",
    props: {
      onclick: () => alert("hello"),
    },
    children: "click me",
  }
}
const vnode = {
  tag: MyComponent,
}

// 返回函数
function renderer(vnode, container) {
  if (typeof vnode.tag === "string") {
    mountElement(vnode, container)
  } else if (typeof vnode.tag === "function") {
    mountComponent(vnode, container)
  }
}

// 判断返回
function mountComponent(vnode, container) {
  const subtree = vnode.tag()
  renderer(subtree, container)
}

// 渲染器
function mountElement(vnode, container) {
  const el = document.createElement(vnode.tag)
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      el.addEventListener(key.substr(2).toLowerCase(), vnode.props[key])
    }
  }

  if (typeof vnode.children === "string") {
    Element.appendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child) => renderer(child, el))
  }

  // 将元素添加到挂载点下
  container.appendChild(el)
}
