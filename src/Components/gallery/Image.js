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

  export default Image