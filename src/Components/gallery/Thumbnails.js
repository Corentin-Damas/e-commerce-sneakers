import Image from "./Image";

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

export default Thumbnails;
