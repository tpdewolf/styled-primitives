import styled, { useTheme } from 'styled-components';
import { system, get, compose, layout, color, space, background, border, grid, position, shadow, typography, flexbox, style } from 'styled-system';
import { createElement, Children, isValidElement, cloneElement, Fragment } from 'react';
import css from '@styled-system/css';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii'
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii'
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii'
  },
  d: {
    property: 'display'
  },
  w: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes'
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  h: {
    property: 'height',
    scale: 'sizes'
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  bgImg: {
    property: 'backgroundImage'
  },
  bgImage: {
    property: 'backgroundImage'
  },
  bgSize: {
    property: 'backgroundSize'
  },
  bgPos: {
    property: 'backgroundPosition'
  },
  bgRepeat: {
    property: 'backgroundRepeat'
  },
  pos: {
    property: 'position'
  },
  flexDir: {
    property: 'flexDirection'
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textDecoration: {
    property: 'textDecoration'
  },
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: 'fill',
    scale: 'colors'
  },
  stroke: {
    property: 'stroke',
    scale: 'colors'
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: 'backgroundAttachment'
  },
  outline: true,
  "float": true,
  willChange: true
};
config.bgAttachment = config.backgroundAttachment;
config.textDecor = config.textDecoration;
config.listStylePos = config.listStylePosition;
config.listStyleImg = config.listStyleImage;
var extraConfig = /*#__PURE__*/system(config);
// Transform the custom alias to a format that styled-system CSS supports

var transformAlias = function transformAlias(prop, propValue) {
  var configKeys = Object.keys(config);
  var result = {};

  if (configKeys.includes(prop)) {
    var _config$prop = config[prop],
        properties = _config$prop.properties,
        property = _config$prop.property;

    if (properties) {
      properties.forEach(function (_cssProp) {
        return result[_cssProp] = propValue;
      });
    }

    if (property) {
      result[property] = propValue;
    }

    if (config[prop] === true) {
      result[prop] = propValue;
    }
  } else {
    result[prop] = propValue;
  }

  return result;
};

var transformAliasProps = function transformAliasProps(props) {
  var result = {};

  for (var prop in props) {
    if (typeof props[prop] === 'object' && !Array.isArray(props[prop])) {
      var _extends2;

      result = _extends({}, result, (_extends2 = {}, _extends2[prop] = transformAliasProps(props[prop]), _extends2));
    } else {
      result = _extends({}, result, {}, transformAlias(prop, props[prop]));
    }
  }

  return result;
};

var truncate = function truncate(props) {
  if (props.isTruncated) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    };
  }

  return null;
};
var boxStyles = /*#__PURE__*/compose(layout, color, space, background, border, grid, position, shadow, typography, flexbox, extraConfig);
var Box = /*#__PURE__*/styled.div({
  boxSizing: 'border-box'
}, boxStyles);
Box.displayName = 'Box';

function transformValue(n) {
  if (!n || isNaN(n)) {
    return n;
  }

  var cols = Number(n);
  return cols / 12 * 100 + '%';
}

var inset = /*#__PURE__*/style({
  prop: 'inset',
  cssProperty: 'marginLeft',
  transformValue: transformValue
});
var col = /*#__PURE__*/style({
  prop: 'col',
  cssProperty: 'width',
  transformValue: transformValue
});
var Column = /*#__PURE__*/styled(Box)( /*#__PURE__*/compose(col, inset));
Column.displayName = 'Column';

var Flex = /*#__PURE__*/styled(Box)({});
Flex.defaultProps = {
  display: 'flex'
};
Flex.displayName = 'Flex';

var Grid = function Grid(props) {
  var _themeContext$grid, _themeContext$grid$co, _themeContext$grid2, _themeContext$grid2$c;

  var themeContext = useTheme();
  return createElement(Box, Object.assign({
    mx: "auto",
    px: themeContext === null || themeContext === void 0 ? void 0 : (_themeContext$grid = themeContext.grid) === null || _themeContext$grid === void 0 ? void 0 : (_themeContext$grid$co = _themeContext$grid.container) === null || _themeContext$grid$co === void 0 ? void 0 : _themeContext$grid$co.padding,
    maxWidth: themeContext === null || themeContext === void 0 ? void 0 : (_themeContext$grid2 = themeContext.grid) === null || _themeContext$grid2 === void 0 ? void 0 : (_themeContext$grid2$c = _themeContext$grid2.container) === null || _themeContext$grid2$c === void 0 ? void 0 : _themeContext$grid2$c.maxWidth
  }, props));
};
Grid.displayName = 'Grid';

/** @jsx jsx */
/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */

var hover = '&:hover';
var active = '&:active, &[data-active=true]';
var focus = '&:focus';
var visited = '&:visited';
var even = '&:nth-of-type(even)';
var odd = '&:nth-of-type(odd)';
var disabled = '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover';
var checked = '&[aria-checked=true]';
var mixed = '&[aria-checked=mixed]';
var selected = '&[aria-selected=true]';
var invalid = '&[aria-invalid=true]';
var pressed = '&[aria-pressed=true]';
var readOnly = '&[aria-readonly=true], &[readonly]';
var first = '&:first-of-type';
var last = '&:last-of-type';
var expanded = '&[aria-expanded=true]';
var grabbed = '&[aria-grabbed=true]';
var notFirst = '&:not(:first-of-type)';
var notLast = '&:not(:last-of-type)';
var groupHover = '[role=group]:hover &';
var PseudoBox = /*#__PURE__*/styled(Box)(function (_ref) {
  var _css;

  var _after = _ref._after,
      _focus = _ref._focus,
      _selected = _ref._selected,
      _focusWithin = _ref._focusWithin,
      _hover = _ref._hover,
      _invalid = _ref._invalid,
      _active = _ref._active,
      _disabled = _ref._disabled,
      _grabbed = _ref._grabbed,
      _pressed = _ref._pressed,
      _expanded = _ref._expanded,
      _visited = _ref._visited,
      _before = _ref._before,
      _readOnly = _ref._readOnly,
      _first = _ref._first,
      _notFirst = _ref._notFirst,
      _notLast = _ref._notLast,
      _last = _ref._last,
      _placeholder = _ref._placeholder,
      _checked = _ref._checked,
      _groupHover = _ref._groupHover,
      _mixed = _ref._mixed,
      _odd = _ref._odd,
      _even = _ref._even;
  return css((_css = {}, _css[hover] = transformAliasProps(_hover), _css[focus] = transformAliasProps(_focus), _css[active] = transformAliasProps(_active), _css[visited] = transformAliasProps(_visited), _css[disabled] = transformAliasProps(_disabled), _css[selected] = transformAliasProps(_selected), _css[invalid] = transformAliasProps(_invalid), _css[expanded] = transformAliasProps(_expanded), _css[grabbed] = transformAliasProps(_grabbed), _css[readOnly] = transformAliasProps(_readOnly), _css[first] = transformAliasProps(_first), _css[notFirst] = transformAliasProps(_notFirst), _css[notLast] = transformAliasProps(_notLast), _css[last] = transformAliasProps(_last), _css[odd] = transformAliasProps(_odd), _css[even] = transformAliasProps(_even), _css[mixed] = transformAliasProps(_mixed), _css[checked] = transformAliasProps(_checked), _css[pressed] = transformAliasProps(_pressed), _css[groupHover] = transformAliasProps(_groupHover), _css['&:before'] = transformAliasProps(_before), _css['&:after'] = transformAliasProps(_after), _css['&:focus-within'] = transformAliasProps(_focusWithin), _css['&::placeholder'] = transformAliasProps(_placeholder), _css));
});
PseudoBox.displayName = 'PseudoBox';

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
  var styledChildren = Children.toArray(children).filter(isValidElement).map(function (child) {
    return cloneElement(child, {
      className: classnames(getClassName(child), className)
    });
  });
  return createElement(Fragment, null, styledChildren);
};
var Space = /*#__PURE__*/styled(StyledChildren)(space);
Space.displayName = 'Space';

var Row = function Row(_ref) {
  var gutter = _ref.gutter,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["gutter", "children"]);

  var themeContext = useTheme();

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
  }) : gutter / 2 * -1;
  return createElement(Flex, Object.assign({
    mx: mx,
    flexWrap: "wrap"
  }, props), createElement(Space, {
    px: spacing
  }, children));
};
Row.displayName = 'Row';

export { Box, Column, Flex, Grid, PseudoBox, Row, Space, StyledChildren, boxStyles, truncate };
//# sourceMappingURL=styled-primitives.esm.js.map
