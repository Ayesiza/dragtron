import Data from "./data";
const Cards = () => {
  return (
    <div>
      {Data.map((lids, index) => {
        return (
          <div key={index} className="card">
            <h3>
              <span> {lids.title} </span>
            </h3>
            <p>
              <b>{lids.rate} </b>/Month
            </p>
            {lids.content}
            <div className="button-card">
              <button>PROCEED & PAY</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
