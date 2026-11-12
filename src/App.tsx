import { useState } from 'react';
import { withTheme } from './hoc/withTheme';
import ThemedButton from './components/ThemedButton';
import { type ThemeType } from './types';
import './App.css';

const EnhancedButton = withTheme(ThemedButton);

export default function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <button className="toggle-btn" onClick={toggleTheme}>
        Переключить тему (сейчас: {theme})
      </button>

      <EnhancedButton theme={theme} label="Кнопка с темой" />
    </div>
  );
}
