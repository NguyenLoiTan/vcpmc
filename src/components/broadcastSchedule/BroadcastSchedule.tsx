import React, { useState } from 'react';
import {  FolderAddOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Pagination, Row } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/manage.css';

interface DataItem {
    key: string;
    nameRecord: string;
    codeRecord: string;
    
}

const BroadcastSchedule: React.FC = () => {
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
        navigate('/AddPlaylist');
    }
    
    
    const data: DataItem[] = [
        {
            key: '1',
            nameRecord:'Lịch phát số 1',
            codeRecord:'22/05/2021 - 30/05/2021',
            
        },
        {
            key: '1',
            nameRecord:'Lịch phát số 2',
            codeRecord:'22/05/2021 - 30/05/2021'
            
        },
        
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.nameRecord}</div>
                <div className="data-cell">{item.codeRecord}</div>
                <div className="data-cell">
                    <Link to="/BroadcastScheduleDetails" style={{color:'rgba(255, 117, 6, 1)'}}>Xem chi tiết</Link>
                </div> 
                <div className="data-cell">
                    <Link to=""  style={{color:'rgba(255, 117, 6, 1)'}}>Hủy</Link>
                </div>      
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
            
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Playlist</h1>
            <Form style={{ marginTop: 40 }}>
                <Row gutter={16}>
                    <Col span={22}>
                    
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Tiêu đề</div>
                                <div className="table-cell">Số bản ghi</div>
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
                        icon={<FolderAddOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Thêm Lịch phát</span>
                </div>
            </FloatButton.Group>

        </div>
    );
}

export default BroadcastSchedule;
