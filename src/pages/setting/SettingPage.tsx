import InfoMenu from "../../components/info/InfoMenu";
import Setting from "../../components/setting/Setting";

const SettingPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
                <Setting/>
            </InfoMenu>
            
        </div>
     );
}
 
export default SettingPage;