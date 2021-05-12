//持久化存储
const Store = require('electron-store');
module.exports = app => {
  console.log(app.getPath("userData"))
  return new Store({
    name: "config",//文件名称,默认 config
    fileExtension: "conf",//文件后缀,默认json
    cwd: app.getPath('userData'),//文件位置,尽量不要动，路径为C:\Users\当前用户\AppData\Roaming\app
    encryptionKey: "aes-256-cbc",//对配置文件进行加密
    clearInvalidConfig: true, // 发生 SyntaxError  则清空配置,
  })
}