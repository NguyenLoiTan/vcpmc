import { Link, useLocation } from "react-router-dom";

const LoginFooter = () => {
    const location = useLocation();
    return ( 
        <footer style={{
            left: 0,
            bottom: 0,
            marginBottom: '30px',
            width: '100%',
            position: 'fixed',
            textAlign: 'center',
        }}>
            {location.pathname === '/login' ? (
                <Link style={{ color: '#ff7506', padding: '10px 0' }} to={'/forgotpassword'}>Quên mật khẩu</Link>
            ) : (
                <Link style={{ color: '#ff7506', padding: '10px 0' }} to={'/login'}>Quay lại đăng nhập</Link>
            )}
        </footer>
     );
}
 
export default LoginFooter;