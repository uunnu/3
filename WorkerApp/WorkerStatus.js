import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location";
import geolib from "geolib";

const WorkerStatus = () => {
  const [status, setStatus] = useState("");

  const handleArrival = async () => {
    const { status: permissionStatus } =
      await Location.requestForegroundPermissionsAsync();
    if (permissionStatus !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    const workerLocation = {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
    const officeLocation = { latitude: 47.92767, longitude: 106.88902 }; // Example office coordinates

    const distance = geolib.getDistance(workerLocation, officeLocation);

    if (distance <= 100) {
      setStatus("Worker is Arrival");
    } else {
      setStatus("Worker is Not at Office");
    }
  };

  const handleDeparture = () => {
    setStatus("Worker is Gone");
  };

  return (
    <View>
      <Text>Worker Status: {status}</Text>
      <Button title="Arrival" onPress={handleArrival} />
      <Button title="Departure" onPress={handleDeparture} />
    </View>
  );
};

export default WorkerStatus;
