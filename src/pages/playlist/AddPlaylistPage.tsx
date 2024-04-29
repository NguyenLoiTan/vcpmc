import InfoMenu from "../../components/info/InfoMenu";
import AddPlaylist from "../../components/playlist/AddPlaylist";


const AddPlaylistPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <AddPlaylist/>
            </InfoMenu>
            
        </div>
     );
}
 
export default AddPlaylistPage;