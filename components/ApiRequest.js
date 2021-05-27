import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

const [isLoading, setLoading] = useState(true);
const [data, setData] = useState([]);

const request = (data) => {
  // debut return
  return fetch("http://127.0.0.1/api-photo-serveur/api/get_share_picture", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: Data,
  })
    .then((response) => response.json())
    .then((json) => setData(console.log(json)))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
};
// fin return
