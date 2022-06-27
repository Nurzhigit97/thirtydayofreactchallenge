import "./GenerateNumber.scss";

const GenerateNum = ({ first, end }) => {
  let numbers = [];

  for (let i = first; i <= end; i++) {
    numbers.push(i);
  }
  return (
    <div className="numbers">
      <div className="odd">
        {numbers.map((num) => (
          <h1 className="oddEven">{num}</h1>
        ))}
      </div>
    </div>
  );
};

const GenerateNumber = () => {
  return (
    <div className="generateNumber">
      <h1 className="text-center">Generate Number</h1>
      <div className="numbers">
        <ul>
          <GenerateNum first={0} end={50} />
        </ul>
      </div>
    </div>
  );
};

export default GenerateNumber;
