'use client';

import { Client, Databases } from 'appwrite';
import { useEffect, useState } from 'react';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID); // Your Appwrite project ID

const databases = new Databases(client);

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLLECTION_ID
        );
        setPosts(response.documents);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">All Posts</h1>
        {loading ? (
          <p className="text-center text-gray-600">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div
                key={post.$id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-3">{post.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
