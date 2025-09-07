const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  databaseRequest: (params) => ipcRenderer.invoke(params.event, params.query, params.params),
  openDevTools: () => ipcRenderer.invoke('open-devtools'),
  // we can also expose variables, not just functions
});
