import React, { Children, PropsWithChildren, useMemo } from "react";
import { useKarousel } from "./hooks";
import { KarouselOptions } from "./types";

export type KarouselProps = PropsWithChildren<Partial<KarouselOptions>> & {
  animationDisabled: boolean;
};

export const Karousel = (props: KarouselProps) => {
  const { children, animationDisabled, ...options } = props;
  const { classes } = options;
  const slideCount = useMemo(() => Children.count(children), [children]);

  const {
    getButtonProps,
    getContainerProps,
    getControlProps,
    getIndicatorProps,
    getSlideProps,
    getSliderProps,
    getTrackProps,
    pageCount,
    indicators,
    buttons
  } = useKarousel(slideCount, options);

  return (
    <div {...getContainerProps()}>
      <div
        {...getSliderProps()}
        {...(animationDisabled && { "data-animate-disabled": true })}
        data-animate
        data-animate-duration="2"
        data-animate-x="500"
      >
        <ul {...getTrackProps()}>
          {Children.map(children, (child, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li {...getSlideProps(index + 1)} key={index}>
              {child}
            </li>
          ))}
        </ul>
      </div>
      <fieldset {...getControlProps()}>
        {buttons && (
          <>
            <button type="button" {...getButtonProps("previous")}>
              <i className="fas fa-angle-left" />
            </button>
            <button type="button" {...getButtonProps("next")}>
              <i className="fas fa-angle-right" />
            </button>
          </>
        )}
        {indicators && (
          <div className={classes?.indicators}>
            { pageCount > 0 && [...Array(pageCount)]?.map((_, index) => (
              <button
                type="button"
                // eslint-disable-next-line react/no-array-index-key
                key={index + 1}
                {...getIndicatorProps(index + 1)}
              >
                {/* {index + 1} */}
              </button>
            ))}
          </div>
        )}
      </fieldset>
    </div>
  );
};
