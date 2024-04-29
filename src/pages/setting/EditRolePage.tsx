import InfoMenu from "../../components/info/InfoMenu";
import EditRole from "../../components/setting/EditRole";

const EditRolePage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
                <EditRole/>
            </InfoMenu>
            
        </div>
     );
}
 
export default EditRolePage;