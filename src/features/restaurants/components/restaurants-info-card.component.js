import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
    ],
    address = "100 some randaom street",
    isOpenNOw = true,
    rating = 4,
    isClosedTemproarily,
  } = restaurant;
  return (
    <Card elevation={5} style={StyleSheet.card}>
      <Card.Cover
        key={name}
        style={StyleSheet.cover}
        source={{ uri: photos[0] }}
      />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  text: {
    padding: 16,
  },
});
