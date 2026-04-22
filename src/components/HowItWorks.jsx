import styles from './HowItWorks.module.css';
import { ImagePlus, ScanFace, Scissors, Star } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ImagePlus size={24} />,
      title: 'Sube o toma tu foto',
      description: 'Usa una foto clara de tu rostro de frente.',
      number: 1
    },
    {
      icon: <ScanFace size={24} />,
      title: 'Analizamos tu rostro',
      description: 'Nuestra IA detecta la forma y proporciones de tu rostro.',
      number: 2
    },
    {
      icon: <Scissors size={24} />,
      title: 'Recomendamos cortes',
      description: 'Te mostramos los cortes que más te favorecen.',
      number: 3
    },
    {
      icon: <Star size={24} />,
      title: 'Elige tu estilo',
      description: 'Explora, guarda y encuentra tu próximo look.',
      number: 4
    }
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.sectionTitle}>¿Cómo funciona?</h2>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.iconContainer}>
                {step.icon}
                <div className={styles.stepNumber}>{step.number}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              
              {/* Optional connector line for visual flow, hidden on mobile */}
              {index < steps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
