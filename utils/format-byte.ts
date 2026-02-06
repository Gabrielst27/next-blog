const megabyte = 1048576;
const kilobyte = 1024;

export function formatByteToMB(byte: number): number {
  return byte / megabyte;
}

export function formatByteToKB(byte: number): number {
  return byte / kilobyte;
}
