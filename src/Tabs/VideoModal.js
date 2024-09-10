import React from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import closeBtn from './x.png';

Modal.setAppElement('#root'); 

const VideoModal = ({ isOpen, onClose, videoId , autoplay}) => {
  const videoOptions = {
    height: '800',
    width: '1200',
    playerVars: {
      autoplay: autoplay ? 1 : 0, 
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="YouTube Video"
      style={{
        content: {
          position: 'relative',
          top: '50%',
          left: '30%',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          maxWidth: '400px',
          padding: '10px',
          border: 'none',
          background: 'none',
          overflow: 'visible',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex:999,
        },
      }}>
      <img src={closeBtn} alt='close' className='close-btn' onClick={onClose}/>
      <YouTube videoId={videoId} opts={videoOptions} />
      
    </Modal>
  );
};

export default VideoModal;
