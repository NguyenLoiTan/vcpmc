import LoginFooter from "../../components/login/LoginFooter";
import LoginMenu from "../../components/login/LoginMenu";
import ErrorLink from '../../components/login/ErrorLink';

const ErrorLinkPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <LoginMenu/>
            <ErrorLink/>
            <LoginFooter/>
        </div>
     );
}
 
export default ErrorLinkPage;