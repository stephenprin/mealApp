import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading2};
`;
const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.sizes[1]};
`;
const ResturantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: ${(props) => props.theme.fonts.body};
  margin-top: ${(props) => props.theme.space[1]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
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
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <TouchableOpacity>
      <ResturantCard elevation={5}>
        <ResturantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={18} height={18} />
            ))}
          </Rating>

          <Address>{address}</Address>
        </Info>
      </ResturantCard>
    </TouchableOpacity>
  );
};

export default ResturantInfoCard;
