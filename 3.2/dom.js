// 将虚拟的 dom 元素渲染为真实 dom
function renderer(vnode, container) {
  // 使用 vnode 的 tag 作为标签名创建 dom 元素
  const el = document.createElement(vnode.tag)[0]
  // 遍历 vnode.props 将属性和事件添加到 dom 元素
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      // 如果是以 on 开头则说明是事件
      el.addEventListener(
        key.substr(2).toLowerCase(), // -> 事件名称 onClick=>click(返回把原字符串所有大写字母都变成小写的字符串。)
        vnode.props[key] // 事件处理函数
      )
    }
  }

  // 处理 children
  if (typeof vnode.children === "string") {
    // 如果 children 是字符串,说明是元素的文本子节点
    el.appeendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    // 递归调用 renderer 函数渲染子节点 使用当前 el 作为挂载点
    vnode.children.forEach((child) => renderer(child, el))
  }

  // 将元素添加到挂载点下
  container.appeendChild(el)
}
