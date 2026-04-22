import { useState } from 'react';
import styles from './Recommendations.module.css';
import { Heart } from 'lucide-react';

export default function Recommendations() {
  const [savedCuts, setSavedCuts] = useState(new Set());

  const toggleSave = (id) => {
    const newSaved = new Set(savedCuts);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedCuts(newSaved);
  };

  const cuts = [
    {
      id: 1,
      name: 'Texturizado con degradado',
      description: 'Aporta volumen y definición equilibrando tus proporciones.',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
      badge: 'Mejor para ti'
    },
    {
      id: 2,
      name: 'Taper fade',
      description: 'Clásico y versátil, ideal para un look limpio y moderno.',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Crop francés',
      description: 'Flequillo corto y textura para un estilo natural y juvenil.',
      image: 'https://images.unsplash.com/photo-1582230200315-4ba29c4709ed?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      name: 'Side part',
      description: 'Elegante y atemporal, perfecto para ti.',
      image: 'https://plus.unsplash.com/premium_photo-1678297270385-ad506712660d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      name: 'Quiff moderno',
      description: 'Volumen en la parte superior para un look con personalidad.',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className={styles.section} id="recomendaciones">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.sectionTitle}>Cortes recomendados para ti</h2>
        <p className={styles.sectionSubtitle}>Basados en la forma de tu rostro: <span className={styles.highlight}>Ovalado</span></p>

        <div className={styles.grid}>
          {cuts.map((cut) => (
            <div key={cut.id} className={styles.card}>
              <div className={styles.imageContainer}>
                {cut.badge && (
                  <div className={styles.badge}>{cut.badge}</div>
                )}
                <img src={cut.image} alt={cut.name} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{cut.name}</h3>
                <p className={styles.cardDescription}>{cut.description}</p>
                <div className={styles.cardFooter}>
                  <button 
                    className={`${styles.heartBtn} ${savedCuts.has(cut.id) ? styles.saved : ''}`}
                    onClick={() => toggleSave(cut.id)}
                    aria-label="Guardar estilo"
                  >
                    <Heart size={20} fill={savedCuts.has(cut.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.viewMoreBtn}>Ver más cortes</button>
        </div>
      </div>
    </section>
  );
}
