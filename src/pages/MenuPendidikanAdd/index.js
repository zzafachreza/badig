import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors } from '../../utils';
import axios from 'axios';

export default function ({ navigation, route }) {

    const [kirim, setKirim] = useState({
        id_karyawan: route.params.id_karyawan
    });
    const [loading, setLoading] = useState(false);


    const _kirimAPI = () => {

        setLoading(true)
        console.error(kirim);

        axios.post('https://simenawan.mpssukorejo.com/api/pendidikan_add.php', kirim).then(res => {
            setLoading(false);

            console.warn(res.data);

            navigation.goBack();
        })
    }

    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>
                <MyInput label="Nama" value={kirim.nama} onChangeText={val => setKirim({
                    ...kirim,
                    nama: val
                })} />
                <MyInput label="Tingkat" value={kirim.tingkat} onChangeText={val => setKirim({
                    ...kirim,
                    tingkat: val
                })} />

                <MyInput label="Jurusan" value={kirim.jurusan} onChangeText={val => setKirim({
                    ...kirim,
                    jurusan: val
                })} />

                <MyInput label="Tahun" value={kirim.tahun} onChangeText={val => setKirim({
                    ...kirim,
                    tahun: val
                })} />

                <MyInput label="Lokasi" value={kirim.lokasi} onChangeText={val => setKirim({
                    ...kirim,
                    lokasi: val
                })} />

            </View>




            {!loading && (

                <View style={{ padding: 10 }}>
                    <MyButton onPress={_kirimAPI} title="SIMPAN" warna={colors.secondary} />
                </View>
            )}

            {loading && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            )}
        </ScrollView >
    );
}
