const electron = require('electron');
const path = require('path');
const nativeImage = electron.nativeImage;

let appIcon = nativeImage.createFromPath(path.join(__dirname, 'assets/icons/png/256x256.png'));

// Module to control application life.
const app = electron.app;

// Module to control menu options
const Menu = electron.Menu;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

// Setup global shortcut.
const globalShortcut = electron.globalShortcut;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1080,
		height: 720,
		icon: appIcon
	});

	// Create global media key shortcuts.
	let registerKeys = function () {

		const reg = globalShortcut.register('MediaPlayPause', () => {
			 // console.log('mediaplaypause pressed');
			mainWindow.webContents.sendInputEvent({
				type: "keyDown",
				keyCode: "\u0020"
			});
			mainWindow.webContents.sendInputEvent({
				type: "keyUp",
				keyCode: "\u0020"
			});
		});

		const regNext = globalShortcut.register('MediaNextTrack', () => {
			// console.log('medianexttrack pressed');
			mainWindow.webContents.sendInputEvent({
				type: "keyDown",
				keyCode: "right"
			});
			mainWindow.webContents.sendInputEvent({
				type: "keyUp",
				keyCode: "right"
			});
		});

		const regPrevious = globalShortcut.register('MediaPreviousTrack', () => {
			// console.log('medianexttrack pressed');
			mainWindow.webContents.sendInputEvent({
				type: "keyDown",
				keyCode: "left"
			});
			mainWindow.webContents.sendInputEvent({
				type: "keyUp",
				keyCode: "left"
			});
		});
	};
	
	// Populate menu items for the window
	const menuTemplate = [
		{
			label: 'File',
			submenu: [
			{
				label: 'Open DevTools',
				click: () => {
					mainWindow.webContents.openDevTools();
				},
				accelerator: 'CmdOrCtrl+Alt+I'
			}, {
				label: 'Quit',
				click: () => {
					app.quit();
				},
				accelerator: 'CmdOrCtrl+Q'
			}
			]
		},
		{
			label: 'Info',
			submenu: [
			{
				label: 'GitHub',
				click: () => {
					electron.shell.openExternal("https://github.com/jomurgel/PocketCasterApp");
				}
			}
			]
		}
	];

	const menu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(menu);
	
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	
	// Emitted when the window is closed.
	mainWindow.on( 'closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	})

	// Register mediakeys.
	registerKeys();

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on( 'ready', createWindow )

// Quit when all windows are closed.
app.on( 'window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if ( process.platform !== 'darwin' ) {
		app.quit();
	}
})

app.on( 'activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if ( mainWindow === null ) {
		createWindow();
	}
})
