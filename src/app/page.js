'use client';

import { Client, Databases } from 'appwrite';
import { useState } from 'react';

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

const databases = new Databases(client);

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await databases.createDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID, 
        process.env.NEXT_PUBLIC_COLLECTION_ID, 
        'unique()', // Let Appwrite generate a unique document ID
        {
          title,
          content,
        }
      );
      setSuccess(true);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating document:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Add a New Entry</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-gray-700 font-medium">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:outline-none disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'WRITE IT'}
          </button>
        </form>
        {success && (
          <p className="mt-4 text-green-600 font-medium text-center">
            Document added successfully!
          </p>
        )}
      </div>
    </div>
  );
}

