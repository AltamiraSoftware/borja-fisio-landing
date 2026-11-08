import { BlogEditor } from "@/components/blog/BlogEditor";
import { requireAdmin } from "@/lib/require-admin";
import { getCategories } from "@/lib/blog-queries";
import { savePost } from "../actions";
export const dynamic = "force-dynamic";
export default async function NewPostPage() { const [{ admin }, categories] = await Promise.all([requireAdmin(), getCategories()]); return <BlogEditor categories={categories} userId={admin.userId} action={savePost} />; }
