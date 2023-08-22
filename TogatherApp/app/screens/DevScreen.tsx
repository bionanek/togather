import { EventCard } from "app/components/EventCard"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, Text, ViewStyle } from "react-native"

interface DevScreenProps extends AppStackScreenProps<"DevScreen"> {}

export const DevScreen: FC<DevScreenProps> = observer(function DevScreen(props) {
  return (
    <View style={$container}>
      <EventCard
        title="Event Title"
        author="Jakub"
        slots={6}
        location={{ city: "Wrocław", distanceInKm: 5 }}
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget"
      />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#222831",
}
