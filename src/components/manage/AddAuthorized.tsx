import { CloudUploadOutlined, InfoCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Radio, Row, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from 'react-router-dom';

const AddAuthorized = () => {
    const navigate = useNavigate();

    const handleDone = () => {
        // Chuyển hướng tới trang "/Authorized"
        navigate('/Authorized');
    };
    return ( 
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Thêm hợp đồng
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Hợp đồng uỷ quyền bài hát - BH123</h1>

            <div style={{height:250}}><Row gutter={[16, 16]}>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={7}>
                            <div style={{ color:'white',marginTop:5 }}>Số hợp đồng:<span style={{color:'red'}}>*</span> </div>
                            <div style={{ color:'white',marginTop:24 }}>Tên hợp đồng:<span style={{color:'red'}}>*</span> </div>
                            <div style={{ color:'white',marginTop:24 }}>Ngày hiệu lực:<span style={{color:'red'}}>*</span> </div>
                            <div style={{ color:'white',marginTop:24 }}>Ngày hết hạn:<span style={{color:'red'}}>*</span> </div>
                            
                        </Col>
                        <Col span={17}>
                            <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'280px'}} />
                            <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'280px',marginTop:10}} />
                            <DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'280px',marginTop:10}} />
                            <div><DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'280px',marginTop:10}} /></div>
                            
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={6}>
                        <div style={{ color:'white' }}>Đính kèm tệp: </div>
                        <div style={{ color:'white',marginTop:12 }}></div>
                        </Col>
                        <Col span={18}>
                        <div><Upload><Button style={{color:'rgba(255, 172, 105, 1)',backgroundColor:'transparent',border:'1px solid rgba(255, 172, 105, 1)'}}><CloudUploadOutlined /> Tải lên</Button></Upload></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={11}>
                        <div style={{ color:'rgba(255, 172, 105, 1)' }}><InfoCircleOutlined /> Mức nhuận bút</div>
                        <div style={{ color:'white',marginTop:15 }}>Quyền tác giả:</div>
                        <div style={{ color:'white',marginTop:15 }}>Quyền liên quan:</div>
                        <div style={{ color:'rgba(255, 255, 255, 0.652)',marginTop:10 }}>Quyền của người biểu diễn: </div>
                        <div style={{ color:'rgba(255, 255, 255, 0.652)',marginTop:10 }}>Quyền của nhà sản xuất:</div>
                        <div style={{ color:'rgba(255, 255, 255, 0.652)' }}>(bản ghi/video)</div>
                        </Col>
                        <Col span={12}>
                        <div style={{ height: 21 }}></div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:15}}> 0%</div>
                        <div style={{ height: 21, marginTop:10}}></div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>50%</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>50%</div>
                        </Col>
                    </Row>
                </Col>
            </Row></div>
            <div style={{ color:'rgba(255, 172, 105, 1)' }}>Thông tin pháp nhân uỷ quyền</div>
            <Row gutter={[16, 16]} style={{marginTop:20}}>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={9}>
                        <div style={{color:'white'}}>Pháp nhân uỷ quyền: </div>
                        <div style={{color:'white',marginTop:21}}>Tên tổ chức:<span style={{color:'red'}}>*</span> </div>
                        <div style={{color:'white',marginTop:21}}>Mã số thuế:</div>
                        <div style={{color:'white',marginTop:21}}>Số tài khoản: </div>
                        <div style={{color:'white',marginTop:21}}>Ngân hàng:</div>
                        <div style={{color:'white',marginTop:21}}>Địa chỉ:</div>
                        <p style={{fontSize:10,color:'rgba(255, 255, 255, 0.652)'}}><span style={{color:'red'}}>*</span>là những trường thông tin bắt buộc</p>
                        </Col>
                        <Col span={15}>
                        <Radio.Group defaultValue={2} >
                        <Radio value={1} style={{color:'rgba(255, 255, 255, 0.652)'}}>Cá nhân</Radio>
                        <Radio value={2} style={{color:'rgba(255, 255, 255, 0.652)'}}>Tổ chức</Radio>
                        </Radio.Group>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  />
                        <TextArea style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  />
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={8}>
                        <div style={{ color:'white',marginTop:5 }}>Người đại diện:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white' ,marginTop:24}}>Chức vụ: </div>
                        <div style={{ color:'white',marginTop:24 }}>Ngày sinh:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white' ,marginTop:24}}>Giới tính:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white' ,marginTop:24}}>CMND/ CCCD:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white' ,marginTop:24}}>Ngày cấp: <span style={{color:'red'}}>*</span></div>
                        <div style={{ color:'white' ,marginTop:24}}>Nơi cấp: <span style={{color:'red'}}>*</span></div>
                        <div style={{ color:'white' ,marginTop:24}}>Quốc tịch: <span style={{color:'red'}}>*</span></div>
                        </Col>
                        <Col span={12}>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px'}}  />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  /> 
                        <DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}} />
                        <Radio.Group defaultValue={1} style={{marginTop:14}}>
                        <Radio value={1} style={{color:'rgba(255, 255, 255, 0.652)'}}>Nam</Radio>
                        <Radio value={2} style={{color:'rgba(255, 255, 255, 0.652)'}}>Nữ</Radio>
                        </Radio.Group>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  />
                        <DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',margin:'10px 0px'}} />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}}  />
                        <Select style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}} defaultValue="vi"
                            options={[
                                { value: 'vi', label: 'Việt Nam' },
                                { value: 'us', label: 'Mỹ' },
                                
                              ]}/>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={7}>
                        <div style={{ color:'white',marginTop:5 }}>Nơi cư trú: </div>
                        <div style={{ color:'white',marginTop:47 }}>Số điện thoại:</div>
                        <div style={{ color:'white',marginTop:24 }}>Email:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white',marginTop:24 }}>Tên đăng nhập:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white',marginTop:24 }}>Mật khẩu:<span style={{color:'red'}}>*</span> </div>
                        </Col>
                        <Col span={17}>
                        <TextArea style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px'}}  />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}}  />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}}  />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}} />
                        <Input.Password style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}}  />
                        
                        </Col>
                    </Row>
                </Col>
                <div style={{width:'100%',justifyContent:'center',display: 'flex',marginTop:40}} >
                    <Button onClick={handleDone}
                        style={{
                            width:135,
                            height:35,
                            border: '1px solid rgba(255, 117, 6, 1)',
                            background:'none',
                            color:'rgba(255, 117, 6, 1)',
                        }}
                    >
                        Hủy
                    </Button>
                    <Button onClick={handleDone}
                        style={{ 
                            marginLeft: 60,
                            width:135,
                            height:35,
                            border: '1px solid rgba(255, 117, 6, 1)',
                            background:'rgba(255, 117, 6, 1)',
                            color:'white'
                        }} 
                    >
                        Lưu
                    </Button>
                </div>
            </Row>
        </div>
     );
}
 
export default AddAuthorized;