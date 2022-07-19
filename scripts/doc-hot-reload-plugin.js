const path = require("path");
const fs = require("fs")
const childprocess = require("child_process");
const baseDir = path.resolve(__dirname, `../docs`);
const docDirs = childprocess.execSync(`ls ${baseDir}`);

// find all docs directories
const docs = docDirs
  .toString()
  .split("\n")
  .map((x) => x.trim())
  .filter(Boolean)
  .map((pluginName) => path.resolve(baseDir, `${pluginName}`));
docs.push(baseDir)

module.exports = class docHotReloadPlugin {
  apply(compiler) {
    compiler.hooks.afterCompile.tapAsync(
      "add-extra-watch-dirs",
      (compilation, callback) => {
        // add all docs directories to the watch list
        const contextDependencies = [...compilation.contextDependencies].concat(
          docs
        );
        contextDependencies.forEach((context) => {
          // attention that compilation.contextDependencies  is a Set 
          let stat = fs.lstatSync(context);
          let is_direc = stat.isDirectory()
          if (is_direc) {
            compilation.contextDependencies.add(context);
          }
        });
        callback();
      }
    );
    // In listening mode, the asynchronous hook to be executed before the next compilation
    compiler.hooks.watchRun.tapAsync(
      "add-extra-watch-dirs",
     async (compiler, callback) => {
        try {
        const fileWatcher = compiler.modifiedFiles;
        const changedFiles = [];
        // read config.json from baseDir
        const siteConfigs = JSON.parse(fs.readFileSync(path.resolve(baseDir, `config.json`), `utf8`));
        for(let i = 0 ; i < docs.length ; i++){
            const doc = docs[i];
            if (fileWatcher) {
                fileWatcher.has(doc) && changedFiles.push(doc)
            }
        }
        if (changedFiles.length) {
            await require('./copy-static-files')(siteConfigs);
            await require("./generate-content-data")(siteConfigs);
            await require("./generate-data-endpoints")(siteConfigs);
            await require('./generate-theme-style')(siteConfigs);
            await require('./copy-codeblock-style')(siteConfigs);
            await require('./copy-config-json')(siteConfigs);
            await require('./create-flexsearch-index')(siteConfigs);
            console.log("success change: " + changedFiles.join("\n"));
          }
        } catch (e) {
          console.error(e);
        }
        callback();
      }
    );
  }
};
