'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var styledSystem = require('styled-system');
var React = require('react');

var boxStyles =
/*#__PURE__*/
styledSystem.compose(styledSystem.background, styledSystem.color, styledSystem.colorStyle, styledSystem.flexbox, styledSystem.layout, styledSystem.opacity, styledSystem.position, styledSystem.space, styledSystem.textStyle, styledSystem.typography,
/*#__PURE__*/
styledSystem.variant({
  prop: 'variant',
  scale: 'buttons',
  variants: {
    primary: {}
  }
}));
var Box =
/*#__PURE__*/
styled__default.div({
  boxSizing: 'border-box'
}, boxStyles);

var Card =
/*#__PURE__*/
styled__default(Box)(
/*#__PURE__*/
styledSystem.compose(styledSystem.border, styledSystem.shadow));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function transformValue(n) {
  if (!n || isNaN(n)) {
    return n;
  }

  var cols = Number(n);
  return cols / 12 * 100 + '%';
}

var inset =
/*#__PURE__*/
styledSystem.style({
  prop: 'inset',
  cssProperty: 'marginLeft',
  transformValue: transformValue
});
var col =
/*#__PURE__*/
styledSystem.style({
  prop: 'col',
  cssProperty: 'width',
  transformValue: transformValue
});
var Column =
/*#__PURE__*/
styled__default(Box)(
/*#__PURE__*/
_templateObject(), col, inset);

var Contain = function Contain(props) {
  var themeContext = React.useContext(styled.ThemeContext);
  return React.createElement(Box, Object.assign({
    mx: "auto",
    px: themeContext && themeContext.grid && themeContext.grid.container && themeContext.grid.container.padding,
    maxWidth: themeContext && themeContext.grid && themeContext.grid.container && themeContext.grid.container.maxWidth
  }, props));
};

var FlexDocz = function FlexDocz() {
  return React.createElement("div", null);
};
var Flex =
/*#__PURE__*/
styled__default(Box)({});
Flex.defaultProps = {
  display: 'flex'
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n      max-width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Text =
/*#__PURE__*/
styled__default(Box)(
/*#__PURE__*/
_templateObject$1(), function (props) {
  return props.singleLine && styled.css(_templateObject2());
});
Text.defaultProps = {
  as: 'span'
};

var Heading =
/*#__PURE__*/
styled__default(Text)({});
Heading.defaultProps = {
  as: 'h2'
};

var classnames = function classnames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.join(' ');
};

var getClassName = function getClassName(el) {
  return el.props && el.props.className || '';
};

var StyledChildren = function StyledChildren(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var styledChildren = React.Children.toArray(children).map(function (child) {
    return React.cloneElement(child, {
      className: classnames(getClassName(child), className)
    });
  });
  return React.createElement(React.Fragment, null, styledChildren);
};
var Space =
/*#__PURE__*/
styled__default(StyledChildren)(styledSystem.space);

var Row = function Row(_ref) {
  var gutter = _ref.gutter,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["gutter", "children"]);

  var themeContext = React.useContext(styled.ThemeContext);

  if (!gutter && themeContext && themeContext.grid) {
    gutter = themeContext.grid.gutter;
  }

  if (!gutter) {
    gutter = 15;
  }

  var spacing = gutter && Array.isArray(gutter) ? gutter.map(function (space) {
    return space && space / 2;
  }) : gutter / 2;
  var mx = gutter && Array.isArray(gutter) ? gutter.map(function (space) {
    return space && space / 2 * -1;
  }) : gutter / 2 * -1; // const filteredChildren = React.Children.toArray(children).filter(Boolean)

  return React.createElement(Flex, Object.assign({
    mx: mx,
    flexWrap: "wrap"
  }, props), React.createElement(Space, {
    px: spacing
  }, children));
};

var defaultGrid = {
  gutter: [15, null, 30],
  container: {
    maxWidth: 1280,
    padding: [15, null, 60]
  }
};

exports.Box = Box;
exports.Card = Card;
exports.Column = Column;
exports.Contain = Contain;
exports.Flex = Flex;
exports.FlexDocz = FlexDocz;
exports.Heading = Heading;
exports.Row = Row;
exports.Space = Space;
exports.StyledChildren = StyledChildren;
exports.Text = Text;
exports.defaultGrid = defaultGrid;
//# sourceMappingURL=styled-primitives.cjs.development.js.map
