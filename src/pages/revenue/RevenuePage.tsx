import InfoMenu from "../../components/info/InfoMenu";
import Revenue from "../../components/revenue/Revenue";

const RevenuePage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <Revenue/>
            </InfoMenu>
            
        </div>
     );
}
 
export default RevenuePage;