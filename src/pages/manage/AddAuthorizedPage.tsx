import InfoMenu from "../../components/info/InfoMenu";
import AddAuthorized from "../../components/manage/AddAuthorized";

const AddAuthorizedPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <AddAuthorized/>
            </InfoMenu>
            
        </div>
     );
}
 
export default AddAuthorizedPage;
export {}