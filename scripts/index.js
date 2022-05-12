(async() => {
    await require('./clear');
    await require('./content/index');
    await require('./generate-theme-style');
    await require('./generate-theme-assets');
})()