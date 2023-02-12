"use client"

import Link from "next/link";
import {boardActions} from "../../store/board";
import store, {useSelector} from "../../store";
import {getBoard} from "../../pages/api/board";
import {useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";
import {Article} from "../../types";

const Board=({data}:{data:Article[]})=> {
    // useEffect(() => {
    //     getBoard().then(data =>
    //         store.dispatch(boardActions.setArticleList(data)))
    // }, [])
    store.dispatch(boardActions.setArticleList(data))
    const articleList = useSelector(state => state.board.articleList)

    return (
        <Container>
            {articleList?.map((article) => (
                <li className={"article-container"} key={article?.articleNo}>
                    <div className={"articleNo"}>{article?.articleNo}</div>
                    <div className={"title"}>
                        <Link style={{textDecoration:'none'}} href={`http://localhost:3000/board/${article?.articleNo}`}>
                        {article?.title}{article?.url ? '이미지아이콘': ''}
                            {/*{article?.url ? <Image src={"/"} alt={"/"}/> : ''}*/}
                        </Link>
                    </div>
                    <div className={"writer"}>
                        <div className={"profileIcon"}>{article?.userId?.charAt(0)}</div>
                        <div>{article?.userId}</div>
                    </div>
                </li>

            ))}
        </Container>
    )
}
export default Board;

const Container= styled.div`
    border: 1px solid;
    width: 100%;
    height: 100%;
    .article-container{
        padding: 0px 5px 0px 5px;
        margin: 5px;
        border:1px solid;
        display: flex;
        width: 400px;
        height: 30px;
        div{display:flex;align-items:center;overflow: hidden;}
        .articleNo{width:50px;justify-content:center;}
        .title{width:300px}
        .writer{width:100px}
        .profileIcon {
            min-width: 20px;
            width: 20px;   
            height: 20px;
            border-radius: 50% 50% 50% 50%;
            background-color: black;
            color: white;
            text-align: center;
            justify-content: center;
        }
    }
`