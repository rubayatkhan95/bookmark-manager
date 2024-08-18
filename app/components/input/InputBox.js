import * as React from 'react';
import { TextInput } from 'react-native-paper';
import ThemeLight from '../../themes/ThemeLight';

const InputBox = ({ value, setValue, label }) => {
    return (
        <TextInput
            label={label}
            mode="outlined"
            value={value}
            style={{ height: 80, backgroundColor: "white" }}
            onChangeText={setValue}
            contentStyle={{ backgroundColor: ThemeLight.colors.primaryContainer }}
            theme={ThemeLight}
        />
    );
};

export default InputBox;