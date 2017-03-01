/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';

import hoistStatics from 'hoist-non-react-statics';

export default function styledComponent(tagName) {
  return (OriginComp) => {

    if (!tagName) {
      tagName = OriginComp.displayName || OriginComp.name
      if (tagName.startsWith("wrap_")) throw Exception(tagName + " is not possible new tagName")
    }
    const lowerTagName = tagName.toLowerCase()

    class StyleWraped extends Component {
      static displayName = 'wrap_' + tagName
      static contextTypes = {
        styleContext: PropTypes.object,
        ...OriginComp.contextTypes,
      }

      static propTypes = {
        cN: PropTypes.string,
        ...OriginComp.propTypes,
      }

      constructor(props, context) {
        super(props, context)
        componentExtends(this, lowerTagName)
      }

      render() {
        const {style, cN, ...others} = this.props
        const {styleContext} = this.context



        const styled = this.getStyledByClass(cN, styleContext)
        const styledTagName = this.getStyledByTagName(lowerTagName, styleContext)
        const styledTagNameClass = this.getStyledByTagNameClass(lowerTagName, cN, styleContext)

        return (
          <OriginComp  {...others} tagName={lowerTagName} style={[styledTagName, styled, styledTagNameClass, style]} ref={(c) => this.origin = c} >
            {this.props.children}
          </OriginComp>
        )
      }

      getStyledByClass = (cN, styleContext) => {
        const classNames = cN ? cN.split(/\s/g) : []

        const styled = classNames.map((className) => {
          return styleContext.get("." + className)
        })
        return styled
      }

      getStyledByTagName = (tagName, styleContext) => {

        const styled = styleContext.get(tagName)
        if (styled) return [styled]
        return null

      }

      getStyledByTagNameClass = (tagName, cN, styleContext) => {
        const classNames = cN ? cN.split(/\s/g) : []

        const styled = classNames.map((className) => {
          return styleContext.get(tagName + "." + className)
        })

        return styled
      }

    }

    return hoistStatics(StyleWraped, OriginComp)

  }
}


function componentExtends(that, lowerTagName) {
  if (lowerTagName === 'textinput') {
    that.focus = function () {
      that.origin.focus()
    }.bind(that)
  }

}