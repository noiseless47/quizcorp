import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

export function useInstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
      
      if (!accessToken) {
        setLoading(false);
        // We don't set an error for missing token to allow graceful fallback to placeholders
        console.warn('VITE_INSTAGRAM_ACCESS_TOKEN is missing. Falling back to placeholders.');
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feed');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  return { posts, loading, error };
}
