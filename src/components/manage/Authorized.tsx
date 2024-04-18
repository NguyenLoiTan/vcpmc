import React, { useState } from 'react';
import { CloudUploadOutlined, FileTextOutlined, FormOutlined, HistoryOutlined, PlusOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, DatePicker, FloatButton, Form, Input, Pagination, Row, Select, Upload } from "antd";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/manage.css';
import TextArea from 'antd/es/input/TextArea';

interface DataItem {
    key: string;
    recordName: string;
    isrcCode: string;
    singer: string;
    author: string;
    createdAt: string;
    status: string;
}

const Authorized: React.FC = () => {
    const [pageSize, setPageSize] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const navigate = useNavigate();
    const [isReason , setIsReason ] = useState(false);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setPageSize(value);
            setCurrentPage(1);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const location = useLocation();

    const handleEdit = () => {
        // Chuyển hướng tới trang "/login"
        navigate('/ContractEdit');
    };
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
    const handleAdd = () => {
        // Chuyển hướng tới trang "/login"
        navigate('/AddAuthorized');
    };
    const handleContractDetails = () => {
        navigate('/ContractDetails');
    }
    const handleAuthorized = () => {
        navigate('/Authorized');
    }
    const data: DataItem[] = [
        {
            key: '1',
            recordName: 'Gorgeous Wooden Bike',
            isrcCode: 'VNA1423525',
            singer: 'Vương Anh Tú',
            author: 'Vương Phong',
            createdAt: '01/04/2021 15:53:13',   
            status: 'Đã phê duyệt',

        },
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.recordName}</div>
                <div className="data-cell">{item.isrcCode}</div>
                <div className="data-cell">{item.singer}</div>
                <div className="data-cell">{item.author}</div>
                <div className="data-cell">{item.createdAt}</div>
                <div className="data-cell"><span className="dot"></span>{item.status}</div>
                <div className="data-cell"><Link to="/ContractDetails" style={{color:'rgba(255, 117, 6, 1)'}}>Nghe</Link></div>
                
            </div>
        ));
    };

    const paginationComponent = (
        <Pagination
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            showSizeChanger={false}
            onChange={handlePageChange}
            style={{ marginBottom: '10px' }}
        />
    );

    return (
        <div>
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Quản lý hợp đồng <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Hợp đồng uỷ quyền bài hát - BH123</h1>

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

            <Form style={{ marginTop: 40 }}>
                <Row gutter={16} >
                    <Col span={13}>
                        <Form.Item label={<span style={{ color: 'white' }}>Tình trạng phê duyệt </span>}>
                            <Select
                                style={{ borderRadius: 5, border: '1px solid rgba(255, 117, 6, 1)', color: 'rgba(255, 117, 6, 1)', width: 100 }}
                                dropdownStyle={{ backgroundColor: 'rgba(47, 47, 65, 0.7)', color: 'white' }}
                                defaultValue="demo"
                            >
                                <Select.Option value="demo">Tất cả</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item >
                            <Input
                                style={{ borderRadius: '5px 0px 0px 5px', border: 'none', color: 'rgba(114, 114, 136, 1)', width: 400, height: 35, backgroundColor: 'rgba(43, 43, 63, 1)' }}
                                placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
                            />
                            <Button style={{ backgroundColor: 'rgba(43, 43, 63, 1)', border: 'none', borderRadius: '0px 5px 5px 0px', height: 34 }}><SearchOutlined style={{ color: 'white' }} /></Button>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={22}>
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Số hợp đồng</div>
                                <div className="table-cell">Khách hàng</div>
                                <div className="table-cell">Ngày tạo</div>
                                <div className="table-cell">Ngày hiệu lực</div>
                                <div className="table-cell">Ngày hết hạn</div>
                                <div className="table-cell">Hiệu lực hợp đồng</div>
                                <div className="table-cell"></div>
                            </div>
                            <div className="table-body">
                                {renderDataRows()}
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(47, 47, 65, 0.7)' }}>
                            <span style={{ color: 'rgba(245, 245, 255, 1)', marginLeft: '10px',marginRight:'auto' }}>
                                Hiển thị
                                <Input
                                    type="number"
                                    placeholder="Nhập số hàng"
                                    value={pageSize.toString()}
                                    onChange={handlePageSizeChange}
                                    style={{ width: '120px' }}
                                /> hàng trong mỗi trang
                            </span>
                            {paginationComponent}
                        </div>
                    </Col>
                </Row>
            </Form>
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
                }} onClick={handleEdit}
                
                    icon={<FormOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' ,textAlign:'center', fontSize:12}}>Chỉnh sửa tác phẩm</span>
                </div>

                <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:'rgba(47, 47, 65, 1)',
                width: 70,
                height: 100,
                
                }}>
                <Button style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }} onClick={handleExtend}
                    
                    icon={<FileTextOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
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
                
                }}>
                <Button style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }} onClick={handleReason}
                    
                    icon={<HistoryOutlined  style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' , fontSize:12, textAlign:'center'}}>Hủy hợp đồng</span>
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
                    onClick={handleAdd}
                    icon={<PlusOutlined style={{ color: 'red' }} />}
                />
                <span style={{ color: 'white' ,textAlign:'center', fontSize:12}}>Thêm bản ghi</span>
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

export default Authorized;
