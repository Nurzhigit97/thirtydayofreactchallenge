import "./GenerateHexDecimalColor.scss";

const GenHexDecimalColor = ({ first, end }) => {
  let arrRes = [];
  console.log("Num:", first, end);
  for (let i = first+1; i <= end; i++) {
    arrRes.push(i);
  }
  console.log("arrRes:", arrRes);
  return (
    <div className="generateHexDecimalColors">
      {arrRes.map((n) => (
        <p className="hexColor">{n}</p>
      ))}
    </div>
  );
};

const GenerateHexDecimalColor = () => {
  return <div>{<GenHexDecimalColor first={0} end={50} />}</div>;
};
export default GenerateHexDecimalColor;
