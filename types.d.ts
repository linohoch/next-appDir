export type Article = {
    shopNo:number|null;
    articleNo:number|null;
    title:string;
    contents:string;
    userNo:number;
    userId:string;
    firstName:string|null;
    hitCnt:number;
    likeCnt:string;
    upDate:string|null;
    url:string|null;
}|null
export type Photo = {
    photoNo:number;
    shopNo:number;
    articleNo:number;
    originName:string;
    uploadName:string;
    url:string;
    fileSize:string|null;
    insDate:string;
    rpstYn:string|null;
}|null
export type Comments = {
    commentNo:number;
    parentNo:number;
    grp:number|null;
    lv:number|null;
    seq:number|null;
    articleNo:number|null;
    userNo:number;
    contents:string;
    insDate:string|null;
    upDate:string|null;
    // pCommentNo:number|null;
    // pGrp:number|null;
    // pLv:number|null
    // pSeq:number|null;
}|null