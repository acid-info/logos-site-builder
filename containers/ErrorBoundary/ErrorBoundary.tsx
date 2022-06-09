import {Component, ErrorInfo} from "react";

import style from "./Style.module.css";

class ErrorBoundary extends Component<any> {
    state: {error: null|string};

    constructor(props: any) {
        super(props)
        this.state = { error: null }
    }
    static getDerivedStateFromError(error: any) {
        return { error: error.message }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log({ error, errorInfo })
    }

    render() {
        if (this.state.error) {
            let message = this.state.error;

            if(message.indexOf("MathJax") > -1){
                message = "It seems the MathJSX was not loaded, please make sure you have `_includes: [math]` in front-matter of your markdown page!"
            }

            return (
                <div className={style.container}>
                    <h2>Oops, there is an error!</h2>
                    <p>{message}</p>
                    <button
                        type="button"
                        onClick={() => this.setState({ error: null })}
                    >
                        Try again?
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary