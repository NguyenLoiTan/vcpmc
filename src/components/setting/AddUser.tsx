import {  RightOutlined} from "@ant-design/icons";
import { Button, Col, DatePicker,  Form, Input,  Row, Select } from "antd";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
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
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }}/>
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Số điện thoại:</span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Ngày hết hạn:</span>}>
                            <DatePicker style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Vai trò: <span style={{color:'red'}}>*</span></span>}>
                            <Select style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'x'}
                            options={[
                                { value: 'x', label: 'Chọn vai trò' },
                                { value: 'Group Admin', label: 'Group Admin' },
                                { value: 'User', label: 'User' },
                                
                              ]}/>
                        </Form.Item>
                    </Col>

                    <Col span={6} style={{marginLeft:40}}>
                        <Form.Item label={<span style={{color:'white'}}>Email: <span style={{color:'red'}}>*</span></span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Tên đăng nhập: <span style={{color:'red'}}>*</span></span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Mật khẩu: <span style={{color:'red'}}>*</span></span>}>
                            <Input.Password style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
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
                
        </div>
     );
}
 
export default AddUser;