import { Button, Form, Input } from "antd";
import { useState } from "react";

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);

    const handleFormSubmit = (values: any) => {
        // Xử lý logic khi nhấn nút xác nhận, ở đây bạn có thể gửi yêu cầu khôi phục mật khẩu đến server
        // Sau đó, bạn có thể đặt setEmailSent(true) để hiển thị thông báo
        setEmailSent(true);
    };

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
            <h1 style={{ color: 'white' }}>Khôi phục mật khẩu</h1>
            {!emailSent ? (
                <Form 
                    name="login"
                    onFinish={handleFormSubmit}
                >
                    <p style={{ color: 'white' }}>Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu</p>
                    <div style={{ color: 'rgba(255, 255, 255, 1)', marginBottom: 2 }}>Email</div>
                    <Form.Item 
                        name="username" 
                        rules={[{ required: true, message: 'Vui lòng nhập Email!' }]}
                        hasFeedback
                    >
                        <Input type="Email"
                            style={{
                                backgroundColor: 'rgba(43, 43, 63, 1)',
                                borderRadius: '8px',
                                border: 'none',
                                padding: '11px 24px 13px 16px',
                                color: 'white',
                                width: '500px',
                                fontSize: '14px'
                            }} 
                        />
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button 
                            htmlType="submit" 
                            style={{
                                width: '150px',
                                height: '40px',
                                borderRadius: '4px',
                                color: 'white',
                                backgroundColor:'rgba(255, 117, 6, 1)',
                                border:'none'
                            }}
                        >
                            Xác nhận
                        </Button>
                    </Form.Item>
                </Form>
            ) : (
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'white' }}>Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.</p>
                    <p style={{ color: 'white' }}>Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.</p>
                </div>
            )}
        </div>
     );
}
 
export default ForgotPassword;
