import Data from "./data";
const Cards = () => {
  return (
    <div>
      {Data.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card-header">
            <h3>
              <span> {item.title} </span>
            </h3>
            <h1>
              <b>{item.rate} </b><span style={{fontWeight:100,color: '#b8b8b8'}}>/Month</span>
            </h1>
            </div>
            
            {item.content}
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
