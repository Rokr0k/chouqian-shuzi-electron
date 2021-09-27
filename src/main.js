const { app, BrowserWindow } = require('electron');

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;

const createWindow = () => {
    const date = new Date();

    if (date.getMonth() === 3 && date.getDate() === 1) {
        mainWindow = new BrowserWindow({
            title: "ᡨᠣᠨ ᡨᠠᡨᠠᠮᠪᡳ",
            icon: `${__dirname}/../public/icon/png/icon.png`,
            autoHideMenuBar: true,
        });
        mainWindow.loadURL(`file://${__dirname}/../public/html/april-fools.html`);
    }
    else if (date.getMonth() === 9 && date.getDate() === 9) {
        mainWindow = new BrowserWindow({
            title: "튜ᇢ쳠쵹ᄍᆞᆼ",
            icon: `${__dirname}/../public/icon/png/icon.png`,
            autoHideMenuBar: true,
        });
        mainWindow.loadURL(`file://${__dirname}/../public/html/hangul.html`);
    }
    else {
        mainWindow = new BrowserWindow({
            title: "抽签数字",
            icon: `${__dirname}/../public/icon/png/icon.png`,
            autoHideMenuBar: true,
        });
        mainWindow.loadURL(`file://${__dirname}/../public/html/index.html`);
    }

    mainWindow.maximize();

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
