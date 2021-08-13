export function linkResolver(doc: any) {
  if (doc.type === 'blog_post') {
    return `/blog/${doc.uid}`;
  }
  return '/';
}
