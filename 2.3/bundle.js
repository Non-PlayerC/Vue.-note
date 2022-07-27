function foo(obj) {
  obj && obj.foo;
}
//作为导出的函数中并没有包含 bar()
foo();
