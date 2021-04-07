import React, { Suspense, lazy } from 'react';
import { Route, Switch} from "react-router-dom";

function Routes() {
    const Main = lazy(() => import('../views/Main'));
    const Article = lazy(() => import('../views/Article'));
    const Post = lazy(() => import('../views/Post'));

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={"/"} exact component={Main} />
                    <Route path={"/article/:articleId"} exact component={Article} />
                    <Route path={"/insert/:articleId"} exact component={Post} />
                    <Route path={"/update/:articleId"} exact component={Post} />
                    <Route path={"*"} component={Main} />
                </Switch>
            </Suspense>
        </>
    );
}

export default Routes;