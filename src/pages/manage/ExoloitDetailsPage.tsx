import InfoMenu from "../../components/info/InfoMenu";
import ExploitDetails from "../../components/manage/ExploitDetails";

const ExoloitDetailsPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <InfoMenu>
            <ExploitDetails/>
            </InfoMenu>
            
        </div>
     );
}
 
export default ExoloitDetailsPage;