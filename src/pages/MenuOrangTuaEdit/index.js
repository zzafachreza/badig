import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors } from '../../utils';
import axios from 'axios';

export default function ({ navigation, route }) {

    const [kirim, setKirim] = useState(route.params);
    const [loading, setLoading] = useState(false);

    console.log('detail edit ortu', route.params)


    const _kirimAPI = () => {

        setLoading(true)
        console.error(kirim);

        axios.post('https://simenawan.mpssukorejo.com/api/orang_tua_update.php', kirim).then(res => {
            setLoading(false);

            navigation.goBack();
        })
    }

    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>
                <MyInput label="Nama Ayah" value={kirim.ayah} onChangeText={val => setKirim({
                    ...kirim,
                    ayah: val
                })} />
                <MyInput label="Tempat Lahir dan Tanggal Lahir Ayah" value={kirim.tmp_lahirayah} onChangeText={val => setKirim({
                    ...kirim,
                    tmp_lahirayah: val
                })} />
                <DatePicker title="Tanggal Lahir Ayah" mode="date" date={new Date(kirim.tgl_lahirayah)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_lahirayah: val
                })} />
                <MyInput label="Pendidikan Ayah" value={kirim.pend_ayah} onChangeText={val => setKirim({
                    ...kirim,
                    pend_ayah: val
                })} />

            </View>


            <View style={{
                padding: 10
            }}>
                <MyInput label="Nama Ibu" value={kirim.ibu} onChangeText={val => setKirim({
                    ...kirim,
                    ibu: val
                })} />
                <MyInput label="Tempat Lahir dan Tanggal Lahir Ibu" value={kirim.tmp_lahiribu} onChangeText={val => setKirim({
                    ...kirim,
                    tmp_lahiribu: val
                })} />
                <DatePicker title="Tanggal Lahir Ibu" mode="date" date={new Date(kirim.tgl_lahiribu)} onDateChange={val => setKirim({
                    ...kirim,
                    tgl_lahiribu: val
                })} />
                <MyInput label="Pendidikan Ibu" value={kirim.pend_ibu} onChangeText={val => setKirim({
                    ...kirim,
                    pend_ibu: val
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
