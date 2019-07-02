import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { background, bottom, color, display, flex, fontSize, fontWeight, height, justifyContent, left, maxHeight, maxWidth, minHeight, minWidth, opacity, order, position, right, space, textAlign, top, width, zIndex, backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize, border, borderBottom, borderColor, borderLeft, borderRadius, borderRight, borderTop, boxShadow, style, alignItems, flexDirection, flexWrap, fontFamily, letterSpacing, lineHeight } from 'styled-system';

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
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var BoxDocz = function BoxDocz() {
  return React.createElement("div", null);
};
var Box = styled.div(_templateObject(), background, bottom, color, display, flex, fontSize, fontWeight, height, justifyContent, left, maxHeight, maxWidth, minHeight, minWidth, opacity, order, position, right, space, textAlign, top, width, zIndex);

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Card =
/*#__PURE__*/
styled(Box)(_templateObject$1(), backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize, border, borderBottom, borderColor, borderLeft, borderRadius, borderRight, borderTop, boxShadow);

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
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
var StyledColumn =
/*#__PURE__*/
styled(Box)(_templateObject$2(), col, inset);
var Column = function Column(props) {
  return React.createElement(StyledColumn, Object.assign({}, props), props.children);
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n      @media (min-width: ", ") {\n        padding: 0\n          ", "px;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: ", "px;\n  margin: 0 auto;\n  padding: 0 ", "px;\n  ", "\n  ", "\n\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Contain = styled.div(_templateObject$3(), function (_ref) {
  var theme = _ref.theme;
  return theme && theme.grid && theme.grid.container && theme.grid.container.maxWidth || 1280;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme && theme.grid && theme.grid.container && theme.grid.container.padding || 60;
}, display, height, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints && theme.breakpoints[1] && css(_templateObject2(), theme.breakpoints[1], function (_ref4) {
    var theme = _ref4.theme;
    return theme && theme.grid && theme.grid.container && theme.grid.container.paddingSmall || 15;
  });
});

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var FlexDocz = function FlexDocz() {
  return React.createElement("div", null);
};
var Flex =
/*#__PURE__*/
styled(Box)(_templateObject$4(), alignItems, flexDirection, flexWrap, justifyContent);

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n      max-width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  \n  ", "\n\n  ", "\n  ", "\n  ", "\n\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var TextDocz = function TextDocz() {
  return React.createElement("div", null);
};
var StyledText =
/*#__PURE__*/
styled(Box)(_templateObject$5(), function (props) {
  return props.singleLine && css(_templateObject2$1());
}, fontFamily, letterSpacing, lineHeight);
var Text = function Text(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'span' : _ref$as,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "children"]);

  return React.createElement(StyledText, Object.assign({
    as: as
  }, props), children);
};

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0px;\n  line-height: 1.2;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledHeading =
/*#__PURE__*/
styled(Text)(_templateObject$6(), color, fontSize, fontWeight, space, width, opacity);
var Heading = function Heading(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'h2' : _ref$as,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["as", "children"]);

  return React.createElement(StyledHeading, Object.assign({
    as: as
  }, props), children);
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

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-wrap: wrap;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var gutterLeft =
/*#__PURE__*/
style({
  prop: 'gutter',
  cssProperty: 'marginLeft',
  transformValue: function transformValue(n) {
    return Number(n) / 2 * -1;
  }
});
var gutterRight =
/*#__PURE__*/
style({
  prop: 'gutter',
  cssProperty: 'marginRight',
  transformValue: function transformValue(n) {
    return Number(n) / 2 * -1;
  }
});
var StyledRow =
/*#__PURE__*/
styled(Flex)(_templateObject$7(), flexWrap, gutterLeft, gutterRight);
var Row = function Row(_ref) {
  var gutter = _ref.gutter,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["gutter", "children"]);

  var themeContext = useContext(ThemeContext);

  if (!gutter && themeContext && themeContext.grid) {
    gutter = [themeContext.grid.gutterSmall, null, themeContext.grid.gutter];
  }

  if (!gutter) {
    gutter = 15;
  }

  var spacing = gutter && Array.isArray(gutter) ? gutter.map(function (space) {
    return space && space / 2;
  }) : gutter / 2;
  return React.createElement(StyledRow, Object.assign({
    gutter: gutter
  }, props), React.createElement(Space, {
    px: spacing
  }, children));
};

export { Box, BoxDocz, Card, Column, Contain, Flex, FlexDocz, Heading, Row, Space, StyledChildren, Text, TextDocz };
//# sourceMappingURL=styled-system.esm.js.map
