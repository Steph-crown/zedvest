import { FC } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Homepage } from "./pages/home";

export const Pages: FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <Homepage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
