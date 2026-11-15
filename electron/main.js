const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

let win;
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
  });
  app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    win = new BrowserWindow({
      width: 1100, height: 760, minWidth: 420, minHeight: 520,
      backgroundColor: '#EEF1F6',
      icon: path.join(__dirname, '..', 'icons', 'icon-512.png'),
      webPreferences: { contextIsolation: true, sandbox: true }
    });
    win.loadFile(path.join(__dirname, '..', 'index.html'));
    win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
    win.webContents.on('will-navigate', (e, url) => {
      if (!url.startsWith('file://')) { e.preventDefault(); shell.openExternal(url); }
    });
  });
  app.on('window-all-closed', () => app.quit());
}
