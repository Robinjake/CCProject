import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DeviceDetails = () => {

    const {id} = useParams(); //hook to get device id
    const {data: device, isPending} = useFetch('http://localhost:8000/devices/' + id);
    const history = useHistory();

    //Fetch request to delete device
    const handleClick= () => {
        fetch('http://localhost:8000/devices/' + device.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/'); //sends back to homepage after delete
        })
    }

    return ( 
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
           {device && (
            <article>
                <h2>{device.name}</h2>
                <p>Model Types {device.type}</p>
                <button onClick={handleClick}>Delete</button>
            </article>
           )}
        </div>
     );
}
 
export default DeviceDetails;