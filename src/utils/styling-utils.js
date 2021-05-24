/**
 * Generates interpolated class names signature based on multiple class names
 * ignoring the falsy and non-string values
 * @param {...string} classNames CSS class signatures.
 * @returns {string} Interpolated string containing all valid class names.
 */

export function getCombinedClassName(...classNames) {
    return classNames.filter(cn => cn && typeof cn === 'string').join(' ')
}