import { ApiError } from "@/lib/exceptions";

interface FetchOptions extends RequestInit {
  baseUrl?: string;
}

interface ApiClientConfig {
  baseUrl: string;
  defaultHeaders?: HeadersInit;
}

export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor({ baseUrl, defaultHeaders = {} }: ApiClientConfig) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...defaultHeaders,
    };
  }

  private async fetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const url = `${options.baseUrl || this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new ApiError(
        response.statusText,
        response.status,
        await response.json().catch(() => ({}))
      );
    }

    return response.json();
  }

  async get<T>(endpoint: string, options: FetchOptions = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "GET" });
  }

  async post<T>(endpoint: string, data: unknown, options: FetchOptions = {}) {
    return this.fetch<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: unknown, options: FetchOptions = {}) {
    return this.fetch<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string, options: FetchOptions = {}) {
    return this.fetch<T>(endpoint, { ...options, method: "DELETE" });
  }
}

export const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
});