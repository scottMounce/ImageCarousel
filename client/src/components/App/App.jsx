import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './app.css';
import Stack from '../ThumbNailStack/ThumbnailStack.jsx';
import Main from '../Main/Main.jsx';
import Modal from '../Modal/Modal.jsx';

const App = () => {

  /* initialize state
  photos: array of photo objects retrieved from database -- used to render images

  main: the 'main' image that is larger in the viewer

  mainIndex: keeps track of which photo from photos is the main -- used so the
    navigation buttons on the Main component can wrap when at the first or last photo

  show: Boolean that determines whether the Modal component is rendered

  shallowInd: index of the main when the Modal is opened -- passed into the Modal
    so the Modal's main image matches the main when it is opened, but becomes
    independent from it while the Modal is open

  fade: this is a boolean that tells the main image whether or not it should have class that gives it
    a transition animation that lets it 'fade in'
  */
  const [photos, setPhotos] = useState([]);
  const [main, setMain] = useState({});
  const [mainIndex, setIndex] = useState(0);
  const [show, toggleModal] = useState(false);
  const [shallowInd, setShallowInd] = useState(0);
  const [fade, setFade] = useState(false);

  // utilize useEffect hook to send GET to server with given ID
  // then update state to be the result of the response
  // photos will be an array of all photo objects,
  // main will by default be the first photo in that array
  useEffect(() => {

    // simpler way of grabbing id from url...specifically makes the URL
    // easier to work with on a proxy server. This will simply grab the values
    // after the last '/' in the URL, like http://localhost:300x/1, where it will
    // send the request to the API with the '1'
    var url = window.location.pathname;
    var prodID = url.substring(url.lastIndexOf('/') + 1);
    if (!prodID) {
      prodID = 1;
    }

    axios.get(`http://localhost:3001/products/${prodID}`)
      .then((response) => {
        setPhotos(response.data);
        setMain(response.data[0]);
      });
  }, []);

  const fadeHelper = () => {
    setFade(true);
    // setFade(true);
    setTimeout(() => { setFade(false); }, 800);
  };

  // this function is passed to the navigation buttons in Main and allows a
  // user to cycle through the thumbnails in the ModalStack to update ModalMain
  // it does this by setting the ModalMain to the previous/next index and wrapping
  // when it is at the first or last index
  const navButtons = ((direction) => {
    if (direction === 'left') {
      if (mainIndex > 0) {
        setIndex(mainIndex - 1);
        setMain(photos[mainIndex - 1]);
      } else {
        setIndex(photos.length - 1);
        setMain(photos[photos.length - 1]);
      }
    }
    if (direction === 'right') {
      if (mainIndex < photos.length - 1) {
        setIndex(mainIndex + 1);
        setMain(photos[mainIndex + 1]);
      } else {
        setIndex(0);
        setMain(photos[0]);
      }
    }
    fadeHelper();
  });

  // renders the thumbnail Stack and Main image
  // Modal viewer is only rendered when the 'show' state is true
  return (
    <div className={styles.carFullService}>
      <div className={styles.carousel}>
        <Stack
          photos={photos}
          setMain={setMain}
          setIndex={setIndex}
          mainID={main.id}
          fadeHelper={fadeHelper}
        />

        <Main
          main={main}
          index={mainIndex}
          navButtons={navButtons}
          toggleModal={toggleModal}
          setShallow={setShallowInd}
          fade={fade}
        />
      </div>
      <Modal
        show={show}
        photos={photos}
        shallowInd={shallowInd}
        toggleModal={toggleModal}
      />
    </div>
  );

};

export default App;