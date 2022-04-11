import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Alert,
} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { fonts, windowWidth, colors } from '../../utils';
import { MyButton, MyGap, MyInput, MyHeader } from '../../components';

import RNExitApp from 'react-native-exit-app';
import { getData, storeData } from '../../utils/localStorage';
import { color } from 'react-native-elements/dist/helpers';
import 'intl';
import { useIsFocused } from "@react-navigation/native";
import 'intl/locale-data/jsonp/en';



export default function ({ navigation }) {


    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                    padding: 10,
                    // justifyContent: 'center'
                }}>

                <View style={{ flexDirection: 'row', padding: 10, }}>
                    <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>


                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            marginBottom: 10,
                            textAlign: 'center'
                        }}>Kamus Bahasa Serua</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'center'
                        }}>Indonesia





                        </Text>
                        <Text style={{
                            marginTop: 50,
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'justify'
                        }}>
                            © 2021-2022 Kantor Bahasa Provinsi Maluku
                            Badan Pengembangan dan Pembinaan Bahasa
                            Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                        </Text>

                        <Text style={{
                            marginTop: 20,
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'justify'
                        }}>
                            Untuk informasi lebih lanjut, silahkan menghubungi email kantorbahasamaluku@kemdikbud.go.id atau ponsel (0911) 349704
                        </Text>

                        <Text style={{
                            marginTop: 20,
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'left'
                        }}>
                            Penanggung Jawab :
                        </Text>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'left'
                        }}>
                            Kepala Kantor Bahasa Provinsi Maluku: Sahril, S.S., M.Pd
                        </Text>

                        <Text style={{
                            marginTop: 20,
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'left'
                        }}>
                            Tim Penyusun :
                        </Text>

                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'left'
                        }}>
                            - Nita Handayani Hasan
                        </Text>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'left'
                        }}>
                            - Wahyudi Pasapan
                        </Text>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'left'
                        }}>
                            - Masnita Panjaitan
                        </Text>
                        <Text style={{
                            marginTop: 5,
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 20,
                            color: colors.black,
                            textAlign: 'left'
                        }}>
                            - Indrayadi
                        </Text>

                    </View>


                </View>






            </SafeAreaView>

        </>
    );
}



const styles = StyleSheet.create({

})
