import PaginationComponent from "./pagination/PaginationComponent.tsx";
import './App.css';
import UsersPage from "./Pages/UsersPage.tsx";

const App = () => {
    return (
        <div>
            <UsersPage />
            <PaginationComponent />
        </div>
    );
};

export default App;