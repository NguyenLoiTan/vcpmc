import { CalendarOutlined, DownOutlined, FileTextOutlined, InboxOutlined, MoneyCollectOutlined, QuestionCircleOutlined, SettingOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface InfoMenuProps {
    children: ReactNode;
}

const InfoMenu: React.FC<InfoMenuProps> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleManage = () => {
        // Chuyển hướng tới trang "/login"
        navigate('/Manage');
    };
    return ( 
        <div >
            <div className="menu" style={{
                top: 0,
                left: 0,
                width: '170px',
                color: 'white',
                height: '100%',
                display: 'flex',
                position: 'fixed',
                padding: '20px 0',
                alignItems: 'center',
                backgroundColor: '#020220',
                flexDirection: 'column',
            }}>
                <div className="logo" style={{
                    width: '100px',
                    height: '100px',
                    marginTop: '20px'
                }}>
                    <img
                        alt="logo"
                        style={{ height: '96px'}}
                        src='/assett/img/logo.png'
                    />
                </div>

                <div className="items" style={{
                    display: 'flex',
                    marginTop: '80px',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <Button type="link" className="item" style={{
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'transparent',
                        color: location.pathname === '/' ? 'rgba(182, 81, 0, 1)' : 'white',
                    }}>
                        <i className='icon-item' style={{}}>
                            <InboxOutlined />
                        </i>
                        <span>Kho bản ghi</span>
                    </Button>

                    <Button type="link" className="item" style={{
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'transparent',
                        color: location.pathname === '/' ? 'rgba(182, 81, 0, 1)' : 'white',
                    }}>
                        <i className='icon-item'>
                            <UnorderedListOutlined />
                        </i>
                        <span>Playlist</span>
                    </Button>
                    
                    <Button type="link" className="item" style={{
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'transparent',
                        color: location.pathname === '/' ? 'rgba(182, 81, 0, 1)' : 'white',
                    }}>
                        <i className='icon-item'>
                            <CalendarOutlined />
                        </i>
                        <span>Lập lịch phát</span>
                    </Button>

                    <Button type="link" className="item" style={{
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'transparent',
                        color: location.pathname === '/Manage' ? 'rgba(182, 81, 0, 1)' : 'white',
                    }} onClick={handleManage}>
                        <i className='icon-item'>
                            <FileTextOutlined />
                        </i>
                        <span>Quản lý</span>
                    </Button>

                    <Button type="link" className="item" style={{
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'transparent',
                        color: location.pathname === '/' ? 'rgba(182, 81, 0, 1)' : 'white',
                    }}>
                        <i className='icon-item'>
                            <MoneyCollectOutlined />
                        </i>
                        <span>Doanh thu</span>
                    </Button>

                    <Button type="link" className="item" style={{
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'transparent',
                        color: location.pathname === '/' ? 'rgba(182, 81, 0, 1)' : 'white',
                    }}>
                        <i className='icon-item'>
                            <SettingOutlined />
                        </i>
                        <span>Cài đặt</span>
                    </Button>

                    <Button type="link" className="item" style={{
                        width: '100%',
                        height: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'transparent',
                        color: location.pathname === '/' ? 'rgba(182, 81, 0, 1)' : 'white',
                    }}>
                        <i className='icon-item'>
                            <QuestionCircleOutlined />
                        </i>
                        <span>Hỗ trợ</span>
                    </Button>
                </div>

            </div>
            
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{
                display: 'flex',
                height: '40px',
                color: 'white',
                alignItems: 'center',
                margin: '20px 20px 0 0',
                border: '1px solid white',
                backgroundColor: '#1e1e2e'
            }}>
                <div style={{ marginRight: '8px' }}>Tiếng Việt</div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        alt="vietnamese"
                        style={{ height: '24px', marginRight: '4px'}}
                        src='/assett/img/vietnam 1.png'
                    />
                    <DownOutlined style={{ width: '10px' }}/>
                </div>
            </Button>

            <Button style={{
                display: 'flex',
                alignItems: 'center',
                height: '40px',
                margin: '20px 20px 0 0',
                background: 'none',
                border: 'none'
            }}>
                <img src="/assett/img/avatar.jpg" alt="" style={{ height: '40px', marginRight: 5 ,borderRadius: '50%'}} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Canh giữa theo chiều dọc
                    marginLeft: '5px' // Khoảng cách giữa ảnh và chữ
                }}>
                    <div style={{color:'white'}}>T.Lợi</div>
                    <div style={{ color: 'rgba(182, 81, 0, 1)' }}>Admin</div>
                </div>
            </Button>
            </div>

            <div style={{ marginLeft:200 }}> {/* Điều chỉnh khoảng cách giữa children và menu */}
               {children}
            </div>
        </div>
     );
}
 
export default InfoMenu;
