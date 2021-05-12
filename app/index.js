
const { app, BrowserWindow } = require('electron')
const path = require('path')
require("./ScalesSDK")(app)

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true, // 解决渲染进程报错window.require is not a function得问题
      contextIsolation: false // 解决渲染进程报错window.require is not a function得问题
    }
  })

  win.loadFile(`${__dirname}/dist/index.html`)
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