import InfoMenu from "../../components/info/InfoMenu";
import Authorized from "../../components/manage/Authorized";

const AuthorizedPage = () => {
    return ( 
        <div style={{height: '100vh',
        backgroundColor: 'rgba(30, 30, 46, 1)',}}>
            <InfoMenu>
            <Authorized/>
            </InfoMenu>
            
        </div>
     );
}
 
export default AuthorizedPage;