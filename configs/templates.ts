import {ESiteTemplateNames, ITemplateUiConfigs} from "../types/data.types";
import {DefaultTemplate_Markdown} from "../templates/Deafult/DefaultTemplate";
import {AcademiaTemplate_Markdown} from "../templates/Academia/AcademiaTemplate";

export const logosTemplatesUiConfig:ITemplateUiConfigs = {
    [ESiteTemplateNames.DEFAULT]: {
        searchResultSnippedTextLengthPre: 50,
        searchResultSnippedTextLengthPost: 150,
    },
    [ESiteTemplateNames.ACADEMIA]: {
        searchResultSnippedTextLengthPre: 50,
        searchResultSnippedTextLengthPost: 150,
    }
}

export const logosTemplates = {
    [ESiteTemplateNames.DEFAULT]: DefaultTemplate_Markdown,
    [ESiteTemplateNames.ACADEMIA]: AcademiaTemplate_Markdown,
};