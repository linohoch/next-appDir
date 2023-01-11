import {Article} from "../../../types";
import {notFound} from "next/navigation";

type PageProps = {
    params: {
        articleNo: number;
    }
}
const fetchArticle = async (articleNo:number)=>{
    const res = await fetch("",{next:{revalidate:60}})
    const article: Article = await res.json();
    return article
}

async function articlePage({params:{articleNo}}:PageProps){
    const article = await fetchArticle(articleNo)

    if(!article.articleNo) return notFound();
    return (<>articlePage
    <div>
        {article.title}
        {article.writer}
        {article.contents}
        {article.fileUrl}
    </div>
    </>)
}
export default articlePage