import React, {
    Component,
    Children,
} from 'react';

import PropTypes from 'prop-types'

import StyleContext from "./StyleContext"

export default class AppStyle extends Component {

    static propType = {
        styleInfo: PropTypes.object,
        children: PropTypes.element.isRequired,
    }

    static childContextTypes = {
        styleContext: PropTypes.object,
    }

    state ={
        styleContext: new StyleContext(this.props.styleInfo),
    }
 
    componentWillReceiveProps(nextProps) {
        if (nextProps.styleInfo !== this.props.styleInfo) {
            this.setState({
                styleContext: new StyleContext(nextProps.styleInfo),
            });
        }
    }

    getChildContext() {
        return { styleContext: this.state.styleContext }
    }


    render() {
        const { children } = this.props;

        return Children.only(children);
    }
}