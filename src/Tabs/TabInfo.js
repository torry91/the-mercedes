
import VideoModal from './VideoModal';
import { useState } from "react";
import '../App.css';
import playBtn from "./driver.jpeg";
import iconBtn from "./icon.jpeg";

const TabInfo = ({firstDriverRef}) => {
  const[ModalOpen,setModalOpen]=useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className='info2 icon-cont' id="first-driver" ref={firstDriverRef}>
      <hr id="scroll-target" className='line'/>
      <h1 className='title2'>The First Driver</h1>
        <div className="introF">
        <p className="bertha"><b>Bertha Benz: The First Driver.</b></p>
        <p className="bertha">She forged the road ahead and paved it for us all. 
        Discover the story of Bertha Benz and her historic first drive.
        </p>
        <div className='image-container' onClick={openModal}>
        <img src={playBtn} alt="icon" className='video-on'/>
        <img src={iconBtn} className='play-icon' alt='play-btn'/>
        </div>
        </div>
        <VideoModal isOpen={ModalOpen} onClose={closeModal} 
        videoId="JBL_G-C51Dk" autoplay={true} 
        className={`video-modal ${ModalOpen ? 'modal-open' : ''}`}
        />
        </div>
  )
}
export default TabInfo;
