
import Parser from 'rss-parser';

export async function GET() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://www.whitehouse.gov/news/feed/');
  
  return Response.json(feed.items.map(item => ({
    title: item.title,
    link: item.link,
    published: item.pubDate,
    summary: item.contentSnippet
  })));
}
