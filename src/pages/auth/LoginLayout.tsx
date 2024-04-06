import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

const Login: React.FC = () => {
    const [form] = Form.useForm();
    const [error, setError] = useState<string | null>(null);

    const onFinish = (values: any) => {
        if (values.username !== "abc@gmail.com" || values.password !== "123456") {
            setError("Tên đăng nhập hoặc mật khẩu không chính xác");
        } else {
            setError(null);
            // Xử lý khi đăng nhập thành công
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
            height: '100vh',
            backgroundColor: 'rgba(30, 30, 46, 1)',
        }}>
            <img 
                src="/assett/img/vcpmc_logo-removebg-preview 1.png" 
                alt="" 
                style={{
                    backgroundColor: 'white',
                    borderRadius: '50%'
                }}
            />
            <h1 style={{ color: 'white' }}>Đăng nhập</h1>
            <Form 
                form={form}
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div style={{ color: 'rgba(255, 255, 255, 1)', marginBottom: 2 }}>Tên đăng nhập</div>
                <Form.Item 
                    name="username" 
                    rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                    validateStatus={error ? 'error' : ''}
                    hasFeedback
                >
                    <Input 
                        style={{
                            backgroundColor: 'rgba(43, 43, 63, 1)',
                            borderRadius: '8px',
                            padding: '11px 24px 13px 16px',
                            color: 'white',
                            border: error ? '1px solid red' : 'none', // Tô viền đỏ khi có lỗi
                            width: '500px',
                            fontSize: '14px'
                        }} 
                    />
                </Form.Item>
                <div style={{ color: 'rgba(255, 255, 255, 1)', marginBottom: 2 }}>Password</div>
                <Form.Item 
                    name="password" 
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    validateStatus={error ? 'error' : ''}
                    hasFeedback
                >
                    <Input.Password 
                        style={{
                            backgroundColor: 'rgba(43, 43, 63, 1)',
                            borderRadius: '8px',
                            padding: '11px 24px 13px 16px',
                            color: 'white',
                            border: error ? '1px solid red' : 'none', // Tô viền đỏ khi có lỗi
                            width: '500px',
                            fontSize: '14px'
                        }} 
                    />
                </Form.Item>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <Form.Item >
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{ color: 'white' }}>Ghi nhớ đăng nhập</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item style={{ textAlign: 'center' }}>
                    <Button 
                        type="primary"
                        htmlType="submit" 
                        style={{
                            width: '150px',
                            height: '40px',
                            borderRadius: '4px',
                            transition: 'background-color 0.3s ease',
                        }}
                    >
                        Đăng nhập
                    </Button>
                </Form.Item>

            </Form>
        </div>
     );
}
 
export default Login;
