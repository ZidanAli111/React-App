import { useState } from "react";

export function CarList() {
    const [cars, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCar(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCar(c => c.filter((element, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }


    return (
        <div >
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}></input>
            <br></br>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter the car name"></input>
            <br></br>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter the model name" ></input>
            <br></br>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}