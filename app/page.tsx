
'use client';

import React, { useEffect, useState } from 'react';

interface FeedItem {
  title: string;
  link: string;
  published: string;
  summary: string;
}

export default function FeedList() {
  const [items, setItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    fetch('/feed')
      .then(res => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">White House News Feed</h1>
      {items.map((item, i) => (
        <div key={i} className="border-b py-3">
          <a href={item.link} className="text-blue-600 font-semibold" target="_blank" rel="noreferrer">
            {item.title}
          </a>
          <div className="text-sm text-gray-600">{item.published}</div>
          <p className="text-gray-800">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}