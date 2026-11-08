import { notFound } from "next/navigation";
import { BlogEditor } from "@/components/blog/BlogEditor";
import { requireAdmin } from "@/lib/require-admin";
import { getCategories } from "@/lib/blog-queries";
import { savePost } from "../../actions";
import type { BlogPost } from "@/lib/blog";
export const dynamic = "force-dynamic";
export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; const [{ supabase, admin }, categories] = await Promise.all([requireAdmin(), getCategories()]); const { data } = await supabase.from("blog_posts").select("*").eq("id", id).maybeSingle(); if (!data) notFound(); return <BlogEditor post={data as BlogPost} categories={categories} userId={admin.userId} action={savePost} />; }
