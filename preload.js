const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  invoke: (params) => ipcRenderer.invoke(params.event, params.query, params.params),
  // we can also expose variables, not just functions
})