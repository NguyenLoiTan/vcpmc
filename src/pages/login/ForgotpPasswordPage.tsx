import ForgotPassword from "../../components/login/ForgotpPassword";
import LoginFooter from "../../components/login/LoginFooter";
import LoginMenu from "../../components/login/LoginMenu";

const ForgotpPasswordPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <LoginMenu/>
            <ForgotPassword/>
            <LoginFooter/>
        </div>
     );
}
 
export default ForgotpPasswordPage;