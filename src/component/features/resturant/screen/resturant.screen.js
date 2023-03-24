import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../component/resturant.info";
import styled from "styled-components/native";

const ResturantScreen = () => {
  return (
    <SafeArea>
      <Search>
        <SearchInput placeholder="Search" />
      </Search>

      <Main>
        <ResturantInfoCard />
      </Main>
    </SafeArea>
  );
};

export default ResturantScreen;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform === "android" ? StatusBar.currentHeight : 0};
`;

const SearchInput = styled(Searchbar)`
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;
const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Main = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[2]};
`;
