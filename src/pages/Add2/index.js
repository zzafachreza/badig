import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MyButton, MyInput } from '../../components';
import DatePicker from 'react-native-date-picker';
import { colors, fonts, windowWidth } from '../../utils';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

export default function ({ navigation, route }) {

    const [kirim, setKirim] = useState({
        fid_user: route.params.id_user
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        axios.post('https://zavalabs.com/badig/get.php', {
            fid_user: route.params.id_user
        }).then(res => {


            setKirim(res.data)

        })

    }, []);




    const _kirimAPI = () => {

        setLoading(true);
        console.error(kirim);

        axios.post('https://zavalabs.com/badig/add2.php', kirim).then(res => {
            setLoading(false);

            console.log(res.data);
            navigation.navigate('Add3', {
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
                    color: colors.black,
                    left: 10,
                    fontSize: 18,
                    marginVertical: 10
                }}>Material Yang Digunakan  : </Text>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1,
                        paddingRight: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="SOC Lis/Sum* ( Pcs )" value={kirim.material_1} onChangeText={val => setKirim({
                            ...kirim,
                            material_1: val
                        })} />
                    </View>
                    <View style={{
                        flex: 1,
                        paddingLeft: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="Pole Strap ( Pcs )" value={kirim.material_2} onChangeText={val => setKirim({
                            ...kirim,
                            material_2: val
                        })} />
                    </View>
                </View>


                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1,
                        paddingRight: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="S-clamp ( Pcs )" value={kirim.material_3} onChangeText={val => setKirim({
                            ...kirim,
                            material_3: val
                        })} />
                    </View>
                    <View style={{
                        flex: 1,
                        paddingLeft: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="Bracket ( Pcs )" value={kirim.material_4} onChangeText={val => setKirim({
                            ...kirim,
                            material_4: val
                        })} />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1,
                        paddingRight: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="Roset ( Pcs )" value={kirim.material_5} onChangeText={val => setKirim({
                            ...kirim,
                            material_5: val
                        })} />
                    </View>
                    <View style={{
                        flex: 1,
                        paddingLeft: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="Tray Cable ( Meter )" value={kirim.material_6} onChangeText={val => setKirim({
                            ...kirim,
                            material_6: val
                        })} />
                    </View>
                </View>


                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1,
                        paddingRight: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="Patch cord UPC ( Meter )" value={kirim.material_7} onChangeText={val => setKirim({
                            ...kirim,
                            material_7: val
                        })} />
                    </View>
                    <View style={{
                        flex: 1,
                        paddingLeft: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="Patch cord APC ( Meter )" value={kirim.material_8} onChangeText={val => setKirim({
                            ...kirim,
                            material_8: val
                        })} />
                    </View>
                </View>
                <MyInput keyboardType="number-pad" label="Kabel LAN/UTP ( Meter )" value={kirim.material_9} onChangeText={val => setKirim({
                    ...kirim,
                    material_9: val
                })} />

                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1,
                        paddingRight: 2,
                    }}>
                        <MyInput keyboardType="number-pad" label="Tiang 7 meter ( Pcs )" value={kirim.material_10} onChangeText={val => setKirim({
                            ...kirim,
                            material_10: val
                        })} />

                    </View>
                    <View style={{
                        flex: 1,
                        paddingLeft: 2,
                    }}>

                        <MyInput keyboardType="number-pad" label="Tiang 9 meter ( Pcs )" value={kirim.material_11} onChangeText={val => setKirim({
                            ...kirim,
                            material_11: val
                        })} />
                    </View>
                </View>






                <MyInput keyboardType="number-pad" label="Precon yang digunakan ( Meter )" value={kirim.precon} onChangeText={val => setKirim({
                    ...kirim,
                    precon: val
                })} />
                <MyInput keyboardType="number-pad" label="Drop Core yang digunakan ( Meter )" value={kirim.dropcore} onChangeText={val => setKirim({
                    ...kirim,
                    dropcore: val
                })} />

                <MyInput label="Perbaikan" value={kirim.perbaikan} onChangeText={val => setKirim({
                    ...kirim,
                    perbaikan: val
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
