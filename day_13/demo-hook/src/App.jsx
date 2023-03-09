import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import UserCreate from "./pages/user/UserCreate";
import UserDetail from "./pages/user/UserDetail";
import UserList from "./pages/user/UserList";

function App() {
    // /users
    // /users/create
    // /users/{id}
    return (
        <>
            <Routes>
                <Route path="/users">
                    <Route index element={<UserList />} />
                    <Route path="create" element={<UserCreate />} />
                    <Route path=":userId" element={<UserDetail />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
