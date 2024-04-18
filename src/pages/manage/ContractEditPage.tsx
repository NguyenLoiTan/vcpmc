import InfoMenu from "../../components/info/InfoMenu";
import ContractEdit from "../../components/manage/ContractEdit";

const ContractEditPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <ContractEdit/>
            </InfoMenu>
            
        </div>
     );
}
 
export default ContractEditPage;