import React, { useEffect } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useTareaApi } from '../../hooks/useTareaApi';
import { TareaResponse } from '../../interfaces/tareasInterfaces';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { TareaCard } from '../../components/TareaCard';

export const HomeTarea = () => {

    const { listTareas, isLoading, loadTareas } = useTareaApi();

    const navigation = useNavigation();

    const focused = useIsFocused();

    const create: TareaResponse = {
        id_tarea:   0,
        nombre:     "",
        fecha:      "",
        materia:    "",
        prioridad:  0,
    }

    useEffect( () => {
        //Callback
        (!isLoading) && loadTareas();
    },[ focused ]);

    return(
        <View
            style={{
                ...appTheme.marginGlobal,
                ...appTheme.container
            }}
        >
            <FlatList
                data={ Object.values(listTareas) }
                keyExtractor={ (item) => "#"+item.id_tarea }
                ListHeaderComponent={(
                    <View
                        style={{
                            ...appTheme.container,
                            marginTop: 30
                        }}
                    >
                        <Text
                            style={{
                                ...appTheme.title,
                                alignSelf: "center"
                            }}
                        >
                            Lista de Tareas
                        </Text>
                        <BtnTouch
                            titulo='Crear tarea'
                            color='blue'
                            action={() => navigation.navigate("FormScreen", { ...create })}
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (isLoading) }
                        onRefresh={ loadTareas }
                        colors={["pink", "violet", "black"]}
                        progressBackgroundColor="black"
                    />
                }
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) =>(
                    <TareaCard
                        tarea={item} 
                    />
                )}
            />
        </View>
    )
}
