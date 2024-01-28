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
    statusContainer: {
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    statusText: {
        fontSize: theme.typography.medium,
        fontFamily: theme.typography.boldText,
    },
    statusNumberContainer: {
        backgroundColor: theme.colors.gray400,
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999,
    },
    statusNumber: {
        fontSize: theme.typography.medium,
        fontFamily: theme.typography.boldText,
        color: theme.colors.gray200,
    },
    emptyStateContainer: {

    },
    emptyStateText: {
        fontSize: theme.typography.medium,
        fontFamily: theme.typography.boldText,
        color: theme.colors.gray300,
    },
  });