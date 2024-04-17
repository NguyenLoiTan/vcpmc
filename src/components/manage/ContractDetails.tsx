import { CloseOutlined, CloudUploadOutlined, FilePdfOutlined, FileTextOutlined, FileWordOutlined, FormOutlined, InfoCircleOutlined,  RightOutlined } from "@ant-design/icons";
import { Button, Row, Col, FloatButton, DatePicker, Upload, Checkbox, Input } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ContractDetails = () => {
    const location = useLocation();
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);


    const handleExtend = () =>{
        setIsNotificationVisible(true);
    }
    const handleHideNotification = () => {
        setIsNotificationVisible(false);
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
                    }}
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
                        backgroundColor: location.pathname === '/manage/exploit' ? 'rgba(182, 81, 0, 1)' : 'transparent',
                    }}
                >
                    Tác phẩm ủy quyền
                </Button>
            </div>

            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <div style={{height:250}}>
                        <div style={{ color:'white' }}>Số hợp đồng: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>BH123</span></div>
                        <div style={{ color:'white',marginTop:10 }}>Tên hợp đồng: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>Hợp đồng uỷ quyền tác phẩm âm nhạc</span></div>   
                        <div style={{ color:'white',marginTop:10 }}>Ngày hiệu lực: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>01/05/2021</span></div>   
                        <div style={{ color:'white',marginTop:10 }}>Ngày hết hạn: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>01/12/2021</span></div>   
                        <div style={{ color:'white',marginTop:10 }}>Tình trạng: <span style={{color:'rgba(255, 255, 255, 0.652)',paddingLeft:50}}><span className="dot"></span>Còn thời hạn</span></div>   
            
                    </div>  
                    
                </Col>
                <Col span={8}>
                    <div style={{height:250}}>
                        <div style={{ color:'white' }}>Đính kèm tệp: <span style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:8}}><FileWordOutlined /> hetthuongcannho.doc</span></div>
                        <div style={{ color:'white',marginTop:12 }}><span style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:8}}><FilePdfOutlined /> hetthuongcannho.doc</span></div>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{height:250}}>
                        <div style={{ color:'rgba(255, 172, 105, 1)' }}><InfoCircleOutlined /> Mức nhuận bút</div>
                        <div style={{ color:'white',marginTop:15 }}><span style={{color:'rgba(255, 255, 255, 0.652)'}}> 0%</span></div>
                        <div style={{ color:'white',marginTop:15 }}>Quyền liên quan:</div>
                        <div style={{ color:'rgba(255, 255, 255, 0.652)',marginTop:10 }}>Quyền của người biểu diễn: <span>50%</span></div>
                        <div style={{ color:'rgba(255, 255, 255, 0.652)',marginTop:10 }}>Quyền của nhà sản xuất: <span>50%</span></div>
                        <div style={{ color:'rgba(255, 255, 255, 0.652)' }}>(bản ghi/video)</div>
                    </div>
                </Col>
            </Row>
            <div style={{ color:'rgba(255, 172, 105, 1)' }}>Thông tin pháp nhân uỷ quyền</div>
            <Row gutter={[16, 16]} style={{marginTop:20}}>
                <Col span={8}>
                    <div style={{ height:250 }}>
                        <div style={{color:'white'}}>Pháp nhân uỷ quyền: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>Cá nhân</span></div>
                        <div style={{color:'white'}}>Tên người uỷ quyền: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>Nguyễn Văn A</span></div>
                        <div style={{color:'white'}}>Ngày sinh: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>10/01/1984</span></div>
                        <div style={{color:'white'}}>Giới tính: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>Nam</span></div>
                        <div style={{color:'white'}}>Quốc tịch: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>Việt Nam</span></div>
                        <div style={{color:'white'}}>Số điện thoại: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>(+84) 345 678 901</span></div>

                    </div>
                </Col>
                <Col span={8}>
                    <div style={{ height:250 }}>
                        <div style={{ color:'white' }}>Số CMND/ CCCD: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>123456789012</span></div>
                        <div style={{ color:'white' }}>Ngày cấp: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>10/07/2011</span></div>
                        <div style={{ color:'white' }}>Nơi cấp: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>Tp.HCM, Việt Nam</span></div>
                        <div style={{ color:'white' }}>Mã số thuế: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>92387489</span></div>
                        <div style={{ color:'white' }}>Nơi cư trú: <span style={{color:'rgba(255, 255, 255, 0.652)'}}>69/53, Nguyễn Gia Trí, Phường 25,Quận Bình Thạnh, Thành phố Hồ Chí Minh</span></div>

                    </div>
                </Col>
                <Col span={8}>
                    <div style={{ height:250}}>
                        <div style={{ color:'white' }}>Email: <span style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:50}}>nguyenvana@gmail.com</span></div>
                        <div style={{ color:'white' }}>Tài khoản đăng nhập: <span style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:50}}>nguyenvana@gmail.com</span></div>
                        <div style={{ color:'white' }}>Mật khẩu: <span style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:50}}>********</span></div>
                        <div style={{ color:'white' }}>Số tài khoản: <span style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:50}}>1231123312211223</span></div>
                        <div style={{ color:'white' }}>Ngân hàng: <span style={{color:'rgba(255, 255, 255, 0.652)',marginLeft:50}}>ACB - Ngân hàng Á Châu</span></div>
                    </div>
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
                <Button style={{
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

        </div>
     );
}
 
export default ContractDetails;
