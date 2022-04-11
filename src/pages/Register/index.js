import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

export default function Register({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const validate = text => {
        // console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            // console.log('Email is Not Correct');
            setData({ ...data, email: text });
            setValid(false);
            return false;
        } else {
            setData({ ...data, email: text });
            setValid(true);
            // console.log('Email is Correct');
        }
    };

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const simpan = () => {
        if (
            data.username.length === 0 &&
            data.password.length === 0

        ) {
            showMessage({
                message: 'Maaf Semua Field Harus Di isi !',
            });
        } else if (data.username.length === 0) {
            showMessage({
                message: 'Maaf username masih kosong !',
            });
        } else if (data.password.length === 0) {
            showMessage({
                message: 'Maaf Password masih kosong !',
            });
        } else {
            setLoading(true);
            console.log(data);
            axios
                .post('https://zavalabs.com/badig/register.php', data)
                .then(res => {
                    console.warn(res.data);
                    let err = res.data.split('#');

                    // console.log(err[0]);
                    if (err[0] == 50) {
                        setTimeout(() => {
                            setLoading(false);
                            showMessage({
                                message: err[1],
                                type: 'danger',
                            });
                        }, 1200);
                    } else {
                        setTimeout(() => {
                            navigation.replace('Login');
                            showMessage({
                                message: 'Pendaftaran user berhasil',
                                type: 'success',
                            });
                        }, 1200);
                    }
                });
        }
    };
    return (
        <ImageBackground
            style={{
                flex: 1,
                backgroundColor: isEnabled ? colors.black : colors.white,
            }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 1
                }}>
                    <Image source={require('../../assets/logo.png')} style={{
                        width: 100,
                        height: 100
                    }} />
                </View>
                <View style={{
                    flex: 3,
                    justifyContent: 'center'
                }}>
                    <Text
                        style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 25,
                            color: colors.black,
                        }}>
                        Silahkan melakukan pendaftaran terlebih dahulu, sebelum login ke
                        aplikasi
                    </Text>
                </View>
            </View>
            {/* <Switch onValueChange={toggleSwitch} value={isEnabled} /> */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>




                <MyGap jarak={10} />
                <MyInput
                    fontColor={isEnabled ? colors.white : colors.black}
                    labelColor={isEnabled ? colors.white : colors.primary}
                    colorIcon={isEnabled ? colors.white : colors.primary}
                    borderColor={isEnabled ? colors.white : colors.primary}
                    label="username"
                    iconname="card"
                    value={data.username}
                    onChangeText={value =>
                        setData({
                            ...data,
                            username: value,
                        })
                    }
                />


                <MyGap jarak={10} />
                <MyInput
                    fontColor={isEnabled ? colors.white : colors.black}
                    labelColor={isEnabled ? colors.white : colors.primary}
                    colorIcon={isEnabled ? colors.white : colors.primary}
                    borderColor={isEnabled ? colors.white : colors.primary}
                    label="Password"
                    iconname="key"
                    secureTextEntry
                    value={data.password}
                    onChangeText={value =>
                        setData({
                            ...data,
                            password: value,
                        })
                    }
                />
                <MyGap jarak={20} />
                {!loading &&
                    <MyButton
                        warna={colors.primary}
                        title="REGISTER"
                        Icons="log-in"
                        onPress={simpan}
                    />
                }
                <MyGap jarak={20} />

                {loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>}
            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});
