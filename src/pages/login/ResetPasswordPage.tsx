
import LoginMenu from "../../components/login/LoginMenu";
import ResetPassword from "../../components/login/ResetPassword";

const ResetPasswordPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <LoginMenu/>
            <ResetPassword/>
        </div>
     );
}
 
export default ResetPasswordPage;