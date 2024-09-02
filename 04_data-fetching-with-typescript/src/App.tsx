import { type ReactNode, useEffect, useState } from 'react';

import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
import { get } from './utils/http.ts';
import fetchingImage from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage.tsx';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const App = () => {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      try {
        const data = (await get(
          'https://jsonplaceholder.typicode.com/posts',
        )) as RawDataBlogPost[];
        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });
        setFetchedPosts(blogPosts);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id='loading-fallback'>Fetching posts...</p>;
  }

  return (
    <main>
      <img
        src={fetchingImage}
        alt='An abstract image depicting a data fetching process.'
      />
      {content}
    </main>
  );
};

export default App;
