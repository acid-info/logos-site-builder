import {ESiteTemplateNames, ITemplateUiConfig, ITemplateUiConfigs} from "../types/data.types";
import {DefaultTemplate_Markdown} from "../templates/Deafult/DefaultTemplate";

export const logosTemplatesUiConfig:ITemplateUiConfigs = {
    [ESiteTemplateNames.DEFAULT]: {
        searchResultSnippedTextLengthPre: 50,
        searchResultSnippedTextLengthPost: 150,
    }
}

export const logosTemplates = {
    [ESiteTemplateNames.DEFAULT]: DefaultTemplate_Markdown
};