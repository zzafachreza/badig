import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts } from '../../utils';
import axios from 'axios';

export default function ({ navigation, route }) {

    const [kirim, setKirim] = useState({
        id_karyawan: route.params.id_karyawan
    });
    const [loading, setLoading] = useState(false);


    const _kirimAPI = () => {

        setLoading(true)
        console.error(kirim);

        axios.post('https://simenawan.mpssukorejo.com/api/pelatihan_add.php', kirim).then(res => {
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
                <MyInput label="nama" value={kirim.nama} onChangeText={val => setKirim({
                    ...kirim,
                    nama: val
                })} />

                <MyInput label="tempat" value={kirim.tempat} onChangeText={val => setKirim({
                    ...kirim,
                    tempat: val
                })} />

                <MyInput label="penyelenggara" value={kirim.penyelenggara} onChangeText={val => setKirim({
                    ...kirim,
                    penyelenggara: val
                })} />

                <Text style={{
                    marginVertical: 5,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Tanggal Mulai</Text>
                <DatePicker title="tgl_mulai" mode="date" date={kirim.tgl_mulai == null ? new Date() : new Date(kirim.tgl_mulai)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_mulai: val
                })} />
                <Text style={{
                    marginVertical: 5,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Tanggal Selesai</Text>
                <DatePicker title="tgl_selesai" mode="date" date={kirim.tgl_selesai == null ? new Date() : new Date(kirim.tgl_selesai)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_selesai: val
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
