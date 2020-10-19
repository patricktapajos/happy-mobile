import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanagesDetails from "./pages/OrphanageDetails";
import OrphanagesData from "./pages/CreateOrphanage/OrphanageData";
import SelectMapPosition from "./pages/CreateOrphanage/SelectMapPosition";
import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />,
          }}
          name="OrphanageDetails"
          component={OrphanagesDetails}
        />
        <Screen
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no Mapa" />,
          }}
          name="SelectMapPosition"
          component={SelectMapPosition}
        />
        <Screen
          options={{
            headerShown: true,
            header: () => <Header title="Informe os Dados" />,
          }}
          name="OrphanageData"
          component={OrphanagesData}
        />
      </Navigator>
    </NavigationContainer>
  );
}
