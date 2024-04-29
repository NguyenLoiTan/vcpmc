import InfoMenu from "../../components/info/InfoMenu";
import EditUser from "../../components/setting/EditUser";

const EditUserPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
                <EditUser/>
            </InfoMenu>
            
        </div>
     );
}
 
export default EditUserPage;