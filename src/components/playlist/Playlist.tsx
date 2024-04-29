import React, { useState } from 'react';
import { AppstoreOutlined, PlusOutlined,  SearchOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Pagination, Row } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/manage.css';

interface DataItem {
    key: string;
    nameRecord: string;
    codeRecord: string;
    time: string;
    topic: string;
    author: string;
    expiryDate: string;
}

const Playlist: React.FC = () => {
    const [pageSize, setPageSize] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [displayMode, setDisplayMode] = useState<string>('table');
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
        navigate('/AddPlaylist');
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
            nameRecord:'Top ca khúc',
            codeRecord:'20',
            time:'04:27',
            topic:'Pop',
            author:'Phan Mạnh Quỳnh',
            expiryDate:'02/10/2019'
        },
        {
            key: '1',
            nameRecord:'Mất em ',
            codeRecord:'KRA40105463',
            time:'04:27',
            topic:'chill',
            author:'Phan Mạnh Quỳnh',
            expiryDate:'02/10/2019'
        },
        
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className={displayMode === 'table' ? "data-row" : "card-row"}>
                {displayMode === 'table' ? (
                    <>
                        <div className="data-cell">{index + 1}</div>
                        <div className="data-cell">{item.nameRecord}</div>
                        <div className="data-cell">{item.codeRecord}</div>
                        <div className="data-cell">{item.time}</div>
                        <div className="data-cell">{item.topic}</div>
                        <div className="data-cell">{item.expiryDate}</div>
                        <div className="data-cell">{item.author}</div>
                <div className="data-cell">
                    <Link to="" onClick={handleReason} style={{color:'rgba(255, 117, 6, 1)'}}>Nghe</Link>
                </div>
                    </>
                ) : (
                    <div className="card-content">
                        <img src="/assett/img/avatar.jpg" alt="sa" />
                        <h3>{item.nameRecord}</h3>
                        <p>Chủ đề: {item.topic}</p>
                        <p>Người tạo: {item.author}</p>
                        <p>Ngày tạo: {item.expiryDate}</p>
                        <Button><span>Số bản ghi</span><br />{item.codeRecord}</Button>
                        <Button><span>Thời lượng</span><br />{item.time}</Button>
                    </div>
                )}
                
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

    const handleDisplayModeChange = (mode: string) => {
        setDisplayMode(mode);
    };
    return (
        <div>
            
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Playlist</h1>
            <Row>
                <Col span={20}>
                <Input
                style={{ borderRadius: '5px 0px 0px 5px', border: 'none', color: 'rgba(114, 114, 136, 1)', width: 400, height: 35, backgroundColor: 'rgba(43, 43, 63, 1)' }}
                placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
                 />
                <Button style={{ backgroundColor: 'rgba(43, 43, 63, 1)', border: 'none', borderRadius: '0px 5px 5px 0px', height: 34 }}><SearchOutlined style={{ color: 'white' }} /></Button>
                </Col>

                <Col span={4} >
                    <div style={{ display: 'flex', marginLeft: '20px', alignItems: 'center',marginBottom:20, color:'white' }}>
                        <div style={{ marginRight: '16px', cursor: 'pointer', fontSize: '24px' }}>
                        <UnorderedListOutlined onClick={() => handleDisplayModeChange('table')}/>
                        </div>
                        <div style={{ cursor: 'pointer', fontSize: '24px' }}>
                        <AppstoreOutlined onClick={() => handleDisplayModeChange('card')}/>
                        </div>
                    </div>
                </Col>
            </Row>

            <Form style={{ marginTop: 40 }}>
                <Row gutter={16}>
                    <Col span={22}>
                    {displayMode === 'table' ? (
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Tiêu đề</div>
                                <div className="table-cell">Số bản ghi</div>
                                <div className="table-cell">Thời lượng</div>
                                <div className="table-cell">Chủ đề</div>
                                <div className="table-cell">Ngày tạo</div>
                                <div className="table-cell">Người tạo</div>
                                <div className="table-cell"></div>
                            </div>
                            <div className="table-body">
                                {renderDataRows()}
                            </div>
                        </div>
                        ) : (
                            <>
                            {renderDataRows()}
                            </>
                            )}
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
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Thêm <br /> Playlist</span>
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

export default Playlist;
