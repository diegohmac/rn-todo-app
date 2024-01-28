import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        backgroundColor: theme.colors.gray500,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
    },
    text: {
        flex: 1,
        color: theme.colors.gray100,
    }
  });