
export function ArticleCart({article}) {

    return (<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={article.id}>
                <img className="rounded-t-lg" src={`${article.cover_image}`} alt="" />
            </a>
            <div className=" p-5">
                <p>{article.created_at}</p>
                <p>{article.comments_count}</p>
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description}</p>

            </div>
        </div>);

}