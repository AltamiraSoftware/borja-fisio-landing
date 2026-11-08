-- REVISAR ANTES DE EJECUTAR EN EL PROYECTO DEFINITIVO.
-- El bucket blog-images ya debe existir y ser público.
create policy "blog_images_public_read" on storage.objects for select to public using (bucket_id = 'blog-images');
create policy "blog_images_admin_insert" on storage.objects for insert to authenticated with check (bucket_id = 'blog-images' and (storage.foldername(name))[1] = (select auth.uid())::text and exists (select 1 from public.blog_admins a where a.user_id = (select auth.uid()) and a.activo = true));
create policy "blog_images_admin_update" on storage.objects for update to authenticated using (bucket_id = 'blog-images' and exists (select 1 from public.blog_admins a where a.user_id = (select auth.uid()) and a.activo = true)) with check (bucket_id = 'blog-images' and (storage.foldername(name))[1] = (select auth.uid())::text and exists (select 1 from public.blog_admins a where a.user_id = (select auth.uid()) and a.activo = true));
create policy "blog_images_admin_delete" on storage.objects for delete to authenticated using (bucket_id = 'blog-images' and exists (select 1 from public.blog_admins a where a.user_id = (select auth.uid()) and a.activo = true));
