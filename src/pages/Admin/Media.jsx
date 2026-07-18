import React, { useState, useEffect } from 'react';
import { Upload, Search, Link as LinkIcon, Trash2, Edit2, Copy, Check, FileVideo, FileImage } from 'lucide-react';
import { getMedia, uploadMedia, deleteMedia, renameMedia } from '../../services/db';

export default function Media() {
  const [media, setMedia] = useState([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, image, video
  
  // Modals / forms
  const [isUrlUploadOpen, setIsUrlUploadOpen] = useState(false);
  const [urlFields, setUrlFields] = useState({ name: '', url: '', type: 'image/png', alt: '' });
  const [copiedId, setCopiedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editFields, setEditFields] = useState({ name: '', alt: '' });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setMedia(getMedia());
  };

  // Handle local disk file upload (Read as Base64)
  const handleDiskUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const payload = {
        name: file.name,
        url: event.target.result, // Base64 string
        type: file.type,
        size: (file.size / 1024).toFixed(2) + ' KB',
        alt: file.name.split('.')[0]
      };

      try {
        const updated = uploadMedia(payload);
        setMedia(updated);
        setSuccess('File uploaded successfully to sandbox library.');
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError('Sandbox storage capacity reached. Try using external URLs.');
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle external URL pasting
  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (!urlFields.name.trim() || !urlFields.url.trim()) {
      setError('Please fill in Name and URL fields.');
      return;
    }

    const payload = {
      name: urlFields.name,
      url: urlFields.url,
      type: urlFields.type,
      size: 'External URL',
      alt: urlFields.alt || urlFields.name
    };

    try {
      const updated = uploadMedia(payload);
      setMedia(updated);
      setIsUrlUploadOpen(false);
      setUrlFields({ name: '', url: '', type: 'image/png', alt: '' });
      setSuccess('External asset linked successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this media file?')) {
      const updated = deleteMedia(id);
      setMedia(updated);
      setSuccess('Asset deleted from library.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleCopyLink = (id, url) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleStartRename = (item) => {
    setEditingId(item.id);
    setEditFields({ name: item.name, alt: item.alt || '' });
  };

  const handleSaveRename = (id) => {
    if (!editFields.name.trim()) return;
    const updated = renameMedia(id, editFields.name, editFields.alt);
    setMedia(updated);
    setEditingId(null);
    setSuccess('Asset metadata updated.');
    setTimeout(() => setSuccess(''), 2000);
  };

  // Filtering & searching logic
  const filteredMedia = media.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          (item.alt && item.alt.toLowerCase().includes(search.toLowerCase()));
    
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'image') return matchesSearch && item.type.startsWith('image/');
    if (filterType === 'video') return matchesSearch && item.type.startsWith('video/');
    return matchesSearch;
  });

  return (
    <div className="space-y-6 text-left">
      
      {/* Head */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Media Library</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Upload images (PNG, JPG, WebP) and video files (MP4, WebM) for catalog and blog use.</p>
        </div>

        <div className="flex items-center gap-2">
          {/* External URL paste button */}
          <button
            onClick={() => setIsUrlUploadOpen(true)}
            className="flex items-center justify-center gap-2 border border-[#3E0F12] text-[#3E0F12] text-[11px] font-bold tracking-widest uppercase px-4 py-3 hover:bg-[#FAF6F0] transition-colors rounded-sm"
          >
            <LinkIcon className="w-4 h-4" />
            Link URL
          </button>
          
          {/* Disk Upload trigger */}
          <label className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm cursor-pointer">
            <Upload className="w-4 h-4" />
            Upload File
            <input type="file" accept="image/*,video/*" onChange={handleDiskUpload} className="hidden" />
          </label>
        </div>
      </div>

      {/* Success/Error Alerts */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 text-[12px] flex items-center gap-2.5 rounded-sm">
          <Check className="w-4.5 h-4.5 text-green-600 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 text-[12px] flex items-center gap-2.5 rounded-sm">
          <AlertCircle className="w-4.5 h-4.5 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* External URL modal overlay */}
      {isUrlUploadOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white border border-[#E8DDD0] max-w-md w-full p-6 shadow-lg rounded-sm space-y-6">
            <div className="border-b border-[#FAF6F0] pb-3 flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#2D0B0C]">Link External Asset URL</h3>
              <button onClick={() => setIsUrlUploadOpen(false)} className="text-[11px] font-bold text-gray-500 uppercase">Close</button>
            </div>

            <form onSubmit={handleUrlSubmit} className="space-y-4 text-left">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Asset Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. digestive-blend.png"
                  value={urlFields.name}
                  onChange={(e) => setUrlFields({ ...urlFields, name: e.target.value })}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Asset Type *</label>
                <select
                  value={urlFields.type}
                  onChange={(e) => setUrlFields({ ...urlFields, type: e.target.value })}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                >
                  <option value="image/png">Image (PNG/WebP/JPG)</option>
                  <option value="video/mp4">Video (MP4/WebM)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Image / Video URL *</label>
                <input
                  type="text"
                  required
                  placeholder="https://example.com/asset.jpg"
                  value={urlFields.url}
                  onChange={(e) => setUrlFields({ ...urlFields, url: e.target.value })}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Alt Text</label>
                <input
                  type="text"
                  value={urlFields.alt}
                  onChange={(e) => setUrlFields({ ...urlFields, alt: e.target.value })}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3E0F12] text-white text-[12px] font-bold uppercase tracking-widest hover:bg-[#2D0B0C]"
              >
                Register Asset
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main library area */}
      <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-5 space-y-5">
        
        {/* Filters and search */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-4 border-b border-[#FAF6F0]">
          
          {/* Filter tabs */}
          <div className="flex gap-2 w-full sm:w-auto">
            {['all', 'image', 'video'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-full transition-colors border ${
                  filterType === type 
                    ? 'bg-[#3E0F12] text-white border-[#3E0F12]' 
                    : 'bg-white border-[#E8DDD0] text-gray-500 hover:bg-[#FAF6F0]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9087]" />
            <input
              type="text"
              placeholder="Search assets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-[#D4A64A]/30 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
            />
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMedia.length === 0 ? (
            <p className="p-8 text-center text-gray-400 col-span-full">No media files registered in this folder.</p>
          ) : (
            filteredMedia.map((item) => {
              const isEditing = editingId === item.id;
              const isVideo = item.type.startsWith('video/');

              return (
                <div key={item.id} className="border border-[#E8DDD0] rounded-sm bg-[#FAF6F0]/20 flex flex-col justify-between overflow-hidden group">
                  
                  {/* Media View */}
                  <div className="h-32 bg-white flex items-center justify-center p-1.5 border-b border-[#E8DDD0] relative overflow-hidden">
                    {isVideo ? (
                      <video src={item.url} className="max-h-full max-w-full object-cover" muted />
                    ) : (
                      <img src={item.url} alt={item.alt || item.name} className="max-h-full max-w-full object-contain" />
                    )}
                    
                    {/* Hover actions panel */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleCopyLink(item.id, item.url)}
                        title="Copy file path URL"
                        className="p-2 bg-white rounded-full text-[#3E0F12] border border-[#E8DDD0] hover:scale-105 transition-transform"
                      >
                        {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => handleStartRename(item)}
                        title="Edit metadata"
                        className="p-2 bg-white rounded-full text-[#3E0F12] border border-[#E8DDD0] hover:scale-105 transition-transform"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        title="Delete file"
                        className="p-2 bg-white rounded-full text-red-600 border border-[#E8DDD0] hover:scale-105 transition-transform"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="absolute bottom-1 right-1 p-1 bg-white/80 rounded-sm border border-gray-100">
                      {isVideo ? <FileVideo className="w-3 h-3 text-purple-600" /> : <FileImage className="w-3 h-3 text-blue-600" />}
                    </div>
                  </div>

                  {/* Details metadata */}
                  <div className="p-3 bg-white text-left space-y-1">
                    {isEditing ? (
                      <div className="space-y-1.5 pt-1">
                        <input
                          type="text"
                          value={editFields.name}
                          onChange={(e) => setEditFields({ ...editFields, name: e.target.value })}
                          className="w-full text-[10px] border border-[#D4A64A]/30 p-1"
                        />
                        <input
                          type="text"
                          value={editFields.alt}
                          onChange={(e) => setEditFields({ ...editFields, alt: e.target.value })}
                          placeholder="Alt description"
                          className="w-full text-[10px] border border-[#D4A64A]/30 p-1"
                        />
                        <button
                          onClick={() => handleSaveRename(item.id)}
                          className="w-full bg-[#163728] text-white text-[9px] font-bold uppercase tracking-widest py-1.5"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <>
                        <h5 className="text-[11px] text-[#2D0B0C] font-semibold truncate" title={item.name}>{item.name}</h5>
                        <p className="text-[9px] text-[#9E9087] font-semibold uppercase">{item.size}</p>
                      </>
                    )}
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>

    </div>
  );
}
