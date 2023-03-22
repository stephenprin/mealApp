import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: maroon;
`;

const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Some Restaurant",
    icons,
    photos = [
      "https://th.bing.com/th/id/OIP.-rjnHLPwa3aWgruv_G1FAQHaE8?pid=ImgDet&w=1600&h=1067&rs=1",
    ],
    address = "10 saome house v2 lqf",
    isOpenNow = true,
    rating = 4,
    isClosedTemporary = false,
  } = resturant;

  return (
    <TouchableOpacity>
      <Card elevation={5} style={styles.card}>
        <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
        <Title>{name}</Title>
      </Card>
    </TouchableOpacity>
  );
};

export default ResturantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 10,
    backgroundColor: "white",
  },
 
});
