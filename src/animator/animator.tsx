import React, { useEffect, useState } from 'react'
import './animator.scss'
import { CSSProperties } from 'react';
import Select from 'react-select'

interface IAnimatorProps {
  animation?: IAnimation
  width?: string
  height?: string
}

interface IAnimation {
  currentFrame?: string;
  canvasWidth?: string;
  canvasHeight?: string;
  canvasColor?: string;
  time?: string;
  scale?: string;
  dragginElement?: string;
  currentElement?: string;
  incoming?: boolean;
  interval?: NodeJS.Timeout;
  openCanvasOption?: boolean;
  frames?: {
    [frameId: string]: {
      [elementId: string]: CSSProperties;
    };
  };
}

interface IElement {
  [elementId: string]: CSSProperties;
}

const Animator = (props: IAnimatorProps) => {
  const [animation, setAnimation] = useState<IAnimation>({
    currentFrame: 'frame_0',
    canvasWidth: '200px',
    canvasHeight: '200px',
    time: '1000',
    frames: {
      'frame_0': {
        [`0_${Math.random()?.toString()?.slice(2, 8)}_frame_element`]: {
          left: '0px',
          top: '0px',
          height: '50px',
          width: '50px',
          borderRadius: '100%',
          transition: 'all 1s',
          backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        }
      }
    }
  })

  useEffect(() => {
    if (props?.animation && !animation?.incoming) {
      setAnimation({ ...props?.animation, incoming: true })
    } else if (!props?.animation) {
      handleUpdateAnimation({ data: { incoming: false } })
    }
  }, [props?.animation])

  useEffect(() => {
    if (animation?.incoming === true) {
      handlePlay()
    }
  }, [animation?.incoming])

  const attributes = [
    { label: 'accentColor', value: 'accentColor' },
    { label: 'alignContent', value: 'alignContent' },
    { label: 'alignItems', value: 'alignItems' },
    { label: 'alignSelf', value: 'alignSelf' },
    { label: 'all', value: 'all' },
    { label: 'animation', value: 'animation' },
    { label: 'animationDelay', value: 'animationDelay' },
    { label: 'animationDirection', value: 'animationDirection' },
    { label: 'animationDuration', value: 'animationDuration' },
    { label: 'animationFillMode', value: 'animationFillMode' },
    { label: 'animationIterationCount', value: 'animationIterationCount' },
    { label: 'animationName', value: 'animationName' },
    { label: 'animationPlayState', value: 'animationPlayState' },
    { label: 'animationTimingFunction', value: 'animationTimingFunction' },
    { label: 'aspectRatio', value: 'aspectRatio' },
    { label: 'backdropFilter', value: 'backdropFilter' },
    { label: 'backfaceVisibility', value: 'backfaceVisibility' },
    { label: 'background', value: 'background' },
    { label: 'backgroundAttachment', value: 'backgroundAttachment' },
    { label: 'backgroundBlendMode', value: 'backgroundBlendMode' },
    { label: 'backgroundClip', value: 'backgroundClip' },
    { label: 'backgroundColor', value: 'backgroundColor' },
    { label: 'backgroundImage', value: 'backgroundImage' },
    { label: 'backgroundOrigin', value: 'backgroundOrigin' },
    { label: 'backgroundPosition', value: 'backgroundPosition' },
    { label: 'backgroundPositionX', value: 'backgroundPositionX' },
    { label: 'backgroundPositionY', value: 'backgroundPositionY' },
    { label: 'backgroundRepeat', value: 'backgroundRepeat' },
    { label: 'backgroundSize', value: 'backgroundSize' },
    { label: 'blockSize', value: 'blockSize' },
    { label: 'border', value: 'border' },
    { label: 'borderBlock', value: 'borderBlock' },
    { label: 'borderBlockColor', value: 'borderBlockColor' },
    { label: 'borderBlockEnd', value: 'borderBlockEnd' },
    { label: 'borderBlockEndColor', value: 'borderBlockEndColor' },
    { label: 'borderBlockEndStyle', value: 'borderBlockEndStyle' },
    { label: 'borderBlockEndWidth', value: 'borderBlockEndWidth' },
    { label: 'borderBlockStart', value: 'borderBlockStart' },
    { label: 'borderBlockStartColor', value: 'borderBlockStartColor' },
    { label: 'borderBlockStartStyle', value: 'borderBlockStartStyle' },
    { label: 'borderBlockStartWidth', value: 'borderBlockStartWidth' },
    { label: 'borderBlockStyle', value: 'borderBlockStyle' },
    { label: 'borderBlockWidth', value: 'borderBlockWidth' },
    { label: 'borderBottom', value: 'borderBottom' },
    { label: 'borderBottomColor', value: 'borderBottomColor' },
    { label: 'borderBottomLeftRadius', value: 'borderBottomLeftRadius' },
    { label: 'borderBottomRightRadius', value: 'borderBottomRightRadius' },
    { label: 'borderBottomStyle', value: 'borderBottomStyle' },
    { label: 'borderBottomWidth', value: 'borderBottomWidth' },
    { label: 'borderCollapse', value: 'borderCollapse' },
    { label: 'borderColor', value: 'borderColor' },
    { label: 'borderEndEndRadius', value: 'borderEndEndRadius' },
    { label: 'borderEndStartRadius', value: 'borderEndStartRadius' },
    { label: 'borderImage', value: 'borderImage' },
    { label: 'borderImageOutset', value: 'borderImageOutset' },
    { label: 'borderImageRepeat', value: 'borderImageRepeat' },
    { label: 'borderImageSlice', value: 'borderImageSlice' },
    { label: 'borderImageSource', value: 'borderImageSource' },
    { label: 'borderImageWidth', value: 'borderImageWidth' },
    { label: 'borderInline', value: 'borderInline' },
    { label: 'borderInlineColor', value: 'borderInlineColor' },
    { label: 'borderInlineEnd', value: 'borderInlineEnd' },
    { label: 'borderInlineEndColor', value: 'borderInlineEndColor' },
    { label: 'borderInlineEndStyle', value: 'borderInlineEndStyle' },
    { label: 'borderInlineEndWidth', value: 'borderInlineEndWidth' },
    { label: 'borderInlineStart', value: 'borderInlineStart' },
    { label: 'borderInlineStartColor', value: 'borderInlineStartColor' },
    { label: 'borderInlineStartStyle', value: 'borderInlineStartStyle' },
    { label: 'borderInlineStartWidth', value: 'borderInlineStartWidth' },
    { label: 'borderInlineStyle', value: 'borderInlineStyle' },
    { label: 'borderInlineWidth', value: 'borderInlineWidth' },
    { label: 'borderLeft', value: 'borderLeft' },
    { label: 'borderLeftColor', value: 'borderLeftColor' },
    { label: 'borderLeftStyle', value: 'borderLeftStyle' },
    { label: 'borderLeftWidth', value: 'borderLeftWidth' },
    { label: 'borderRadius', value: 'borderRadius' },
    { label: 'borderRight', value: 'borderRight' },
    { label: 'borderRightColor', value: 'borderRightColor' },
    { label: 'borderRightStyle', value: 'borderRightStyle' },
    { label: 'borderRightWidth', value: 'borderRightWidth' },
    { label: 'borderSpacing', value: 'borderSpacing' },
    { label: 'borderStartEndRadius', value: 'borderStartEndRadius' },
    { label: 'borderStartStartRadius', value: 'borderStartStartRadius' },
    { label: 'borderStyle', value: 'borderStyle' },
    { label: 'borderTop', value: 'borderTop' },
    { label: 'borderTopColor', value: 'borderTopColor' },
    { label: 'borderTopLeftRadius', value: 'borderTopLeftRadius' },
    { label: 'borderTopRightRadius', value: 'borderTopRightRadius' },
    { label: 'borderTopStyle', value: 'borderTopStyle' },
    { label: 'borderTopWidth', value: 'borderTopWidth' },
    { label: 'borderWidth', value: 'borderWidth' },
    { label: 'bottom', value: 'bottom' },
    { label: 'boxDecorationBreak', value: 'boxDecorationBreak' },
    { label: 'boxReflect', value: 'boxReflect' },
    { label: 'boxShadow', value: 'boxShadow' },
    { label: 'boxSizing', value: 'boxSizing' },
    { label: 'breakAfter', value: 'breakAfter' },
    { label: 'breakBefore', value: 'breakBefore' },
    { label: 'breakInside', value: 'breakInside' },
    { label: 'captionSide', value: 'captionSide' },
    { label: 'caretColor', value: 'caretColor' },
    { label: 'clear', value: 'clear' },
    { label: 'clip', value: 'clip' },
    { label: 'clipPath', value: 'clipPath' },
    { label: 'color', value: 'color' },
    { label: 'columnCount', value: 'columnCount' },
    { label: 'columnFill', value: 'columnFill' },
    { label: 'columnGap', value: 'columnGap' },
    { label: 'columnRule', value: 'columnRule' },
    { label: 'columnRuleColor', value: 'columnRuleColor' },
    { label: 'columnRuleStyle', value: 'columnRuleStyle' },
    { label: 'columnRuleWidth', value: 'columnRuleWidth' },
    { label: 'columnSpan', value: 'columnSpan' },
    { label: 'columnWidth', value: 'columnWidth' },
    { label: 'columns', value: 'columns' },
    { label: 'content', value: 'content' },
    { label: 'counterIncrement', value: 'counterIncrement' },
    { label: 'counterReset', value: 'counterReset' },
    { label: 'counterSet', value: 'counterSet' },
    { label: 'cursor', value: 'cursor' },
    { label: 'direction', value: 'direction' },
    { label: 'display', value: 'display' },
    { label: 'emptyCells', value: 'emptyCells' },
    { label: 'filter', value: 'filter' },
    { label: 'flex', value: 'flex' },
    { label: 'flexBasis', value: 'flexBasis' },
    { label: 'flexDirection', value: 'flexDirection' },
    { label: 'flexFlow', value: 'flexFlow' },
    { label: 'flexGrow', value: 'flexGrow' },
    { label: 'flexShrink', value: 'flexShrink' },
    { label: 'flexWrap', value: 'flexWrap' },
    { label: 'float', value: 'float' },
    { label: 'font', value: 'font' },
    { label: 'fontFamily', value: 'fontFamily' },
    { label: 'fontFeatureSettings', value: 'fontFeatureSettings' },
    { label: 'fontKerning', value: 'fontKerning' },
    { label: 'fontLanguageOverride', value: 'fontLanguageOverride' },
    { label: 'fontSize', value: 'fontSize' },
    { label: 'fontSizeAdjust', value: 'fontSizeAdjust' },
    { label: 'fontStretch', value: 'fontStretch' },
    { label: 'fontStyle', value: 'fontStyle' },
    { label: 'fontSynthesis', value: 'fontSynthesis' },
    { label: 'fontVariant', value: 'fontVariant' },
    { label: 'fontVariantAlternates', value: 'fontVariantAlternates' },
    { label: 'fontVariantCaps', value: 'fontVariantCaps' },
    { label: 'fontVariantEastAsian', value: 'fontVariantEastAsian' },
    { label: 'fontVariantLigatures', value: 'fontVariantLigatures' },
    { label: 'fontVariantNumeric', value: 'fontVariantNumeric' },
    { label: 'fontVariantPosition', value: 'fontVariantPosition' },
    { label: 'fontWeight', value: 'fontWeight' },
    { label: 'gap', value: 'gap' },
    { label: 'grid', value: 'grid' },
    { label: 'gridArea', value: 'gridArea' },
    { label: 'gridAutoColumns', value: 'gridAutoColumns' },
    { label: 'gridAutoFlow', value: 'gridAutoFlow' },
    { label: 'gridAutoRows', value: 'gridAutoRows' },
    { label: 'gridColumn', value: 'gridColumn' },
    { label: 'gridColumnEnd', value: 'gridColumnEnd' },
    { label: 'gridColumnGap', value: 'gridColumnGap' },
    { label: 'gridColumnStart', value: 'gridColumnStart' },
    { label: 'gridGap', value: 'gridGap' },
    { label: 'gridRow', value: 'gridRow' },
    { label: 'gridRowEnd', value: 'gridRowEnd' },
    { label: 'gridRowGap', value: 'gridRowGap' },
    { label: 'gridRowStart', value: 'gridRowStart' },
    { label: 'gridTemplate', value: 'gridTemplate' },
    { label: 'gridTemplateAreas', value: 'gridTemplateAreas' },
    { label: 'gridTemplateColumns', value: 'gridTemplateColumns' },
    { label: 'gridTemplateRows', value: 'gridTemplateRows' },
    { label: 'hangingPunctuation', value: 'hangingPunctuation' },
    { label: 'height', value: 'height' },
    { label: 'hyphens', value: 'hyphens' },
    { label: 'hypenateCharacter', value: 'hypenateCharacter' },
    { label: 'imageRendering', value: 'imageRendering' },
    { label: 'inlineSize', value: 'inlineSize' },
    { label: 'inset', value: 'inset' },
    { label: 'insetBlock', value: 'insetBlock' },
    { label: 'insetBlockEnd', value: 'insetBlockEnd' },
    { label: 'insetBlockStart', value: 'insetBlockStart' },
    { label: 'insetInline', value: 'insetInline' },
    { label: 'insetInlineEnd', value: 'insetInlineEnd' },
    { label: 'insetInlineStart', value: 'insetInlineStart' },
    { label: 'isolation', value: 'isolation' },
    { label: 'justifyContent', value: 'justifyContent' },
    { label: 'justifyItems', value: 'justifyItems' },
    { label: 'justifySelf', value: 'justifySelf' },
    { label: 'left', value: 'left' },
    { label: 'letterSpacing', value: 'letterSpacing' },
    { label: 'lineBreak', value: 'lineBreak' },
    { label: 'lineHeight', value: 'lineHeight' },
    { label: 'listStyle', value: 'listStyle' },
    { label: 'listStyleImage', value: 'listStyleImage' },
    { label: 'listStylePosition', value: 'listStylePosition' },
    { label: 'listStyleType', value: 'listStyleType' },
    { label: 'margin', value: 'margin' },
    { label: 'marginBlock', value: 'marginBlock' },
    { label: 'marginBlockEnd', value: 'marginBlockEnd' },
    { label: 'marginBlockStart', value: 'marginBlockStart' },
    { label: 'marginBottom', value: 'marginBottom' },
    { label: 'marginInline', value: 'marginInline' },
    { label: 'marginInlineEnd', value: 'marginInlineEnd' },
    { label: 'marginInlineStart', value: 'marginInlineStart' },
    { label: 'marginLeft', value: 'marginLeft' },
    { label: 'marginRight', value: 'marginRight' },
    { label: 'marginTop', value: 'marginTop' },
    { label: 'mask', value: 'mask' },
    { label: 'maskClip', value: 'maskClip' },
    { label: 'maskComposite', value: 'maskComposite' },
    { label: 'maskImage', value: 'maskImage' },
    { label: 'maskMode', value: 'maskMode' },
    { label: 'maskOrigin', value: 'maskOrigin' },
    { label: 'maskPosition', value: 'maskPosition' },
    { label: 'maskRepeat', value: 'maskRepeat' },
    { label: 'maskSize', value: 'maskSize' },
    { label: 'maskType', value: 'maskType' },
    { label: 'maxHeight', value: 'maxHeight' },
    { label: 'maxWidth', value: 'maxWidth' },
    { label: 'maxBlockSize', value: 'maxBlockSize' },
    { label: 'maxInlineSize', value: 'maxInlineSize' },
    { label: 'minBlockSize', value: 'minBlockSize' },
    { label: 'minInlineSize', value: 'minInlineSize' },
    { label: 'minHeight', value: 'minHeight' },
    { label: 'minWidth', value: 'minWidth' },
    { label: 'mixBlendMode', value: 'mixBlendMode' },
    { label: 'objectFit', value: 'objectFit' },
    { label: 'objectPosition', value: 'objectPosition' },
    { label: 'offset', value: 'offset' },
    { label: 'offsetAnchor', value: 'offsetAnchor' },
    { label: 'offsetDistance', value: 'offsetDistance' },
    { label: 'offsetPath', value: 'offsetPath' },
    { label: 'offsetRotate', value: 'offsetRotate' },
    { label: 'opacity', value: 'opacity' },
    { label: 'order', value: 'order' },
    { label: 'orphans', value: 'orphans' },
    { label: 'outline', value: 'outline' },
    { label: 'outlineColor', value: 'outlineColor' },
    { label: 'outlineOffset', value: 'outlineOffset' },
    { label: 'outlineStyle', value: 'outlineStyle' },
    { label: 'outlineWidth', value: 'outlineWidth' },
    { label: 'overflow', value: 'overflow' },
    { label: 'overflowAnchor', value: 'overflowAnchor' },
    { label: 'overflowWrap', value: 'overflowWrap' },
    { label: 'overflowX', value: 'overflowX' },
    { label: 'overflowY', value: 'overflowY' },
    { label: 'overscrollBehavior', value: 'overscrollBehavior' },
    { label: 'overscrollBehaviorBlock', value: 'overscrollBehaviorBlock' },
    { label: 'overscrollBehaviorInline', value: 'overscrollBehaviorInline' },
    { label: 'overscrollBehaviorX', value: 'overscrollBehaviorX' },
    { label: 'overscrollBehaviorY', value: 'overscrollBehaviorY' },
    { label: 'padding', value: 'padding' },
    { label: 'paddingBlock', value: 'paddingBlock' },
    { label: 'paddingBlockEnd', value: 'paddingBlockEnd' },
    { label: 'paddingBlockStart', value: 'paddingBlockStart' },
    { label: 'paddingBottom', value: 'paddingBottom' },
    { label: 'paddingInline', value: 'paddingInline' },
    { label: 'paddingInlineEnd', value: 'paddingInlineEnd' },
    { label: 'paddingInlineStart', value: 'paddingInlineStart' },
    { label: 'paddingLeft', value: 'paddingLeft' },
    { label: 'paddingRight', value: 'paddingRight' },
    { label: 'paddingTop', value: 'paddingTop' },
    { label: 'pageBreakAfter', value: 'pageBreakAfter' },
    { label: 'pageBreakBefore', value: 'pageBreakBefore' },
    { label: 'pageBreakInside', value: 'pageBreakInside' },
    { label: 'paintOrder', value: 'paintOrder' },
    { label: 'perspective', value: 'perspective' },
    { label: 'perspectiveOrigin', value: 'perspectiveOrigin' },
    { label: 'placeContent', value: 'placeContent' },
    { label: 'placeItems', value: 'placeItems' },
    { label: 'placeSelf', value: 'placeSelf' },
    { label: 'pointerEvents', value: 'pointerEvents' },
    { label: 'position', value: 'position' },
    { label: 'quotes', value: 'quotes' },
    { label: 'resize', value: 'resize' },
    { label: 'right', value: 'right' },
    { label: 'rotate', value: 'rotate' },
    { label: 'rowGap', value: 'rowGap' },
    { label: 'scale', value: 'scale' },
    { label: 'scrollBehavior', value: 'scrollBehavior' },
    { label: 'scrollMargin', value: 'scrollMargin' },
    { label: 'scrollMarginBlock', value: 'scrollMarginBlock' },
    { label: 'scrollMarginBlockEnd', value: 'scrollMarginBlockEnd' },
    { label: 'scrollMarginBlockStart', value: 'scrollMarginBlockStart' },
    { label: 'scrollMarginBottom', value: 'scrollMarginBottom' },
    { label: 'scrollMarginInline', value: 'scrollMarginInline' },
    { label: 'scrollMarginInlineEnd', value: 'scrollMarginInlineEnd' },
    { label: 'scrollMarginInlineStart', value: 'scrollMarginInlineStart' },
    { label: 'scrollMarginLeft', value: 'scrollMarginLeft' },
    { label: 'scrollMarginRight', value: 'scrollMarginRight' },
    { label: 'scrollMarginTop', value: 'scrollMarginTop' },
    { label: 'scrollPadding', value: 'scrollPadding' },
    { label: 'scrollPaddingBlock', value: 'scrollPaddingBlock' },
    { label: 'scrollPaddingBlockEnd', value: 'scrollPaddingBlockEnd' },
    { label: 'scrollPaddingBlockStart', value: 'scrollPaddingBlockStart' },
    { label: 'scrollPaddingBottom', value: 'scrollPaddingBottom' },
    { label: 'scrollPaddingInline', value: 'scrollPaddingInline' },
    { label: 'scrollPaddingInlineEnd', value: 'scrollPaddingInlineEnd' },
    { label: 'scrollPaddingInlineStart', value: 'scrollPaddingInlineStart' },
    { label: 'scrollPaddingLeft', value: 'scrollPaddingLeft' },
    { label: 'scrollPaddingRight', value: 'scrollPaddingRight' },
    { label: 'scrollPaddingTop', value: 'scrollPaddingTop' },
    { label: 'scrollSnapAlign', value: 'scrollSnapAlign' },
    { label: 'scrollSnapStop', value: 'scrollSnapStop' },
    { label: 'scrollSnapType', value: 'scrollSnapType' },
    { label: 'scrollbarColor', value: 'scrollbarColor' },
    { label: 'tabSize', value: 'tabSize' },
    { label: 'tableLayout', value: 'tableLayout' },
    { label: 'textAlign', value: 'textAlign' },
    { label: 'textAlignLast', value: 'textAlignLast' },
    { label: 'textCombineUpright', value: 'textCombineUpright' },
    { label: 'textDecoration', value: 'textDecoration' },
    { label: 'textDecorationColor', value: 'textDecorationColor' },
    { label: 'textDecorationLine', value: 'textDecorationLine' },
    { label: 'textDecorationStyle', value: 'textDecorationStyle' },
    { label: 'textDecorationThickness', value: 'textDecorationThickness' },
    { label: 'textEmphasis', value: 'textEmphasis' },
    { label: 'textEmphasisColor', value: 'textEmphasisColor' },
    { label: 'textEmphasisPosition', value: 'textEmphasisPosition' },
    { label: 'textEmphasisStyle', value: 'textEmphasisStyle' },
    { label: 'textIndent', value: 'textIndent' },
    { label: 'textJustify', value: 'textJustify' },
    { label: 'textOrientation', value: 'textOrientation' },
    { label: 'textOverflow', value: 'textOverflow' },
    { label: 'textShadow', value: 'textShadow' },
    { label: 'textTransform', value: 'textTransform' },
    { label: 'textUnderlineOffset', value: 'textUnderlineOffset' },
    { label: 'textUnderlinePosition', value: 'textUnderlinePosition' },
    { label: 'top', value: 'top' },
    { label: 'transform', value: 'transform' },
    { label: 'transformOrigin', value: 'transformOrigin' },
    { label: 'transformStyle', value: 'transformStyle' },
    { label: 'transition', value: 'transition' },
    { label: 'transitionDelay', value: 'transitionDelay' },
    { label: 'transitionDuration', value: 'transitionDuration' },
    { label: 'transitionProperty', value: 'transitionProperty' },
    { label: 'transitionTimingFunction', value: 'transitionTimingFunction' },
    { label: 'translate', value: 'translate' },
    { label: 'unicodeBidi', value: 'unicodeBidi' },
    { label: 'userSelect', value: 'userSelect' },
    { label: 'verticalAlign', value: 'verticalAlign' },
    { label: 'visibility', value: 'visibility' },
    { label: 'whiteSpace', value: 'whiteSpace' },
    { label: 'widows', value: 'widows' },
    { label: 'width', value: 'width' },
    { label: 'wordBreak', value: 'wordBreak' },
    { label: 'wordSpacing', value: 'wordSpacing' },
    { label: 'wordWrap', value: 'wordWrap' },
    { label: 'writingMode', value: 'writingMode' },
    { label: 'zIndex', value: 'zIndex' },
  ]

  const handleResize = (event: React.WheelEvent<HTMLDivElement>) => {
    let scale = parseInt(animation?.scale || '10') + (event?.deltaY > 0 ? -1 : 1) || 1
    handleUpdateAnimation({ data: { scale: scale?.toString() } })
  }

  const onDragStart = function (event: React.DragEvent<HTMLDivElement>) {
    handleUpdateAnimation({ data: { dragginElement: (event?.target as Element)?.classList[0] } })
  };

  const dropHandler = function (event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (animation?.dragginElement) {
      let element = document.getElementById(animation?.dragginElement)
      if (element) {
        let canvas = document.getElementById('canvas_scale')
        if (canvas) {
          let scale = canvas.innerText ? parseInt(canvas.innerText?.replace('x', '')) : 1
          let rectCanvas: any = document.getElementById('animator_canvas')?.getBoundingClientRect()
          var left = ((event.clientX - rectCanvas.left - ((element?.offsetWidth * scale) / 2)) / scale)
          var top = ((event.clientY - rectCanvas.top - ((element?.offsetHeight * scale) / 2)) / scale)
          handleUpdateElement({
            edit: {
              left: `${left}px` as CSSProperties,
              top: `${top}px` as CSSProperties,
              height: element?.offsetHeight + 'px' as CSSProperties,
              width: element?.offsetWidth + 'px' as CSSProperties,
            }
          })
        }
      }
    }
  };

  const dragoverHandler = function (event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handlePlay = async () => {
    let frameIndex = 0
    const animate = () => {
      handleUpdateAnimation({ data: { currentFrame: `frame_${frameIndex}` } })
      frameIndex = Object.keys(animation?.frames ? animation?.frames : {})?.length - 1 === frameIndex ? 0 : frameIndex + 1
    }
    animate()
    let interval = setInterval(() => {
      animate()
    }, animation?.time ? parseInt(animation?.time) : 1000)
    handleUpdateAnimation({ data: { interval } })
  }

  const handleUpdateAnimation = <data extends IAnimation>(params: { data?: data }) => {
    setAnimation((prev: IAnimation) => ({ ...prev, ...params?.data }))
  }

  const handlePause = () => {
    clearInterval(animation?.interval)
    handleUpdateAnimation({ data: { interval: undefined } })
  }

  const handleCreateFrame = (params: { name: string }) => {
    handleUpdateAnimation({
      data: {
        frames: {
          ...(animation?.frames ? animation?.frames : {}),
          [params?.name]: {
            ...(animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : '']
          }
        }
      }
    })
  }

  const handleDeleteFrame = (params: { frameIndex: number }) => {
    let auxAnimation = JSON.parse(JSON.stringify(animation))
    delete auxAnimation?.frames[`frame_${params?.frameIndex}`]
    auxAnimation.currentFrame = `frame_${params?.frameIndex - 1}`
    auxAnimation.currentElement = undefined
    handleUpdateAnimation({ data: { ...auxAnimation } })
  }

  const handleCreateElement = () => {
    handleUpdateAnimation({
      data: {
        frames: {
          ...(animation?.frames ? animation?.frames : {}),
          [animation?.currentFrame ? animation?.currentFrame : '']: {
            ...((animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : '']),
            [`${Object?.keys((animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''])?.length}_${Math.random()?.toString()?.slice(2, 8)}_frame_element`]: {
              left: '0px',
              top: '0px',
              height: '50px',
              width: '50px',
              borderRadius: '100%',
              transition: 'all 1s',
              backgroundColor: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
            }
          }
        },
      }
    })
  }

  const handleUpdateElement = (params: { edit: IElement }) => {
    handleUpdateAnimation({
      data: {
        frames: {
          ...(animation?.frames ? animation?.frames : {}),
          [animation?.currentFrame ? animation?.currentFrame : '']: {
            ...((animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : '']),
            [animation?.currentElement ? animation?.currentElement : animation?.dragginElement ? animation?.dragginElement : '']: {
              ...(animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''][animation?.currentElement ? animation?.currentElement : animation?.dragginElement ? animation?.dragginElement : ''],
              ...params?.edit
            }
          }
        },
      }
    })
  }

  const handleDeleteElement = (element: string) => {
    let auxAnimation = JSON.parse(JSON.stringify(animation))
    delete auxAnimation.frames[animation?.currentFrame ? animation?.currentFrame : ''][element]
    auxAnimation.currentElement = undefined
    handleUpdateAnimation({ data: { ...auxAnimation } })
  }

  const handleClickOutside = () => {
    window.addEventListener('click', handleClick)
  }

  const handleClick = (event: MouseEvent) => {
    if (!(event?.target as Element)?.classList[0]?.includes('canvas_click')) {
      handleUpdateAnimation({ data: { openCanvasOption: false } })
      window.removeEventListener('click', handleClick)
    }
  }

  const handleSideScroll = async (event: WheelEvent) => {
    let id: string = (event?.target as Element)?.classList[0]
    if (id) {
      let container = document.getElementById(id)
      if (container) {
        container.scrollLeft += (event?.deltaY > 0 ? event?.deltaY - 80 : event?.deltaY + 80)
      }
    }
  }

  const handleSave = () => {
    console.log('Enodrac - animacion:',
      {
        frames: animation?.frames,
        ...{
          time: animation?.time,
          canvasHeight: animation?.canvasHeight,
          canvasWidth: animation?.canvasWidth,
          currentFrame: 'frame_0'
        }
      }
    )
  }

  return (
    animation?.incoming !== undefined ?
      <>
        <div id={`animator_main_container`} className={`animator_main_container`}
          style={animation?.incoming ? { width: 'fit-content', height: 'fit-content' } : {}}
          onWheel={(event) => animation?.incoming ? {} : handleResize(event)}
        >
          {!animation?.incoming ?
            <div className={`toolbar_container`}>
              <div className={`frames_container`}>
                <div
                  className={`custom_style canvas_option`}
                >
                  <div className={`canvas_click text_container`}
                    onClick={() => {
                      handleClickOutside()
                      handleUpdateAnimation({ data: { openCanvasOption: animation?.openCanvasOption ? false : true } })
                    }}
                  >
                    CANVAS <span id={`canvas_scale`}>{parseInt(animation?.scale ? animation?.scale : '10') !== 10 ? `x${parseInt(animation?.scale ? animation?.scale : '10') / 10}` : ''}</span>
                  </div>
                  {animation?.openCanvasOption ?
                    <div className={`canvas_actions_container`}>
                      <div className={`canvas_click custom_style`}>
                        <div className={`canvas_click text_container`}>
                          ANCHO:
                        </div>
                        <input
                          className={`canvas_click`}
                          type='text'
                          onChange={(e) => handleUpdateAnimation({ data: { canvasWidth: e?.target?.value } })}
                          value={animation?.canvasWidth}
                        />
                      </div>
                      <div className={`canvas_click custom_style`}>
                        <div className={`canvas_click text_container`}>
                          ALTURA:
                        </div>
                        <input
                          type='text'
                          className={`canvas_click`}
                          onChange={(e) => handleUpdateAnimation({ data: { canvasHeight: e?.target?.value } })}
                          value={animation?.canvasHeight}
                        />
                      </div>
                      <div className={`canvas_click custom_style`}>
                        <div className={`canvas_click text_container`}>
                          TIEMPO:
                        </div>
                        <input
                          className={`canvas_click`}
                          type='text'
                          onChange={(e) => handleUpdateAnimation({ data: { time: e?.target?.value } })}
                          value={animation?.time}
                        />
                      </div>
                      <div className={`canvas_click custom_style`}>
                        <div className={`canvas_click text_container`}>
                          COLOR:
                        </div>
                        <input
                          className={`canvas_click`}
                          type='text'
                          onChange={(e) => handleUpdateAnimation({ data: { canvasColor: e?.target?.value } })}
                          value={animation?.canvasColor}
                        />
                      </div>
                      <div className={`custom_style ${animation?.interval ? 'active' : ''}`}
                        onClick={() => animation?.interval ? {} : handlePlay()}
                      >
                        <div className={`canvas_click text_container`}>
                          PLAY
                        </div>
                      </div>
                      <div className={`custom_style`}
                        onClick={() => handlePause()}
                      >
                        <div className={`canvas_click text_container`}>
                          PAUSE
                        </div>
                      </div>
                      <div className={`custom_style`}
                        onClick={() => handleSave()}
                      >
                        <div className={`canvas_click text_container`}>
                          GUARDAR
                        </div>
                      </div>
                    </div>
                    : null}
                </div>
                <div id={`frames_scroll`} className={`frames_scroller frames_scroll custom_horizontal_scroll`}
                  onMouseOver={() => window.addEventListener('wheel', handleSideScroll)}
                  onMouseLeave={() => window.removeEventListener('wheel', handleSideScroll)}
                >
                  {animation?.frames && Object.values(animation?.frames)?.map((_frame, index) =>
                    <div key={`frame_${index}`} className={`frames_scroller custom_style frame_${index} ${animation?.currentFrame === `frame_${index}` ? 'active' : ''}`}>
                      <div className={`frames_scroller text_container`}
                        onClick={() => handleUpdateAnimation({ data: { currentElement: undefined, currentFrame: `frame_${index}` } })}
                      >
                        frame {index + 1}
                      </div>
                      {index > 0 ?
                        <div
                          className={`frames_scroller close_button`}
                          onClick={() => handleDeleteFrame({ frameIndex: index })}
                        >
                          <div className={`frames_scroller cover`} />
                          X
                        </div>
                        : null}
                    </div>
                  )}
                </div>
                <div className={`frames_scroller create_next_frame`}
                  onClick={() => handleCreateFrame({ name: `frame_${Object.keys(animation?.frames ? animation?.frames : {})?.length}` })}
                >
                  <div className={`frames_scroller text_container`}>
                    +
                  </div>
                </div>
              </div>
              <div className={`elements_container`}>
                <div id={`elements_scroll`} className={`elements_scroller elements_scroll custom_horizontal_scroll`}
                  onMouseOver={() => window.addEventListener('wheel', handleSideScroll)}
                  onMouseLeave={() => window.removeEventListener('wheel', handleSideScroll)}
                >
                  {animation?.frames && Object.keys(animation?.frames[animation?.currentFrame ? animation?.currentFrame : ''])?.map((element) =>
                    <div className={`elements_scroller custom_style ${animation?.currentElement === element ? 'active' : ''}`}>
                      <div
                        className={`elements_scroller text_container`}
                        onClick={() => handleUpdateAnimation({ data: { currentElement: element } })}
                      >
                        {element?.split('_')[1]}
                      </div>
                      <div
                        className={`elements_scroller close_button`}
                        onClick={() => handleDeleteElement(element)}
                      >
                        <div className={`elements_scroller cover`} />
                        X
                      </div>
                    </div>
                  )}
                </div>
                <div className={`create_next_frame`}
                  onClick={() => handleCreateElement()}
                >
                  <div className={`text_container`}>
                    +
                  </div>
                </div>
              </div>
              {animation?.currentElement ?
                <div className={`edit_container`}>
                  <div
                    className={`close_button`}
                    onClick={() => handleUpdateAnimation({ data: { currentElement: undefined } })}
                  >
                    X
                  </div>
                  <div>
                    Elemento: {animation?.currentElement?.split('_')[0]}
                  </div>
                  <Select
                    placeholder='Atributos'
                    options={attributes}
                    styles={{
                      control: (base) => ({ ...base, backgroundColor: '#292929', color: 'white' }),
                      placeholder: (base) => ({ ...base, color: 'white' }),
                      container: (base) => ({ ...base, color: 'white' }),
                      menu: (base) => ({ ...base, backgroundColor: '#292929' }),
                      option: (base) => ({ ...base, color: 'white', '&:hover': { color: '#292929' }, '&:active': { color: '#292929' } }),
                      input: (base) => ({ ...base, color: 'white' }),
                      singleValue: (base) => ({ ...base, color: 'white' }),
                    }}
                    onChange={(option) => handleUpdateElement({ edit: { [option?.label as string]: option?.value as CSSProperties } })}
                  />
                  {Object.keys((animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''][animation?.currentElement])?.map((attribute) =>
                    attribute !== 'transform' ?
                      <div className={`edit_element`}>
                        {attribute.charAt(0).toUpperCase() + attribute.slice(1)}:
                        <input
                          className={`text`}
                          name={attribute}
                          //@ts-ignore
                          value={animation?.frames && animation?.currentFrame && animation?.currentElement ? animation?.frames[animation?.currentFrame][animation?.currentElement][attribute] : undefined}
                          onChange={(e) => handleUpdateElement({ edit: { [e?.target?.name as string]: e?.target?.value as CSSProperties } })}
                        />
                      </div>
                      : null
                  )}
                </div>
                : null}
            </div>
            : null}
          <div id={'animator_canvas'} className={`animator_canvas`}
            style={{ width: animation?.canvasWidth, height: animation?.canvasHeight, transform: `scale(${parseInt(animation?.scale || '10') / 10})`, backgroundColor: animation?.canvasColor }}
            onDrop={(event) => dropHandler(event)}
            onDragOver={(event) => dragoverHandler(event)}
          >
            {animation?.currentFrame && animation?.frames && animation?.frames[animation?.currentFrame] && Object.keys(animation?.frames[animation?.currentFrame])?.map((element) =>
              <div id={element} className={`${element} ${animation?.currentElement === element ? 'active' : ''}`}
                draggable={!animation?.incoming}
                onDragStart={(event) => animation?.incoming ? {} : onDragStart(event)}
                onClick={(event) => animation?.incoming ? {} : handleUpdateAnimation({ data: { currentElement: animation?.currentElement === element ? undefined : (event?.target as Element)?.classList[0] } })}
                style={{ ...(animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''][element], ...(animation?.incoming ? { cursor: 'default' } : {}) }}
              />
            )}
            {!animation?.incoming && animation?.currentElement ?
              <div className='element_pointer' style={{ top: (animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''][animation?.currentElement]?.top, left: (animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''][animation?.currentElement]?.left, width: (animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''][animation?.currentElement]?.width, height: (animation?.frames ? animation?.frames : {})[animation?.currentFrame ? animation?.currentFrame : ''][animation?.currentElement]?.height }} />
              : null}
          </div>
        </div>
      </>
      : <></>
  )
}

export default Animator
