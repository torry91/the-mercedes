import React from 'react';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import closeBtn from './x.png';

Modal.setAppElement('#root'); 

const VideoModal = ({ isOpen, onClose, videoId}) => {

  return (
    <Modal isOpen={isOpen} 
    onRequestClose={onClose} 
    contentLabel="YouTube Video"
    overlayClassName="video-overlay"
    className="the-video">
      
      <div className='video-cont'>
      <img src={closeBtn} alt='close' className='close-btn' onClick={onClose}/>
      <YouTube videoId={videoId} className="responsive"/>
      </div>
    </Modal>
  );
};

export default VideoModal;
