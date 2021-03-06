
const { app, BrowserWindow, Menu, shell, dialog } = require('electron')
// const path = require('path')
require("./sdk")(app)

const menus = [{
  label: '文件',
  submenu: [
    {
      label: '关于我们',
      click: function () {
        const initConfig = require("./store")(app)
        initConfig.set("server", "127.0.0.1")
        // console.log(initConfig.get("server"))
        // shell.openExternal('https://zydsoft.com:8092/')
      }
    },
    {
      label: '退出',
      click() {
        const options = {
          type: 'warning',
          title: '确认提示',
          message: "是否要退出？",
          buttons: ['否', '是']
        }
        const result = dialog.showMessageBoxSync(options)
        result === 1 && app.quit()
      }
    }
  ]
}]

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    resizable: false,
    maximizable: false,
    minimizable: false,
    // autoHideMenuBar: true,
    // closable: true,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true, // 解决渲染进程报错window.require is not a function得问题
      contextIsolation: false, // 解决渲染进程报错window.require is not a function得问题
      webSecurity: false // 支持跨域请求
    }
  })
  // const mainMenu = Menu.buildFromTemplate(menus);
  const mainMenu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(mainMenu);
  if (!app.isPackaged) {
    win.loadURL('http://localhost:8080') // 开发环境
    win.webContents.openDevTools({ mode: 'detach' })
  } else {
    win.loadFile(`${__dirname}/dist/index.html`)
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})