import { useState } from 'react';
import { toast } from 'sonner';

export const useCopyCode = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      // Fallback for older browsers or when clipboard API fails
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const success = document.execCommand('copy');
        if (success) {
          setCopiedCode(id);
          toast.success('Code copied to clipboard!');
          setTimeout(() => setCopiedCode(null), 2000);
        } else {
          throw new Error('Copy command failed');
        }
      } catch (fallbackErr) {
        console.error('Failed to copy text: ', fallbackErr);
        toast.error('Failed to copy code. Please copy manually.');
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return {
    copiedCode,
    handleCopyCode
  };
};