import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFileUrl(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://") || path === "#") {
    return path;
  }
  return path;
}
