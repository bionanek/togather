// import { EventCard } from "app/components/EventCard"
import { NewEventCard } from "app/components/NewEventCard"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, Text, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface DevScreenProps extends AppStackScreenProps<"DevScreen"> {}

export const DevScreen: FC<DevScreenProps> = observer(function DevScreen(props) {
  return (
    <SafeAreaView style={$container}>
      <NewEventCard
        title="Event Title"
        author="Jakub"
        slots={6}
        location={{ city: "Wrocław", distanceInKm: 5 }}
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget"
        date="2023-01-10T12:00:00.000Z"
      />
    </SafeAreaView>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#222831",
}
