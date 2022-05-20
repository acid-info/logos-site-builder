(async() => {
    await require('./clear');
    const siteConfigs = await require("./download-source")();

    await require('./copy-static-files')(siteConfigs);
    await require("./generate-sidebar-data")(siteConfigs);
    await require('./generate-theme-style')(siteConfigs);
    await require('./generate-theme-assets')(siteConfigs);
    await require('./copy-config-json')(siteConfigs);
})()

module.exports = {};