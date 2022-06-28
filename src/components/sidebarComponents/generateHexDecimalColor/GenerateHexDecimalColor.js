import "./GenerateHexDecimalColor.scss";
const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};


console.log(randColor());

const GenHexDecimalColor = ({ first, end }) => {
  let arrRes = [];
  console.log("Num:", first, end);
  for (let i = first + 1; i <= end; i++) {
    arrRes.push(i);
  }
  console.log("arrRes:", arrRes);
  return (
    <div className="generateHexDecimalColors">
      {arrRes.map((n) => (
        <p className="hexColor" style={{ backgroundColor: randColor() }}>
          {n}
        </p>
      ))}
    </div>
  );
};

const GenerateHexDecimalColor = () => {
  return <div>{<GenHexDecimalColor first={0} end={50} />}</div>;
};
export default GenerateHexDecimalColor;
