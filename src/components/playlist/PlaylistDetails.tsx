import React, { useState } from 'react';
import { DeleteOutlined, FormOutlined, GlobalOutlined,  RetweetOutlined, RightOutlined, SwapOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Input, Pagination, Row } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/manage.css';

interface DataItem {
    key: string;
    contractNumber: string;
    contractName: string;
    delegate: string;
    
}

const PlaylistDetails: React.FC = () => {
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


    const handleEdit = () => {
        navigate('/PlaylistEdit');
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
            contractNumber: 'Gorgeous Wooden Bike',
            contractName: 'Tăng Phúc ft Mỹ Lệ',
            delegate: 'Origin',
            

        },
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.contractNumber}</div>
                <div className="data-cell">{item.contractName}</div>
                <div className="data-cell">{item.delegate}</div>
                <div className="data-cell"><Link to="" onClick={handleReason} style={{color:'rgba(255, 117, 6, 1)'}}>Nghe</Link></div>
                <div className="data-cell"><Link to=""  style={{color:'rgba(255, 117, 6, 1)'}}>Gỡ</Link></div>
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
                Playlist <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết playlist
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Playlist Top ca khúc 2021</h1>


            <div style={{ marginTop: 40 }}>
                <Row gutter={16} >
                    <Col span={5} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{textAlign: 'center',color:'gray'}}>
                            <img src="/assett/img/avatar.jpg" alt="" style={{width:'90%',}}/>
                            <h3 style={{color:'white'}}>Top ca khúc 2021</h3>
                            <hr />
                            <h4 style={{marginTop:40}}>Người tạo: <span style={{color:'gray',marginLeft:92}}>super Admin</span></h4>
                            <h4 style={{marginTop:20}}>Tổng số: <span style={{color:'gray',marginLeft:130}}>8 bản ghi</span></h4>
                            <h4 style={{marginTop:20}}>Tổng thời lượng: <span style={{color:'gray',marginLeft:79}}>01:31:16</span></h4>
                            <hr />
                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
                            <hr />
                            <div><span className='dot'></span>Chủ đề 1 <span className='dot' style={{marginLeft:10}}></span>Chủ đề 2<span className='dot' style={{marginLeft:10}}></span>Chủ đề 3</div>
                            <div><span className='dot'></span>Chủ đề 1 <span className='dot' style={{marginLeft:10}}></span>Chủ đề 2<span className='dot' style={{marginLeft:10}}></span>Chủ đề 3</div>
                            <hr />
                            <h4><GlobalOutlined /> Hiển thị ở chế độ công khai</h4>
                            <h4 style={{marginTop:10, color:'rgba(255, 117, 6, 1)'}}><SwapOutlined />Phát ngẫu nhiên </h4>
                            <h4 style={{marginTop:10}}><RetweetOutlined />Lặp lại </h4>
                            
                        </div>
                    </Col>
                
                    <Col span={17}>
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Tên bản ghi</div>
                                <div className="table-cell">Ca sĩ</div>
                                <div className="table-cell">Tác giả</div> 
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
                    borderRadius: '5px 5px 0px 0px'
                }}>
                    <Button style={{
                        width: 35,
                        height: 35,
                        backgroundColor: 'rgba(114, 114, 136, 0.5)',
                        borderRadius: '50%',
                        marginBottom: 8,
                        marginTop: 8,
                        border: 'none'
                    }} onClick={handleEdit}
                        icon={<FormOutlined  style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Chỉnh sửa</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'rgba(47, 47, 65, 1)',
                    width: 70,
                    height: 100,
                    borderRadius: '0px 0px 5px 5px'
                }}>
                    <Button style={{
                        width: 35,
                        height: 35,
                        backgroundColor: 'rgba(114, 114, 136, 0.5)',
                        borderRadius: '50%',
                        marginBottom: 8,
                        marginTop: 8,
                        border: 'none'
                    }} 
                        icon={<DeleteOutlined  style={{ color: 'red' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Xóa Playlist</span>
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

export default PlaylistDetails;

