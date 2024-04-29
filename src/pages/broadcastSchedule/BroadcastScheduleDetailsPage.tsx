
import BroadcastScheduleDetails from "../../components/broadcastSchedule/BroadcastScheduleDetails";
import InfoMenu from "../../components/info/InfoMenu";


const BroadcastScheduleDetailsPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <BroadcastScheduleDetails/>
            </InfoMenu>
            
        </div>
     );
}
 
export default BroadcastScheduleDetailsPage;