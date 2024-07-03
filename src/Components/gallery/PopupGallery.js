
function PopupGallery({ selectImg, handlePrev, handleNext, handlePopUpClose }) {
    return (
      <div className="popup__top">
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
          className="popup__top_img"
          src={`./images/image-product-${selectImg}.jpg`}
          alt={`gallery ${selectImg}`}
        />
        <button className="onFocus-btn btn-next" onClick={handleNext}>
          <img src="./images/icon-next.svg" alt="next button" />
        </button>
      </div>
    );
  }

  export default PopupGallery