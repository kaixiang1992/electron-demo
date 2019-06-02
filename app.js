const { app, BrowserWindow } = require("electron");
const path = require("path");

/**
 * @description 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被垃圾回收的时候，window对象将会自动的关闭
 */
let win;

function createWindow(){
    //TODO: 创建800*600浏览器窗口
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    // TODO: 加载app的index.html文件
    win.loadURL(path.resolve(__dirname, 'index.html'));  
    // TODO: 打开开发者工具
    win.webContents.openDevTools();
}

/**
 * @description Electron 会在初始化后并准备
 * 创建浏览器窗口时，调用这个函数。
 * 部分 API 在 ready 事件触发后才能使用。
 */
app.on('ready', createWindow);
