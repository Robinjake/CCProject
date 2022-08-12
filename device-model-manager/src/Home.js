import React from "react";
import {useState, useEffect} from 'react';
import DeviceList from "./DeviceList";


function Home(){

    const [devices, setDevices] = useState([
        {
            name: 'Camera' , 
            type: ["Gas_Leak ", "Oil_Leak ", "Hard_Hat_Detection "] ,
            id: 1
        },
        {
            name: 'Microphone' , 
            type: ["Gas_Leak ", "Explosion_Detection "] , 
            id: 2
        }
    ]);

    const handleDelete = (id) => {
        const newDevices = devices.filter(device => device.id !== id);
        setDevices(newDevices);
    }

    useEffect(() => {
        console.log('use effect ran');

    }, []);

    return(
        <div className="home">
            <DeviceList devices={devices} title="All Devices" handleDelete={handleDelete}/>
        </div>
    );
}


export default Home;