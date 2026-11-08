import { Fragment, type ReactNode } from "react";

function safeUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

function renderInline(value: string): ReactNode[] {
  const pattern = /(\[([^\]]+)\]\(([^)]+)\)|(\*\*([^*]+)\*\*)|(`([^`]+)`))/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(value))) {
    if (match.index > cursor) nodes.push(value.slice(cursor, match.index));

    if (match[2] && match[3]) {
      const href = safeUrl(match[3]);
      nodes.push(href ? <a key={match.index} href={href} target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-steel)] underline decoration-[#7ad7d3] decoration-2 underline-offset-4 hover:text-[var(--color-petrol)]">{match[2]}</a> : match[2]);
    } else if (match[5]) {
      nodes.push(<strong key={match.index} className="font-bold text-[var(--color-night)]">{match[5]}</strong>);
    } else if (match[7]) {
      nodes.push(<code key={match.index} className="rounded bg-[#e8f4f1] px-1.5 py-0.5 text-[.88em] text-[var(--color-petrol)]">{match[7]}</code>);
    }
    cursor = pattern.lastIndex;
  }

  if (cursor < value.length) nodes.push(value.slice(cursor));
  return nodes;
}

export function BlogContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length;) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = renderInline(heading[2]);
      const classes = level === 1 ? "mt-12 text-3xl font-bold tracking-tight text-[var(--color-night)] sm:text-4xl" : level === 2 ? "mt-12 text-2xl font-bold tracking-tight text-[var(--color-petrol)] sm:text-3xl" : "mt-8 text-xl font-bold text-[var(--color-petrol)]";
      blocks.push(level === 1 ? <h2 key={index} className={classes}>{text}</h2> : level === 2 ? <h3 key={index} className={classes}>{text}</h3> : <h4 key={index} className={classes}>{text}</h4>);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(<blockquote key={index} className="my-8 border-l-4 border-[var(--color-cyan)] bg-[#f0faf8] px-5 py-4 text-lg font-medium leading-8 text-[var(--color-petrol)]">{renderInline(line.slice(2))}</blockquote>);
      index += 1;
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      const orderedList = Boolean(ordered);
      const items: ReactNode[] = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(orderedList ? /^\d+[.)]\s+(.+)$/ : /^[-*]\s+(.+)$/);
        if (!item) break;
        items.push(<li key={index}>{renderInline(item[1])}</li>);
        index += 1;
      }
      blocks.push(orderedList ? <ol key={`list-${index}`} className="my-7 list-decimal space-y-3 pl-6 leading-8 marker:font-bold marker:text-[var(--color-steel)]">{items}</ol> : <ul key={`list-${index}`} className="my-7 space-y-3">{items.map((item, itemIndex) => <li key={itemIndex} className="flex gap-3 leading-8"><span className="mt-3 size-2 shrink-0 rounded-full bg-[var(--color-cyan)]" />{item}</li>)}</ul>);
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || /^(#{1,3})\s+|^>\s|^[-*]\s+|^\d+[.)]\s+/.test(next)) break;
      paragraph.push(next);
      index += 1;
    }
    blocks.push(<p key={index} className="text-[1.04rem] leading-8 text-[#34514f] sm:text-lg sm:leading-9">{renderInline(paragraph.join(" "))}</p>);
  }

  return <div className="blog-prose space-y-6">{blocks.map((block, index) => <Fragment key={index}>{block}</Fragment>)}</div>;
}
