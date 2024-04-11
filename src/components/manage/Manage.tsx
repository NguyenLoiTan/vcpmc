import '../../styles/manage.css';
import { PlusOutlined } from "@ant-design/icons";
import { Button, FloatButton } from "antd";

const Manage = () => {
    return ( 
        <div>
            <h1 style={{ color: 'white' }}>Danh sách hợp đồng</h1>




            <FloatButton.Group
                shape="square"
                style={{
                position: 'fixed',
                right: 35,
                top: '40%',
                bottom: '60%',
                }}
            >
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:'rgba(47, 47, 65, 1)',
                width: 70,
                height: 100,
                borderRadius: 5
                }}>
                <Button style={{
                    width: 35,
                    height: 35,
                    backgroundColor: 'rgba(114, 114, 136, 0.5)',
                    borderRadius: '50%',
                    marginBottom: 8, // Khoảng cách giữa nút và chữ
                    marginTop:8,
                    border:'none'
                }}
                    icon={<PlusOutlined style={{ color: 'rgba(255, 117, 6, 1)' }} />}
                />
                <span style={{ color: 'white' ,textAlign:'center', fontSize:12}}>Thêm hợp đồng</span>
                </div>
            </FloatButton.Group>

        </div>
     );
}
 
export default Manage;