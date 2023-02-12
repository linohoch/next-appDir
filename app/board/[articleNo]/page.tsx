"use client"

import {notFound} from "next/navigation";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {addComment, getBoard, getDetail} from "../../../pages/api/board";
import store, {useSelector} from "../../../store";
import {boardActions} from "../../../store/board";
import {Comments} from "../../../types";

export default function Page({
                                       params,
                                       searchParams,
                                   }: {
    params: { articleNo: number };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    // useEffect(() => {
        getDetail(params.articleNo).then(data =>
            store.dispatch(boardActions.setArticleDetail(data)))
    // }, [])
    const[current, setCurrent]=useState(0)
    const[cmtInput, setCmtInput]=useState('')
    const HandleToggleArea=(no:any)=>{
        current===no?setCurrent(0):setCurrent(no);
    }
    const handleSubmit=()=>{
        const fdata={
            parentNo:current,
            contents:cmtInput}
        addComment(fdata).then(r => {
            console.log(r.status)
            setCmtInput('')
            setCurrent(0)
        })
    }
    const article = useSelector(state => state.board.contents)
    const comments = useSelector(state => state.board.comment)
    // if (!article) return notFound();
    return (
        <Container>
            <div className={"article_container"} key={article?.articleNo}>
                <div className={"title_area"}>
                    <div>{article?.articleNo}</div>
                    <div>{article?.title}</div>
                    <div></div>
                </div>
                <div className={"sub_area"}>
                    <div className={"writer"}>
                        <div className={"profileIcon"}>{article?.userId?.charAt(0)}</div>
                        <div>{article?.userId}</div>
                    </div>
                </div>
                <div className={"contents_area"}>
                    <div>{article?.contents}</div>
                </div>
                <div className={"bottom_area"}>
                </div>
            </div>

            <div className={"comments_container"}>
                {comments?.map((cmt)=>(
                    <li className={`cmt.lv`} key={cmt?.commentNo}
                        onClick={(e)=>{
                        HandleToggleArea(cmt?.commentNo)} }>
                        {cmt?.userNo}
                        {cmt?.contents}
                        {current===cmt?.commentNo && <form onSubmit={handleSubmit}>
                            <textarea onChange={e=>setCmtInput(e.currentTarget.value)}></textarea>
                            <button type={"submit"}></button>
                        </form>}
                    </li>
                ))}

            </div>
        </Container>)
}
const Container= styled.div`
    border: 1px solid;
    width: 500px;
    height: 100px;
    color: red;
    .article_container{max-width: 800px; min-width: 400px;  border-bottom: solid gray;}
    .title_area{display: flex; justify-content: space-between; font-size:larger; font-weight: bolder; padding: 2px; border-bottom: solid gray; margin-top:10px;
    max-width: 700px; min-width: 400px;}
    .sub_area{display: flex; justify-content: space-between; background-color: ghostwhite; padding: 2px;
    max-width: 700px; min-width: 400px;}
    .contents_area{max-width: 700px; min-width: 400px; min-height: 200px; padding: 10px;}
    .photo_container{display: flex;}
    .photo_block{display: flex; width: 150px; height: 150px;}
    .photo_block>img{object-fit: cover}
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
    
`