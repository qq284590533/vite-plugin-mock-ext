# vite-plugin-mock-ext

[![npm][npm-img]][npm-url] [![node][node-img]][node-url]

本插件是对[`vite-plugin-mock`](https://www.npmjs.com/package/vite-plugin-mock)的扩展，在`ViteMockOptions`增加了一个选项`mockUrl`，使得使用mock服务时更灵活。


## mockUrl
**type:** string

**default:**  ''

设置mock接口地址前缀，需满足正则`/^\/\b/`。如果设置了该选项，会在构建mock数据的时候自动在`url`前加上该前缀

**examples:**

```ts
// vite.config.ts

plugins:[
  // ...
  viteMockServe({
    mockPath: 'mock',
    mockUrl: '/mock'
  })
]

// mock/user.ts

{
  url: '/api/createUser',
  method: 'post',
  response: ({ body, query }) => {
  return {
    code: 0,
    message: 'ok',
    data: null,
  }
},

```

最终构建的mock地址为`/mock/api/createUser`


请求的时候需要加上前缀：
```
axios.post('/mock/api/createUser', data)
```

前缀可以在环境变量中统一配置，这样做的好处是，可以在mock数据中使用和正式环境一样的接口地址，而在生产环境需要切换到线上地址时可以统一更换。


**更多使用详情请参考 [`vite-plugin-mock`](https://www.npmjs.com/package/vite-plugin-mock)**

## License

MIT

[npm-img]: https://img.shields.io/npm/v/vite-plugin-mock.svg
[npm-url]: https://npmjs.com/package/vite-plugin-mock
[node-img]: https://img.shields.io/node/v/vite-plugin-mock.svg
[node-url]: https://nodejs.org/en/about/releases/
