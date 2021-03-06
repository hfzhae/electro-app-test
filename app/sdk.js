const { ipcMain } = require('electron')
const ffi = require("ffi-napi")

module.exports = app => {
  const obj = ffi.Library(`./static/ScalesSDK.dll`, {
    "OPO_GetResult": ["int", ["int"]],
    "OPO_Open": ["int", ["string"]],
  })
  ipcMain.on('ScalesSDK', (event, arg) => {
    const { weight } = arg
    const ScalesSDK = require("./sdk")
    event.returnValue = obj.OPO_GetResult(weight)
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
