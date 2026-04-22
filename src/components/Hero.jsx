import { useState, useRef } from 'react';
import styles from './Hero.module.css';
import { Upload, Camera, Zap } from 'lucide-react';

export default function Hero({ onUpload }) {
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80');
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setIsScanning(true);
      
      // Simulate fake analysis
      setTimeout(() => {
        setIsScanning(false);
        if (onUpload) onUpload(url);
      }, 2500);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        {/* Left Content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            TU MEJOR ESTILO, HECHO PARA TI
          </div>
          <h1 className={styles.title}>
            Descubre los cortes de cabello <span className="text-accent">ideales para tu rostro</span>
          </h1>
          <p className={styles.description}>
            Sube una foto o toma una selfie y nuestra IA analizará la forma de tu rostro para recomendarte los cortes que más te favorecen.
          </p>
          
          <div className={styles.actions}>
            <input 
              type="file" 
              accept="image/*" 
              hidden 
              ref={fileInputRef} 
              onChange={handleFileChange}
            />
            <button 
              className={styles.uploadBtn}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={18} />
              Subir foto
            </button>
            <button className={styles.cameraBtn}>
              <Camera size={18} />
              Tomar foto
            </button>
          </div>
          <div className={styles.privacy}>
            <span className={styles.lockIcon}>🔒</span> Tus fotos son privadas y seguras
          </div>
        </div>

        {/* Right Content - Mockup Image */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={imagePreview} alt="User Face" className={styles.faceImage} />
            
            {/* Fake Detection Overlay */}
            <div className={`${styles.scannerOverlay} ${isScanning ? styles.active : ''}`}>
              <div className={styles.scanLine}></div>
              <svg className={styles.faceOutline} viewBox="0 0 100 100" preserveAspectRatio="none">
                 {/* Decorative dashed outline */}
                 <ellipse cx="50" cy="50" rx="35" ry="45" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                 <line x1="15" y1="50" x2="85" y2="50" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                 <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            
            {/* Mock Toast Notification */}
            <div className={styles.notification}>
              <div className={styles.notificationIcon}>
                <Zap size={16} />
              </div>
              <div className={styles.notificationText}>
                <strong>{isScanning ? 'Detectando forma de rostro...' : 'Análisis completado'}</strong>
                <span>{isScanning ? 'Analizando proporciones' : 'Desliza para ver resultados'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
