import React, {useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';
import { appTheme } from '../../themes/appTheme';
import { BtnTouch } from '../../components/BtnTouch';
import { useTareaForm } from '../../hooks/useTareaForm';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/TareaNavigator';

interface Props extends StackScreenProps<RootStackParams,"FormScreen">{};

export const FormScreen = ( { navigation, route }: Props ) => {
    
    const { state, handleSubmit, handleInputChange, handleDelete } = useTareaForm();

    useEffect(() => {
        const tarea = route.params;
        handleInputChange("nombre", tarea.nombre);
        handleInputChange("id_tarea", tarea.id_tarea);
        handleInputChange("materia", tarea.materia);
        handleInputChange("prioridad", tarea.prioridad);
        handleInputChange("fecha", tarea.fecha);
    }, []);

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <Text
                style={ appTheme.title }
            >
                Formulario de tareas
            </Text>
            { 
                (state.id_tarea != 0 ) && (
                    <BtnTouch
                        titulo='Eliminar tarea'
                        color='red'
                        action={() => {
                            handleDelete();
                            navigation.popToTop();
                        }}
                    />
                )
            }
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
                    value={ `${state.prioridad}` }
                    onChangeText={ (value) => handleInputChange("prioridad",value) }
                />
                <BtnTouch
                    titulo='Guardar tarea'
                    color='violet'
                    action={ () => {
                        handleSubmit();
                        navigation.popToTop();
                    }}
                />
                <BtnTouch
                    titulo='Regresar'
                    color='violet'
                    action={ () => {
                        navigation.popToTop();
                    }}
                />
            </View>
        </View>
    )
}
