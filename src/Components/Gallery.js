import { useState } from "react";

function GalleryGeneral() {
  const [selectImg, onSelectImg] = useState(1);
  function Gallery({ selectImg }) {
    return (
      <div className="gallery-main-img">
        <img
          src={`./images/image-product-${selectImg}.jpg`}
          alt={`gallery ${selectImg}`}
        />
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
  return (
    <div className="grid__gallery">
      <Gallery selectImg={selectImg} />
      <Thumbnails selectImg={selectImg} onSelectImg={onSelectImg} />
    </div>
  );
}

export default GalleryGeneral;
