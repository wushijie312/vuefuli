module.exports = {
    devServer: {
        host:'localhost',                                     // 配置端口

        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',    // 目标 API 地址
                ws: true,                               // 是否代理 websockets
                changOrigin: true,                      // 跨域配置
                pathRewrite: {                          
                    '^/api': '/'
                }
            }
        }
    },
    lintOnSave: false                                   // 取消 eslint 验证
};