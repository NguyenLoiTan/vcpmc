import React, { useState } from 'react';
import {  RightOutlined, SearchOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Col, FloatButton, Form, Input, Pagination, Row, Switch } from "antd";
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface DataItem {
    key: string;
    name: string;
    nameLogin: string;
    role: string;
    status: string;
    email: string;
    phone: string;
    day: string;
}

const Setting: React.FC = () => {
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

    const location = useLocation();

    const handleAdd = () => {
        navigate('/AddUser');
    }
    const handleExploit = () => {
        navigate('/RoleUser');
    }
    
    const data: DataItem[] = [
        {
            key: '1',
            name: 'Phan Mạnh Quỳnh',
            nameLogin: 'PMQ_01',
            role: 'Group Admin',
            status: 'Ngừng kích hoạt',
            email: ' pmq@gmail.com',   
            phone: '029 8131 6743',
            day:'02/12/2022'
        },
        // Thêm dữ liệu cho các hàng khác nếu cần
    ];

    const renderDataRows = () => {
        return data.map((item, index) => (
            <div key={item.key} className="data-row">
                <div className="data-cell">{index + 1}</div>
                <div className="data-cell">{item.name}</div>
                <div className="data-cell">{item.nameLogin}</div>
                <div className="data-cell">{item.role}</div>
                <div className="data-cell"><Switch/>{item.status}</div>
                <div className="data-cell">{item.email}</div>
                <div className="data-cell">{item.phone}</div>
                <div className="data-cell">{item.day}</div>
                <div className="data-cell"><Link to="/EditUser" style={{color:'rgba(255, 117, 6, 1)'}}>Xem chi tiết</Link></div>
                
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
                Cài đặt <i><RightOutlined style={{ color: '#FFAC69' }} /></i> Phân quyền người dùng
            </h3>
            <h1 style={{ color: 'rgba(255, 255, 255, 1)' }}>Danh sách hợp đồng</h1>
            <Row>
            <Col span={13}>
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
                        backgroundColor: location.pathname === '/Setting' ? 'rgba(182, 81, 0, 1)' : 'transparent',
                    }}
                >
                    Danh sách người dùng
                </Button>
                <Button
                    style={{
                        width: '50%',
                        height: 40,
                        borderRadius: 20,
                        border: 'none',
                        color: 'rgba(255, 255, 255, 1)',
                        backgroundColor: location.pathname === '/RoleUser' ? 'rgba(182, 81, 0, 1)' : 'transparent',
                    }} onClick={handleExploit}
                >
                    Vai trò người dùng
                </Button>
            </div>
            </Col>
            <Col>
            <Input
                style={{ borderRadius: '5px 0px 0px 5px', border: 'none', color: 'rgba(114, 114, 136, 1)', width: 400, height: 35, backgroundColor: 'rgba(43, 43, 63, 1)' }}
                placeholder='Tên hợp đồng, số hợp đồng, người uỷ quyền...'
            />
            <Button style={{ backgroundColor: 'rgba(43, 43, 63, 1)', border: 'none', borderRadius: '0px 5px 5px 0px', height: 34 }}><SearchOutlined style={{ color: 'white' }} /></Button></Col>
            </Row>
            <Form style={{ marginTop: 40 }}>
                <Row gutter={16}>
                    <Col span={22}>
                        <div className="table-container">
                            <div className="table-header">
                                <div className="table-cell">STT</div>
                                <div className="table-cell">Họ tên</div>
                                <div className="table-cell">Tên đăng nhập</div>
                                <div className="table-cell">Vai trò</div>
                                <div className="table-cell">Trạng thái</div>
                                <div className="table-cell">Email</div>
                                <div className="table-cell">Số điện thoại</div>
                                <div className="table-cell">Ngày hết hạn</div>
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
                        icon={<UserAddOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                    />
                    <span style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Thêm người dùng</span>
                </div>
            </FloatButton.Group>

            

        </div>
    );
}

export default Setting;
