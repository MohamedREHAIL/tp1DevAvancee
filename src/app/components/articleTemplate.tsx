import {useEffect, useState} from "react";
import axios from 'axios'
import ReactMarkdown from "react-markdown"
export function ArticleTemplate({id}) {

    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`https://dev.to/api/articles/${id}`)
            .then(response => setNews(response.data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => console.log(news), [news]);
    return(<div className={"bg-amber-100 "}>
        <p className={"uppercase text-center text-2xl mb-16 "}>.blog.</p>
            <div>
                <img className="rounded-t-lg   block ml-auto mr-auto" src={`${news.cover_image}`} alt="" />
            </div>
            <div >
             <p>{news.created_at}</p>
                <p>{news.comments_count}</p>
            </div>

            <div>
                <h2>{news.title}</h2>

            </div>
            <div>
                <p className="text-justify ml-80 mr-72"><ReactMarkdown children={news.body_markdown}></ReactMarkdown></p>
            </div>
    </div>
)

}