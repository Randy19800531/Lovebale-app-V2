import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useTheme } from './ThemeProvider';
import { 
  Palette, 
  Type, 
  Layout, 
  Image, 
  Code, 
  Download, 
  Upload,
  RotateCcw,
  Eye,
  Settings
} from 'lucide-react';
import { toast } from 'sonner';

export const ThemeCustomizer: React.FC = () => {
  const { theme, updateTheme, resetTheme, exportTheme, importTheme } = useTheme();
  const [previewMode, setPreviewMode] = useState(false);

  const colorPresets = [
    { name: 'Zero-Point Gradient', value: 'from-orange-500 via-pink-500 to-purple-600' },
    { name: 'Ocean Blue', value: 'from-blue-500 via-cyan-500 to-teal-500' },
    { name: 'Sunset', value: 'from-orange-400 via-red-500 to-pink-600' },
    { name: 'Forest', value: 'from-green-400 via-emerald-500 to-teal-600' },
    { name: 'Royal', value: 'from-purple-500 via-indigo-500 to-blue-600' },
    { name: 'Fire', value: 'from-red-500 via-orange-500 to-yellow-500' },
  ];

  const fontOptions = [
    'Inter',
    'Roboto',
    'Open Sans',
    'Lato',
    'Montserrat',
    'Poppins',
    'Source Sans Pro',
    'Nunito',
  ];

  const handleExportTheme = () => {
    const themeData = exportTheme();
    const blob = new Blob([themeData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zero-point-theme.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Theme exported successfully!');
  };

  const handleImportTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        importTheme(content);
        toast.success('Theme imported successfully!');
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Theme Customizer
          </h1>
          <p className="text-muted-foreground mt-2">
            Customize your Zero-Point.AI experience with advanced theming options
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => setPreviewMode(!previewMode)}
          >
            <Eye className="mr-2 h-4 w-4" />
            {previewMode ? 'Exit Preview' : 'Preview'}
          </Button>
          <Button variant="outline" onClick={resetTheme}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Color Scheme</span>
              </CardTitle>
              <CardDescription>
                Customize the color palette for your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Primary Color Gradient</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {colorPresets.map((preset) => (
                    <Button
                      key={preset.name}
                      variant={theme.primaryColor === preset.value ? "default" : "outline"}
                      className="h-16 p-2 flex flex-col items-center justify-center"
                      onClick={() => updateTheme({ primaryColor: preset.value })}
                    >
                      <div className={`w-full h-8 rounded bg-gradient-to-r ${preset.value} mb-1`} />
                      <span className="text-xs">{preset.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-primary">Custom Primary Gradient</Label>
                <Input
                  id="custom-primary"
                  value={theme.primaryColor}
                  onChange={(e) => updateTheme({ primaryColor: e.target.value })}
                  placeholder="from-orange-500 via-pink-500 to-purple-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondary-color">Secondary Color Gradient</Label>
                <Input
                  id="secondary-color"
                  value={theme.secondaryColor}
                  onChange={(e) => updateTheme({ secondaryColor: e.target.value })}
                  placeholder="from-blue-500 to-indigo-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="accent-color">Accent Color Gradient</Label>
                <Input
                  id="accent-color"
                  value={theme.accentColor}
                  onChange={(e) => updateTheme({ accentColor: e.target.value })}
                  placeholder="from-pink-400 to-purple-500"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Type className="h-5 w-5" />
                <span>Typography</span>
              </CardTitle>
              <CardDescription>
                Customize fonts and text styling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Font Family</Label>
                <Select value={theme.fontFamily} onValueChange={(value) => updateTheme({ fontFamily: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fontOptions.map((font) => (
                      <SelectItem key={font} value={font}>
                        <span style={{ fontFamily: font }}>{font}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Base Font Size</Label>
                <Select value={theme.fontSize} onValueChange={(value: 'sm' | 'md' | 'lg') => updateTheme({ fontSize: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small (14px)</SelectItem>
                    <SelectItem value="md">Medium (16px)</SelectItem>
                    <SelectItem value="lg">Large (18px)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Typography Preview</h3>
                <div className="space-y-2" style={{ fontFamily: theme.fontFamily }}>
                  <h1 className="text-2xl font-bold">Heading 1</h1>
                  <h2 className="text-xl font-semibold">Heading 2</h2>
                  <p className="text-base">Body text - The quick brown fox jumps over the lazy dog.</p>
                  <p className="text-sm text-muted-foreground">Small text - Additional information</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layout className="h-5 w-5" />
                <span>Layout & Spacing</span>
              </CardTitle>
              <CardDescription>
                Customize layout properties and visual elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Border Radius</Label>
                <Select value={theme.borderRadius} onValueChange={(value: any) => updateTheme({ borderRadius: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None (0px)</SelectItem>
                    <SelectItem value="sm">Small (4px)</SelectItem>
                    <SelectItem value="md">Medium (8px)</SelectItem>
                    <SelectItem value="lg">Large (12px)</SelectItem>
                    <SelectItem value="xl">Extra Large (16px)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Background Pattern</Label>
                <Select value={theme.backgroundPattern} onValueChange={(value: any) => updateTheme({ backgroundPattern: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="dots">Dots</SelectItem>
                    <SelectItem value="grid">Grid</SelectItem>
                    <SelectItem value="waves">Waves</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Card Preview</h4>
                  <div className={`p-3 bg-gradient-to-r ${theme.primaryColor} text-white rounded-${theme.borderRadius}`}>
                    Sample Card
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Button Preview</h4>
                  <Button className={`bg-gradient-to-r ${theme.primaryColor} rounded-${theme.borderRadius}`}>
                    Sample Button
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Image className="h-5 w-5" />
                <span>Brand Customization</span>
              </CardTitle>
              <CardDescription>
                White-label capabilities and brand customization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="brand-name">Brand Name</Label>
                <Input
                  id="brand-name"
                  value={theme.brandName}
                  onChange={(e) => updateTheme({ brandName: e.target.value })}
                  placeholder="Your Brand Name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo-url">Logo URL</Label>
                <Input
                  id="logo-url"
                  value={theme.logoUrl}
                  onChange={(e) => updateTheme({ logoUrl: e.target.value })}
                  placeholder="/path/to/your/logo.png"
                />
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-3">Brand Preview</h4>
                <div className="flex items-center space-x-3">
                  <img 
                    src={theme.logoUrl} 
                    alt="Logo" 
                    className="h-12 w-12 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                      {theme.brandName}
                    </h3>
                    <p className="text-sm text-muted-foreground">Automation Platform</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Badge variant="secondary">White-label Ready</Badge>
                <Badge variant="outline">Custom Branding</Badge>
                <Badge variant="outline">Logo Support</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="h-5 w-5" />
                <span>Advanced Customization</span>
              </CardTitle>
              <CardDescription>
                Custom CSS and theme import/export
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="custom-css">Custom CSS</Label>
                <Textarea
                  id="custom-css"
                  value={theme.customCss}
                  onChange={(e) => updateTheme({ customCss: e.target.value })}
                  placeholder="/* Add your custom CSS here */"
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex space-x-4">
                <Button onClick={handleExportTheme} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Theme
                </Button>
                <div>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportTheme}
                    className="hidden"
                    id="import-theme"
                  />
                  <Button asChild variant="outline">
                    <label htmlFor="import-theme" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Import Theme
                    </label>
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Theme Configuration</h4>
                <pre className="text-xs overflow-x-auto">
                  {JSON.stringify(theme, null, 2)}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};