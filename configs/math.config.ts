import {MathJax3Config} from "better-react-mathjax/MathJax3";

export const logosMathConfig: MathJax3Config = {
    loader: { load: ["input/asciimath"] },
    asciimath: {
        delimiters: [
            ["$", "$"],
            ["`", "`"]
        ]
    },
    tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        processEscapes: true
    },
    jax: ["input/TeX", "input/MathML", "input/AsciiMath", "output/CommonHTML"],
    extensions: ["tex2jax.js", "mml2jax.js", "asciimath2jax.js", "MathMenu.js", "MathZoom.js", "AssistiveMML.js", "[Contrib]/a11y/accessibility-menu.js"],
    TeX: {
        extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"],
        equationNumbers: {
            autoNumber: "AMS"
        }
    }
}