import InfoMenu from "../../components/info/InfoMenu";
import AddRecord from "../../components/manage/AddRecord";

const AddRecordPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <InfoMenu>
            <AddRecord/>
            </InfoMenu>
            
        </div>
     );
}
 
export default AddRecordPage;