'use strict'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var React = require('react')
var React__default = _interopDefault(React)
var styled = require('styled-components')
var styled__default = _interopDefault(styled)
var styledSystem = require('styled-system')

var BoxDocz = function BoxDocz() {
  return React__default.createElement('div', null)
}
var Box =
  /*#__PURE__*/
  styled__default.div.withConfig({
    displayName: 'Box',
    componentId: 'sc-1gug8g6-0',
  })(
    ['box-sizing:border-box;', ''],
    /*#__PURE__*/
    styledSystem.compose(
      styledSystem.background,
      styledSystem.color,
      styledSystem.flexbox,
      styledSystem.layout,
      styledSystem.opacity,
      styledSystem.position,
      styledSystem.space,
      styledSystem.typography
    )
  )

var Card =
  /*#__PURE__*/
  styled__default(Box).withConfig({
    displayName: 'Card',
    componentId: 'm4kmxe-0',
  })(
    /*#__PURE__*/
    styledSystem.compose(
      styledSystem.border,
      styledSystem.shadow
    )
  )

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
  styled__default(Box).withConfig({
    displayName: 'Column__StyledColumn',
    componentId: 'sc-1a1q09k-0',
  })(['', ' ', ''], col, inset)
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

var FlexDocz = function FlexDocz() {
  return React__default.createElement('div', null)
}
var Flex =
  /*#__PURE__*/
  styled__default(Box).withConfig({
    displayName: 'Flex',
    componentId: 'cxd7w0-0',
  })(
    ['display:flex;', ''],
    /*#__PURE__*/
    styledSystem.compose(styledSystem.flex)
  )

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

var TextDocz = function TextDocz() {
  return React__default.createElement('div', null)
}
var StyledText =
  /*#__PURE__*/
  styled__default(Box).withConfig({
    displayName: 'Text__StyledText',
    componentId: 'sc-1avl9pw-0',
  })(['', ''], function(props) {
    return (
      props.singleLine &&
      styled.css([
        'max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;',
      ])
    )
  })
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

var StyledHeading =
  /*#__PURE__*/
  styled__default(Text).withConfig({
    displayName: 'Heading__StyledHeading',
    componentId: 'sc-1vv0hjt-0',
  })(['margin:0px;'])
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
  styled__default(StyledChildren).withConfig({
    displayName: 'Space',
    componentId: 'aw4q1b-0',
  })(styledSystem.space)

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
  styled__default(Flex).withConfig({
    displayName: 'Row__StyledRow',
    componentId: 'sc-1j9hqig-0',
  })(
    ['flex-wrap:wrap;', ' ', ' ', ''],
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
