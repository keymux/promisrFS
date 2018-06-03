const { expect } = require("chai");

const { spy } = require("sinon");
const uuid = require("uuid");

const implementedFsModules = [
  "access",
  "appendFile",
  "chmod",
  "chown",
  "close",
  "copyFile",
  "fchmod",
  "fdatasync",
  "ftruncate",
  "fstat",
  "fsync",
  "lchmod",
  "lchown",
  "link",
  "lstat",
  "mkdir",
  "mkdtemp",
  "open",
  "read",
  "readdir",
  "readFile",
  "readlink",
  "realpath",
  // This one has to be created differently
  //"realpath.native",
  "rename",
  "rmdir",
  "stat",
  "symlink",
  "truncate",
  "unlink",
  "utimes",
  "write",
  "writeFile",
];

const promisrFS = require("../../src/promisr_fs");

describe("fs_promise.js", () => {
  let expected;

  const mock = fsSpy => (...args) => {
    fsSpy.apply(null, args.slice(0, args.length - 1));

    args[args.length - 1](undefined, expected);
  };

  const getFsMock = fsSpy =>
    implementedFsModules.reduce(
      (acc, item) =>
        Object.assign(acc, {
          [item]: mock(fsSpy),
        }),
      {}
    );

  beforeEach(() => {
    expected = uuid();
  });

  const shouldShortcut = verb =>
    `should return a function which promises to ${verb} a file`;

  const validateActual = (fsSpy, args) => actual => {
    expect(actual).to.equal(expected);
    expect(fsSpy.calledOnce).to.be.true;
    expect(fsSpy.args).to.deep.equal([args]);
  };

  const testFn = each =>
    Promise.all(
      [0, 1, 2, 3, 4].map(count => {
        const fsSpy = spy();

        const args = new Array(count).fill(0).map(() => uuid());

        expect(args.length).to.equal(count);

        return promisrFS[each.creator](getFsMock(fsSpy))(...args).then(
          validateActual(fsSpy, args)
        );
      })
    );

  implementedFsModules
    .map(item => ({ item, creator: `_${item}PromiseCreator` }))
    .forEach(each => {
      describe(`${each.item}()`, () => {
        it(shouldShortcut(each.item), () => testFn(each));
      });
    });

  describe("_realpathNativePromiseCreator()", () => {
    it(shouldShortcut("realpath.native"), () =>
      Promise.all(
        [0, 1, 2, 3, 4].map(count => {
          fsSpy = spy();

          const args = new Array(count).fill(0).map(() => uuid());

          expect(args.length).to.equal(count);

          return promisrFS._realpath
            .nativePromiseCreator({ realpath: { native: mock(fsSpy) } })(
              ...args
            )
            .then(validateActual(fsSpy, args));
        })
      )
    );
  });
});
