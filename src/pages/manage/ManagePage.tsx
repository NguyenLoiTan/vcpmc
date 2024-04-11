import InfoMenu from "../../components/info/InfoMenu";
import Manage from "../../components/manage/Manage";

const ManagePage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <InfoMenu>
            <Manage/>
            </InfoMenu>
            
        </div>
     );
}
 
export default ManagePage;