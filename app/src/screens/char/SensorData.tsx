import React from 'react';
import { View, Text, Dimensions, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSensorData } from '../../hooks/useSensorData';
import { appTheme } from '../../themes/appTheme';

export const SensorData = () => {

    const { isLoading, data, today, yesterday, beforeYesterday, loadData } = useSensorData();

    const chartConfig = {
        backgroundColor: 'black',
        backgroundGradientFrom: "olive",
        backgroundGradientTo: "black",
        decimalPlaces: 2,
        color: ( opacity = 1 ) => `rgba(255,255,255,${opacity})`,
        labelColor: ( opacity = 1 ) => `rgba(255,255,255,${opacity})`,
        style:{
            borderRadius: 20,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "white",
        }
    }

    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;

    if ( isLoading ) return <ActivityIndicator color="black" size={80} />;

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                refreshControl={
                    <RefreshControl
                        onRefresh={ loadData }
                        refreshing={ isLoading }
                        colors={["black","olive"]}
                    />
                }
            >
                <View
                    style={ appTheme.menuContainer }
                >
                    <Text
                        style={ appTheme.title }
                    >
                        Total de registros: { (!isLoading) && data.numberRegisters }
                    </Text>
                    <Text
                        style={{
                            ...appTheme.title,
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center"
                        }}
                    >
                        Información de Sensor del día de hoy
                        {
                            `\nTemperatura max: ${(today?.labels.length > 0) && today.max} º \nTemperatura min: ${(today?.labels.length > 0) && today.min} º`
                        }
                    </Text>
                    <LineChart
                        data={{
                            labels: (today?.labels.length > 0) && today.labels,
                            datasets: [
                                {
                                    data: (today?.values.length > 0) && today.values
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        yAxisLabel='$'
                        style={{
                            borderRadius: 20
                        }}
                    />
                </View>
                <View
                    style={ appTheme.menuContainer }
                >
                    <Text
                        style={{
                            ...appTheme.title,
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center"
                        }}
                    >
                        Información de Sensor del día de ayer
                        {
                            `\nTemperatura max: ${(yesterday?.labels.length > 0) && yesterday.max} º \nTemperatura min: ${(yesterday?.labels.length > 0) && yesterday.min} º`
                        }
                    </Text>
                    <LineChart
                        data={{
                            labels: (yesterday?.labels.length > 0) && yesterday.labels,
                            datasets: [
                                {
                                    data: (yesterday?.values.length > 0) && yesterday.values
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        yAxisLabel='$'
                        style={{
                            borderRadius: 20
                        }}
                    />
                </View>
                <View
                    style={ appTheme.menuContainer }
                >
                    <Text
                        style={{
                            ...appTheme.title,
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center"
                        }}
                    >
                        Información de Sensor del día de ante ayer
                        {
                            `\nTemperatura max: ${(beforeYesterday?.labels.length > 0) && beforeYesterday.max} º \nTemperatura min: ${(beforeYesterday?.labels.length > 0) && beforeYesterday.min} º`
                        }
                    </Text>
                    <LineChart
                        data={{
                            labels: (beforeYesterday?.labels.length > 0) && beforeYesterday.labels,
                            datasets: [
                                {
                                    data: (beforeYesterday?.values.length > 0) && beforeYesterday.values
                                }
                            ]
                        }}
                        chartConfig={ chartConfig }
                        width={ width * 0.9 }
                        height={ height * 0.3 }
                        yAxisLabel='$'
                        style={{
                            borderRadius: 20
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
