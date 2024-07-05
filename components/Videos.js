import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { FaPlay, FaTimes } from 'react-icons/fa';
import styles from '../pages/VideoComponent.module.css';

const videos = [
    { id: 1, src: '/videos/video1.mp4', thumbnail: '/thumbnails/web1.png' },
    { id: 2, src: '/videos/video2.mp4', thumbnail: '/thumbnails/web2.png' },
    { id: 3, src: '/videos/video3.mp4', thumbnail: '/thumbnails/web3.png' },
];

const VideoComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const videoRef = useRef(null);

    useEffect(() => {
        Modal.setAppElement('#__next');
    }, []);

    const openModal = (video) => {
        setCurrentVideo(video);
        setIsOpen(true);
    };

    const closeModal = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setCurrentVideo(null);
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play();
        }
    }, [isOpen]);

    return (
        <div className={styles.videoContainer}>
            {videos.map(video => (
                <div
                    key={video.id}
                    className={styles.videoThumbnail}
                    onClick={() => openModal(video)}
                >
                    <Image
                        priority
                        quality={100}
                        width={1920}
                        height={1080}
                        src={video.thumbnail} alt={`Video ${video.id}`} className={styles.thumbnailImage} />
                    <div className={styles.playIcon}>
                        <FaPlay />
                    </div>
                </div>
            ))}

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={styles.modalContent}
                overlayClassName={styles.modalOverlay}
                closeTimeoutMS={500}
            >
                <button onClick={closeModal} className={styles.closeButton}><FaTimes /></button>
                {currentVideo && (
                    <video
                        src={currentVideo.src}
                        controls
                        autoPlay
                        ref={videoRef}
                        className={styles.videoPlayer}
                    />
                )}
            </Modal>
        </div>
    );
};

export default VideoComponent;
