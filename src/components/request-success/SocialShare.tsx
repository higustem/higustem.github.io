import { Twitter, Linkedin } from 'lucide-react';

export function SocialShare() {
  const shareText = "Just requested access to @GustemHQ - excited to try their virtual cards platform! 🚀";
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`;

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Help us spread the word!</p>
      <div className="flex justify-center gap-4">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-colors"
        >
          <Twitter className="w-4 h-4" />
          Share on Twitter
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:bg-[#094d92] transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          Share on LinkedIn
        </a>
      </div>
    </div>
  );
}