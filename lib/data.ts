// lib/data.ts
import type { ApiPost, ApiListResponse, ApiDetailResponse } from "./types";
import { siteConfig } from "./config";
import apiClient from "./axios";
import { AxiosError } from "axios";

export async function getPosts(): Promise<ApiPost[]> {
  try {
    const res = await apiClient.get<ApiListResponse<ApiPost>>("/api/v1/posts");
    return res.data.data ?? [];
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Error fetching posts:", axiosError.response?.status ? `${axiosError.response.status} - ${axiosError.response.data?.message || axiosError.response.data || 'Unknown error'}` : axiosError.message || 'Network Error');
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
    console.error("Error fetching post detail:", axiosError.response?.status ? `${axiosError.response.status} - ${axiosError.response.data?.message || axiosError.response.data || 'Unknown error'}` : axiosError.message || 'Network Error');
    return null;
  }
}
