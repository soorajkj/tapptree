import { useState } from "react";

export default function useCopyToClipboard(
  timeout = 2000
): [(text: string) => Promise<boolean>, boolean] {
  const [isCopied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
      return true;
    } catch (error) {
      setCopied(false);
      console.log(error);
      return false;
    }
  };

  return [copy, isCopied];
}
