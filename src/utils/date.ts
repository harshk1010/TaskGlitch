export function safeDate(value?: string): Date | null {
  return value ? new Date(value) : null;
}

export function safeDateString(value?: string): string {
  return value ? new Date(value).toLocaleString() : 'N/A';
}
