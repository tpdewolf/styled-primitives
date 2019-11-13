import styled, { ThemeContext, css } from 'styled-components';
import { compose, background, color, colorStyle, flexbox, layout, opacity, position, space, textStyle, typography, variant, border, shadow, style } from 'styled-system';
import React, { useContext } from 'react';

var boxStyles =
/*#__PURE__*/
compose(background, color, colorStyle, flexbox, layout, opacity, position, space, textStyle, typography,
/*#__PURE__*/
variant({
  prop: 'variant',
  scale: 'buttons',
  variants: {
    primary: {}
  }
}));
var Box =
/*#__PURE__*/
styled.div({
  boxSizing: 'border-box'
}, boxStyles);

var Card =
/*#__PURE__*/
styled(Box)(
/*#__PURE__*/
compose(border, shadow));

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
style({
  prop: 'inset',
  cssProperty: 'marginLeft',
  transformValue: transformValue
});
var col =
/*#__PURE__*/
style({
  prop: 'col',
  cssProperty: 'width',
  transformValue: transformValue
});
var Column =
/*#__PURE__*/
styled(Box)(
/*#__PURE__*/
_templateObject(), col, inset);

var Contain = function Contain(props) {
  var themeContext = useContext(ThemeContext);
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
styled(Box)({});
Flex.defaultProps = {
  display: 'flex'
};

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Text =
/*#__PURE__*/
styled(Box)(
/*#__PURE__*/
_templateObject$1(), function (props) {
  return props.singleLine && css(["max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);
});
Text.defaultProps = {
  as: 'span'
};

var Heading =
/*#__PURE__*/
styled(Text)({});
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
styled(StyledChildren)(space);

var Row = function Row(_ref) {
  var gutter = _ref.gutter,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["gutter", "children"]);

  var themeContext = useContext(ThemeContext);

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

export { Box, Card, Column, Contain, Flex, FlexDocz, Heading, Row, Space, StyledChildren, Text, defaultGrid };
//# sourceMappingURL=styled-primitives.esm.js.map
