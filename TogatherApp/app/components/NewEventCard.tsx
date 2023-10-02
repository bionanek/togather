import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Text, TextStyle, View, ViewStyle } from "react-native"

interface NewEventCardProps {
  title: string
  slots: number
  shortDescription: string
  author: string
  location: {
    city: string
    distanceInKm: number
  }
  picture?: string
  date: string
}
export const NewEventCard: FC<NewEventCardProps> = observer(function NewEventCard(props) {
  return (
    <View style={$container}>
      {props.picture !== undefined && ( // Left side of card container - picture
        <View>
          <Text>{props.picture}</Text>
        </View>
      )}
      <View>
        <Text>{props.title}</Text>
        <View>
          <Text>{props.location.city}</Text>
          <Text>{new Date(props.date).toLocaleDateString()}</Text>
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
  flexDirection: "column",
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
