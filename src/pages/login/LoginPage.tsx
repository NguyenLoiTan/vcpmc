import Login from "../../components/login/Login";
import LoginFooter from "../../components/login/LoginFooter";
import LoginMenu from "../../components/login/LoginMenu";

const LoginPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <LoginMenu/>
            <Login/>
            <LoginFooter/>
        </div>
     );
}
 
export default LoginPage;