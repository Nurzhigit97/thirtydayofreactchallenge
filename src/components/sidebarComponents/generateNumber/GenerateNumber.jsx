import "./GenerateNumber.scss";

const GenerateNum = () => {
  let numbers = [];

  for (let i = 0; i < 40; i++) {
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
          <GenerateNum />
        </ul>
      </div>
    </div>
  );
};

export default GenerateNumber;
