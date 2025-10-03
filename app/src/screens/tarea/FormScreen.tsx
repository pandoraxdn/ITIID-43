import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { useTareaForm } from '../../hooks/useTareaForm';

export const FormScreen = () => {
    
    const { state, handleSubmit, handleInputChange } = useTareaForm();

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <Text
                style={ appTheme.title }
            >
                Formulario de tareas
            </Text>
            <View
                style={ appTheme.container }
            >
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start",
                        marginHorizontal: 5,
                        marginTop: 20
                    }}
                >
                    Nombre Tarea
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Nombre de la tarea'
                    value={ state.nombre }
                    onChangeText={ (value) => handleInputChange("nombre",value) }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start",
                        marginHorizontal: 5,
                        marginTop: 5
                    }}
                >
                    Fecha Tarea
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Fecha de la tarea'
                    value={ state.fecha }
                    onChangeText={ (value) => handleInputChange("fecha",value) }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start",
                        marginHorizontal: 5,
                        marginTop: 5
                    }}
                >
                    Materia
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Materia de la Tarea'
                    value={ state.materia }
                    onChangeText={ (value) => handleInputChange("materia",value) }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start",
                        marginHorizontal: 5,
                        marginTop: 5
                    }}
                >
                    Prioridad
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Prioridad de la Tarea'
                    value={ `${state.proridad}` }
                    onChangeText={ (value) => handleInputChange("proridad",value) }
                />
                <BtnTouch
                    titulo='Guardar tarea'
                    color='violet'
                    action={ () => handleSubmit() }
                />
            </View>
        </View>
    )
}
