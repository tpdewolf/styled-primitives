'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = require('react')
var React__default = _interopDefault(React)
var styled = require('styled-components')
var styled__default = _interopDefault(styled)
var styledSystem = require('styled-system')

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }

  return target
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }

  strings.raw = raw
  return strings
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([
    '\n  box-sizing: border-box;\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}
var BoxDocz = function BoxDocz() {
  return React__default.createElement('div', null)
}
var Box = styled__default.div(
  _templateObject(),
  styledSystem.background,
  styledSystem.bottom,
  styledSystem.color,
  styledSystem.display,
  styledSystem.flex,
  styledSystem.fontSize,
  styledSystem.fontWeight,
  styledSystem.height,
  styledSystem.justifyContent,
  styledSystem.left,
  styledSystem.maxHeight,
  styledSystem.maxWidth,
  styledSystem.minHeight,
  styledSystem.minWidth,
  styledSystem.opacity,
  styledSystem.order,
  styledSystem.position,
  styledSystem.right,
  styledSystem.space,
  styledSystem.textAlign,
  styledSystem.top,
  styledSystem.width,
  styledSystem.zIndex
)

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose([
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n',
  ])

  _templateObject$1 = function _templateObject() {
    return data
  }

  return data
}
var Card =
  /*#__PURE__*/
  styled__default(Box)(
    _templateObject$1(),
    styledSystem.backgroundImage,
    styledSystem.backgroundPosition,
    styledSystem.backgroundRepeat,
    styledSystem.backgroundSize,
    styledSystem.border,
    styledSystem.borderBottom,
    styledSystem.borderColor,
    styledSystem.borderLeft,
    styledSystem.borderRadius,
    styledSystem.borderRight,
    styledSystem.borderTop,
    styledSystem.boxShadow
  )

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n'])

  _templateObject$2 = function _templateObject() {
    return data
  }

  return data
}

function transformValue(n) {
  if (!n || isNaN(n)) {
    return n
  }

  var cols = Number(n)
  return (cols / 12) * 100 + '%'
}

var inset =
  /*#__PURE__*/
  styledSystem.style({
    prop: 'inset',
    cssProperty: 'marginLeft',
    transformValue: transformValue,
  })
var col =
  /*#__PURE__*/
  styledSystem.style({
    prop: 'col',
    cssProperty: 'width',
    transformValue: transformValue,
  })
var StyledColumn =
  /*#__PURE__*/
  styled__default(Box)(_templateObject$2(), col, inset)
var Column = function Column(props) {
  return React__default.createElement(
    StyledColumn,
    Object.assign({}, props),
    props.children
  )
}

var Contain = function Contain(props) {
  var themeContext = React.useContext(styled.ThemeContext)
  return React__default.createElement(
    Box,
    Object.assign(
      {
        mx: 'auto',
        px:
          themeContext &&
          themeContext.grid &&
          themeContext.grid.container &&
          themeContext.grid.container.padding,
        maxWidth:
          themeContext &&
          themeContext.grid &&
          themeContext.grid.container &&
          themeContext.grid.container.maxWidth,
      },
      props
    )
  )
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose([
    '\n  display: flex;\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n',
  ])

  _templateObject$3 = function _templateObject() {
    return data
  }

  return data
}
var FlexDocz = function FlexDocz() {
  return React__default.createElement('div', null)
}
var Flex =
  /*#__PURE__*/
  styled__default(Box)(
    _templateObject$3(),
    styledSystem.alignItems,
    styledSystem.flexDirection,
    styledSystem.flexWrap,
    styledSystem.justifyContent
  )

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose([
    '\n      max-width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    ',
  ])

  _templateObject2 = function _templateObject2() {
    return data
  }

  return data
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose([
    '\n  \n  ',
    '\n\n  ',
    '\n  ',
    '\n  ',
    '\n\n',
  ])

  _templateObject$4 = function _templateObject() {
    return data
  }

  return data
}
var TextDocz = function TextDocz() {
  return React__default.createElement('div', null)
}
var StyledText =
  /*#__PURE__*/
  styled__default(Box)(
    _templateObject$4(),
    function(props) {
      return props.singleLine && styled.css(_templateObject2())
    },
    styledSystem.fontFamily,
    styledSystem.letterSpacing,
    styledSystem.lineHeight
  )
var Text = function Text(_ref) {
  var _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'span' : _ref$as,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, ['as', 'children'])

  return React__default.createElement(
    StyledText,
    Object.assign(
      {
        as: as,
      },
      props
    ),
    children
  )
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose([
    '\n  margin: 0px;\n  line-height: 1.2;\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n  ',
    '\n',
  ])

  _templateObject$5 = function _templateObject() {
    return data
  }

  return data
}
var StyledHeading =
  /*#__PURE__*/
  styled__default(Text)(
    _templateObject$5(),
    styledSystem.color,
    styledSystem.fontSize,
    styledSystem.fontWeight,
    styledSystem.space,
    styledSystem.width,
    styledSystem.opacity
  )
var Heading = function Heading(_ref) {
  var _ref$as = _ref.as,
    as = _ref$as === void 0 ? 'h2' : _ref$as,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, ['as', 'children'])

  return React__default.createElement(
    StyledHeading,
    Object.assign(
      {
        as: as,
      },
      props
    ),
    children
  )
}

var classnames = function classnames() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key]
  }

  return args.join(' ')
}

var getClassName = function getClassName(el) {
  return (el.props && el.props.className) || ''
}

var StyledChildren = function StyledChildren(_ref) {
  var className = _ref.className,
    children = _ref.children
  var styledChildren = React__default.Children.toArray(children).map(function(
    child
  ) {
    return React__default.cloneElement(child, {
      className: classnames(getClassName(child), className),
    })
  })
  return React__default.createElement(
    React__default.Fragment,
    null,
    styledChildren
  )
}
var Space =
  /*#__PURE__*/
  styled__default(StyledChildren)(styledSystem.space)

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose([
    '\n  flex-wrap: wrap;\n  ',
    '\n  ',
    '\n  ',
    '\n',
  ])

  _templateObject$6 = function _templateObject() {
    return data
  }

  return data
}
var gutterLeft =
  /*#__PURE__*/
  styledSystem.style({
    prop: 'gutter',
    cssProperty: 'marginLeft',
    transformValue: function transformValue(n) {
      return (Number(n) / 2) * -1
    },
  })
var gutterRight =
  /*#__PURE__*/
  styledSystem.style({
    prop: 'gutter',
    cssProperty: 'marginRight',
    transformValue: function transformValue(n) {
      return (Number(n) / 2) * -1
    },
  })
var StyledRow =
  /*#__PURE__*/
  styled__default(Flex)(
    _templateObject$6(),
    styledSystem.flexWrap,
    gutterLeft,
    gutterRight
  )
var Row = function Row(_ref) {
  var gutter = _ref.gutter,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, ['gutter', 'children'])

  var themeContext = React.useContext(styled.ThemeContext)

  if (!gutter && themeContext && themeContext.grid) {
    gutter = themeContext.grid.gutter
  }

  if (!gutter) {
    gutter = 15
  }

  var spacing =
    gutter && Array.isArray(gutter)
      ? gutter.map(function(space) {
          return space && space / 2
        })
      : gutter / 2
  return React__default.createElement(
    StyledRow,
    Object.assign(
      {
        gutter: gutter,
      },
      props
    ),
    React__default.createElement(
      Space,
      {
        px: spacing,
      },
      children
    )
  )
}

var defaultGrid = {
  gutter: [15, null, 30],
  container: {
    maxWidth: 1280,
    padding: [15, null, 60],
  },
}

exports.Box = Box
exports.BoxDocz = BoxDocz
exports.Card = Card
exports.Column = Column
exports.Contain = Contain
exports.Flex = Flex
exports.FlexDocz = FlexDocz
exports.Heading = Heading
exports.Row = Row
exports.Space = Space
exports.StyledChildren = StyledChildren
exports.Text = Text
exports.TextDocz = TextDocz
exports.defaultGrid = defaultGrid
//# sourceMappingURL=styled-primitives.cjs.development.js.map
