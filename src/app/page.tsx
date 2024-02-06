"use client"
import Image from "next/image";

import {Metadata} from "next";
import {useEffect,useState} from "react";
import axios from 'axios';
import {ArticleCart} from "@/app/components/articleCart";


export default function Home() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://dev.to/api/articles')
        .then(response => setNews(response.data))
        .catch(error => console.log(error));
  }, []);

  useEffect(() => console.log(news), [news]);

  return (<>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-3 gap-8">
    {news.map((article) => (
        <ArticleCart article={article} key={article.id}/>
    ))}
    </div>

      </>
  );
}
