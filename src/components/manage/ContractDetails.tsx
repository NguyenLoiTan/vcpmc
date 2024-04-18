import { CloseOutlined, CloudUploadOutlined, FilePdfOutlined, FileTextOutlined, FileWordOutlined, FormOutlined, InfoCircleOutlined,  RightOutlined } from "@ant-design/icons";
import { Button, Row, Col, FloatButton, DatePicker, Upload, Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContractDetails = () => {
    const location = useLocation();
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const navigate = useNavigate();
    const [isReason , setIsReason ] = useState(false);

    const handleEdit = () => {
        // Chuyển hướng tới trang "/login"
        navigate('/ContractEdit');
    };
    const handleAuthorized = () => {
        navigate('/Authorized');
    }
    const handleContractDetails = () => {
        navigate('/ContractDetails');
    }
    const handleExtend = () =>{
        setIsNotificationVisible(true);
    }
    const handleHideNotification = () => {
        setIsNotificationVisible(false);
    };
    const handleReason = () =>{
        setIsReason(true);
    }
    const handleHideReason = () => {
        setIsReason(false);
    };
    return ( 
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Chi tiết hợp đồng uỷ quyền bài hát - BH123</h1>

            <div style={{
                width: 400,
                height: 40,
                borderRadius: 20,
                border: '1px solid rgba(255, 117, 6, 1)',
                display: 'flex',
                marginBottom: '20px',
            }}>
                <Button
                    style={{
                        width: '50%',
                        height: 40,
                        borderRadius: 20,
                        border: 'none',
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: location.pathname === '/ContractDetails' ? 'rgba(182, 81, 0, 1)' : 'transparent',
                    }} onClick={handleContractDetails}
                >
                    Thông tin hợp đồng
                </Button>
                <Button
                    style={{
                        width: '50%',
                        height: 40,
                        borderRadius: 20,
                        border: 'none',
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: location.pathname === '/Authorized' ? 'rgba(182, 81, 0, 1)' : 'transparent',
                    }} onClick={handleAuthorized}
                >
                    Tác phẩm ủy quyền
                </Button>
            </div>

            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <div style={{ color:'white' }}>Số hợp đồng: </div>
                            <div style={{ color:'white',marginTop:10 }}>Tên hợp đồng: </div>
                            <div style={{ color:'white',marginTop:10 }}>Ngày hiệu lực: </div>
                            <div style={{ color:'white',marginTop:10 }}>Ngày hết hạn: </div>
                            <div style={{ color:'white',marginTop:10 }}>Tình trạng: </div>
                        </Col>
                        <Col span={18}>
                            <div style={{color:'rgba(255, 255, 255, 0.652)'}}>BH123</div>
                            <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>Hợp đồng uỷ quyền tác phẩm âm nhạc</div>
                            <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>01/05/2021</div>
                            <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>01/12/2021</div>
                            <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}><span className="dot"></span>Còn thời hạn</div>
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
            </Row>
            <div style={{ color:'rgba(255, 172, 105, 1)' }}>Thông tin pháp nhân uỷ quyền</div>
            <Row gutter={[16, 16]} style={{marginTop:20}}>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={9}>
                        <div style={{color:'white'}}>Pháp nhân uỷ quyền: </div>
                        <div style={{color:'white',marginTop:10}}>Tên người uỷ quyền: </div>
                        <div style={{color:'white',marginTop:10}}>Ngày sinh: </div>
                        <div style={{color:'white',marginTop:10}}>Giới tính: </div>
                        <div style={{color:'white',marginTop:10}}>Quốc tịch: </div>
                        <div style={{color:'white',marginTop:10}}>Số điện thoại: </div>
                        </Col>
                        <Col span={15}>
                        <div style={{color:'rgba(255, 255, 255, 0.652)'}}>Cá nhân</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>Nguyễn Văn A</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>10/01/1984</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>Nam</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>Việt Nam</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>(+84) 345 678 901</div>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={8}>
                        <div style={{ color:'white' }}>Số CMND/ CCCD: </div>
                        <div style={{ color:'white',marginTop:10 }}>Ngày cấp: </div>
                        <div style={{ color:'white' ,marginTop:10}}>Nơi cấp: </div>
                        <div style={{ color:'white' ,marginTop:10}}>Mã số thuế: </div>
                        <div style={{ color:'white' ,marginTop:10}}>Nơi cư trú: </div>
                        </Col>
                        <Col span={12}>
                        <div style={{color:'rgba(255, 255, 255, 0.652)'}}>123456789012</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>10/07/2011</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>Tp.HCM, Việt Nam</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>92387489</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>69/53, Nguyễn Gia Trí, Phường 25,Quận Bình Thạnh, Thành phố Hồ Chí Minh</div>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={16}>
                        <Col span={9}>
                        <div style={{ color:'white' }}>Email: </div>
                        <div style={{ color:'white',marginTop:10 }}>Tài khoản đăng nhập: </div>
                        <div style={{ color:'white',marginTop:10 }}>Mật khẩu: </div>
                        <div style={{ color:'white',marginTop:10 }}>Số tài khoản: </div>
                        <div style={{ color:'white',marginTop:10 }}>Ngân hàng: </div>
                        </Col>
                        <Col span={15}>
                        <div style={{color:'rgba(255, 255, 255, 0.652)'}}>nguyenvana@gmail.com</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>nguyenvana@gmail.com</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>********</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>1231123312211223</div>
                        <div style={{color:'rgba(255, 255, 255, 0.652)',marginTop:10}}>ACB - Ngân hàng Á Châu</div>
                        </Col>
                    </Row>
                </Col>
            </Row>

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
                <Button onClick={handleEdit}
                    style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }}
                
                    icon={<FormOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' ,textAlign:'center', fontSize:12}}>Chỉnh sửa hợp đồng</span>
                </div>

                <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:'rgba(47, 47, 65, 1)',
                width: 70,
                height: 100,
                
                }}>
                <Button onClick={handleExtend}
                    style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }}
                    
                    icon={<FileTextOutlined  style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' , fontSize:12, textAlign:'center'}}>Gia hạn hợp đồng</span>
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
                    onClick={handleReason}
                    icon={<CloseOutlined  style={{ color: 'red' }} />}
                />
                <span style={{ color: 'white' ,textAlign:'center', fontSize:12}}>Hủy hợp đồng</span>
                </div>
            </FloatButton.Group>

            {/* Màn hình tối */}
            {isNotificationVisible && (
                <div className="overlay" onClick={handleHideNotification}></div>
            )}
            {/* Thông báo */}
            {isNotificationVisible && (
            <div className="custom-notification">
                <div className="notification-content">
                    <h3>Gia hạn uỷ quyền tác phẩm</h3>
                </div>
                <div className="notification-row">
                    <div className="notification-col">
                        <div>Thời gian gia hạn<span style={{color:'red'}}>*</span></div>
                        <p style={{fontSize:12}}>Từ ngày: 02/08/2021</p>
                        <p style={{fontSize:12}}>Đến ngày: <DatePicker/></p>
                        <p style={{fontSize:10,color:'rgba(255, 208, 171, 1)',width:220}}>Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau ngày hết hạn hợp đồng cũ một ngày. </p>
                        
                    </div>
                    <div className="notification-col">
                        <div>Mức nhuận bút <span style={{color:'red'}}>*</span></div>
                        <Checkbox style={{fontSize:12,color:'white'}}>Quyền tác giả <Input style={{width:40,backgroundColor:"rgba(43, 43, 63, 1)",border:'none',color:'white'}}/> %</Checkbox>
                        <div><Checkbox style={{fontSize:12,color:'white'}}>Quyền liên quan:</Checkbox></div>
                        <div><Checkbox style={{fontSize:12,color:'white',marginLeft:30}}>Quyền liên quan:</Checkbox></div>
                        <div><Checkbox style={{fontSize:12,color:'white',marginLeft:30}}>Quyền liên quan:</Checkbox></div>
                    </div>
                </div>

                <div className="notification-row">
                    <div className="notification-col">
                        <div>Đính kèm tệp: <Upload><Button style={{color:'rgba(255, 172, 105, 1)',backgroundColor:'transparent',border:'1px solid rgba(255, 172, 105, 1)'}}><CloudUploadOutlined /> Tải lên</Button></Upload></div>
                    </div>
                    <div className="notification-col">
                    </div>
                </div>
                <Button onClick={handleHideNotification}
                style={{
                    width:135,
                    height:35,
                    border: '1px solid rgba(255, 117, 6, 1)',
                    background:'none',
                    color:'rgba(255, 117, 6, 1)',
                    marginLeft:160
                }}>Hủy</Button>
                <Button style={{ 
                        marginLeft: 20,
                        width:135,
                        height:35,
                        border: '1px solid rgba(255, 117, 6, 1)',
                        background:'rgba(255, 117, 6, 1)',
                        color:'white'
                    }} onClick={handleHideNotification}
                    
                    >Lưu</Button>
                </div>
            )}
                {/* Màn hình tối */}
            {isReason && (
                <div className="overlay" onClick={handleHideReason}></div>
            )}
            {/* Thông báo */}
            {isReason && (
            <div className="custom-notification" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="notification-content">
                    <h3>Lý do hủy hợp đồng uỷ quyền HĐUQ 1234</h3>
                </div>
                <TextArea placeholder='Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này...' style={{ backgroundColor:'rgba(62, 62, 91, 1)', border:'1px solid rgba(114, 114, 136, 1)', height:'300px',color:'rgba(114, 114, 136, 1)' }} />
                <div><Button onClick={handleHideReason} style={{ marginTop: 30, width:135, height:35, border: '1px solid rgba(255, 117, 6, 1)', backgroundColor:'transparent', color:'rgba(255, 117, 6, 1)',marginRight:30 }}>
                    Quay lại
                </Button>
                <Button onClick={handleHideReason} style={{ marginTop: 30, width:135, height:35, border: '1px solid rgba(255, 117, 6, 1)', background:'rgba(255, 117, 6, 1)', color:'white' }}>
                    Hủy hợp đồng
                </Button></div>
            </div>
            )}
        </div>
     );
}
 
export default ContractDetails;
