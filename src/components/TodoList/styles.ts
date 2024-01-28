import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: theme.colors.gray600,
        paddingHorizontal: 24,
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -27,
        marginBottom: 32,
        gap: 4,
    },
  });