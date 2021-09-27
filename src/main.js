const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        title: "抽签数字",
        icon: `${__dirname}/../public/icon/png/icon.png`,
        autoHideMenuBar: true,
    });
    mainWindow.maximize();

    mainWindow.loadURL(`file://${__dirname}/../public/html/index.html`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});
