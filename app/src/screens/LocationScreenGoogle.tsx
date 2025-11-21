import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';

export const LocationScreenGoogle = () => {

    const { location, error } = useLocation();

    if (error) {
        return (
          <View style={styles.center}>
            <Text style={styles.error}>{error}</Text>
          </View>
        );
    }

    if (!location) {
        return (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
            <Text>Obteniendo ubicación...</Text>
          </View>
        );
    }

    const { latitude, longitude } = location.coords;


      return (
        <View style={styles.container}>
            <MapView
                provider="google"
                style={ styles.map }
                initialRegion={{
                    latitude,
                    longitude,
                    longitudeDelta: 0.05,
                    latitudeDelta: 0.05
                }}
            />
            <Marker
                coordinate={{ latitude, longitude }}
                title='Ubicación del Usuario'
                description='Ciudad de residencia'
            />
        </View>
      );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 18,
    padding: 20,
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    elevation: 4,
  },
  info: {
    fontSize: 16,
  },
  ok: {
    marginTop: 5,
    color: "green",
    fontWeight: "bold",
  },
});
