import React, { useState } from 'react';
import { PlusOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Pagination, Row, Select } from "antd";
import { Link, useLocation } from 'react-router-dom';
import '../../styles/manage.css';

interface DataItem {
    key: string;
    contractNumber: string;
    contractName: string;
    delegate: string;
    ownership: string;
    contractValidity: string;
    createdAt: string;
}

const Manage: React.FC = () => {
    const [pageSize, setPageSize] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);

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

    const data: DataItem[] = [
        {
            key: '1',
            contractNumber: 'HD123',
            contractName: 'Hợp đồng uỷ quyền bài hát',
            delegate: 'Vương Anh Tú',
            ownership: 'Người biểu diễn',
            contractValidity: 'Còn thời hạn',   
            createdAt: '01/04/2021 15:53:13',

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
                <div className="data-cell">{item.ownership}</div>
                <div className="data-cell"><span className="dot"></span>{item.contractValidity}</div>
                <div className="data-cell">{item.createdAt}</div>
                <div className="data-cell"><Link to="/" style={{color:'rgba(255, 117, 6, 1)'}}>Xem chi tiết</Link></div>
                <div className="data-cell"><Link to="/" style={{color:'rgba(255, 117, 6, 1)'}}>Lý do hủy</Link></div>
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

            <div style={{
                width: 400,
                height: 40,
                borderRadius: 20,
                border: '1px solid rgba(255, 117, 6, 1)',
                display: 'flex',
            }}>
                <Button
                    style={{
                        width: '50%',
                        height: 40,
                        borderRadius: 20,
                        border: 'none',
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: location.pathname === '/manage' ? 'rgba(182, 81, 0, 1)' : 'transparent',
                    }}
                >
                    Hợp đồng ủy quyền
                </Button>
                <Button
                    style={{
                        width: '50%',
                        height: 40,
                        borderRadius: 20,
                        border: 'none',
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: location.pathname === '/manage/exploit' ? 'rgba(182, 81, 0, 1)' : 'transparent',
                    }}
                >
                    Hợp đồng khai thác
                </Button>
            </div>

            <Form style={{ marginTop: 40 }}>
                <Row gutter={16} align="middle">
                    <Col span={5}>
                        <Form.Item label={<span style={{ color: 'white' }}>Quyền sở hữu: </span>}>
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
                    <Col span={8}>
                        <Form.Item label={<span style={{ color: 'white' }}>Hiệu lực hợp đồng: </span>}>
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
                                <div className="table-cell">Tên hợp đồng</div>
                                <div className="table-cell">Người ủy thác</div>
                                <div className="table-cell">Quyền sở hữu</div>
                                <div className="table-cell">Hiệu lực hợp đồng</div>
                                <div className="table-cell">Ngày tạo</div>
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
                    }}
                        icon={<PlusOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Thêm hợp đồng</span>
                </div>
            </FloatButton.Group>
        </div>
    );
}

export default Manage;
