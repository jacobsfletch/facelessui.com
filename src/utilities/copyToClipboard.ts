export const copyToClipboard = (text: string, callback?: (text?: string) => void) => {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.value = text;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  if (typeof callback === 'function') callback(text);
}
