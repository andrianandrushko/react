import {useAppSelectorUsers} from "../redux/hooks/useAppSelectorUsers.ts";
import {useAppDispatchUsers} from "../redux/hooks/useAppDispatchUsers.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/userSlice/userSlice.tsx";

const UsersPage = () => {
    // беремо власні два хуки для користувачів
    const {users,loadState}  = useAppSelectorUsers(({userSlice})=>userSlice)
    const dispatch = useAppDispatchUsers()
    // завантаження коритувачів при першому рендері
    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {!loadState && <div>loading</div>}
            {
                // виводимо користувачів на сторінку за допомогою функції map
                users.map(user =>(
                    <div className={'user'} key={user.id}>
                        <p>id:{user.id}</p>
                        <p>name:{user.name}</p>
                        <p>username:{user.username}</p>
                        <p>email:{user.email}</p>
                    </div>
                ))
            }

        </div>
    );
};

export default UsersPage;