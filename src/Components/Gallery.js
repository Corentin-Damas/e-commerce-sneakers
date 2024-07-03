import { useState } from "react";
import Thumbnails from "./gallery/Thumbnails";
import MainImg from "./gallery/MainImg";
import PopupGallery from "./gallery/PopupGallery";

function GalleryGeneral() {
  const [selectImg, onSelectImg] = useState(1);
  const [popUp, setPopUp] = useState(false);

  function handlePopUpOpen(e) {
    e.preventDefault();
    setPopUp(true);
  }
  function handlePopUpClose(e) {
    e.preventDefault();
    setPopUp(false);
  }

  function handleNext() {
    if (selectImg < 4) {
      onSelectImg((state) => state + 1);
    } else {
      onSelectImg(1);
    }
  }

  function handlePrev() {
    if (selectImg > 1) {
      onSelectImg((state) => state - 1);
    } else {
      onSelectImg(4);
    }
  }

  return (
    <>
      <div className="grid__gallery">
        <MainImg selectImg={selectImg} onClickFn={handlePopUpOpen} />
        <Thumbnails selectImg={selectImg} onSelectImg={onSelectImg} />
      </div>

      {popUp && (
        <div className="popup__Container">
          <div className="popup__mainImg">
            <PopupGallery
              selectImg={selectImg}
              handlePrev={handlePrev}
              handleNext={handleNext}
              handlePopUpClose={handlePopUpClose}
            />
            <div className="popup__thumbnail">

              <Thumbnails selectImg={selectImg} onSelectImg={onSelectImg} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryGeneral;
