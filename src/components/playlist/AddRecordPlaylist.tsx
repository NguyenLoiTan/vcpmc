import React, { useState } from 'react';
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Pagination, Row } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/manage.css';

interface DataItem {
    key: string;
    contractNumber: string;
    contractName: string;
    delegate: string;
    
}

const AddRecordPlaylist: React.FC = () => {
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


    const handleDetails = () => {
        navigate('/PlaylistDetails');
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
                Playlist <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết playlist<RightOutlined style={{ color: '#FFAC69' }} />Chỉnh sửa
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Playlist Top ca khúc 2021</h1>


            <div style={{ marginTop: 40 }}>
                <Row gutter={16} >
                <Col span={11}>
                        <div className="table-container">
                            <h3 style={{marginLeft:25,color:'white'}}>Kho bản ghi</h3> 
                            <div style={{ display: 'flex', marginLeft:25, color: 'white' }}>
                                <div>
                                    Thể loại
                                    <select name="format" id="format" style={{ backgroundColor: 'rgba(30, 30, 46, 1)', border: '1px solid rgba(255, 117, 6, 1)',color:'white', width:100, height:30,margin:'0px 40px 0px 5px',borderRadius:5 }}>
                                        <option value="option1">Tất cả</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        {/* Thêm các lựa chọn khác nếu cần */}
                                    </select>
                                </div>
                                <div>
                                    Playlist mẫu 
                                    <select name="format" id="format" style={{ backgroundColor: 'rgba(30, 30, 46, 1)', border: '1px solid rgba(255, 117, 6, 1)',color:'white', width:150, height:30,margin:'0px 0px 0px 5px',borderRadius:5 }}>
                                        <option value="option1">Playlist mẫu</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        {/* Thêm các lựa chọn khác nếu cần */}
                                    </select>
                                </div> 
                            </div>
                            <div style={{marginLeft: 25}}>
                                <Input
                                style={{ borderRadius: '5px 0px 0px 5px', border: 'none', color: 'rgba(114, 114, 136, 1)', width: 400, height: 35, backgroundColor: 'rgba(51, 51, 77, 1)'}}
                                placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
                                />
                                <Button style={{ backgroundColor: 'rgba(51, 51, 77, 1)', border: 'none', borderRadius: '0px 5px 5px 0px', height: 34 }}><SearchOutlined style={{ color: 'white' }} /></Button>
                                </div> 
                            <div style={{height:350}}>
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
                
                    <Col span={11}>
                        <div className="table-container">
                            <h3 style={{marginLeft:25,color:'white'}}>Danh sách bản ghi được thêm vào Playlist</h3>
                            <div style={{ display: 'flex', marginLeft: 25, color: 'white' }}>
                                <div style={{ marginRight: 40 }}>
                                    Tổng số: <span style={{ color: 'gray' }}>16 bản ghi</span>
                                </div>
                                <div>
                                    Tổng thời lượng: <span style={{ color: 'gray' }}>01:34:31</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', margin: '10px 0px 0px  25px', color: 'white' }}>
                                <div>
                                    Định dạng 
                                    <select name="format" id="format" style={{ backgroundColor: 'rgba(30, 30, 46, 1)', border: '1px solid rgba(255, 117, 6, 1)',color:'white', width:100, height:30,margin:'0px 70px 0px 5px',borderRadius:5 }}>
                                        <option value="option1">Tất cả</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        {/* Thêm các lựa chọn khác nếu cần */}
                                    </select>
                                </div>
                                <div><Input
                                style={{ borderRadius: '5px 0px 0px 5px', border: 'none', color: 'rgba(114, 114, 136, 1)', width: 250, height: 35, backgroundColor: 'rgba(51, 51, 77, 1)'}}
                                placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
                                />
                                <Button style={{ backgroundColor: 'rgba(51, 51, 77, 1)', border: 'none', borderRadius: '0px 5px 5px 0px', height: 34 }}><SearchOutlined style={{ color: 'white' }} /></Button>
                                </div>   
                            </div>
                            <div style={{height:350}}>
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
                <div style={{textAlign: 'center', margin:'20px 0px'}}>
                <Button 
                style={{
                    width:135,
                    height:35,
                    border: '1px solid rgba(255, 117, 6, 1)',
                    background:'none',
                    color:'rgba(255, 117, 6, 1)'
                   
                }} onClick={handleDetails}
                >Hủy</Button>
                <Button style={{ 
                        marginLeft: 20,
                        width:135,
                        height:35,
                        border: '1px solid rgba(255, 117, 6, 1)',
                        background:'rgba(255, 117, 6, 1)',
                        color:'white'
                    }} onClick={handleDetails}
                    
                    >Lưu</Button>
                </div>
            </div>
            

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

export default AddRecordPlaylist;

