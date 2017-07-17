import {
    ActivityIndicator,
    Button,
    DatePickerIOS,
    DrawerLayoutAndroid,
    Image,
    KeyboardAvoidingView,
    ListView,
    // MapView,
    Modal,
    // Navigator,
    NavigatorIOS,
    Picker,
    PickerIOS,
    ProgressBarAndroid,
    ProgressViewIOS,
    RefreshControl,
    ScrollView,
    SegmentedControlIOS,
    Slider,
    SnapshotViewIOS,
    StatusBar,
    Switch,
    TabBarIOS,
    Text,
    TextInput,
    ToolbarAndroid,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewPagerAndroid,
    WebView,
} from "react-native"

import React from "react-native"


import styledComponent from "./styledComponent"

const objs = {
    ActivityIndicator,
    Button,
    DatePickerIOS,
    DrawerLayoutAndroid,
    Image,
    KeyboardAvoidingView,
    ListView,
    // MapView,
    Modal,
    // Navigator,
    NavigatorIOS,
    Picker,
    PickerIOS,
    ProgressBarAndroid,
    ProgressViewIOS,
    RefreshControl,
    ScrollView,
    SegmentedControlIOS,
    Slider,
    SnapshotViewIOS,
    // StatusBar,
    Switch,
    TabBarIOS,
    Text,
    TextInput,
    ToolbarAndroid,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ViewPagerAndroid,
    WebView,
}

let json = {}
Object.keys(objs).forEach(function (key) {
  let obj = objs[key];
  json[key] = styledComponent()(obj)
})

module.exports = json
