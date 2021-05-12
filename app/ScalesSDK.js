const { ipcMain } = require('electron')
const ffi = require("ffi-napi")
const obj = ffi.Library(`./static/ScalesSDK.dll`, {
  "OPO_GetResult": ["int", ["int"]],
  "OPO_Open": ["int", ["string"]],
})

module.exports = app => {
  ipcMain.on('ScalesSDK', (event, arg) => {
    const { weight } = arg
    const ScalesSDK = require("./ScalesSDK")
    event.returnValue = obj.OPO_GetResult(weight)
    console.log(weight)
  })
}



// module.exports = {
//   OPO_GetResult(a, b) {
//     return obj.OPO_GetResult(a, b)
//   }
// }
// // const result = libm.OPO_GetResult(1, 1)
// const result = libm.OPO_Open("com1:115200")
// console.log(libm)
// console.log("xxxxxxxxxx")
// console.log(result)
// console.log("xxxxxxxxxx")
