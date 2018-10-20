# PocketCasterApp
An Electron-powered app for PocketCasts

<img width="1200" alt="pocketcaster_window" src="https://user-images.githubusercontent.com/5230729/33774653-35e22504-dbf9-11e7-923b-62018b66c682.png">

## To Use
To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/jomurgel/PocketCasterApp.git
# Go into the repository
cd PocketCasterApp
# Install dependencies
npm install
# Run the app
npm start
```

## Generating AppImage and .deb packages for Debian based Linux distros:

```bash
npm run dist
```
This will generate a `./dist` directory. You can open the deb or AppImage to install the program to your Applications folder. 



Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Features
- Includes mediakey support for Windows and Mac OS.
- Switch from Stable to Beta via the Version menu.

## Roadmap
- [ ] Fix icon issue on Linux. (Looks like a persistent bug for [electron-build](https://github.com/electron-userland/electron-builder/issues/3404))
- [ ] Support media keys on Linux.
- [ ] Create dist packages for Mac and Windows.
- [ ] Touchbar support.
- [ ] Notifications.

## License
[CC0 1.0 (Public Domain)](LICENSE.md)


