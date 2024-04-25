import { CheckCircleOutlined, CloudUploadOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Upload } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecord = () => {
    const [isReason , setIsReason ] = useState(false);
    const navigate = useNavigate();

    const handleReason = () =>{
        setIsReason(true);
    }
    const handleHideReason = () => {
        setIsReason(false);
    };
    const handleAuthorized = () => {
        navigate('/Authorized');
    }
    return ( 
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Quản lý <i><RightOutlined  style={{ color: '#FFAC69' }} /></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Thêm bản ghi
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Thêm thông tin bản ghi</h1>

            <div className="custom-notification" style={{ display: 'flex', flexDirection: 'column',marginTop:50 }}>
                <div className="notification-content">
                    <h3><CheckCircleOutlined style={{backgroundColor:'green',borderRadius:'50%'}}/> Hợp đồng đã được tạo thành công</h3>
                </div>
                <hr style={{ width: '90%', border: 'none', borderBottom: '1px solid gray' }} />
                <div style={{margin:'20px 0px 0px 30px'}}>
                    Có 2 cách để tạo bản ghi:
                    <p style={{marginLeft:25,fontSize:14,color:'rgba(255, 117, 6, 1)'}}>Cách 1: <span style={{color:'white'}}>Upload bản ghi trực tiếp </span></p>
                    <span style={{color:'white',margin:'15px 0px 0px 73px',fontSize:14}}>Bạn có thể thực hiện thêm bản ghi ngay trên website</span>
                    <div><Button onClick={handleReason} style={{ margin:'20px 0px 0px 73px', width:185, height:35, border: '1px solid rgba(255, 117, 6, 1)', background:'rgba(255, 117, 6, 1)', color:'white' }}>
                   Thêm bản ghi trực tiếp
                </Button></div>
                <br />
                <p style={{marginLeft:25,fontSize:14,color:'rgba(255, 117, 6, 1)'}}>Cách 2: <span style={{color:'white'}}>Upload bản ghi qua phần mềm</span></p>
                    <span style={{color:'white',margin:'15px 0px 0px 73px',fontSize:14}}>Bạn có thể thêm bản ghi bằng tool</span>
                    <div><Button style={{ margin:'20px 0px 0px 73px', width:185, height:35, border: '1px solid rgba(255, 117, 6, 1)', backgroundColor:'transparent', color:'rgba(255, 117, 6, 1)' }}>
                   Thêm bản ghi bằng tool
                </Button></div>
               
                <p style={{color:'red'}}>Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.</p>
                </div>
            </div>
            {isReason && (
            <div className="custom-notification" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',height:'630px' }}>
                <div className="notification-content">
                    <h3>Thêm bản ghi mới</h3>
                </div>
                <Form layout="vertical" style={{ width: '90%' }}>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Tên bản ghi:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(43, 43, 63, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Mã ISRC:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(43, 43, 63, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Tác giả:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(43, 43, 63, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Ca sĩ/Nhóm nhạc:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(43, 43, 63, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label={<span style={{ color: 'white' }}>Thể loại:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                    <Input style={{ backgroundColor:'rgba(43, 43, 63, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={<span style={{ color: 'white' }}>Nhà sản xuất:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                    <Input style={{ backgroundColor:'rgba(43, 43, 63, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{color:'white'}}>
                            <Col span={12}>
                                <p>Đính kèm bản ghi:<span style={{color:'red'}}>*</span><Upload><Button style={{color:'rgba(255, 172, 105, 1)',backgroundColor:'transparent',border:'1px solid rgba(255, 172, 105, 1)', marginLeft:20}}><CloudUploadOutlined /> Tải lên</Button></Upload></p>
                            </Col>
                            <Col span={12}>
                            <p>Đính kèm lời bài hát:<span style={{color:'red'}}>*</span><Upload><Button style={{color:'rgba(255, 172, 105, 1)',backgroundColor:'transparent',border:'1px solid rgba(255, 172, 105, 1)', marginLeft:20}}><CloudUploadOutlined /> Tải lên</Button></Upload></p>
                            </Col>
                        </Row>
                    </Form>
                <div><Button onClick={handleHideReason} style={{ marginTop: 30, width:135, height:35, border: '1px solid rgba(255, 117, 6, 1)', backgroundColor:'transparent', color:'rgba(255, 117, 6, 1)',marginRight:30 }}>
                   Hủy
                </Button>
                <Button onClick={handleAuthorized} style={{ marginTop: 30, width:135, height:35, border: '1px solid rgba(255, 117, 6, 1)', background:'rgba(255, 117, 6, 1)', color:'white' }}>
                    Tải lên
                </Button></div>
            </div>
            )}
        </div>
     );
}
 
export default AddRecord;