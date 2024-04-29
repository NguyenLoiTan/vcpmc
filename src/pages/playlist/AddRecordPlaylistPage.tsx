import InfoMenu from "../../components/info/InfoMenu";
import AddRecordPlaylist from "../../components/playlist/AddRecordPlaylist";



const AddRecordPlaylistPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <AddRecordPlaylist/>
            </InfoMenu>
            
        </div>
     );
}
 
export default AddRecordPlaylistPage;