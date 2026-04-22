import styles from './Features.module.css';
import { ShieldCheck, CheckCircle2, Scissors, User } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: 'Privacidad garantizada',
      description: 'Tus fotos no se almacenan ni se comparten.'
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Recomendaciones personalizadas',
      description: 'IA entrenada para encontrar tu mejor estilo.'
    },
    {
      icon: <Scissors size={24} />,
      title: 'Inspiración actualizada',
      description: 'Cortes en tendencia y clásicos seleccionados para ti.'
    },
    {
      icon: <User size={24} />,
      title: 'Para todos',
      description: 'Funciona para cualquier tipo de cabello y rostro.'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.sectionTitle}>Más que recomendaciones, confianza</h2>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconContainer}>
                {feature.icon}
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
