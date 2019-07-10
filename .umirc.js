
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'react-dva-umi-demo',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/api':{
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  // 配置式路由
  // routes: [
  //   {
  //     path: './index',
  //     component: ''
  //   },
  //   {
  //     path: '/users',
  //     component: './users'
  //   }
  // ]
}
