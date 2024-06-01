import { useState } from 'react';
import styles from "@/styles/square.module.css"
import nora from '../../public/nora.webp'
import zakir from '../../public/zakir.jpeg'
import Modal from '@mui/material/Modal';

const squareImage = () => {
    const [view, setView] = useState('photos');
    const [modalPhoto, setModalPhoto] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const photos = [
        nora,
        zakir,
        nora,
        zakir,
        nora,
        zakir,
        nora,
        zakir,
    ];

    const videos = [
        zakir,
        zakir,
        zakir,
    ];

    return (
        <div className={styles.container}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            ><img className={styles.largestThumbnail} src={modalPhoto?.src} /></Modal>
            <div className={styles.nav}>
                <button className={`${styles.navButton} ${view === 'photos' ? styles.whitebg : styles.blackbg}`} active={view === 'photos'} onClick={() => setView('photos')}>Photos</button>
                <button className={`${styles.navButton} ${view === 'videos' ? styles.whitebg : styles.blackbg}`} active={view === 'videos'} onClick={() => setView('videos')}>Videos</button>
            </div>
            <div className={styles.gallery}>
                {view === 'photos' && photos.map((photo, index) => (
                    <img className={`${styles.thumbnail} ${index % 2 === 0 && styles.borderCircle}`} key={index} src={photo.src} />
                ))}
                {view === 'videos' && videos.map((video, index) => (
                    <img className={styles.largeThumbnail} onClick={() => { handleOpen(); setModalPhoto(video) }} key={index} src={video.src} />
                ))}

            </div>
            <div className={styles.footer}>
                <div className={styles.dotBig} />
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
            </div>
        </div>
    );
};


export default squareImage;
