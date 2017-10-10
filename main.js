const electron = require('electron');

const { app, BrowserWindow } = electron;
let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${app.getAppPath()}/public/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
