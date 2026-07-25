import {useAppSelectorUsers} from "../redux/hooks/useAppSelectorUsers.ts";
import {useAppDispatchUsers} from "../redux/hooks/useAppDispatchUsers.ts";
import {useEffect} from "react";
import {userSliceActions} from "../redux/userSlice/userSlice.tsx";

const UsersPage = () => {
    const {users,loadState}  = useAppSelectorUsers(({userSlice})=>userSlice)
    const dispatch = useAppDispatchUsers()
    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {!loadState && <div>loading</div>}
            {
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