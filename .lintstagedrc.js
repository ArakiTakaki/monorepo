const path = require('path');

const codeExt = ['ts', 'tsx'];
const styleExt = ['css', 'scss'];
const textExt = ['md'];
const allExts = [...codeExt, ...styleExt, ...textExt];

const createExt = (code) => `*.{${code.join(',')}}`;

module.exports = {
  [createExt(allExts)]: (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file)).join(' ');
    return [`textlint --fix ${relativePaths}`, `cspell -c ./.cspellrc.json ${relativePaths}`];
  },

  [createExt(codeExt)]: (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file)).join(' ');
    return [`prettier --write ${relativePaths}`, `yarn eslint ${relativePaths}`];
  },

  [createExt(styleExt)]: (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file)).join(' ');
    return [`stylelint ${relativePaths}`];
  },
};
