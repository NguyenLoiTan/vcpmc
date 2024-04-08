import { DownOutlined } from "@ant-design/icons";
import { Button } from "antd";

const LoginMenu = () => {
    return ( 
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
        </div>
     );
}
 
export default LoginMenu;
