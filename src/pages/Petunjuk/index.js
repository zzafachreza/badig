import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function ({ navigation, route }) {
    const [playing, setPlaying] = useState(true);
    const jam = route.params.jam;



    let myUrl = '';

    if (jam == 2) {
        myUrl = 'HZiOXjN8tN0';
        navigation.setOptions({
            'title': 'JAM 02'
        })
    } else if (jam == 6) {
        myUrl = 'JN1CFbiy17g';
        navigation.setOptions({
            'title': 'JAM 06'
        })
    } else if (jam == 10) {
        myUrl = 'lmi44oGP8J8';
        navigation.setOptions({
            'title': 'JAM 10'
        })
    }

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            navigation.goBack();

        }
    }, []);



    return (
        <View style={{
            flex: 1,
        }}>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={myUrl}

            />
        </View>
    );
}