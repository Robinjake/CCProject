import React from "react";
import DeviceList from "./DeviceList";
import useFetch from "./useFetch";


function Home(){

    const {data: devices, isPending} = useFetch('http://localhost:8000/devices');

    return(
        <div className="home">
            {isPending && <div> Loading... </div>}
           { devices &&<DeviceList devices={devices} title="All Devices"/> } {/*renders list when data received from json */}
        </div>
    );
}


export default Home;