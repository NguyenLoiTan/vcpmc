import InfoMenu from "../../components/info/InfoMenu";
import Record from "../../components/record/Record";

const RecordPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <Record/>
            </InfoMenu>
            
        </div>
     );
}
 
export default RecordPage;