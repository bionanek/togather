import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Text, TextStyle, View, ViewStyle } from "react-native"

interface EventCardProps {
  title: string
  slots: number
  shortDescription: string
  author: string
  location: {
    city: string
    distanceInKm: number
  }
}
export const EventCard: FC<EventCardProps> = observer(function EventCard(props) {
  return (
    <View style={$container}>
      <View style={$leftSideCardContainer}>
        <Text>{props.author}</Text>
        <View style={$locationContainer}>
          <Text style={$cityText}>{props.location.city}</Text>
          <View style={$distanceContainer}>
            <Text style={$distanceText}>{props.location.distanceInKm} km</Text>
            <Text style={$distanceText2}>od ciebie</Text>
          </View>
        </View>
      </View>
      <View style={$rightSideCardContainer}>
        <Text>{props.title}</Text>
        <View style={$slotsContainer}>
          <Text style={$slotsText}>{props.slots} miejsc</Text>
        </View>
        <View>
          <Text>{props.shortDescription}</Text>
        </View>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  backgroundColor: "#FFF",
  padding: 15,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  height: 200,
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "flex-start",
}

const $rightSideCardContainer: ViewStyle = {
  flexDirection: "column",
  flexWrap: "nowrap",
  flex: 2,
  height: "100%",
  backgroundColor: "red",
}

const $leftSideCardContainer: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  backgroundColor: "yellow",
  height: "100%",
}

const $locationContainer: ViewStyle = {
  flexDirection: "column",
  backgroundColor: "#00ADB5",
  borderRadius: 20,
  alignItems: "flex-start",
  paddingLeft: 30,
  padding: 2,
}

const $cityText: TextStyle = {
  color: "#FFF",
  fontSize: 11,
  fontWeight: "700",
}

const $distanceText: TextStyle = {
  color: "#FFF",
  fontSize: 9,
  fontWeight: "700",
  marginRight: 2,
}

const $distanceText2: TextStyle = {
  ...$distanceText,
  fontWeight: "400",
}

const $distanceContainer: ViewStyle = {
  flexDirection: "row",
}

const $slotsContainer: ViewStyle = {
  position: "relative",
  flexDirection: "row-reverse",
  backgroundColor: "#00ADB5",
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
  marginVertical: 10,
  padding: 2,
  height: 16,
}
const $slotsText: TextStyle = {
  color: "#FFF",
  fontSize: 10,
  fontWeight: "400",
  letterSpacing: 0.7,
  marginRight: 10,
}
