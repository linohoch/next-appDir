import {Article} from "../../types";
import Link from "next/link";

const fetchArticles = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/board/1?per-page=10`)
    const articles: Article[] = await res.json();
    return articles
}

async function ArticleList() {
    const articles = await fetchArticles()

    return(
        <>
            {articles.map((article)=>(
                <p key={article.articleNo}>
                    <Link href={`/board/${article.articleNo}`}> ${article.title} </Link>
                </p>
                ))}
        </>
    )
}
export default ArticleList