import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function Page() {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.40.127.71:8000/api/ipos/") // Replace YOUR_PC_IP
      .then((res) => setIpos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IPO List</Text>
      <FlatList
        data={ipos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.company}>{item.company_name}</Text>
            <Text>Price Band: {item.price_band}</Text>
            <Text>Open: {item.open_date}</Text>
            <Text>Close: {item.close_date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 50, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  card: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  company: { fontSize: 18, fontWeight: "bold" },
});
