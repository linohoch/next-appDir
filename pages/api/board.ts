import {Article, Comments} from "../../types";

export const getBoard = async () => {
    const articleList: Article[] = await fetch(`${process.env.BASE_URL}/api/board/1?per-page=10`)
        .then(res => res.json())
    return articleList
}
export const getDetail = async (articleNo:number) => {
    const user = 11111

    return await fetch(`${process.env.BASE_URL}/api/board/article/${articleNo}?userNo=${user}`)
        .then(res => res.json())
}
export const addComment = async (data:any) => {
    return await fetch(``,data)
}