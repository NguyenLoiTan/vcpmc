import InfoMenu from "../../components/info/InfoMenu";
import ManageRecord from "../../components/record/ManageRecord";


const ManageRecordPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <ManageRecord/>
            </InfoMenu>
            
        </div>
     );
}
 
export default ManageRecordPage;