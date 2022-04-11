import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native'
import { MyButton } from '../../components';
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { getData } from '../../utils/localStorage';
import { useIsFocused } from "@react-navigation/native";


export default function ({ navigation }) {


    const isFocused = useIsFocused();
    const [user, setUser] = useState({});
    const [data, setData] = useState([]);
    const [isData, setIsData] = useState(false);
    const [loading, setLoading] = useState(false);

    const hapus = (id) => {
        // alert(id);

        axios.post('https://simenawan.mpssukorejo.com/api/orang_tua_delete.php', {
            id: id
        }).then(r => {
            console.error(r.data)
            getDataAPI();
        })
    }

    const getDataAPI = (x) => {
        setIsData(false);
        getData('user').then(res => {
            setUser(res);

            axios.post('https://simenawan.mpssukorejo.com/api/orang_tua_data.php', {
                id_karyawan: res.id_karyawan
            }).then(r => {

                setIsData(true);
                setData(r.data);
                console.error('data orang tua', r.data)
            })

        })
    }



    useEffect(() => {

        if (isFocused) {
            getDataAPI();
        }

    }, [isFocused])


    const IndonesiaTgl = (tgl) => {

        var bulan = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        var _tanggal = new Date(tgl).getDate();
        var _bulan = new Date(tgl).getMonth();
        var _tahun = new Date(tgl).getFullYear();


        return `${_tanggal} ${bulan[_bulan]} ${_tahun}`
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: 10, alignItems: 'center', backgroundColor: colors.primary, flexDirection: 'row' }}>
                    <Text
                        style={{
                            flex: 2,
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 15,
                            color: colors.white,
                            marginBottom: 10,
                        }}
                    >Data Orang Tua</Text>
                    <View style={{

                        flex: 1
                    }}>
                        <MyButton onPress={() => navigation.navigate('MenuOrangTuaAdd', {
                            id_karyawan: user.id_karyawan
                        })} title="TAMBAH" warna={colors.white} colorText={colors.primary} iconColor={colors.primary} Icons="add" />
                    </View>
                </View>

                {!isData && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                )}



                {isData && data.map(item => {
                    return (
                        <View style={{ margin: 5, padding: 10, backgroundColor: colors.white, elevation: 2, }}>

                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Nama Ayah</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.ayah}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Tempat dan Tanggal Lahir Ayah</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.tmp_lahir}ayah, {IndonesiaTgl(item.tgl_lahirayah)}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Pendidikan Ayah</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.pend_ayah}</Text>
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#CDCDCD' }} />
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Nama Ibu</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.ibu}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Tempat dan Tanggal Lahir Ibu</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.tmp_lahiribu}, {IndonesiaTgl(item.tgl_lahiribu)}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Pendidikan Ibu</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>{item.pend_ibu}</Text>
                            <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('MenuOrangTuaEdit', item)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary, padding: 20, marginRight: 5 }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 25,
                                        color: colors.white,
                                    }}  >EDIT</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => hapus(item.id)} style={{ flex: 1, backgroundColor: colors.secondary, padding: 20, marginLeft: 5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 25,
                                        color: colors.white,
                                    }}>HAPUS</Text>
                                </TouchableOpacity>

                                {/* <MyButton onPress={() => navigation.navigate('MenuAnakEdit', item)} title="Edit" Icons="create-outline" warna={colors.primary} />

                                <MyButton onPress={() => navigation.navigate('MenuAnakEdit', item)} title="Delete" Icons="trash-outline" warna={colors.secondary} /> */}
                            </View>

                        </View>
                    )
                })}




            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
