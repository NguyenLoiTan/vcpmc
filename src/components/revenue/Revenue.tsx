import React, { useState } from 'react';
import { PlusOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, FloatButton, Form, Input, Pagination, Row } from "antd";
import { Link,  useNavigate } from 'react-router-dom';
import moment from 'moment';

interface DataItem {
    key: string;
    authorizedContract: string;
    authorizedPerson: string;
    authorizedSongNumber: string;
    revenue: string;
    administrativeFees: string;
    taxLevel: string;
    ClosingDateDorReconciliation: string;
}

const Revenue: React.FC = () => {
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
        navigate('/Revenue');
    }
    
    const data: DataItem[] = [
        {
            key: '1',
            authorizedContract: 'UQ789',
            authorizedPerson: 'Vương Anh Tú',
            authorizedSongNumber: '15',
            revenue: '365.000.000',
            administrativeFees: '365.000.000',   
            taxLevel: '365.000.000',
            ClosingDateDorReconciliation:'21/07/2021'
        },
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.authorizedContract}</div>
                <div className="data-cell">{item.authorizedPerson}</div>
                <div className="data-cell">{item.authorizedSongNumber}</div>
                <div className="data-cell">{item.revenue}</div>
                <div className="data-cell">{item.administrativeFees}</div>
                <div className="data-cell">{item.taxLevel}</div>
                <div className="data-cell">{item.ClosingDateDorReconciliation}</div>
                <div className="data-cell"><Link to="/RevenueDetailts"  style={{color:'rgba(255, 117, 6, 1)'}}>Xem chi tiết</Link></div>
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
                Doanh thu <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Phân phối doanh thu
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Quản lý phân phối doanh thu</h1>
            <Form style={{ marginTop: 40 }}>
                <Row gutter={16} align="middle">
                    <Col span={12}>
                    <Form.Item label={<span style={{color:'white'}}>Theo tháng:</span>}>
                <DatePicker style={{color:'rgba(255, 255, 255, 0.652)',backgroundColor:'rgba(43, 43, 63, 1)',border:'1px solid rgba(114, 114, 136, 1)',width:'120px'}} defaultValue={moment("10/07/2011", 'DD/MM/YYYY')}/>
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
                        <h3 style={{color:'white'}}>Danh sách hợp đồng ủy quyền</h3>
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Hợp đồng ủy quyền</div>
                                <div className="table-cell">Người ủy quyền</div>
                                <div className="table-cell">Số bài hát ủy quyền</div>
                                <div className="table-cell">Doanh thu (VNĐ)</div>
                                <div className="table-cell">Hành chính phí (VNĐ)</div>
                                <div className="table-cell">Mức nhuận bút (VNĐ)</div>
                                <div className="table-cell">Ngày chốt đối soát</div>
                                <div className="table-cell">Chi tiết doanh thu</div>
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


        </div>
    );
}

export default Revenue;
