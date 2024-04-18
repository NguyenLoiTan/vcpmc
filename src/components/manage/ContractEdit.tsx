import { CloudUploadOutlined, FilePdfOutlined, FileWordOutlined, InfoCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Radio, Row, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from 'react-router-dom';
import moment from "moment";

const ContractEdit = () => {
    const navigate = useNavigate();

    const handleDone = () => {
        // Chuyển hướng tới trang "/login"
        navigate('/ContractDetails');
    };
    return ( 
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chỉnh sửa thông tin 
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Hợp đồng uỷ quyền bài hát - BH123</h1>

            <div style={{height:250}}><Row gutter={[16, 16]}>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <div style={{ color:'white',marginTop:5 }}>Số hợp đồng: </div>
                            <div style={{ color:'white',marginTop:24 }}>Tên hợp đồng: </div>
                            <div style={{ color:'white',marginTop:24 }}>Ngày hiệu lực: </div>
                            <div style={{ color:'white',marginTop:24 }}>Ngày hết hạn: </div>
                            <div style={{ color:'white',marginTop:24 }}>Tình trạng: </div>
                        </Col>
                        <Col span={18}>
                            <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'280px'}} defaultValue="BH123"/>
                            <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'280px',marginTop:10}} defaultValue="Hợp đồng uỷ quyền tác phẩm âm nhạc"/>
                            <DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'140px',marginTop:10}} defaultValue={moment("01/05/2021", 'DD/MM/YYYY')}/>
                            <div><DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'140px',marginTop:10}} defaultValue={moment("01/12/2021", 'DD/MM/YYYY')}/></div>
                            <Select style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'280px',marginTop:10}} defaultValue="Đang hiệu lực"
                            options={[
                                { value: 'Đang hiệu lực', label: 'Đang hiệu lực' },
                                { value: 'Hết hiệu lực', label: 'Hết hiệu lực' },
                                
                              ]}/>
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
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:8}}><FileWordOutlined /> hetthuongcannho.doc</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:8,marginTop:10}}><FilePdfOutlined /> hetthuongcannho.doc</div>
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
                        <div style={{color:'white',marginTop:21}}>Tên người uỷ quyền:<span style={{color:'red'}}>*</span> </div>
                        <div style={{color:'white',marginTop:21}}>Ngày sinh:<span style={{color:'red'}}>*</span> </div>
                        <div style={{color:'white',marginTop:21}}>Giới tính:<span style={{color:'red'}}>*</span> </div>
                        <div style={{color:'white',marginTop:21}}>Quốc tịch:<span style={{color:'red'}}>*</span> </div>
                        <div style={{color:'white',marginTop:21}}>Số điện thoại: </div>
                        <p style={{fontSize:10,color:'rgba(255, 255, 255, 0.652)'}}><span style={{color:'red'}}>*</span>là những trường thông tin bắt buộc</p>
                        </Col>
                        <Col span={15}>
                        <Radio.Group defaultValue={1} >
                        <Radio value={1} style={{color:'rgba(255, 255, 255, 0.652)'}}>Cá nhân</Radio>
                        <Radio value={2} style={{color:'rgba(255, 255, 255, 0.652)'}}>Tổ chức</Radio>
                        </Radio.Group>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'240px',marginTop:10}} defaultValue="Nguyễn Văn A" />
                        <DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'140px',margin:'10px 0px'}} defaultValue={moment("10/01/1984", 'DD/MM/YYYY')}/>
                        <Radio.Group defaultValue={1} >
                        <Radio value={1} style={{color:'rgba(255, 255, 255, 0.652)'}}>Nam</Radio>
                        <Radio value={2} style={{color:'rgba(255, 255, 255, 0.652)'}}>Nữ</Radio>
                        </Radio.Group>
                        <Select style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}} defaultValue="vi"
                            options={[
                                { value: 'vi', label: 'Việt Nam' },
                                { value: 'us', label: 'Mỹ' },
                                
                              ]}/>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}} defaultValue="(+84) 345 678 901" />
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={8}>
                        <div style={{ color:'white',marginTop:5 }}>Số CMND/ CCCD:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white',marginTop:24 }}>Ngày cấp:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white' ,marginTop:24}}>Nơi cấp:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white' ,marginTop:24}}>Mã số thuế: </div>
                        <div style={{ color:'white' ,marginTop:24}}>Nơi cư trú: </div>
                        </Col>
                        <Col span={12}>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'120px'}} defaultValue="123456789012" />
                        <DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'120px',margin:'10px 0px'}} defaultValue={moment("10/07/2011", 'DD/MM/YYYY')}/>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px'}} defaultValue="Tp.HCM, Việt Nam" />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}} defaultValue="92387489" />
                        <TextArea autoSize={{ minRows: 2, maxRows: 6 }} style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'200px',marginTop:10}} defaultValue="69/53, Nguyễn Gia Trí, Phường 25,Quận Bình Thạnh, Thành phố Hồ Chí Minh" />
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={7}>
                        <div style={{ color:'white',marginTop:5 }}>Email: </div>
                        <div style={{ color:'white',marginTop:24 }}>Tên đăng nhập:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white',marginTop:24 }}>Mật khẩu:<span style={{color:'red'}}>*</span> </div>
                        <div style={{ color:'white',marginTop:24 }}>Số tài khoản: </div>
                        <div style={{ color:'white',marginTop:24 }}>Ngân hàng: </div>
                        </Col>
                        <Col span={17}>
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px'}} defaultValue="nguyenvana@gmail.com" />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}} defaultValue="nguyenvana@gmail.com" />
                        <Input.Password style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}} defaultValue="123456" />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}} defaultValue="1231123312211223" />
                        <Input style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'220px',marginTop:10}} defaultValue="ACB - Ngân hàng Á Châu" />
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
 
export default ContractEdit;