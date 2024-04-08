import { Button } from "antd";

const ErrorLink = () => {
    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img 
                src="/assett/img/logo.png" 
                alt="" 
            />
            <h1 style={{ color: 'rgba(255, 71, 71, 1)' }}>Không thể kết nối</h1>
            <p style={{color:'white'}}>Dường như đã có chút trục trặc hoặc link này đã hết hạn. <br/> Vui lòng thử lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.</p>

            <Button 
                htmlType="submit" 
                style={{
                    width: '150px',
                    height: '40px',
                    borderRadius: '4px',
                    color: 'rgba(255, 117, 6, 1)',
                    background:'none',
                    borderColor:'rgba(255, 117, 6, 1)',
                    marginTop: '40px',
                }}
            >
                Yêu cầu gửi lại link
            </Button>
        </div>
     );
}
 
export default ErrorLink;