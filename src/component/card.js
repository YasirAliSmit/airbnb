import star from "../image/Star 1.png";
import './App.css'
export const CardOne = (props) => {
  let showdata 
  if (props.data.openspot === 0 ){
    showdata = 'Sold Out'
  }
  else if (props.data.location === 'Online'){
    showdata = 'Online'
  }
  return (
    <div >
      <div className="List-cards" style={{ width: "18rem" }}>
        {showdata &&
          <button type="button" class="sould-btn btn btn-light">
            {showdata}
          </button>
        }
        
        <img src={props.data.img} className="parentcard card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title">
            <img src={star} />
            <span className="text-star">
              {props.data.status.rating} {props.data.status.review} {props.data.country}
              {props.data.location}
            </span>
          </p>
          <h5 className="Life card-title">{props.data.title}</h5>
          <p className="card-text">
            <span className="from">From {props.data.price}</span>{" "}
            <span className="person">/person</span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};
