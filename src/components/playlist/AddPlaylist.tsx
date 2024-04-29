import React from 'react';
import { CloudUploadOutlined, PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Row, Switch, Upload } from "antd";
import {  useNavigate } from 'react-router-dom';
import '../../styles/manage.css';
import TextArea from 'antd/es/input/TextArea';



const AddPlaylist: React.FC = () => {
    const navigate = useNavigate();
    const handleDone = () => {
        navigate('/PlaylistDetails');
    }
   
    const handleAdd = () => {
        navigate('/AddRecordPlaylist');
    };
    
    return (
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Playlist <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết playlist
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Playlist Top ca khúc 2021</h1>


            <div style={{ marginTop: 40 }}>
                <Row gutter={16} >
                    <Col span={5} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div >
                            <Form layout="vertical" style={{color:'white'}}>
                            <Form.Item label={<span style={{color:'white'}}>Ảnh bìa: </span>}>
                                <Upload><Button style={{color:'rgba(255, 172, 105, 1)',backgroundColor:'transparent',border:'1px solid rgba(255, 172, 105, 1)'}}><CloudUploadOutlined /> Tải lên</Button></Upload>
                            </Form.Item>
                            <hr />
                            <Form.Item label={<span style={{color:'white'}}>Tiêu đề: <span style={{color:'red'}}>*</span></span>}>
                                <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                            </Form.Item>
                            <hr />
                            <h4 style={{marginTop:20}}>Tổng số: <span style={{color:'gray',marginLeft:130}}>0 bản ghi</span></h4>
                            <h4 style={{marginTop:20}}>Tổng thời lượng: <span style={{color:'gray',marginLeft:79}}>--:--:--</span></h4>
                            <hr />
                            <Form.Item label={<span style={{color:'white'}}>Mô tả: </span>}>
                                <TextArea style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} />
                            </Form.Item>
                            <hr />
                            <Form.Item label={<span style={{color:'white'}}>Chủ đề: </span>}>
                                <TextArea style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} placeholder='Nhập chủ đề'/>
                            </Form.Item>
                          
                            <h4 ><Switch defaultChecked/> Chế độ công khai</h4>
                            
                            </Form>
                            
                            
                        </div>
                    </Col>
                
                    <Col span={17}>
                        <div className="table-container" style={{height:600,borderRadius:5}}>
                            <div className="table-header" >
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Tên bản ghi</div>
                                <div className="table-cell">Ca sĩ</div>
                                <div className="table-cell">Tác giả</div> 
                                <div className="table-cell"></div>
                                <div className="table-cell"></div>
                            </div>
                            <div style={{textAlign:'center',color:'white'}}>Vui lòng chọn bản ghi để thêm vào Playlist <span style={{color:'red'}}>*</span></div>
                        </div>
                        <p style={{color:'white'}}><span style={{color:'red'}}>*</span>là những trường thông tin bắt buộc</p>
                    </Col>
                </Row>
                <div style={{textAlign: 'center'}}>
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
                    borderRadius: 5
                }}>
                    <Button style={{
                        width: 35,
                        height: 35,
                        backgroundColor: 'rgba(114, 114, 136, 0.5)',
                        borderRadius: '50%',
                        marginBottom: 8,
                        marginTop: 8,
                        border: 'none'
                    }} onClick={handleAdd}
                        icon={<PlusOutlined  style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Thêm bản ghi</span>
                </div>
            </FloatButton.Group>
        </div>
    );
}

export default AddPlaylist;

