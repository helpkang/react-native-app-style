export default class StyleContext {
    constructor(styles) {
        this.styles = styles
    }

    getTheme = () => {
        return this.styles
    }

    get = (name) => {
        return this.styles[name]
    }
}