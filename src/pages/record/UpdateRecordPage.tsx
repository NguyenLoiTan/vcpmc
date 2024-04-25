
import InfoMenu from "../../components/info/InfoMenu";
import UpdateRecord from "../../components/record/UpdateRecord";

const UpdateRecordPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <UpdateRecord/>
            </InfoMenu>
        </div>
     );
}
 
export default UpdateRecordPage;