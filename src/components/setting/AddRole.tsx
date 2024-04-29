import {  RightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col,  Form, Input,  Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";

const AddRole = () => {
    const navigate = useNavigate();

    const handleDone = () => {
        navigate('/RoleUser');
    };
    return ( 
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Phân quyền người dùng<RightOutlined style={{ color: '#FFAC69' }} />Cập nhập
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Cập nhật vai trò người dùng</h1>

            <Form layout="vertical" style={{marginTop:40}}>
                <Row>
                    <Col span={8}>
                        <Form.Item label={<span style={{color:'white'}}>Tên vai trò:</span>}>
                            <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                        </Form.Item>
                        <Form.Item label={<span style={{color:'white'}}>Số điện thoại:</span>}>
                            <TextArea autoSize={{ minRows: 4, maxRows: 8 }} style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                        </Form.Item>
                        
                    </Col>

                    <Col span={14} style={{marginLeft:40}}>
                        <div style={{color:'white'}}>Phân quyền chức năng:</div>
                        <div style={{width:'100%',height:400, backgroundColor:'rgba(43, 43, 63, 1)'}}>
                            <Row >
                                <Col span={6} style={{margin:'20px 0px 0px 20px'}}>
                                    <div style={{color:'rgba(255, 172, 105, 1)'}}>Tên nhóm chức năng</div>
                                    <div style={{color:'gray',marginTop:70}}>Quản lý người dùng</div>
                                    <hr style={{marginTop:75}}/>
                                    <div style={{color:'gray',marginTop:70}}>Quản lý thư viện</div>
                                </Col>
                                <Col span={9} style={{marginTop:20}}>
                                    <div style={{color:'rgba(255, 172, 105, 1)'}}><Checkbox/> Chức năng</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Phân quyền người dùng</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Tạo người dùng</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Cập nhật thông tin người dùng</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Xóa người dùng</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Xem thông tin chi tiết</div><hr />
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Danh sách Media</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Tải lên Media</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Chỉnh sửa thông tin Media</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Xóa Media</div>
                                    <div style={{color:'gray',marginTop:10}}><Checkbox/> Phê duyệt Media</div>
                                </Col>
                                <Col span={8 } style={{marginTop:20}}>
                                    <div style={{color:'rgba(255, 172, 105, 1)'}}>Mã chức năng</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div> <hr />
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>
                                    <div style={{color:'gray',marginTop:10}}>nguoidung_phanquyen</div>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
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
 
export default AddRole;