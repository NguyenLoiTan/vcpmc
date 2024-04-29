import { KeyOutlined, RightOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, FloatButton, Form, Input, Radio, Row, Select } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();

    const handleDone = () => {
        navigate('/Setting');
    };
    return ( 
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Phân quyền người dùng<RightOutlined style={{ color: '#FFAC69' }} /> Chỉnh sửa
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Chỉnh sửa thông tin người dùng</h1>

            <Form layout="vertical" style={{marginTop:40}}>
                <Row>
                    <Col span={6}>
                        <Form.Item label={<span style={{color:'white'}}>Tên người dùng: <span style={{color:'red'}}>*</span></span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'Phan Mạnh Quỳnh'}/>
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Số điện thoại:</span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'+84 250 123 151'}/>
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Ngày hết hạn:</span>}>
                            <DatePicker style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={moment("10/07/2011", 'DD/MM/YYYY')}/>
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Vai trò: <span style={{color:'red'}}>*</span></span>}>
                            <Select style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'Group Admin'}
                            options={[
                                { value: 'Group Admin', label: 'Group Admin' },
                                { value: 'User', label: 'User' },
                                
                              ]}/>
                        </Form.Item>
                    </Col>

                    <Col span={6} style={{marginLeft:40}}>
                        <Form.Item label={<span style={{color:'white'}}>Email: <span style={{color:'red'}}>*</span></span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'tuyetnguyenngoc@alta.com.vn'}/>
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Tên đăng nhập: <span style={{color:'red'}}>*</span></span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'PMQ_01'}/>
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Mật khẩu: <span style={{color:'red'}}>*</span></span>}>
                            <Input.Password style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'Top ca khúc 2021'}/>
                        </Form.Item>

                        <Form.Item label={<span style={{color:'white'}}>Trạng thái: <span style={{color:'red'}}>*</span></span>}>
                        <Radio.Group defaultValue={1} >
                        <Radio value={1} style={{color:'rgba(255, 255, 255, 0.652)'}}>Đang hoạt động</Radio>
                        <Radio value={2} style={{color:'rgba(255, 255, 255, 0.652)'}}>Ngừng hoạt động</Radio>
                        </Radio.Group>
                        </Form.Item>
                    </Col>
                </Row>
                <p  style={{color:'white'}}><span style={{color:'red'}}>*</span>là những trường thông tin bắt buộc</p>

            </Form>
            <div style={{textAlign: 'center',marginTop:30}}>
                <Button 
                style={{
                    width:135,
                    height:35,
                    border: '1px solid rgba(255, 117, 6, 1)',
                    background:'none',
                    color:'rgba(255, 117, 6, 1)'
                   
                }} onClick={handleDone}
                >Hủy</Button>
                <Button style={{ 
                        marginLeft: 20,
                        width:135,
                        height:35,
                        border: '1px solid rgba(255, 117, 6, 1)',
                        background:'rgba(255, 117, 6, 1)',
                        color:'white'
                    }} onClick={handleDone}
                    
                    >Lưu</Button>
                </div>
                <FloatButton.Group shape="square" style={{
                position: 'fixed',
                right: 35,
                top: '30%',
                bottom: '70%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'rgba(47, 47, 65, 1)',
                    width: 70,
                    height: 100,
                    borderRadius: '5px 5px 0px 0px'
                }}>
                    <Button style={{
                        width: 35,
                        height: 35,
                        backgroundColor: 'rgba(114, 114, 136, 0.5)',
                        borderRadius: '50%',
                        marginBottom: 8,
                        marginTop: 8,
                        border: 'none'
                    }} 
                        icon={<UserDeleteOutlined  style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Xóa người dùng</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'rgba(47, 47, 65, 1)',
                    width: 70,
                    height: 100,
                    borderRadius: '0px 0px 5px 5px'
                }}>
                    <Button style={{
                        width: 35,
                        height: 35,
                        backgroundColor: 'rgba(114, 114, 136, 0.5)',
                        borderRadius: '50%',
                        marginBottom: 8,
                        marginTop: 8,
                        border: 'none'
                    }} 
                        icon={<KeyOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Khôi phục mật khẩu</span>
                </div>
            </FloatButton.Group>
        </div>
     );
}
 
export default EditUser;