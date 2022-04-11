import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts, windowWidth } from '../../utils';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

export default function ({ navigation, route }) {

    const [kirim, setKirim] = useState({
        fid_user: route.params.id_user,
        tipe: '',
        nik_teknisi: '',
        nomor_order: '',
        bangunan: '',
        nama_pelanggan: '',
        alamat_pelanggan: '',
        cp_pelanggan: '',
        telepon_layanan: '',
        nomor_internet: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        axios.post('https://zavalabs.com/badig/get.php', {
            fid_user: route.params.id_user
        }).then(res => {

            if (res.data != null) {
                setKirim(res.data)
            } else {
                console.error(res.data);
            }



        })

    }, []);




    const _kirimAPI = () => {

        setLoading(true);
        console.error(kirim);

        axios.post('https://zavalabs.com/badig/add.php', kirim).then(res => {
            setLoading(false);

            setKirim(res.data);

            navigation.navigate('Add2', {
                id_user: route.params.id_user
            })

        })
    }

    return (
        <ScrollView>
            <View style={{
                padding: 10
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    left: 10,
                    fontSize: 14,
                    marginVertical: 10
                }}>Pilih Tipe</Text>
                <Picker
                    selectedValue={kirim.tipe}
                    onValueChange={(itemValue, itemIndex) =>
                        setKirim({ ...kirim, tipe: itemValue })
                    }>
                    <Picker.Item label="Telkom Akses" value="Telkom Akses" />
                    <Picker.Item label="Mitra" value="Mitra" />
                </Picker>

                <MyInput label="NIK Teknisi" value={kirim.nik_teknisi} onChangeText={val => setKirim({
                    ...kirim,
                    nik_teknisi: val
                })} />
                <MyInput label="Nomor Order" value={kirim.nomor_order} onChangeText={val => setKirim({
                    ...kirim,
                    nomor_order: val
                })} />

                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.primary,
                    left: 10,
                    fontSize: 14,
                    marginVertical: 10
                }}>Informasi Bangunan</Text>
                <Picker
                    selectedValue={kirim.bangunan}
                    onValueChange={(itemValue, itemIndex) =>
                        setKirim({ ...kirim, bangunan: itemValue })
                    }>
                    <Picker.Item label="Rumah" value="Rumah" />
                    <Picker.Item label="Apartemen/Cluster" value="Apartemen/Cluster" />
                </Picker>
                <MyInput label="Nama Pelanggan" value={kirim.nama_pelanggan} onChangeText={val => setKirim({
                    ...kirim,
                    nama_pelanggan: val
                })} />
                <MyInput label="Alamat Pelanggan" value={kirim.alamat_pelanggan} onChangeText={val => setKirim({
                    ...kirim,
                    alamat_pelanggan: val
                })} />
                <MyInput keyboardType="number-pad" label="CP Pelanggan" value={kirim.cp_pelanggan} onChangeText={val => setKirim({
                    ...kirim,
                    cp_pelanggan: val
                })} />

                <MyInput keyboardType="number-pad" label="Nomor Telepon Layanan" value={kirim.telepon_layanan} onChangeText={val => setKirim({
                    ...kirim,
                    telepon_layanan: val
                })} />
                <MyInput keyboardType="number-pad" label="Nomor Internet" value={kirim.nomor_internet} onChangeText={val => setKirim({
                    ...kirim,
                    nomor_internet: val
                })} />



            </View>
            {
                !loading && (

                    <View style={{ padding: 10 }}>
                        <MyButton onPress={_kirimAPI} title="NEXT" warna={colors.primary} />
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
