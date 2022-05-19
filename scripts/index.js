(async() => {
    await require('./clear');
    await require('./content/index');
    await require('./content/static-files');
    await require('./generate-theme-style');
    await require('./generate-theme-assets');
    await require('./generate-config-json');
})()