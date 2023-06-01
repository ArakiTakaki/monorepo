const path = require('path');

module.exports = {
  '*.{js,ts,tsx}': (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file)).join(' ');
    return [
      `yarn eslint ${relativePaths}`,
      `yarn prettier --write ${relativePaths}`,
      `yarn cspell -c ./.cspellrc.json ${relativePaths}`,
    ];
  },
};
