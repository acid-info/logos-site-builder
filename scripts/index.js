(async() => {
    await require('./clear');
    const siteConfigs = await require("./download-source")();
    await require("./download-external-sources")(siteConfigs);
    await require('./copy-static-files')(siteConfigs);
    await require("./generate-content-data")(siteConfigs);
    await require("./generate-data-endpoints")(siteConfigs);
    await require('./generate-theme-style')(siteConfigs);
    await require('./copy-codeblock-style')(siteConfigs);
    await require('./copy-config-json')(siteConfigs);
    await require('./create-flexsearch-index')(siteConfigs);
})()

module.exports = {};