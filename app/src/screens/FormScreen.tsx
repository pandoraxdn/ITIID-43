import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { appTheme } from '../themes/appTheme';
import { BtnTouch } from '../components/BtnTouch';
import { useForm } from '../hooks/useForm';

export const FormScreen = () => {

    const { form, formList, handleSubmit, handleInputChange } = useForm();

    return(
        <View
            style={ appTheme.globalContainer }
        >
            {
                (formList.length > 0) && (
                    <Text>
                        { JSON.stringify(formList) }
                    </Text>
                )
            }
            <View
                style={ appTheme.container }
            >
                <Text
                    style={ appTheme.title }
                >
                    Formulario de Tareas
                </Text>
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start"
                    }}
                >
                    Tarea
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Nombre Tarea'
                    value={ form.tarea }
                    onChangeText={ ( texto ) => handleInputChange("tarea",texto) }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start"
                    }}
                >
                    Materia
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Tarea Materia'
                    value={ form.materia }
                    onChangeText={ ( texto ) => handleInputChange("materia",texto) }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start"
                    }}
                >
                    Prioridad
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Prioridad Tarea'
                    value={ form.proridad }
                    onChangeText={ ( texto ) => handleInputChange("proridad",texto) }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 18,
                        textAlign: "left",
                        alignSelf: "flex-start"
                    }}
                >
                    Fecha tarea
                </Text>
                <TextInput
                    style={ appTheme.textInput }
                    placeholder='Fecha Tarea'
                    value={ form.fecha }
                    onChangeText={ ( texto ) => handleInputChange("fecha",texto) }
                />
                <BtnTouch
                    titulo='Guardar'
                    color='violet'
                    action={ () => handleSubmit() }
                />
            </View>
        </View>
    )
}
