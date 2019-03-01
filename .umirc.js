
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'personal-web-v2',
      dll: false,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: [
      {
        exclude: [
          /components\//,
        ],
        
      }],
    }],
  ],
}
