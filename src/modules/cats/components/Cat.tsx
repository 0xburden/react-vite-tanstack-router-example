import React from "react";
import { twMerge } from "tailwind-merge";
import { CATS_BASE_URL } from "../constants";

export interface CatProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  dimensions: string; // e.g. 200/300
}

export function Cat({ dimensions, ...props }: CatProps) {
  const imgSrc = CATS_BASE_URL + dimensions;
  return (
    <img
      alt=""
      src={imgSrc}
      className={twMerge("block w-auto h-full", props?.className)}
      {...props}
    />
  );
}
