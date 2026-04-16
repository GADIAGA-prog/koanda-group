import { useEffect, useMemo, useState } from 'react';

const emptyForm = {
  id: null,
  title: '',
  excerpt: '',
  content: '',
  status: 'draft',
  coverImage: '',
  images: [],
};

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`Impossible de lire ${file.name}`));
    reader.readAsDataURL(file);
  });
}

function normalizeArticle(article) {
  if (!article) {
    return emptyForm;
  }

  return {
    id: article.id,
    title: article.title || '',
    excerpt: article.excerpt || '',
    content: article.content || '',
    status: article.status || 'draft',
    coverImage: article.coverImage || '',
    images: article.images || [],
  };
}

function AdminArticleEditor({ article, saving, onCancel, onSave }) {
  const [formState, setFormState] = useState(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const isEditing = Boolean(article?.id);

  useEffect(() => {
    setFormState(normalizeArticle(article));
    setError('');
  }, [article]);

  const previewImages = useMemo(() => formState.images || [], [formState.images]);

  async function handleFilesSelected(event) {
    const files = Array.from(event.target.files || []);

    if (!files.length) {
      return;
    }

    try {
      setUploading(true);
      const nextImages = await Promise.all(
        files.map(async (file) => ({
          id: crypto.randomUUID(),
          name: file.name,
          url: await readFileAsDataUrl(file),
        })),
      );

      setFormState((current) => ({
        ...current,
        coverImage: current.coverImage || nextImages[0]?.url || '',
        images: [...current.images, ...nextImages],
      }));
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  function handleCoverImageSelect(url) {
    setFormState((current) => ({ ...current, coverImage: url }));
  }

  function handleRemoveImage(imageId) {
    setFormState((current) => {
      const nextImages = current.images.filter((image) => image.id !== imageId);
      const nextCoverImage =
        current.coverImage && nextImages.some((image) => image.url === current.coverImage)
          ? current.coverImage
          : nextImages[0]?.url || '';

      return {
        ...current,
        coverImage: nextCoverImage,
        images: nextImages,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!formState.title.trim() || !formState.excerpt.trim() || !formState.content.trim()) {
      setError('Titre, résumé et contenu sont obligatoires.');
      return;
    }

    await onSave({
      ...formState,
      title: formState.title.trim(),
      excerpt: formState.excerpt.trim(),
      content: formState.content.trim(),
    });
  }

  return (
    <form className="admin-card admin-editor-card" onSubmit={handleSubmit}>
      <div className="admin-card-head">
        <div>
          <p className="mini-text">Éditeur</p>
          <h2>{isEditing ? 'Modifier l’article' : 'Créer un article'}</h2>
        </div>

        {isEditing ? (
          <button type="button" className="button button-ghost" onClick={onCancel}>
            Nouvel article
          </button>
        ) : null}
      </div>

      <div className="admin-form-grid">
        <label>
          <span>Titre</span>
          <input name="title" value={formState.title} onChange={handleChange} placeholder="Titre de l’article" />
        </label>

        <label>
          <span>Statut</span>
          <select name="status" value={formState.status} onChange={handleChange}>
            <option value="draft">Brouillon</option>
            <option value="published">Publié</option>
          </select>
        </label>
      </div>

      <label>
        <span>Résumé</span>
        <textarea
          name="excerpt"
          rows="3"
          value={formState.excerpt}
          onChange={handleChange}
          placeholder="Résumé court affiché dans la liste des actualités"
        />
      </label>

      <label>
        <span>Contenu</span>
        <textarea
          name="content"
          rows="10"
          value={formState.content}
          onChange={handleChange}
          placeholder="Rédigez le contenu complet de l’article"
        />
      </label>

      <div className="admin-upload-panel">
        <div>
          <p className="mini-text">Images</p>
          <h3>Téléverser une ou plusieurs images</h3>
          <p className="admin-muted">
            La première image peut servir de visuel principal. Vous pouvez ensuite en choisir une autre comme couverture.
          </p>
        </div>

        <label className="button button-secondary admin-upload-button">
          <input type="file" accept="image/*" multiple onChange={handleFilesSelected} hidden />
          {uploading ? 'Import en cours...' : 'Ajouter des images'}
        </label>
      </div>

      {previewImages.length ? (
        <div className="admin-image-grid">
          {previewImages.map((image) => {
            const isCover = formState.coverImage === image.url;

            return (
              <article className={`admin-image-card ${isCover ? 'is-cover' : ''}`} key={image.id}>
                <img src={image.url} alt={image.name} />
                <div className="admin-image-actions">
                  <button type="button" className="button button-ghost" onClick={() => handleCoverImageSelect(image.url)}>
                    {isCover ? 'Image de couverture' : 'Définir en couverture'}
                  </button>
                  <button type="button" className="button button-ghost" onClick={() => handleRemoveImage(image.id)}>
                    Retirer
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ) : null}

      {error ? <p className="form-feedback error">{error}</p> : null}

      <div className="card-actions">
        <button type="submit" className="button button-primary" disabled={saving || uploading}>
          {saving ? 'Enregistrement...' : isEditing ? 'Mettre à jour l’article' : 'Créer l’article'}
        </button>
      </div>
    </form>
  );
}

export default AdminArticleEditor;
