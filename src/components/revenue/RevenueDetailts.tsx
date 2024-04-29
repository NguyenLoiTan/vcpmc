import React, { useState } from 'react';
import { LogoutOutlined,  RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col,  FloatButton, Input, Pagination, Row } from "antd";
import {  useNavigate } from 'react-router-dom';

interface DataItem {
    key: string;
    song: string;
    nbPlay: string;
    revenue: string;
    administrativeFees: string;
    taxLevel: string;
    
}
interface DataItem2 {
    miningUnit: string;
    numberSong: string;
    doanhthu: string;
    
}

const RevenueDetailts: React.FC = () => {
    const [pageSize, setPageSize] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const navigate = useNavigate();
   

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
        navigate('/RevenueDetailts');
    }
    
    
    const data: DataItem[] = [
        {
            key: '1',
            song: 'Hết thương cạn nhớ ',
            nbPlay: '1200',
            revenue: '365.000.000',
            administrativeFees: '365.000.000',   
            taxLevel: '365.000.000',
        },
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.song}</div>
                <div className="data-cell">{item.nbPlay}</div>
                <div className="data-cell">{item.revenue}</div>
                <div className="data-cell">{item.administrativeFees}</div>
                <div className="data-cell">{item.taxLevel}</div>
            </div>
        ));
    };
    const data2: DataItem2[] = [
        {
            
            miningUnit: 'CTy TNHH A ',
            numberSong: '200',
            doanhthu: '2.500.000',
            
        },
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows2 = () => {
        return data2.map((item, index) => (
            <div key={item.miningUnit} className="data-row">
                
                <div className="data-cell">{item.miningUnit}</div>
                <div className="data-cell">{item.numberSong}</div>
                <div className="data-cell">{item.doanhthu}</div>
                
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
        <div >
            <h3 style={{ color: 'gray', marginBottom: '-10px', fontSize: '14px' }}>
                Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Phân phối doanh thu<RightOutlined style={{ color: '#FFAC69' }} />Chi tiết doanh thu
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Hợp đồng Ủy quyền UQ123 - Quý 1</h1>
            <Row gutter={24} style={{marginTop:20}}>
                <Col span={15}>
                <h3 style={{ color: 'rgba(255, 255, 255, 1)' }}>Danh sách bản ghi</h3>
                <Input
                    style={{ borderRadius: '5px 0px 0px 5px', border: 'none', color: 'rgba(114, 114, 136, 1)', width: 400, height: 35, backgroundColor: 'rgba(43, 43, 63, 1)' }}
                    placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
                />
                <Button style={{ backgroundColor: 'rgba(43, 43, 63, 1)', border: 'none', borderRadius: '0px 5px 5px 0px', height: 34 }}><SearchOutlined style={{ color: 'white' }} /></Button>
                </Col>
                <Col span={8}>
                <h3 style={{ color: 'rgba(255, 255, 255, 1)' }}>Doanh thu bản ghi</h3>
                <h3 style={{ color: 'rgba(255, 172, 105, 1)' }}>Cuộc gọi nhỡ</h3>
                </Col>
            </Row>
                <Row gutter={24} style={{marginTop:20}}>
                    <Col span={15}>
                        <div className="table-container" style={{height:350}}>
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Bài hát</div>
                                <div className="table-cell">Số lượt phát</div>
                                <div className="table-cell">Doanh thu (VNĐ)</div>
                                <div className="table-cell">Hành chính phí (VNĐ)</div>
                                <div className="table-cell">Nhuận bút (VNĐ)</div>
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
                    <Col span={8}>
                    <div className="table-container" style={{height:400}}> 
                            <div className="table-header">
                                
                                <div className="table-cell">Đơn vị khai thác</div>
                                <div className="table-cell">Số lượt phát</div>
                                <div className="table-cell">Doanh thu (VNĐ)</div>
                                
                                
                            </div>
                            <div className="table-body">
                                {renderDataRows2()}
                            </div>
                        </div>
                    </Col>
                </Row>
            
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
                        icon={<LogoutOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Xuất dữ liệu</span>
                </div>
            </FloatButton.Group>

          

        </div>
    );
}

export default RevenueDetailts;
