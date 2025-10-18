import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add performance observer for Core Web Vitals
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Log Core Web Vitals for SEO monitoring
      console.log(`${entry.name}: ${entry.value}`);
    }
  });
  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'cumulative-layout-shift'] });
}

createRoot(document.getElementById("root")!).render(<App />);
