import InfoMenu from "../../components/info/InfoMenu";
import ContractDetails from "../../components/manage/ContractDetails";

const ContractDetailsPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <InfoMenu>
            <ContractDetails/>
            </InfoMenu>
            
        </div>
     );
}
 
export default ContractDetailsPage;