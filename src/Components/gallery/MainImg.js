function MainImg({ selectImg, onClickFn  }) {
    return (
      <div>
        <img
          className="gallery-main-img"
          src={`./images/image-product-${selectImg}.jpg`}
          alt={`gallery ${selectImg}`}
          onClick={onClickFn}
        />
      </div>
    );
  }

export default MainImg