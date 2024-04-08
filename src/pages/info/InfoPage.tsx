import Info from "../../components/info/Info";
import InfoMenu from "../../components/info/InfoMenu";


const InfoPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <InfoMenu>
            <Info/>
            </InfoMenu>
            
        </div>
     );
}
 
export default InfoPage;