import titlePic from "../assets/cd.svg";

function Title() {
  return (
    <div className="flex justify-center">
      <img
        src={titlePic}
        className="animate-spin [animation-duration:20s] -mt-50 h-100 overflow-hidden "
      />
    </div>
  );
}

export default Title;
