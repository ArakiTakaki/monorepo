const path = require('path');

module.exports = {
  '*.{js,ts,tsx}': (absolutePaths) => {
    const cwd = process.cwd();
    const relativePaths = absolutePaths.map((file) => path.relative(cwd, file)).join(' ');
    return [`eslint ${relativePaths}`, `prettier --write ${relativePaths}`];
  },
};
