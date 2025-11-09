
'use client';

import { time } from 'console';
import React, { useEffect, useState } from 'react';
import { refresh } from './feed/route';
import './app.css'

interface FeedItem {
  title: string;
  link: string;
  published: string;
  summary: string;
}

setInterval(refresh, 300000);


export default function FeedList() {
  const [items, setItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    fetch('/feed')
      .then(res => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <div>

      <div className="p-4">
        <h1 className="header">News Feed</h1>
        {items.map((item, i) => (
          <div key={i} className="border-b padd">
            <div className= "test">
            <a
              href={item.link}
              className=" center card preset-filled-surface-100-900 border border-surface-200-800 card-hover divide-surface-200-800 block test divide-y overflow-hidden"
            >
              <article className="space-y-4 p-4">
                <div>
                  <h2 className="h6">{item.published.substring(0,25)}</h2>
                  <h3 className="h3">{item.title}</h3>
                </div>
                <p className="opacity-60">
                  {item.summary}
                </p>
              </article>
              {/* Footer */}
              <footer className="flex items-center justify-between gap-4 p-4">
                <small className="opacity-60">White House</small>
              </footer>
            </a>
          </div>
          </div>
        ))}
      </div>
    </div>
  );

}

