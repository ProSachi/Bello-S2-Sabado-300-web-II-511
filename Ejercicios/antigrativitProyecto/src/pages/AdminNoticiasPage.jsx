import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import FormInput from '../components/common/FormInput';
import { Newspaper, Plus, Edit2, Trash2, Save, X, Calendar, Image as ImageIcon } from 'lucide-react';

const AdminNoticiasPage = () => {
  const { noticias, addNoticia, updateNoticia, deleteNoticia } = useApp();

  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    snippet: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    image: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Regex rules
  const titleRegex = /^.{3,80}$/;
  const categoryRegex = /^.{2,30}$/;
  const snippetRegex = /^.{5,200}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      category: item.category,
      snippet: item.snippet,
      content: item.content || item.snippet,
      date: item.date,
      image: item.image || ''
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      title: '',
      category: '',
      snippet: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      image: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const isTitleValid = titleRegex.test(formData.title);
    const isCategoryValid = categoryRegex.test(formData.category);
    const isSnippetValid = snippetRegex.test(formData.snippet);

    if (isTitleValid && isCategoryValid && isSnippetValid) {
      if (editingId) {
        updateNoticia(editingId, formData);
      } else {
        addNoticia(formData);
      }
      handleCancel();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div className="comp-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ padding: '0.6rem', backgroundColor: 'rgba(59, 130, 246, 0.15)', borderRadius: '10px', color: 'var(--accent)' }}>
            <Newspaper size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Administrador de Noticias
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Gestión dinámica de las noticias que se visualizan en el Componente 4 de la Homepage.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* News Form */}
        <div className="comp-container">
          <div className="comp-header">
            {editingId ? <Edit2 size={18} color="var(--accent)" /> : <Plus size={18} color="#10b981" />}
            <h2 className="comp-title">{editingId ? 'Editar Noticia' : 'Agregar Nueva Noticia'}</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Título de la Noticia"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ej: Nuevas actualizaciones del portal"
              regex={titleRegex}
              errorMessage="El título debe tener entre 3 y 80 caracteres"
              required
            />

            <FormInput
              label="Categoría"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Ej: Tecnología, Seguridad, Novedades"
              regex={categoryRegex}
              errorMessage="La categoría debe tener entre 2 y 30 caracteres"
              required
            />

            <FormInput
              label="Resumen Breve (Snippet)"
              name="snippet"
              value={formData.snippet}
              onChange={handleChange}
              placeholder="Breve descripción para la tarjeta..."
              regex={snippetRegex}
              errorMessage="El resumen debe tener entre 5 y 200 caracteres"
              required
            />

            <div style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Contenido Completo
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Detalle de la noticia..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.75rem',
                  backgroundColor: 'var(--bg-input)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <FormInput
              label="URL de Imagen (Opcional)"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              icon={ImageIcon}
            />

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '0.7rem',
                  backgroundColor: editingId ? 'var(--accent)' : '#10b981',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                <Save size={16} />
                <span>{editingId ? 'Guardar Cambios' : 'Crear Noticia'}</span>
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    padding: '0.7rem 1rem',
                    backgroundColor: 'var(--bg-input)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <X size={16} />
                  <span>Cancelar</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Existing News List */}
        <div className="comp-container">
          <div className="comp-header">
            <Newspaper size={18} color="var(--accent)" />
            <h2 className="comp-title">Noticias Publicadas ({noticias.length})</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {noticias.map(item => (
              <div
                key={item.id}
                style={{
                  padding: '0.85rem',
                  backgroundColor: 'var(--bg-input)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem'
                }}
              >
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 600 }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {item.date}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => handleEdit(item)}
                    title="Editar"
                    style={{
                      padding: '0.4rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--accent)',
                      cursor: 'pointer'
                    }}
                  >
                    <Edit2 size={15} />
                  </button>
                  <button
                    onClick={() => deleteNoticia(item.id)}
                    title="Eliminar"
                    style={{
                      padding: '0.4rem',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)',
                      backgroundColor: 'var(--bg-card)',
                      color: '#ef4444',
                      cursor: 'pointer'
                    }}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNoticiasPage;
