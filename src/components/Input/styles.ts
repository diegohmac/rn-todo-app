import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: theme.colors.gray500,
        color: theme.colors.gray100,
        height: 54,
        borderRadius: 8,
        padding: 16,
        fontFamily: theme.typography.regularText,
        fontSize: theme.typography.large,
    },
  });