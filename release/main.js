const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

function resolve(dir) {
  return path.join(__dirname, dir);
}

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, './dist/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );
  // win.loadURL('http://localhost:8080');
  // 打开开发者工具
  win.webContents.openDevTools();

  //登录窗口最小化
  ipcMain.on('window-minimize', function () {
    win.minimize();
  });
  //登录窗口最大化
  ipcMain.on('window-maximize', function () {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });
  //登录窗口关闭
  ipcMain.on('window-close', function () {
    win.close();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
