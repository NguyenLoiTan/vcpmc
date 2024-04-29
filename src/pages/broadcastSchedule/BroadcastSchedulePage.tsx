import BroadcastSchedule from "../../components/broadcastSchedule/BroadcastSchedule";
import InfoMenu from "../../components/info/InfoMenu";


const BroadcastSchedulePage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <BroadcastSchedule/>
            </InfoMenu>
            
        </div>
     );
}
 
export default BroadcastSchedulePage;