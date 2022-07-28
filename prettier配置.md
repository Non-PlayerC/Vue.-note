### prettier 配置

项目级的配置，在项目根目录添加配置文件 prettier.config.js 或者 .prettierrc.js

```javascript
module.exports = {
  printWidth: 100,
  tabWidth: 2, // 超过最大值换行
  semi: false, // 结尾不用分号
  singleQuote: true, // 使用单引号
  disableLanguages: ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
  htmlWhitespaceSensitivity: "ignore",
}
```

> /_ prettier 的配置 _/
>
> "prettier.printWidth": 100, // 超过最大值换行
>
> "prettier.tabWidth": 4, // 缩进字节数
>
> "prettier.useTabs": false, // 缩进不使用 tab，使用空格
>
> "prettier.semi": true, // 句尾添加分号
>
> "prettier.singleQuote": true, // 使用单引号代替双引号
>
> "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如 GitHub comment）而按照 markdown 文本样式进行折行
>
> "prettier.arrowParens": "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
>
> "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
>
> "prettier.disableLanguages": ["vue"], // 不格式化 vue 文件，vue 文件的格式化单独设置
>
> "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
>
> "prettier.eslintIntegration": false, //不让 prettier 使用 eslint 的代码格式进行校验
>
> "prettier.htmlWhitespaceSensitivity": "ignore",
>
> "prettier.ignorePath": ".prettierignore", // 不使用 prettier 格式化的文件填写在项目的.prettierignore 文件中
>
> "prettier.jsxBracketSameLine": false, // 在 jsx 中把'>' 单独放一行
>
> "prettier.jsxSingleQuote": false, // 在 jsx 中使用单引号代替双引号
>
> "prettier.parser": "babylon", // 格式化的解析器，默认是 babylon
>
> "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
>
> "prettier.stylelintIntegration": false, //不让 prettier 使用 stylelint 的代码格式进行校验
>
> "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在 ES5 中加尾逗号）
>
> "prettier.tslintIntegration": false // 不让 prettier 使用 tslint 的代码格式进行校验
>
> "trailingComma": "none" // 函数最后不需要逗号
