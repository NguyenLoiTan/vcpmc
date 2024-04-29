import InfoMenu from "../../components/info/InfoMenu";
import AddRole from "../../components/setting/AddRole";

const AddRolePage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
                <AddRole/>
            </InfoMenu>
            
        </div>
     );
}
 
export default AddRolePage;