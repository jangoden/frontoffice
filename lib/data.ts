// lib/data.ts
import type { ApiPost, ApiListResponse, ApiDetailResponse } from "./types";

import apiClient from "./axios";
import { AxiosError } from "axios";

export async function getPosts(): Promise<ApiPost[]> {
  try {
    const res = await apiClient.get<ApiListResponse<ApiPost>>("/api/v1/posts");
    return res.data.data ?? [];
  } catch (error) {
    const axiosError = error as AxiosError;
    interface ErrorResponseData { message?: string; }
    let errorMessage = 'Network Error';
    if (axiosError.response) {
      errorMessage = `${axiosError.response.status} - `;
      if (axiosError.response.data && typeof axiosError.response.data === 'object') {
        errorMessage += (axiosError.response.data as ErrorResponseData).message || JSON.stringify(axiosError.response.data);
      } else if (axiosError.response.data) {
        errorMessage += axiosError.response.data;
      } else {
        errorMessage += 'Unknown error';
      }
    } else if (axiosError.message) {
      errorMessage = axiosError.message;
    }
    console.error("Error fetching posts:", errorMessage);
    return [];
  }
}

export async function getPostDetail(slug: string): Promise<ApiPost | null> {
  try {
    const res = await apiClient.get<ApiDetailResponse<ApiPost>>(
      `/api/v1/posts/${encodeURIComponent(slug)}`
    );
    return res.data.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) return null;
    interface ErrorResponseData { message?: string; }
    let errorMessage = 'Network Error';
    if (axiosError.response) {
      errorMessage = `${axiosError.response.status} - `;
      if (axiosError.response.data && typeof axiosError.response.data === 'object') {
        errorMessage += (axiosError.response.data as ErrorResponseData).message || JSON.stringify(axiosError.response.data);
      } else if (axiosError.response.data) {
        errorMessage += axiosError.response.data;
      } else {
        errorMessage += 'Unknown error';
      }
    } else if (axiosError.message) {
      errorMessage = axiosError.message;
    }
    console.error("Error fetching post detail:", errorMessage);
    return null;
  }
}
