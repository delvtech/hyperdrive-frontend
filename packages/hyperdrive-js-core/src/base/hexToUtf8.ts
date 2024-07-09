/**
 * Decode a hex string to a UTF-8 string.
 */
export function hexToUtf8(hex: `0x${string}`): string {
  const hexString = hex.slice(2);
  let utf8String = "";
  for (let i = 0; i < hexString.length; i += 2) {
    const charCode = parseInt(hexString.substring(i, i + 2), 16);
    utf8String += String.fromCharCode(charCode);
  }
  return utf8String;
}
