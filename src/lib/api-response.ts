import type { ApiResponse } from "@/types/api";

export function ok<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data,
  };
}

export function fail(message: string): ApiResponse<never> {
  return {
    success: false,
    message,
  };
}
