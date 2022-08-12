const DeviceList = ({devices, title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {devices.map((device) => (
                <div className="home-preview" key={device.id}>
                    <h2>{device.name}</h2>
                    <p>{device.type} </p>
                    <button onClick={() => handleDelete(device.id)}>Delete Device</button>
                </div>
            ))}
        </div>

     );
}
 
export default DeviceList;