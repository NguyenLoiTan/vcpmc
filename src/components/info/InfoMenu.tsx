import { CalendarOutlined, DownOutlined, FileTextOutlined, InboxOutlined, MoneyCollectOutlined, QuestionCircleOutlined, SettingOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ReactNode } from "react";

interface InfoMenuProps {
    children: ReactNode;
}

const InfoMenu: React.FC<InfoMenuProps> = ({ children }) => {
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
                    <div className="item" style={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <i className='icon-item' style={{}}>
                            <InboxOutlined />
                        </i>
                        <span>Kho bản ghi</span>
                    </div>

                    <div className="item" style={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <i className='icon-item'>
                            <UnorderedListOutlined />
                        </i>
                        <span>Playlist</span>
                    </div>
                    
                    <div className="item" style={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <i className='icon-item'>
                            <CalendarOutlined />
                        </i>
                        <span>Lập lịch phát</span>
                    </div>

                    <div className="item" style={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <i className='icon-item'>
                            <FileTextOutlined />
                        </i>
                        <span>Quản lý</span>
                    </div>

                    <div className="item" style={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <i className='icon-item'>
                            <MoneyCollectOutlined />
                        </i>
                        <span>Doanh thu</span>
                    </div>

                    <div className="item" style={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <i className='icon-item'>
                            <SettingOutlined />
                        </i>
                        <span>Cài đặt</span>
                    </div>

                    <div className="item" style={{
                        width: '100%',
                        padding: '10px',
                        display: 'flex',
                        margin: '12px 0',
                        marginRight: '5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        alignItems: 'center',
                        flexDirection: 'column',
                        transition: 'background-color 0.3s ease'
                    }}>
                        <i className='icon-item'>
                            <QuestionCircleOutlined />
                        </i>
                        <span>Hỗ trợ</span>
                    </div>
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
