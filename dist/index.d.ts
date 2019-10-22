import React from "react";
import { HTMLAttributes, FC } from "react";
import { BackgroundProps, ColorProps, FlexboxProps, LayoutProps, OpacityProps, PositionProps, SpaceProps, TypographyProps, TextStyleProps, ColorStyleProps, ButtonStyleProps, BorderProps, ShadowProps, DisplayProps, HeightProps, WidthProps } from "styled-system";
declare type BoxDoczProps = BackgroundProps & ButtonStyleProps & ColorProps & ColorStyleProps & FlexboxProps & LayoutProps & OpacityProps & PositionProps & SpaceProps & TextStyleProps & TypographyProps;
declare const BoxDocz: React.FC<BoxDoczProps>;
declare type BoxProps = BoxDoczProps & HTMLAttributes<any>;
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
declare type CardProps = BorderProps & ShadowProps;
declare const Card: import("styled-components").StyledComponent<"div", any, import("styled-system").BackgroundProps<import("styled-system").TLengthStyledSystem> & import("styled-system").ButtonStyleProps & import("styled-system").ColorProps & import("styled-system").ColorStyleProps & import("styled-system").FlexboxProps & import("styled-system").LayoutProps & import("styled-system").OpacityProps & import("styled-system").PositionProps & import("styled-system").SpaceProps<import("styled-system").TLengthStyledSystem> & import("styled-system").TextStyleProps & import("styled-system").TypographyProps & import("react").HTMLAttributes<any> & BorderProps<import("styled-system").TLengthStyledSystem> & ShadowProps, never>;
/// <reference types="react" />
declare const Column: import("styled-components").StyledComponent<"div", any, import("styled-system").BackgroundProps<import("styled-system").TLengthStyledSystem> & import("styled-system").ButtonStyleProps & import("styled-system").ColorProps & import("styled-system").ColorStyleProps & import("styled-system").FlexboxProps & import("styled-system").LayoutProps & import("styled-system").OpacityProps & import("styled-system").PositionProps & import("styled-system").SpaceProps<import("styled-system").TLengthStyledSystem> & import("styled-system").TextStyleProps & import("styled-system").TypographyProps & import("react").HTMLAttributes<any> & Pick<BoxProps, "p" | "style" | "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "bottom" | "left" | "right" | "top" | "size" | "flex" | "padding" | "height" | "display" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "opacity" | "order" | "overflow" | "background" | "backgroundImage" | "backgroundSize" | "backgroundPosition" | "backgroundRepeat" | "variant" | "bg" | "backgroundColor" | "colors" | "alignItems" | "alignContent" | "justifyItems" | "justifyContent" | "flexWrap" | "flexDirection" | "flexGrow" | "flexShrink" | "flexBasis" | "justifySelf" | "alignSelf" | "minWidth" | "minHeight" | "maxWidth" | "maxHeight" | "verticalAlign" | "overflowX" | "overflowY" | "position" | "zIndex" | "m" | "margin" | "mt" | "marginTop" | "mr" | "marginRight" | "mb" | "marginBottom" | "ml" | "marginLeft" | "mx" | "marginX" | "my" | "marginY" | "pt" | "paddingTop" | "pr" | "paddingRight" | "pb" | "paddingBottom" | "pl" | "paddingLeft" | "px" | "paddingX" | "py" | "paddingY" | "textStyle" | "lineHeight" | "textAlign"> & {
    col?: number | (string | number | null)[] | undefined;
    inset?: number | (string | number | null)[] | undefined;
}, never>;
declare type ContainProps = DisplayProps & HeightProps;
declare const Contain: React.FC<ContainProps>;
declare type FlexProps = BoxProps;
declare const FlexDocz: React.FC<FlexboxProps>;
declare const Flex: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
declare type TextDoczProps = TypographyProps & {
    as?: 'p' | 'small' | 'strong' | 'em' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
    target?: string;
    singleLine?: boolean;
};
declare type TextProps = BoxProps & TextDoczProps & HTMLAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLLabelElement>;
declare const TextDocz: React.FC<TextDoczProps>;
declare const Text: import("styled-components").StyledComponent<"div", any, TextProps, never>;
declare type HeadingProps = TextProps & HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
declare const Heading: import("styled-components").StyledComponent<"div", any, HeadingProps, never>;
declare const StyledChildren: React.FC<{
    className?: string;
} & SpaceProps>;
declare const Space: import("styled-components").StyledComponent<React.FunctionComponent<{
    className?: string | undefined;
} & SpaceProps<import("styled-system").TLengthStyledSystem>>, any, {}, never>;
interface GutterProps {
    gutter?: any[] | number;
}
declare type RowProps = FlexboxProps & GutterProps & SpaceProps & WidthProps;
declare const Row: FC<RowProps>;
interface ThemeGridContainer {
    maxWidth: number;
    padding: number | any[];
}
interface ThemeGrid {
    gutter: number | any[];
    container: ThemeGridContainer;
}
declare const defaultGrid: {
    gutter: (number | null)[];
    container: {
        maxWidth: number;
        padding: (number | null)[];
    };
};
export { BoxDocz, BoxProps, Box, CardProps, Card, Column, Contain, FlexProps, FlexDocz, Flex, HeadingProps, Heading, Row, StyledChildren, Space, TextProps, TextDocz, Text, ThemeGridContainer, ThemeGrid, defaultGrid };
