"use client"

import {useParams} from "next/navigation";
import {ArticleTemplate} from "@/app/components/articleTemplate";
import "./article.css"

type props = {
    uid: string;
};

export type NextPageProps<T = Record<string, string>> = {
    /**
     * The path parameters received
     * e.g. : page/[slug] --> params.slug
     */
    params: T;
    /**
     * The HTTP query parameters received
     * e.g. : my-page?page=1&order=asc --> searchParams.page and searchParams.order
     */
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ArticlePage({
                                              params,
                                          }: NextPageProps<props>) {

    console.log(params.article)


    return <div>
        <ArticleTemplate id={params.article}></ArticleTemplate>




    </div>
}