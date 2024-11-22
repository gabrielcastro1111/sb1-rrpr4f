import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { format } from "date-fns";
import type { BlogPost } from "@/lib/data";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-medium text-sm">{post.author.name}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {format(new Date(post.publishedAt), "MMM d, yyyy")}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.readTime} read
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

          <div className="flex gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}