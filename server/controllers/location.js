import { getTrainLocation } from "../routes/TrainLocation";
const mapElement = document.getElementById('map');
const pnrInput = document.getElementById('pnr-input');
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', async()=>
{
    const pnrNumber = pnrInput.value.trim();

    if(!pnrNumber)
    {
        alert('Please enter a valis PNR number');
        return;
    }

    try
    {
        const map = new goggle.map.Map(mapElement, 
            {
                center:{lat: 28.6139, lng: 77.2090},
                zoom:6,
            }
        );
        const data = await getTrainLocation(pnrNumber);
        const trainLocation = data.trainLocation;
        const latlng = {lat:trainLocation.latitude, lng:trainLocation.longitude};
        const marker = new goggle.map.Marker({
            position:latlng,
            map:map,
            title:trainLocation.trainName,
        });
        setInterval(async () => {
            const newData = await getTrainLocation(pnrNumber);
            const newLatLng = { lat: newData.trainLocation.latitude, lng: newData.trainLocation.longitude };
            marker.setPosition(newLatLng);
          }, 10000);
    }
    catch(error)
    {
        console.error(error);
        alert('Error fetching train location');
    }
});