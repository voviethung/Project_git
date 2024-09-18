//rafce
import React from 'react'
//optional chaining: toán tử ? dành cho object (kiểm tra nếu object có tồn tại thì mới truy xuất thuộc tính không thì sẽ bỏ qua)
const ArticleItem = (props) => { //props = {contentArticle: {...}}
    const {contentArticle} = props;
    const {title,content,view,like,dislike} = props.contentArticle;
    
    return (
        <div className='bg-dark text-white p-3 my-2'>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className='text-end'>
                <button className='btn btn-primary'>{view} View</button>
                <button className='btn btn-danger mx-2'>{like} Like</button>
                <button className='btn btn-secondary'>{dislike}Dislike</button>
            </div>
        </div>
    )
}

export default ArticleItem