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

        axios.post('https://simenawan.mpssukorejo.com/api/pengalaman_add.php', kirim).then(res => {
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
                <MyInput label="Perusahaan" value={kirim.perusahaan} onChangeText={val => setKirim({
                    ...kirim,
                    perusahaan: val
                })} />

                <MyInput label="Jenis" value={kirim.jenis} onChangeText={val => setKirim({
                    ...kirim,
                    jenis: val
                })} />

                <MyInput label="Lokasi" value={kirim.lokasi} onChangeText={val => setKirim({
                    ...kirim,
                    lokasi: val
                })} />

                <MyInput label="Divisi" value={kirim.dept} onChangeText={val => setKirim({
                    ...kirim,
                    dept: val
                })} />

                <MyInput label="Jabatan" value={kirim.jab} onChangeText={val => setKirim({
                    ...kirim,
                    jab: val
                })} />

                <Text style={{
                    marginVertical: 5,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Tanggal Masuk</Text>
                <DatePicker title="tgl_masuk" mode="date" date={kirim.tgl_masuk == null ? new Date() : new Date(kirim.tgl_masuk)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_masuk: val
                })} />
                <Text style={{
                    marginVertical: 5,
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    fontSize: 16,

                }}>Tanggal Keluar</Text>
                <DatePicker title="tgl_keluar" mode="date" date={kirim.tgl_keluar == null ? new Date() : new Date(kirim.tgl_keluar)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_keluar: val
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
