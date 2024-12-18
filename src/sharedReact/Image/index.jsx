import React from "react";

export const Image = (props) => {
  const { alt, src, ...rest } = props;
  return (
    <div className="image" {...rest}>
      <img alt={alt} src={src} />
    </div>
  );
};
