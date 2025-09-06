const { app, ipcMain, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const fs = require("fs");
const sqlite3 = require('sqlite3').verbose();


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, '/preload.js')
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/cover-collection/index.html`),
            protocol: "file:",
            slashes: true,
        })
    );

    mainWindow.on("closed", () => mainWindow = null);
}

app.on("ready", createWindow);


app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

if (!fs.existsSync('./database')) {
    fs.mkdirSync('./database');
}

let db = new sqlite3.Database('./database/cover-collection.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
        // Example: Create a table if it doesn't exist
        db.run("CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");
        db.all("SELECT * FROM Users LIMIT 1", [], (err, res) => {
            console.log(JSON.stringify(res));
            if (!res?.length) {
                db.run("INSERT INTO Users (name) VALUES ('stamp-man');")
            }
        });
    }
});

ipcMain.handle('db-query', async (event, query, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        db.close();
        app.quit();
    }
});