import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import SignatureScreen from "react-native-signature-canvas";
import axios from 'axios';


const Ttd1 = ({ text, onOK, navigation, route }) => {



    const ref = useRef();

    // Called after ref.current.readSignature() reads a non-empty base64 string
    const handleOK = (signature) => {
        console.log(signature);

        axios.post('https://zavalabs.com/badig/ttd1.php', {
            fid_user: route.params.id_user,
            ttd_pelanggan: signature
        }).then(res => {
            console.log(res.data);
            navigation.navigate('Add3', {
                id_user: route.params.id_user
            })
        })



    };

    // Called after ref.current.readSignature() reads an empty string
    const handleEmpty = () => {
        console.log("Empty");
    };

    // Called after ref.current.clearSignature()
    const handleClear = () => {
        console.log("clear success!");
    };

    // Called after end of stroke
    const handleEnd = () => {
        // ref.current.readSignature();
    };

    // Called after ref.current.getData()
    const handleData = (data) => {
        console.log(data);
    };

    return (
        <SignatureScreen
            ref={ref}
            onEnd={handleEnd}
            onOK={handleOK}
            onEmpty={handleEmpty}
            onClear={handleClear}
            onGetData={handleData}
            autoClear={true}
            descriptionText={text}
        />
    );
};

export default Ttd1;