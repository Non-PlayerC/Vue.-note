function render(obj, root) {
    var el = document.createElement(obj.tag);
    if (typrof)
        obj.children === 'string';
    {
        var text = document.createTextNode(obj.children);
        el.appendChild(text);
    }
    if (obj.children) {
        obj.children.forEach(function (child) { return render(child, el); });
    }
    ;
    //将元素添加到 root
    root.appendChild(el);
}
