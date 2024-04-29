import InfoMenu from "../../components/info/InfoMenu";
import Playlist from './../../components/playlist/Playlist';

const PlaylistPage = () => {
    return ( 
        <div style={{position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30, 30, 46, 1)',overflowY: 'auto'}}>
            <InfoMenu>
            <Playlist/>
            </InfoMenu>
            
        </div>
     );
}
 
export default PlaylistPage;