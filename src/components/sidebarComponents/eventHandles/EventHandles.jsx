import "./EventHandles.scss";

const EventHandles = () => {
  const HoverOnCircle = (e) => {
    console.log(e.target);
  };

  return (
    <div className="eventHandle">
      <h2 className="text-center">EventHandles</h2>
      <div className="curcle">
        <div onClick={HoverOnCircle} className="circleBlock"></div>
      </div>
    </div>
  );
};

export default EventHandles;
