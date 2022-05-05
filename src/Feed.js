import { Avatar } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import PlayArrowTwoTone from '@mui/icons-material/PlayArrowRounded';
import Calender from '@mui/icons-material/CalendarMonthOutlined';
import Article from '@mui/icons-material/Article';
import './Feed.css';
function Feed(){
    return (
        <div className="feed_parent">
            <div className="feed_post">
                <div className='feed_post_top'>
                    <Avatar className='feed_post_avatar' src='https://images.unsplash.com/photo-1650599811699-a531af8496dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' />
                    <div className='feed_post_input'>
                        <h5>Start a post</h5>
                    </div>
                </div>
                <div className='feed_post_attach'>
                    <div className='feed_icons' style={{color:'skyblue'}}>
                        <PhotoIcon/>
                        <h5>Photo</h5>
                    </div>
                    <div className='feed_icons' style={{color:'green'}}>
                        <PlayArrowTwoTone/>
                        <h5>Video</h5>
                    </div>
                    <div className='feed_icons' style={{color:'orange'}}>
                        <Calender/>
                        <h5>Event</h5>
                    </div>
                    <div className='feed_icons' style={{color:'lightcoral'}}>
                        <Article/>
                        <h5>Write Article</h5>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Feed;