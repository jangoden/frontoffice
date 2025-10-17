export type ApiListResponse<T> = { data: T[] };
export type ApiDetailResponse<T> = { data: T };

const API = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://backend.warungnyaweb.biz.id';

export async function getPosts() {
  const res = await fetch(`${API}/api/v1/posts`, { cache: 'no-store' });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`POSTS ${res.status}: ${body}`);
  }
  const json: ApiListResponse<any> = await res.json();
  return json.data || [];
}

export async function getPostDetail(slug: string) {
  const res = await fetch(`${API}/api/v1/posts/${encodeURIComponent(slug)}`, { cache: 'no-store' });
  if (res.status === 404) return null;
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`DETAIL ${res.status}: ${body}`);
  }
  const json: ApiDetailResponse<any> = await res.json();
  return json.data;
}
