import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import UpdateVehicals from "./UpdateVehicals";
function Vehicles() {
  const [vehicles, setVehicals] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchvehicals();
  }, []);
  const fetchvehicals = () => {
    axios
      .get("http://localhost:5000/vehicles")
      .then((response) => {
        setVehicals(response.data);
      })
      .catch((Error) => {
        console.error("sonthig went wrong");
      });
  };
  const deletevehicels = (id) => {
    axios
      .delete(`http://localhost:5000/vehicles/${id}`)
      .then((response) => {
        fetchvehicals();
      })
      .catch((Error) => {
        console.error("sonthig went wrong");
      });
  };
  return (
    <div className="container mt-4">
      <h2>Vehicle List</h2>
      <div className="row">
        {vehicles.map((vehicles) => (
          <div className="col-md-4" key={vehicles.id}>
            <div className="card mb-4">
              <img src={vehicles.image} height={300} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{vehicles.name}</h5>
                <p className="card-text">Price: ${vehicles.price}</p>
                <p className="card-text">Mileage:{vehicles.mileage}</p>
                <p className="card-text">Seats:{vehicles.seats}</p>
                <p className="card-text">Color:{vehicles.color}</p>
                <p className="card-text">Fuel:{vehicles.fuel}</p>
                <p className="card-text">Gear:{vehicles.gear}</p>
                <p className="card-text">Description: {vehicles.description}</p>

                <button
                  type="button"
                  class="btn btn-danger  me-2"
                  onClick={() => deletevehicels(vehicles.id)}
                >
                  DELETE
                </button>

                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => navigate(`/UpdateVehicals/${vehicles.id}`)}
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Vehicles;
