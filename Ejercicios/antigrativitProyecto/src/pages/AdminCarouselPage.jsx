import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import FormInput from '../components/common/FormInput';
import { Image as ImageIcon, Plus, Edit2, Trash2, Save, X, Link2 } from 'lucide-react';

const AdminCarouselPage = () => {
  const { carouselImages, addCarouselImage, updateCarouselImage, deleteCarouselImage } = useApp();

  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    tag: ''
  });

  // Regex rules
  const titleRegex = /^.{3,60}$/;
  const descRegex = /^.{5,150}$/;
  const urlRegex = /^https?:\/\/.+/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
      tag: item.tag || ''
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      imageUrl: '',
      tag: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isTitleValid = titleRegex.test(formData.title);
    const isDescValid = descRegex.test(formData.description);
    const isUrlValid = urlRegex.test(formData.imageUrl);

    if (isTitleValid && isDescValid && isUrlValid) {
      if (editingId) {
        updateCarouselImage(editingId, formData);
      } else {
        addCarouselImage(formData);
      }
      handleCancel();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div className="comp-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ padding: '0.6rem', backgroundColor: 'rgba(168, 85, 247, 0.15)', borderRadius: '10px', color: '#a855f7' }}>
            <ImageIcon size={28} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Administrador de Carrusel
            </h1>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Gestiona las imágenes y diapositivas del Componente 2 en la Homepage.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Form */}
        <div className="comp-container">
          <div className="comp-header">
            {editingId ? <Edit2 size={18} color="#a855f7" /> : <Plus size={18} color="#10b981" />}
            <h2 className="comp-title">{editingId ? 'Editar Diapositiva' : 'Agregar Imagen al Carrusel'}</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <FormInput
              label="Título de la Diapositiva"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ej: Desarrollo Web con React"
              regex={titleRegex}
              errorMessage="El título debe tener entre 3 y 60 caracteres"
              required
            />

            <FormInput
              label="Descripción"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Ej: Plataforma adaptable con React Vite"
              regex={descRegex}
              errorMessage="La descripción debe tener entre 5 y 150 caracteres"
              required
            />

            <FormInput
              label="URL de la Imagen (https://...)"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              regex={urlRegex}
              errorMessage="Debe ingresar una URL válida de imagen que inicie con http:// o https://"
              required
              icon={Link2}
            />

            <FormInput
              label="Etiqueta / Tag (Opcional)"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              placeholder="Ej: Novedad, Destacado, UX"
            />

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '0.7rem',
                  backgroundColor: editingId ? '#a855f7' : '#10b981',
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
                <span>{editingId ? 'Guardar Cambios' : 'Agregar a Carrusel'}</span>
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

        {/* Existing Carousel List */}
        <div className="comp-container">
          <div className="comp-header">
            <ImageIcon size={18} color="#a855f7" />
            <h2 className="comp-title">Imágenes en Carrusel ({carouselImages.length})</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {carouselImages.map(item => (
              <div
                key={item.id}
                style={{
                  padding: '0.85rem',
                  backgroundColor: 'var(--bg-input)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: 1, overflow: 'hidden' }}>
                  {item.tag && (
                    <span style={{ fontSize: '0.7rem', color: '#a855f7', fontWeight: 700 }}>
                      {item.tag}
                    </span>
                  )}
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {item.description}
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
                      color: '#a855f7',
                      cursor: 'pointer'
                    }}
                  >
                    <Edit2 size={15} />
                  </button>
                  <button
                    onClick={() => deleteCarouselImage(item.id)}
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

export default AdminCarouselPage;
