import { Link } from "react-router-dom";

const DeviceList = ({devices, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {devices.map((device) => (
                <div className="home-preview" key={device.id}>
                    <Link to={`/device/${device.id}`}>
                    <h2>{device.name}</h2>
                    <p>{device.type} </p>
                    </Link>
                    
                </div>
            ))}
        </div>

     );
}
 
export default DeviceList;