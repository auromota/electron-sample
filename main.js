var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
    // if platform is Mac, ensure that only cmd + Q will quit
    if(process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 500, height: 500});
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/view/index.html');
    mainWindow.maximize();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
