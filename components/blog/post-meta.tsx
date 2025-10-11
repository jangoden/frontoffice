// components/blog/post-meta.tsx
import { ApiPost } from "@/lib/types";
import { formatDate, calculateReadingTime } from "@/lib/utils";

interface PostMetaProps {
  post: ApiPost;
}

export default function PostMeta({ post }: PostMetaProps) {
  const { human: humanDate, iso: isoDate } = formatDate(post.published_date);
  const readingTime = calculateReadingTime(post.content);

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t pt-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
          {(post.author || "A").slice(0, 1).toUpperCase()}
        </div>
        <div>
          <span className="block font-semibold text-foreground">
            {post.author || "Admin"}
          </span>
          <time dateTime={isoDate}>{humanDate}</time>
        </div>
      </div>
      <span className="hidden sm:inline" aria-hidden="true">
        •
      </span>
      <span>{readingTime} menit baca</span>
    </div>
  );
}
