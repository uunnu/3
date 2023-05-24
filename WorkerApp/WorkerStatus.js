import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location";
import { getDistance } from "geolib";

const WorkerStatus = () => {
  const [status, setStatus] = useState("");
  const officeLocation = { latitude: 47.92767, longitude: 106.88902 };
  const distanceOf = 50;

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
    console.log(workerLocation);

    const distance = getDistance(workerLocation, officeLocation);

    console.log(distance.toString());

    if (distance <= distanceOf) {
      setStatus("Worker is Arrival");
    } else {
      setStatus("Worker is Not at Office arr");
    }
  };

  const handleDeparture = async () => {
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
    console.log(workerLocation);

    const distance = getDistance(workerLocation, officeLocation);

    console.log(distance.toString());

    if (distance <= distanceOf) {
      setStatus("Worker is departure");
    } else {
      setStatus("Worker is Not at Office dep");
    }
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
