import '../../styles/info.css'
import React, { useState } from "react";
import { Form, Input, DatePicker, Row, Col, Button, FloatButton, Modal } from "antd";
import { UserOutlined, CalendarOutlined, PhoneOutlined, MailOutlined, LockOutlined, TeamOutlined, FormOutlined, LogoutOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from 'react-router-dom';


const Info: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const navigate = useNavigate();

    const dulieutamthoi = {
        lastName: 'Nguyễn Tấn',
        firstName: 'Lợi',
        dob: '14/07/2004',
        phone: '+84 329886811',
        email: 'loitannguyen111@gmail.com',
        username: 'loitannguyen111@gmail.com',
        role: 'Admin',
    };

    const handlePasswordChange = () => {
        setChangePassword(true); // Khi bấm vào nút "Đổi mật khẩu", hiển thị form đổi mật khẩu
    };
    const handleLogout = () => {
        // Chuyển hướng tới trang "/login"
        navigate('/login');
    };
    return ( 
        <div>
            <h1 style={{ color: 'white' }}>Thông tin căn bản</h1>
            <div style={{ display: 'flex'}}>
                <img src="/assett/img/avatar.jpg" alt="Avatar" style={{ width: '300px', height: '300px', borderRadius: '50%', marginRight: '20px' }} />
                <div>
                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label={<span style={{ color: 'white' }}>Họ</span>}>
                                    <Input prefix={<UserOutlined />} style={{backgroundColor:'rgba(43, 43, 63, 1)',border: '1px solid rgba(114, 114, 136, 1)',color: 'white'}} defaultValue={dulieutamthoi.lastName} disabled={!editing}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<span style={{ color: 'white' }}>Tên</span>}>
                                    <Input prefix={<UserOutlined />} style={{backgroundColor:'rgba(43, 43, 63, 1)',border: '1px solid rgba(114, 114, 136, 1)',color: 'white'}} defaultValue={dulieutamthoi.firstName} disabled={!editing}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label={<span style={{ color: 'white' }}>Ngày sinh</span>}>
                                    <DatePicker defaultValue={moment(dulieutamthoi.dob, 'DD/MM/YYYY')}  style={{ width: '100%' ,backgroundColor:'rgba(43, 43, 63, 1)',border: '1px solid rgba(114, 114, 136, 1)',color: 'white'}}  suffixIcon={<CalendarOutlined />} disabled={!editing}/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<span style={{ color: 'white' }}>Số điện thoại</span>}>
                                    <Input prefix={<PhoneOutlined />} style={{backgroundColor:'rgba(43, 43, 63, 1)',border: '1px solid rgba(114, 114, 136, 1)',color: 'white'}} defaultValue={dulieutamthoi.phone} disabled={!editing}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label={<span style={{ color: 'white' }}>Email</span>}>
                            <Input prefix={<MailOutlined />} readOnly style={{backgroundColor:'rgba(62, 62, 80, 1)', border:'none', color:'rgba(135, 136, 144, 1)'}} defaultValue={dulieutamthoi.email}/>
                        </Form.Item>
                        <Form.Item label={<span style={{ color: 'white' }}>Tên đăng nhập</span>}>
                            <Input prefix={<LockOutlined />} readOnly style={{backgroundColor:'rgba(62, 62, 80, 1)', border:'none', color:'rgba(135, 136, 144, 1)'}} defaultValue={dulieutamthoi.username}/>
                        </Form.Item>
                        <Form.Item label={<span style={{ color: 'white' }}>Phân quyền</span>}>
                            <Input prefix={<TeamOutlined />} readOnly style={{backgroundColor:'rgba(62, 62, 80, 1)', border:'none', color:'rgba(135, 136, 144, 1)',width:'50%'}} defaultValue={dulieutamthoi.role}/>
                        </Form.Item>

                        <Form.Item style={{justifyContent: 'center',display: 'flex',marginTop:90}}>
                            {editing ? ( // Nếu đang chỉnh sửa
                                <>
                                    <Button onClick={() => setEditing(false)}
                                    style={{
                                        width:135,
                                        height:35,
                                        border: '1px solid rgba(255, 117, 6, 1)',
                                        background:'none',
                                        color:'rgba(255, 117, 6, 1)',
                                    }}
                                    >Lưu</Button> {/* Nút lưu */}
                                    <Button style={{ 
                                        marginLeft: 20,
                                        width:135,
                                        height:35,
                                        border: '1px solid rgba(255, 117, 6, 1)',
                                        background:'rgba(255, 117, 6, 1)',
                                        color:'white'
                                    }} onClick={() => setEditing(false)}
                                    
                                    >Hủy</Button> {/* Nút hủy */}
                                </>
                            ) : ( // Nếu không đang chỉnh sửa
                                <></>
                            )}
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <FloatButton.Group
                shape="square"
                style={{
                position: 'fixed',
                right: 35,
                top: '20%',
                bottom: '80%',
                }}
            >
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:'rgba(47, 47, 65, 1)',
                width: 70,
                height: 100,
                borderRadius: '5px 0px'
                }}>
                <Button style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }}
                onClick={() => setEditing(true)}
                    icon={<FormOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' ,textAlign:'center', fontSize:12}}>Sửa thông tin</span>
                </div>

                <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:'rgba(47, 47, 65, 1)',
                width: 70,
                height: 100,
                
                }}>
                <Button style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }}
                    onClick={handlePasswordChange}
                    icon={<LockOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' , fontSize:12, textAlign:'center'}}>Đổi mật khẩu</span>
                </div>

                <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:'rgba(47, 47, 65, 1)',
                width: 70,
                height: 100,
                borderRadius: '0px 5px'
                }}>
                <Button style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }}
                    onClick={handleLogout}
                    icon={<LogoutOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' ,textAlign:'center', fontSize:12}}>Đăng xuất</span>
                </div>
            </FloatButton.Group>

            <Modal
                visible={changePassword} // Hiển thị form khi trạng thái là true
                footer={null} // Không hiển thị footer
                className="custom-modal"
                closeIcon={null}
            >
                {/* Form đổi mật khẩu */}
                <>
                    <h1>Thay đổi mật khẩu</h1>
                    <Form layout="vertical">
                    <Form.Item label={<span style={{ color: 'black' }}>Mật khẩu hiện tại:</span>}>
                        <Input type="password" style={{backgroundColor:'rgba(43, 43, 63, 1)',border: '1px solid rgba(114, 114, 136, 1)',color: 'white'}} defaultValue={dulieutamthoi.firstName} />
                    </Form.Item>
                    <Form.Item label={<span style={{ color: 'black' }}>Mật khẩu mới:</span>}>
                        <Input type="password" style={{backgroundColor:'rgba(43, 43, 63, 1)',border: '1px solid rgba(114, 114, 136, 1)',color: 'white'}} defaultValue={dulieutamthoi.firstName} />
                    </Form.Item>
                    <Form.Item label={<span style={{ color: 'black' }}>Nhập lại mật khẩu mới:</span>}>
                        <Input type="password" style={{backgroundColor:'rgba(43, 43, 63, 1)',border: '1px solid rgba(114, 114, 136, 1)',color: 'white'}} defaultValue={dulieutamthoi.firstName} />
                    </Form.Item>
                    <Form.Item style={{justifyContent: 'center',display: 'flex',marginTop:10}}>
                    <Button onClick={() => setChangePassword(false)}
                    style={{
                        width:135,
                        height:35,
                        border: '1px solid rgba(255, 117, 6, 1)',
                        background:'none',
                        color:'rgba(255, 117, 6, 1)',
                    }}
                    >Hủy</Button> 
                    <Button style={{ 
                        marginLeft: 20,
                        width:135,
                        height:35,
                        border: '1px solid rgba(255, 117, 6, 1)',
                        background:'rgba(255, 117, 6, 1)',
                        color:'white'
                    }} onClick={() => setChangePassword(false)}
                    
                    >Lưu</Button>
                    </Form.Item>
                    
                    </Form>
                </>
            </Modal>
        </div>
    );
}

export default Info;
