import { Button, Form, Input } from "antd";
import { useState } from "react";

const ResetPassword: React.FC = () => {
    const [form] = Form.useForm();
    const [error, setError] = useState<string | null>(null);

    const onFinish = (values: any) => {
        // Kiểm tra xem mật khẩu nhập lại có trùng khớp với mật khẩu mới không
        if (values.npassword !== values.rpassword) {
            setError("Mật khẩu nhập lại không khớp với mật khẩu mới!");
        } else {
            // Xử lý khi mật khẩu nhập lại khớp với mật khẩu mới
            setError(null);
            // Tiếp tục xử lý hoặc gửi yêu cầu khôi phục mật khẩu tới server
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
            <h1 style={{ color: 'white' }}>Đặt lại mật khẩu</h1>
            <Form 
                form={form}
                name="resetPassword"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div style={{ color: 'rgba(255, 255, 255, 1)', marginBottom: 2 }}>Mật khẩu mới:</div>
                <Form.Item 
                    name="npassword" 
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    hasFeedback
                >
                    <Input.Password
                        style={{
                            backgroundColor: 'rgba(43, 43, 63, 1)',
                            borderRadius: '8px',
                            border:'none',
                            padding: '11px 24px 13px 16px',
                            color: 'white',
                            width: '500px',
                            fontSize: '14px'
                        }} 
                    />
                </Form.Item>
                <div style={{ color: 'rgba(255, 255, 255, 1)', marginBottom: 2 }}>Nhập lại mật khẩu mới:</div>
                <Form.Item 
                    name="rpassword" 
                    dependencies={['npassword']}
                    rules={[
                        { required: true, message: 'Vui lòng nhập lại mật khẩu!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('npassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Mật khẩu nhập lại không khớp với mật khẩu mới!');
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input.Password 
                        style={{
                            backgroundColor: 'rgba(43, 43, 63, 1)',
                            borderRadius: '8px',
                            border:'none',
                            padding: '11px 24px 13px 16px',
                            color: 'white',
                            width: '500px',
                            fontSize: '14px'
                        }} 
                    />
                </Form.Item>
                {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
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
                        Lưu mật khẩu
                    </Button>
                </Form.Item>

            </Form>
            
        </div>
     );
}
 
export default ResetPassword;
