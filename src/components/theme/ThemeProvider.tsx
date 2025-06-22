import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  fontSize: 'sm' | 'md' | 'lg';
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  backgroundPattern: 'none' | 'dots' | 'grid' | 'waves';
  brandName: string;
  logoUrl: string;
  customCss: string;
}

interface ThemeContextType {
  theme: ThemeConfig;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
  exportTheme: () => string;
  importTheme: (themeJson: string) => void;
}

const defaultTheme: ThemeConfig = {
  primaryColor: 'from-orange-500 via-pink-500 to-purple-600',
  secondaryColor: 'from-blue-500 to-indigo-600',
  accentColor: 'from-pink-400 to-purple-500',
  fontFamily: 'Inter',
  fontSize: 'md',
  borderRadius: 'lg',
  backgroundPattern: 'none',
  brandName: 'Zero-Point.AI',
  logoUrl: '/LOGO.PNG',
  customCss: '',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem('zero-point-theme');
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('zero-point-theme', JSON.stringify(theme));
    
    // Apply custom CSS
    const styleElement = document.getElementById('custom-theme-styles') || document.createElement('style');
    styleElement.id = 'custom-theme-styles';
    
    const fontSizeMap = {
      sm: '14px',
      md: '16px',
      lg: '18px',
    };
    
    const borderRadiusMap = {
      none: '0px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
    };

    styleElement.textContent = `
      :root {
        --font-size-base: ${fontSizeMap[theme.fontSize]};
        --border-radius-base: ${borderRadiusMap[theme.borderRadius]};
      }
      
      body {
        font-family: ${theme.fontFamily}, system-ui, sans-serif;
        font-size: var(--font-size-base);
      }
      
      .theme-primary-gradient {
        background: linear-gradient(135deg, ${theme.primaryColor.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').map(c => `var(--${c.replace('-', '-color-')})`).join(', ')});
      }
      
      ${theme.customCss}
    `;
    
    document.head.appendChild(styleElement);
  }, [theme]);

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  const resetTheme = () => {
    setTheme(defaultTheme);
  };

  const exportTheme = () => {
    return JSON.stringify(theme, null, 2);
  };

  const importTheme = (themeJson: string) => {
    try {
      const imported = JSON.parse(themeJson);
      setTheme({ ...defaultTheme, ...imported });
    } catch (error) {
      console.error('Invalid theme JSON:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme, exportTheme, importTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};