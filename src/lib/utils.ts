import { clsx, type ClassValue } from "clsx";
import {
  type ForwardedRef,
  type MutableRefObject,
  useImperativeHandle,
  useRef,
} from "react";
import { type GlobeMethods } from "react-globe.gl";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
