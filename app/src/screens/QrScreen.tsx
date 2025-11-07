import React from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../themes/appTheme';
import QRCode from 'react-native-qrcode-svg';

export const QrScreen = () => {

    const keira = require("./../../assets/keira.png");

    return(
        <View
            style={ appTheme.marginGlobal }
        >
            <View>
                <Text
                    style={ appTheme.title }
                >
                    QR de link
                </Text>
                <QRCode
                    size={200}
                    value='https://www.facebook.com'
                />
            </View>
            <View
                style={{ marginTop: 5 }}
            >
                <Text
                    style={ appTheme.title }
                >
                    QR con imagen
                </Text>
                <QRCode
                    size={200}
                    logo={keira}
                    logoSize={40}
                    //color='green'
                    enableLinearGradient={true}
                    linearGradient={["rgb(128,128,0)","rbg(27,67,50)"]}
                    value='https://www.facebook.com/keira.morales.136771'
                    logoBackgroundColor='green'
                />
            </View>
        </View>
    );
}
