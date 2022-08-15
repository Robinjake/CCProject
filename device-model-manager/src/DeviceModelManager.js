import React, { useState } from "react";
import {useHistory} from 'react-router-dom';

function DeviceModelManager(){
    const [name, setName] = useState('Camera'); // sets state for device name
    const [type, setType] = useState('Gas Leak'); //sets state for device type
    const history = useHistory();

    //Creating an array of device objects that have a name and type
    const device = [
        {
            name: "Camera",
            type: ["Gas leak", "Oil Leak", "Hard Hat Detection"]
        },
        {
            name: "Microphone",
            type: ["Gas leak", "Explosion Detection"]
        }
    ]
    // i need my model dropdown to show only compatiable models/types for a certain device
    // for camera: gas leak, oil, hard hat
    // for microphone: gas, exploision
    
    // 1)How can i handle the filtering i.e. getting the right array for a certain device
    // given a device, i can figure out what models/types are compatiable
    // input: device, output: array of compatiable devices 
    // A) foo(device) return []

    
    const getCompatiableModels = (device) => {
        if (device==="Camera") {
            // return ["Gas leak", "Oil Leak", "Hard Hat Detection"]
            const cameraModels = ["Gas leak", "Oil Leak", "Hard Hat Detection"]
            return cameraModels.map((cameraModel) => <option key={cameraModel} value={cameraModel}>{cameraModel}</option>)
        }
        else if (device === "Microphone") {
            const micModels = ["Gas leak", "Explosion Detection"]
            return micModels.map((micModel) => <option key={micModel} value={micModel}>{micModel}</option> )
        }
        return []
    }




    //funtion to handle when add device is clicked 
    const handleSubmit = (e) => {
        e.preventDefault(); //stops page from refreshing after submit
        const device = {name,type}; //object created and sent to json file after submit
        
        //POST REQUEST
        fetch('http://localhost:8000/devices', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(device)
        }).then(() => {
            console.log('new device added c:')
            history.push('/'); //sends user back to homepage after adding new device
        })


    }

    return(
        <div className="create">
            <h2>Device-Model Manager Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Device Choice: </label> 
                <select
                value={name} 
                onChange={(e) => setName(e.target.value)} //updates name based on choice
                >
                    <option value="Camera">Camera</option>
                    <option value="Microphone">Microphone</option> 
                </select>    

                <label>Device Model: </label>
                <select
                value={type}
                onChange={(e) => setType(e.target.value)} // updates type based on choice
                >
                    {getCompatiableModels(name)}
                    {/* <option value="Gas Leak">Gas Leak</option>
                    <option value="Oil Leak">Oil Leak</option>
                    <option value="Explosion Detection">Explosion Detection</option>
                    <option value="Hard Hat Detection">Hard Hat Detection</option> */}
                </select>    
                <button>Add Device</button>
                <p>{name}</p>
                <p>{type}</p>
            </form>
        </div>
    );
}


export default DeviceModelManager;