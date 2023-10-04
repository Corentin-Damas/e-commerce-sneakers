import { useState } from "react";

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
    console.log(selectImg);
  }

  function handlePrev() {
    if (selectImg > 1) {
      onSelectImg((state) => state - 1);
    } else {
      onSelectImg(4);
    }
  }

  function Image({ number, onSelectImg, selectImg }) {
    return (
      <img
        className={` ${
          selectImg === number
            ? "gallery-thumbnail-selected"
            : "gallery-thumbnail"
        }`}
        onClick={() => onSelectImg(number)}
        src={`./images/image-product-${number}-thumbnail.jpg`}
        alt={`miniarture ${number}`}
      />
    );
  }

  function MainImg({ selectImg }) {
    return (
      <div>
        <img
          className="gallery-main-img"
          src={`./images/image-product-${selectImg}.jpg`}
          alt={`gallery ${selectImg}`}
          onClick={handlePopUpOpen}
        />
      </div>
    );
  }
  function MainImgFocus({ selectImg }) {
    return (
      <div className="onFocusContainer">
        <button className="onFocus-close" onClick={handlePopUpClose}>
          <svg
            className="svg-fill"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </button>
        <button className="onFocus-btn btn-prev" onClick={handlePrev}>
          <img src="./images/icon-previous.svg" alt="previous button" />
        </button>
        <img
          className="gallery-main-img  gallery-main-img-focused"
          src={`./images/image-product-${selectImg}.jpg`}
          alt={`gallery ${selectImg}`}
        />
        <button className="onFocus-btn btn-next" onClick={handleNext}>
          <img src="./images/icon-next.svg" alt="next button" />
        </button>
      </div>
    );
  }

  function Thumbnails({ onSelectImg, selectImg }) {
    return (
      <>
        <div className="gallery-miniatures">
          <Image number={1} selectImg={selectImg} onSelectImg={onSelectImg} />
          <Image number={2} selectImg={selectImg} onSelectImg={onSelectImg} />
          <Image number={3} selectImg={selectImg} onSelectImg={onSelectImg} />
          <Image number={4} selectImg={selectImg} onSelectImg={onSelectImg} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid__gallery">
        <MainImg selectImg={selectImg} />
        <Thumbnails selectImg={selectImg} onSelectImg={onSelectImg} />
      </div>
      {popUp && (
        <div className="grid__gallery onFocus__gallery">
          <MainImgFocus selectImg={selectImg} />
          <Thumbnails selectImg={selectImg} onSelectImg={onSelectImg} />
        </div>
      )}
    </>
  );
}

export default GalleryGeneral;
