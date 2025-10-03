import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MiPrimerContador = () => {

    const [ contador, setContador ] = useState(10);

    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}
        >
            <Text
                style={{ fontSize: 20 }}
            >
                Contador: {contador}
            </Text>
            <Button
                title='Añadir'
                onPress={ () => setContador( contador + 1 ) }
            />
            <Button
                title='Restar'
                onPress={ () => setContador( (contador == 0) ? 0 : contador - 1 ) }
            />
        </View>
    )
}

const style = StyleSheet.create({

});

