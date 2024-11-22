import { notFound } from "next/navigation";
import { articles } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Add generateStaticParams for static site generation
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/education">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
            </Button>
          </Link>

          <Card className="overflow-hidden">
            <div className="relative h-64">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary font-medium capitalize">
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readTime} read</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
              
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('-')) {
                    const items = paragraph.split('\n').map(item => item.trim().replace(/^-\s*/, ''));
                    return (
                      <ul key={index} className="list-disc pl-6 mb-4">
                        {items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}