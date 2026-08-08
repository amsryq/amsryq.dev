export function getReadingTime(body?: string): string {
  if (!body) return "2 min read";
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min read`;
}
