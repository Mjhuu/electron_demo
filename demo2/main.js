/*主进程*/
// 创建electron引用 =>app
// 创建electron BrowserWindow 的引用
const {app, BrowserWindow} = require('electron');
const path = require('path');

// 变量 保存 对应用窗口的引用
let mainWindow = null;

app.on('ready', () =>{
    // 创建BrowserWindow的实例 赋值给win打开窗口
    mainWindow = new BrowserWindow({
        width: 600,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // 把index.html加载到窗口里
    // mainWindow.loadFile('index.html');
    mainWindow.loadURL(path.join('file:', __dirname, 'index.html'));
    // 开启渲染进程中的调试模式
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    })
});

