# CoverDatabase

## Dev Installation
### Main problem is with the sqlite module being unknown
- npm install
- npm install sqlite3 --build-from-source
- ./node_modules/.bin/electron-rebuild -w sqlite3 -p
- npm run electron and expect it to work this time

- Node v18
- Angular Cli v16
I also have node-gyp (9.4/8.4) and electron-forge installed globally.  Not sure how important either is.
