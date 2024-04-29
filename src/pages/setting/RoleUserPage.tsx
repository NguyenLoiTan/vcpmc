import InfoMenu from "../../components/info/InfoMenu";
import RoleUser from "../../components/setting/RoleUser";


const RoleUserPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
                <RoleUser/>
            </InfoMenu>
            
        </div>
     );
}
 
export default RoleUserPage;