import React, { useState } from 'react';
import { AppstoreOutlined, PlusOutlined, RightOutlined, SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Pagination, Row, Select } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/manage.css';

interface DataItem {
    key: string;
    nameRecord: string;
    codeISRC: string;
    time: string;
    singer: string;
    author: string;
    category: string;
    format:string;
    expiryDate: string;
}

const Record: React.FC = () => {
    const [pageSize, setPageSize] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const navigate = useNavigate();
    const [showYouTube, setShowYouTube] = useState(false);
  
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

    const handleAdd = () => {
        navigate('/ManageRecord');
    }
    
    const handleReason = () =>{
        setShowYouTube(true);
    }
    const handleCloseYouTube = () => {
        setShowYouTube(false);
      };
    const data: DataItem[] = [
        {
            key: '1',
            nameRecord:'Mất em ',
            codeISRC:'KRA40105463',
            time:'04:27',
            singer:'Phan Mạnh Quỳnh',
            author:'Phan Mạnh Quỳnh',
            category:'Ballad',
            format:'Audio',
            expiryDate:'02/10/2019'
        },
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.nameRecord}</div>
                <div className="data-cell">{item.codeISRC}</div>
                <div className="data-cell">{item.time}</div>
                <div className="data-cell">{item.singer}</div>
                <div className="data-cell">{item.author}</div>
                <div className="data-cell">{item.category}</div>
                <div className="data-cell">{item.format}</div>
                <div className="data-cell"><span className="dot"></span>Còn hạn sử dụng <br />{item.expiryDate}</div>
                <div className="data-cell"><Link to="/UpdateRecord" style={{color:'rgba(255, 117, 6, 1)'}}>Cập nhập</Link></div>
                <div className="data-cell"><Link to="" onClick={handleReason} style={{color:'rgba(255, 117, 6, 1)'}}>Nghe</Link></div>
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
                Quản lý <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Quản lý hợp đồng
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Danh sách hợp đồng</h1>

            <Input
                style={{ borderRadius: '5px 0px 0px 5px', border: 'none', color: 'rgba(114, 114, 136, 1)', width: 400, height: 35, backgroundColor: 'rgba(43, 43, 63, 1)' }}
                placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
            />
            <Button style={{ backgroundColor: 'rgba(43, 43, 63, 1)', border: 'none', borderRadius: '0px 5px 5px 0px', height: 34 }}><SearchOutlined style={{ color: 'white' }} /></Button>
                        

            <Form style={{ marginTop: 40 }}>
                <Row align="middle">
                    <Col span={5}>
                        <Form.Item label={<span style={{ color: 'white' }}>Thể loại: </span>}>
                            <Select
                                style={{ borderRadius: 5, border: '1px solid rgba(255, 117, 6, 1)', color: 'rgba(255, 117, 6, 1)', width: 100 }}
                                dropdownStyle={{ backgroundColor: 'rgba(47, 47, 65, 0.7)', color: 'white' }}
                                defaultValue="1"
                            >
                                <Select.Option value="1">Tất cả</Select.Option>
                                <Select.Option value="2">Còn thời hạn</Select.Option>
                                <Select.Option value="3">Hết hạn</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label={<span style={{ color: 'white' }}>Định dạng: </span>}>
                            <Select
                                style={{ borderRadius: 5, border: '1px solid rgba(255, 117, 6, 1)', color: 'rgba(255, 117, 6, 1)', width: 100 }}
                                dropdownStyle={{ backgroundColor: 'rgba(47, 47, 65, 0.7)', color: 'white' }}
                                defaultValue="1"
                            >
                                <Select.Option value="1">Tất cả</Select.Option>
                                <Select.Option value="2">Duyệt bởi người dùng</Select.Option>
                                <Select.Option value="3">Duyệt tự động</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label={<span style={{ color: 'white' }}>Thời hạn sử dụng: </span>}>
                            <Select
                                style={{ borderRadius: 5, border: '1px solid rgba(255, 117, 6, 1)', color: 'rgba(255, 117, 6, 1)', width: 100 }}
                                dropdownStyle={{ backgroundColor: 'rgba(47, 47, 65, 0.7)', color: 'white' }}
                                defaultValue="1"
                            >
                                <Select.Option value="1">Tất cả</Select.Option>
                                <Select.Option value="2">Pop</Select.Option>
                                <Select.Option value="3">EDM</Select.Option>
                                <Select.Option value="4">Baldad</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item label={<span style={{ color: 'white' }}>Trạng thái: </span>}>
                            <Select
                                style={{ borderRadius: 5, border: '1px solid rgba(255, 117, 6, 1)', color: 'rgba(255, 117, 6, 1)', width: 100 }}
                                dropdownStyle={{ backgroundColor: 'rgba(47, 47, 65, 0.7)', color: 'white' }}
                                defaultValue="1"
                            >
                                <Select.Option value="1">Tất cả</Select.Option>
                                <Select.Option value="2">Âm nhạc</Select.Option>
                                <Select.Option value="3">Video</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4} >
                        <div style={{ display: 'flex', marginLeft: '20px', alignItems: 'center',marginBottom:20 }}>
                            <div style={{ marginRight: '16px', cursor: 'pointer', fontSize: '24px' }}>
                            <UnorderedListOutlined />
                            </div>
                            <div style={{ cursor: 'pointer', fontSize: '24px' }}>
                            <AppstoreOutlined />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={22}>
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Tên bản ghi</div>
                                <div className="table-cell">Mã ISRC</div>
                                <div className="table-cell">Thời lượng</div>
                                <div className="table-cell">Ca sĩ</div>
                                <div className="table-cell">Tác giả</div>
                                <div className="table-cell">Thể loại</div>
                                <div className="table-cell">Định dạng</div>
                                <div className="table-cell">Thời hạn sử dụng</div>
                                <div className="table-cell"></div>
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
                        icon={<PlusOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Thêm hợp đồng</span>
                </div>
            </FloatButton.Group>

            
            {/* Thông báo */}
            {showYouTube && (
        <div style={{position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'}}>
          
          <iframe
            width="560"
            height="315"
            src="https://firebasestorage.googleapis.com/v0/b/vcpmc-aef37.appspot.com/o/Shirohas%20Cradle%20Song%E3%81%97%E3%82%8D%E3%81%AF%E3%81%AE%E5%AD%90%E5%AE%88%E6%AD%8C%20.mp3?alt=media&token=c8c34b43-31c4-4feb-9b1f-9060192750aa"
            title=" video player"
          ></iframe>
          <button onClick={handleCloseYouTube}>Đóng</button>
        </div>
      )}

        </div>
    );
}

export default Record;
