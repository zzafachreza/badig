import { View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts, windowWidth } from '../../utils';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import Signature from "react-native-signature-canvas";
import { useIsFocused } from '@react-navigation/native';

export default function ({ navigation, route, onOK }) {

    const [kirim, setKirim] = useState({
        fid_user: route.params.id_user,
    });
    const isFocused = useIsFocused();

    const [loading, setLoading] = useState(false);




    useEffect(() => {
        if (isFocused) {

            axios.post('https://zavalabs.com/badig/get.php', {
                fid_user: route.params.id_user
            }).then(res => {

                console.error('data server', res.data)
                setKirim(res.data)

            })
        }
    }, [isFocused]);






    const _kirimAPI = () => {

        setLoading(true);
        console.error(kirim);

        axios.post('https://zavalabs.com/badig/add3.php', kirim).then(res => {
            setLoading(false);

            console.log(res.data);

            navigation.replace('Home')


        })
    }


    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>


                <View style={{
                    padding: 10
                }}>
                    <View style={{
                        marginVertical: 5
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.primary,
                            fontSize: 18,
                        }}>
                            Nama Pelanggan
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            color: colors.black,
                            fontSize: 16,
                        }}>
                            {kirim.nama_pelanggan}
                        </Text>

                    </View>

                    <View style={{
                        marginVertical: 5
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.primary,
                            fontSize: 18,
                        }}>
                            Alamat Pelanggan
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            color: colors.black,
                            fontSize: 16,
                        }}>
                            {kirim.alamat_pelanggan}
                        </Text></View>




                    <View style={{
                        marginVertical: 5
                    }}>

                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.primary,
                            fontSize: 18,
                        }}>
                            CP Pelanggan
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            color: colors.black,
                            fontSize: 16,
                        }}>
                            {kirim.cp_pelanggan}
                        </Text>
                    </View>

                    <View style={{
                        marginVertical: 5
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.primary,
                            fontSize: 18,
                        }}>
                            Perbaikan
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            color: colors.black,
                            fontSize: 16,
                        }}>
                            {kirim.perbaikan}
                        </Text>
                    </View>
                </View>








                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ttd1', {
                        id_user: route.params.id_user
                    })}

                        style={{
                            flex: 1,
                            backgroundColor: colors.white,
                            borderWidth: 1,
                            borderColor: colors.primary
                        }}>
                        <Image source={{ uri: kirim.ttd_pelanggan }} style={{
                            width: '100%',
                            height: 200
                        }} />
                        <Text style={{
                            textAlign: 'center', margin: 5, fontFamily: fonts.secondary[600],
                        }}>Pelanggan </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Ttd2', {
                        id_user: route.params.id_user
                    })} style={{
                        flex: 1,

                        backgroundColor: colors.white,
                        borderWidth: 1,
                        marginLeft: 5,
                        borderColor: colors.primary
                    }}>
                        <Image source={{ uri: kirim.ttd_teknisi }} style={{
                            width: '100%',
                            height: 200
                        }} />
                        <Text style={{
                            textAlign: 'center', margin: 5, fontFamily: fonts.secondary[600],
                        }}>Teknisi / Mitra</Text>
                    </TouchableOpacity>
                </View>
                <MyInput label="Tempat" value={kirim.tempat} onChangeText={val => setKirim({
                    ...kirim,
                    tempat: val
                })} />















            </View>
            {
                !loading && (

                    <View style={{ padding: 10 }}>
                        <MyButton onPress={_kirimAPI} title="SUBMIT" warna={colors.primary} />
                    </View>
                )
            }

            {
                loading && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                )
            }
        </ScrollView >
    );
}
