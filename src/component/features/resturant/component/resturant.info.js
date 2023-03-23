import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.text.primary};
`;
const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.sizes[1]};
`;
const ResturantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
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
      <ResturantCard elevation={5}>
        <ResturantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </ResturantCard>
    </TouchableOpacity>
  );
};

export default ResturantInfoCard;
