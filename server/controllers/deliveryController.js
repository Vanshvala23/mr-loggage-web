const Delivery = require("../models/delivery");

const fetchTimeSlots = async (req, res) => {
  const {
    bookingDate = "20-06-2024",
    bookingTime = "173000",
    trainDate = "22-06-2024",
    trainTime = "193000",
  } = req.body;

  const slots = {
    morning: [8, 9],
    evening: [15, 16],
  };
  let timeSlots = {
    slot1: "date",
    slot2: "date",
    slot3: "date",
  };

  let year = 2024,
    month = 6,
    date = 22,
    trainH = 19,
    trainM = 30;
  let noOfSlots = 3;

  if (trainH > evening[1]) {
    both;
  } else {
    morning;
  }

  // 2024-06-22T19:30:00
  function findDeliverySlots(trainArrival) {
    // Available delivery slots
    const slots = ["08:00-11:00", "16:00-23:00"];
    const numSlotsNeeded = 3;

    // Parse the train arrival time
    const trainArrivalDate = new Date(trainArrival);

    // Function to format date in yyyy-mm-dd
    function formatDate(date) {
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();
      return `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
    }

    // Find previous days' slots
    let deliverySlots = [];
    for (let i = 0; i <= 7; i++) {
      let previousDate = new Date(trainArrivalDate);
      previousDate.setDate(trainArrivalDate.getDate() - i);
      console.log("p", previousDate);
      let daySlots = slots.map((slot) => {
        if (i == 0) {
          //   if(){}
        }
        return `${formatDate(previousDate)} ${slot}`;
      });
      deliverySlots.push(...daySlots);
      console.log("d", daySlots, deliverySlots);

      if (deliverySlots.length >= numSlotsNeeded) {
        break;
      }
    }

    // Return the last 3 slots
    return deliverySlots.slice(0, numSlotsNeeded);
  }

  // Example usage
  const trainArrival = "2024-06-22T19:30:00";
  console.log(findDeliverySlots(trainArrival));

  // [
  //     '2024-06-22 08:00-09:00',
  //     '2024-06-22 15:00-16:00',
  //     '2024-06-21 08:00-09:00'
  //  ]

  res.status(200).send({
    success: true,
    timeSlots,
  });
};

const storeDeliveryDetails = async (req, res) => {
  try {
    const {
      societyAddress,
      city,
      state,
      pincode,
      trainNumber,
      PNR,
      coachNumber,
      seatNumber,
      arrivalTime,
      departureTime,
      slot,
      pickUpDate,
    } = req.body.deliveryDetails;
    const pickUpAddress = { societyAddress, city, state, pincode };
    const deliveryAddress = {
      trainNumber,
      PNR,
      coachNumber,
      seatNumber,
      arrivalTime,
      departureTime,
    };
    const pickUpSlot = { date: pickUpDate, slot };

    const delivery = new Delivery({
      userId: req.body.userId,
      pickUpAddress,
      deliveryAddress,
      pickUpSlot,
      ...req.body.deliveryDetails,
    });
    const newDelivery = await delivery.save();

    res.status(200).send({
      success: true,
      message: "New delivery added successfully",
      newDelivery,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in adding new delivery",
      error,
    });
  }
};

module.exports = { fetchTimeSlots, storeDeliveryDetails };

// 2024-06-22T19:30:00
function getAvailableSlots(trainArrival) {
  const trainTime = new Date(trainArrival);
  const slots = [];

  // Define the two daily slots
  // const morningSlot = { start: "08:00", end: "11:00" };
  // const eveningSlot = { start: "16:00", end: "23:00" };
  const defindSlots = ["08:00-11:00", "16:00-23:00"];

  // Helper function to create a Date object for a specific time on a given day
  function createSlot(date, slot) {
    const [hours, minutes] = slot.split("-")[1].split(":").map(Number);
    // return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let slotEnd = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes
    );
    return [
      `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d} ${slot}`,
      slotEnd,
    ];
  }

  // Helper function to add a slot if it is before the train time
  function addSlot(date, slot) {
    const [newSlot, slotEnd] = createSlot(date, slot);
    // const slotEnd = createSlot(date, slot.end);
    if (slotEnd <= trainTime) {
      slots.push(newSlot);
    }
  }

  // Start from the day of the train's arrival and go backwards
  let currentDate = new Date(trainTime);
  while (slots.length < 3) {
    addSlot(currentDate, defindSlots[0]);
    addSlot(currentDate, defindSlots[1]);
    currentDate.setDate(currentDate.getDate() - 1); // Move to the previous day
  }

  // Return the first three valid slots
  return slots.slice(0, 3);
}

// Example usage
const trainArrival = "2024-06-22T23:00:00"; // Example train arrival time
const availableSlots = getAvailableSlots(trainArrival);
console.log(availableSlots);

// availableSlots.forEach(slot => {
//     console.log(`Start: ${slot.start}, End: ${slot.end}`);
// });
