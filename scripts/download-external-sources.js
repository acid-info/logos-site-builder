const {downloadExternalSource, isValidSourceUrl} = require("./utils");
const {CONTENT_SOURCE_URL} = process.env;

module.exports = async (siteConfigs) => {
    try {
        const {external_sources = []} = siteConfigs;

        for await (const externalSource of external_sources){
            if(!isValidSourceUrl(externalSource.url)){
                return console.warn("Not valid url for external source ", externalSource.url);
            }
            await downloadExternalSource(
                externalSource.url,
                externalSource.sourcePath,
                externalSource.targetPath
            );
        }
    } catch (e) {
        console.log("Error downloading content from source, ", CONTENT_SOURCE_URL);
        console.error(e);
    }
}