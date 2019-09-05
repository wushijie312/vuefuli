// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

// const devProxy = ['/mobile','/weixin','android'];  // 代理
const devProxy = ['/api'];  // 代理
var proEnv = require('./config/pro.env.js');  // 生产环境
var uatEnv = require('./config/uat.env.js');  // 测试环境
var devEnv = require('./config/dev.env.js');  // 本地环境
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
if(env==='production'){  // 生产环境
    target = proEnv.hosturl;
}else if(env==='test'){ // 测试环境
    target = uatEnv.hosturl;
}else{  // 本地环境
    target = devEnv.hosturl;
}
// 案例：
// proxyTable:{
//     '/api':{//匹配所有以’/api‘开头的请求路径
//         target:'http://localhost:4000',//代理目标的基础路径
//         changeOrigin:true,//支持跨域
//         pathRewrite:{//重写路径：去掉路径中的开头的’/api‘
//             '^/api':''
//         }
//     }
// }
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value, index) => {
    proxyObj[value] = {
        target: target,
        changeOrigin: true,
        pathRewrite: {
            [`^${value}`]: value
        }
    };
});

module.exports = {
    // baseUrl: '/',
    // outputDir: 'dist',
    // runtimeCompiler: true,
   
   
    devServer: {
        open:true,
        host:'localhost',
        port:8080,
        // https: false,
        // hotOnly: false,
        // disableHostCheck: true,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: proxyObj, // string | Object
        // before: app => {}
    }
};