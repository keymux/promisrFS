const { promisify } = require("@keymux/promisr");

const fs = require("fs");

const simpleCreator = fn => (...args) => promisify(fn)(...args);

const _accessPromiseCreator = fs => simpleCreator(fs.access);

const accessPromise = _accessPromiseCreator(fs);

const _appendFilePromiseCreator = fs => simpleCreator(fs.appendFile);

const appendFilePromise = _appendFilePromiseCreator(fs);

const _chmodPromiseCreator = fs => simpleCreator(fs.chmod);

const chmodPromise = _chmodPromiseCreator(fs);

const _chownPromiseCreator = fs => simpleCreator(fs.chown);

const chownPromise = _chownPromiseCreator(fs);

const _closePromiseCreator = fs => simpleCreator(fs.close);

const closePromise = _closePromiseCreator(fs);

const _copyFilePromiseCreator = fs => simpleCreator(fs.copyFile);

const copyFilePromise = _copyFilePromiseCreator(fs);

const _fchmodPromiseCreator = fs => simpleCreator(fs.fchmod);

const fchmodPromise = _fchmodPromiseCreator(fs);

const _fchownPromiseCreator = fs => simpleCreator(fs.fchown);

const fchownPromise = _fchownPromiseCreator(fs);

const _fdatasyncPromiseCreator = fs => simpleCreator(fs.fdatasync);

const fdatasyncPromise = _fdatasyncPromiseCreator(fs);

const _fstatPromiseCreator = fs => simpleCreator(fs.fstat);

const fstatPromise = _fstatPromiseCreator(fs);

const _fsyncPromiseCreator = fs => simpleCreator(fs.fsync);

const fsyncPromise = _fsyncPromiseCreator(fs);

const _ftruncatePromiseCreator = fs => simpleCreator(fs.ftruncate);

const ftruncatePromise = _ftruncatePromiseCreator(fs);

const _lchmodPromiseCreator = fs => simpleCreator(fs.lchmod);

const lchmodPromise = _lchmodPromiseCreator(fs);

const _lchownPromiseCreator = fs => simpleCreator(fs.lchown);

const lchownPromise = _lchownPromiseCreator(fs);

const _linkPromiseCreator = fs => simpleCreator(fs.link);

const linkPromise = _linkPromiseCreator(fs);

const _lstatPromiseCreator = fs => simpleCreator(fs.lstat);

const lstatPromise = _lstatPromiseCreator(fs);

const _mkdirPromiseCreator = fs => simpleCreator(fs.mkdir);

const mkdirPromise = _mkdirPromiseCreator(fs);

const _mkdtempPromiseCreator = fs => simpleCreator(fs.mkdtemp);

const mkdtempPromise = _mkdtempPromiseCreator(fs);

const _openPromiseCreator = fs => simpleCreator(fs.open);

const openPromise = _openPromiseCreator(fs);

const _readPromiseCreator = fs => simpleCreator(fs.read);

const readPromise = _readPromiseCreator(fs);

const _readdirPromiseCreator = fs => simpleCreator(fs.readdir);

const readdirPromise = _readdirPromiseCreator(fs);

const _readFilePromiseCreator = fs => simpleCreator(fs.readFile);

const readFilePromise = _readFilePromiseCreator(fs);

const _readlinkPromiseCreator = fs => simpleCreator(fs.readlink);

const readlinkPromise = _readlinkPromiseCreator(fs);

const _realpathPromiseCreator = fs => simpleCreator(fs.realpath);

const realpathPromise = _realpathPromiseCreator(fs);

const _realpathNativePromiseCreator = fs => simpleCreator(fs.realpath.native);

const realpathNativePromise = _realpathNativePromiseCreator(fs);

const _renamePromiseCreator = fs => simpleCreator(fs.rename);

const renamePromise = _renamePromiseCreator(fs);

const _rmdirPromiseCreator = fs => simpleCreator(fs.rmdir);

const rmdirPromise = _rmdirPromiseCreator(fs);

const _statPromiseCreator = fs => simpleCreator(fs.stat);

const statPromise = _statPromiseCreator(fs);

const _symlinkPromiseCreator = fs => simpleCreator(fs.symlink);

const symlinkPromise = _symlinkPromiseCreator(fs);

const _truncatePromiseCreator = fs => simpleCreator(fs.truncate);

const truncatePromise = _truncatePromiseCreator(fs);

const _unlinkPromiseCreator = fs => simpleCreator(fs.unlink);

const unlinkPromise = _unlinkPromiseCreator(fs);

const _utimesPromiseCreator = fs => simpleCreator(fs.utimes);

const utimesPromise = _utimesPromiseCreator(fs);

const _writePromiseCreator = fs => simpleCreator(fs.write);

const writePromise = _writePromiseCreator(fs);

const _writeFilePromiseCreator = fs => simpleCreator(fs.writeFile);

const writeFilePromise = _writeFilePromiseCreator(fs);

module.exports = {
  // No contract guarantee for exports prefixed with '_'
  // Use at your own risk
  _accessPromiseCreator,
  _appendFilePromiseCreator,
  _chmodPromiseCreator,
  _chownPromiseCreator,
  _closePromiseCreator,
  _copyFilePromiseCreator,
  _fchmodPromiseCreator,
  _fchownPromiseCreator,
  _fdatasyncPromiseCreator,
  _fstatPromiseCreator,
  _fsyncPromiseCreator,
  _ftruncatePromiseCreator,
  _lchmodPromiseCreator,
  _lchownPromiseCreator,
  _linkPromiseCreator,
  _lstatPromiseCreator,
  _mkdirPromiseCreator,
  _mkdtempPromiseCreator,
  _openPromiseCreator,
  _readPromiseCreator,
  _readdirPromiseCreator,
  _readFilePromiseCreator,
  _readlinkPromiseCreator,
  _realpathPromiseCreator,
  _realpathNativePromiseCreator,
  _realpath: {
    nativePromiseCreator: _realpathNativePromiseCreator,
  },
  _renamePromiseCreator,
  _rmdirPromiseCreator,
  _statPromiseCreator,
  _symlinkPromiseCreator,
  _truncatePromiseCreator,
  _unlinkPromiseCreator,
  _utimesPromiseCreator,
  _writePromiseCreator,
  _writeFilePromiseCreator,

  accessPromise,
  appendFilePromise,
  chmodPromise,
  chownPromise,
  closePromise,
  copyFilePromise,
  fchmodPromise,
  fchownPromise,
  fdatasyncPromise,
  fstatPromise,
  fsyncPromise,
  ftruncatePromise,
  lchmodPromise,
  lchownPromise,
  linkPromise,
  lstatPromise,
  mkdirPromise,
  mkdtempPromise,
  openPromise,
  readPromise,
  readdirPromise,
  readFilePromise,
  readlinkPromise,
  realpathPromise,
  realpath: {
    nativePromise: realpathNativePromise,
  },
  renamePromise,
  rmdirPromise,
  statPromise,
  symlinkPromise,
  truncatePromise,
  unlinkPromise,
  utimesPromise,
  writePromise,
  writeFilePromise,
};
