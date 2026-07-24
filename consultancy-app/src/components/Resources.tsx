import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Resource {
  id: string;
  title: string;
  summary: string;
  category: string;
  download_url: string;
}

export const Resources: React.FC = () => {
  const { isAdmin } = useAuth();
  const [resources, setResources] = useState<Resource[]>([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [category, setCategory] = useState('Handbook');
  const [downloadUrl, setDownloadUrl] = useState('#');

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const { data, error } = await supabase.from('resources').select('*').order('created_at', { ascending: false });
    if (!error && data) setResources(data);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return alert('Unauthorized access!');

    const { error } = await supabase.from('resources').insert([{ title, summary, category, download_url: downloadUrl }]);

    if (error) {
      alert('Error publishing resource: ' + error.message);
    } else {
      alert('Resource published successfully!');
      setTitle('');
      setSummary('');
      fetchResources();
    }
  };

  return (
    <section id="resources" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Insightful Downloadables</h2>
        <p className="text-slate-600 mb-8">A curated vault of tools and insights to scale your business.</p>

        {isAdmin && (
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Admin Dashboard: Add New Resource</h3>
            <form onSubmit={handleUpload} className="space-y-4">
              <input
                type="text"
                placeholder="Resource Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-md"
                required
              />
              <textarea
                placeholder="Summary / Description"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-md"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Category (e.g., Handbook, Template)"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="p-3 border border-slate-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Download URL"
                  value={downloadUrl}
                  onChange={(e) => setDownloadUrl(e.target.value)}
                  className="p-3 border border-slate-300 rounded-md"
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700">
                Publish Resource
              </button>
            </form>
          </div>
        )}

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="p-4 border-b">Title</th>
                <th className="p-4 border-b">Summary</th>
                <th className="p-4 border-b text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {resources.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-slate-500">No resources available yet.</td>
                </tr>
              ) : (
                resources.map((res) => (
                  <tr key={res.id} className="border-b hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">{res.title}</td>
                    <td className="p-4 text-slate-600">{res.summary}</td>
                    <td className="p-4 text-right">
                      <a href={res.download_url} className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
                        Download
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
