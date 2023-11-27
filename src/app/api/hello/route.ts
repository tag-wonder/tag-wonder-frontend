export const runtime = 'edge';

export async function GET() {
  return new Response(JSON.stringify({ name: 'John Doe' }));
}
