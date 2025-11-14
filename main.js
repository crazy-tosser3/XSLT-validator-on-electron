const { app, BrowserWindow } = require('electron');
function createWindow() {
  let win = new BrowserWindow({ width: 1250, height: 800, autoHideMenuBar: true});
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
