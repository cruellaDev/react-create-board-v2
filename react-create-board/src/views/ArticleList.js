import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { articleActions } from '../slices/articleSlice';

function ArticleList() {
    const location = useLocation();
    const params = useParams();
    // console.log(params);
    // console.log(location);
    const { articleList, status, statusText } = useSelector((state) => state.articleReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(articleActions.selectArticleList(params?.boardId ?? 0));
    }, [dispatch, params?.boardId])
    return (
        <>
            <div>
                {location?.state?.name ?? ""}
            </div>
            {
                status === 0
                ? (
                    <div>
                        Loading...
                    </div>
                ) : status === 200
                ? (
                    <>
                        { articleList.length > 0 ? (
                            <div>
                                <ul >
                                    {
                                        articleList.map((article, index) => (
                                            <li  key={article?.id ?? index}>
                                                <Link to={{ pathname: `/article/${article?.id ?? 0}` }}>
                                                    <span>{article?.title ?? ""}</span>
                                                </Link>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        ) : (
                            <div> 게시글이 없습니다. </div>
                        )}
                    </>
                ) : (
                    <div>
                        <div>
                            <span>{status}</span>
                        </div>
                        <div>
                            <span>{statusText}</span>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ArticleList;
