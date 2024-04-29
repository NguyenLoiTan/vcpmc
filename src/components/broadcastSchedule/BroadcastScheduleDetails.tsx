import React, { useState } from 'react';
import {  FormOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Pagination, Row } from "antd";
import {  useNavigate } from 'react-router-dom';
import '../../styles/manage.css';

interface DataItem {
    key: string;
    namePlaylist: string;
    datePlaylist: string;
    date: string;
    broadcastCycle: string;
    device: string;
}

const BroadcastScheduleDetails: React.FC = () => {
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

    const handleEdit = () => {
        navigate('/AddPlaylist');
    }
    
    const data: DataItem[] = [
        {
            key: '1',
            namePlaylist:'Lịch phát số 1',
            datePlaylist:'22/05/2021 - 30/05/2021',
            date:'06:00:00 - 08:00:00',
            broadcastCycle:'Thứ 3 | Thứ 6',
            device:'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5'
        },
        {
            key: '1',
            namePlaylist:'Lịch phát số 2',
            datePlaylist:'22/05/2021 - 30/05/2021',
            date:'06:00:00 - 08:00:00',
            broadcastCycle:'Thứ 5',
            device:'Thiết bị 1 | Thiết bị 2 | Thiết bị 3 | Thiết bị 4 | Thiết bị 5'
        },
        
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.namePlaylist}</div>
                <div className="data-cell">{item.datePlaylist}</div>
                <div className="data-cell">{item.date}</div>
                <div className="data-cell">{item.broadcastCycle}</div>
                <div className="data-cell">{item.device}</div>
                  
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
                Lập lịch phát <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Chi tiết 
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Lịch phát số 1</h1>
            <h2 style={{ color: 'rgba(255, 255, 255, 1)' }}>Danh sách Playlist</h2>
            <Form style={{ marginTop: 40 }}>
                <Row gutter={16}>
                    <Col span={22}>
                    
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Tên Playlist</div>
                                <div className="table-cell">Ngày phát Playlist</div>
                                <div className="table-cell">Bắt đầu - Kết thúc</div>
                                <div className="table-cell">Chu kỳ phát</div>
                                <div className="table-cell">Thiết bị</div>

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
                    }} onClick={handleEdit}
                        icon={<FormOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Chỉnh sửa lịch phát</span>
                </div>
            </FloatButton.Group>

        </div>
    );
}

export default BroadcastScheduleDetails;
