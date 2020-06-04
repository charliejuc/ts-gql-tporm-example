export const defaultIfNaN = (
    value: number | string | undefined | null,
    defaultValue: number
): number => {
    if (value === null) {
        return defaultValue
    }

    const _value = Number(value)

    return isNaN(_value) ? defaultValue : _value
}
