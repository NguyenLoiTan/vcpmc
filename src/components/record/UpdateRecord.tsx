import { CloseOutlined, FolderOutlined,  RightOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Row, Select } from "antd";
import { useNavigate } from "react-router-dom";

const UpdateRecord = () => {
    const navigate = useNavigate();

    const handleDone = () => {
        // Chuyển hướng tới trang "/login"
        navigate('/Record');
    };
    
    return ( 
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Kho bản ghi <i><RightOutlined style={{ color: '#FFAC69' }} /></i>Cập nhập thông tin 
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Bản ghi - Mất em </h1>

            <div style={{margin:'20px 0px 0px 120px',color:'white'}}>
            <Row>
                <Col span={7} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ width: '100%', height: '365px', backgroundColor: 'rgba(43, 43, 63, 1)', textAlign: 'center' }}>
                        <h3 style={{ color: 'rgba(255, 117, 6, 1)' }}>Thông tin bản ghi</h3>
                        <img src="/assett/img/avatar.jpg" alt="Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto' }} />
                        <h4><FolderOutlined style={{ marginRight: 5, color: 'rgba(24, 227, 6, 1)' }} />Matem.mp3</h4>
                        <div style={{marginTop:40}}>Ngày thêm: <span style={{color:'gray',marginLeft:92}}>07/04/2021 - 17:45:30</span></div>
                        <div style={{marginTop:4}}>Người tải lên: <span style={{color:'gray',marginLeft:137}}>Super Admin</span></div>
                        <div style={{marginTop:4}}>Người duyệt: <span style={{color:'gray',marginLeft:160}}>Hệ thống </span></div>
                        <span style={{color:'gray',marginLeft:190}}>(Tự động phê duyệt)</span>
                        <div style={{marginTop:4}}>Ngày phê duyệt: <span style={{color:'gray',marginLeft:62}}>07/04/2021 - 17:45:50</span></div>
                    </div>
                    <div style={{ width: '100%', height: '195px', backgroundColor: 'rgba(43, 43, 63, 1)', marginTop: 12,textAlign: 'center' }}>
                        <h3 style={{ color: 'rgba(255, 117, 6, 1)' }}>Thông tin ủy quyền</h3>
                        <div style={{marginTop:30}}>Số hợp đồng: <span style={{color:'gray',marginLeft:183}}>BH123</span></div>
                        <div style={{marginTop:6}}>Ngày nhận ủy quyền: <span style={{color:'gray',marginLeft:107}}>01/05/2021</span></div>
                        <div style={{marginTop:6}}>Ngày hết hạn: <span style={{color:'gray',marginLeft:153}}>01/08/2025</span></div>
                        <div style={{marginTop:6}}>Trạng thái: <span style={{color:'gray',marginLeft:167}}>Còn thời hạn</span></div>
                    </div>
                </Col>
                <Col span={10} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{width:'100%',height:'572px',backgroundColor:'rgba(43, 43, 63, 1)',marginLeft:12,textAlign: 'center'}}>
                        <h3 style={{ color: 'rgba(255, 117, 6, 1)' }}>Chỉnh sửa thông tin</h3>
                        <Form layout="vertical" style={{ width: '95%',marginLeft:12 }}>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Tên bản ghi:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'Mất em'}/>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Mã ISRC:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'KRA40105463'}/>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Ca sĩ:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'Noo Phước Thịnh'}/>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Tác giả:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'Chu Bin'}/>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Nhà sản xuất:</span>} style={{ width: '100%' }}>
                                <Input style={{ backgroundColor:'rgba(51, 51, 77, 1)', border: '1px solid rgba(114, 114, 136, 1)', color: 'white' }} defaultValue={'Nguyễn Nam Minh Thụy'}/>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item label={<span style={{ color: 'white' }}>Thể loại:<span style={{color:'red'}}>*</span></span>} style={{ width: '100%' }}>
                            <Select style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(51, 51, 77, 1)',border:'1px solid rgba(114, 114, 136, 1)'}} defaultValue="ballad"
                            options={[
                                { value: 'ballad', label: 'Ballad' },
                                { value: 'rock', label: 'Rock' },
                                
                              ]}/>
                            </Form.Item>
                        </Row>
                    </Form>
                    </div>
                    
                </Col>
                <div style={{width:'70%',justifyContent:'center',display: 'flex',margin:'40px 0px'}} >
                    <Button 
                        style={{
                            width:135,
                            height:35,
                            border: '1px solid rgba(255, 117, 6, 1)',
                            background:'none',
                            color:'rgba(255, 117, 6, 1)',
                        }} onClick={handleDone}
                    >
                        Hủy
                    </Button>
                    <Button 
                        style={{ 
                            marginLeft: 60,
                            width:135,
                            height:35,
                            border: '1px solid rgba(255, 117, 6, 1)',
                            background:'rgba(255, 117, 6, 1)',
                            color:'white'
                        }} onClick={handleDone}
                    >
                        Lưu
                    </Button>
                </div>
            </Row>
            
            </div>
            <FloatButton.Group shape="square" style={{
                position: 'fixed',
                right: 35,
                top: '20%',
                bottom: '80%',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'rgba(47, 47, 65, 1)',
                    width: 90,
                    height: 80,
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
                    }} onClick={handleDone}
                        icon={<CloseOutlined style={{ color: 'red' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Xóa bản ghi</span>
                </div>
            </FloatButton.Group>
        </div>
     );
}
 
export default UpdateRecord;