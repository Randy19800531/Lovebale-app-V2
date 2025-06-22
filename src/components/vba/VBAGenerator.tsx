import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Wand2, 
  Copy, 
  Download, 
  Star, 
  Crown,
  Search,
  Filter,
  Play
} from 'lucide-react';
import { toast } from 'sonner';

export const VBAGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock VBA templates data
  const vbaTemplates = [
    {
      id: '1',
      title: 'Data Validation & Cleanup',
      description: 'Automatically validate and clean data in Excel sheets',
      category: 'data-processing',
      tier: 'free',
      weeklyPrice: 0,
      tags: ['validation', 'cleanup', 'excel'],
      code: `Sub ValidateAndCleanData()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Remove duplicates and validate data
    ws.Range("A:Z").RemoveDuplicates Columns:=1
    
    ' Clean whitespace
    For Each cell In ws.UsedRange
        If Not IsEmpty(cell) Then
            cell.Value = Trim(cell.Value)
        End If
    Next cell
    
    MsgBox "Data validation and cleanup complete!"
End Sub`,
    },
    {
      id: '2',
      title: 'Advanced Report Generator',
      description: 'Generate comprehensive reports with charts and formatting',
      category: 'reporting',
      tier: 'premium',
      weeklyPrice: 150,
      tags: ['reports', 'charts', 'formatting'],
      code: `Sub GenerateAdvancedReport()
    ' Premium template - Advanced reporting functionality
    ' This template includes pivot tables, charts, and automated formatting
    ' Weekly rental: R150
End Sub`,
    },
    {
      id: '3',
      title: 'Email Automation Suite',
      description: 'Send personalized emails with attachments from Excel data',
      category: 'automation',
      tier: 'premium',
      weeklyPrice: 200,
      tags: ['email', 'automation', 'outlook'],
      code: `Sub EmailAutomationSuite()
    ' Premium template - Email automation with Outlook integration
    ' Weekly rental: R200
End Sub`,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'data-processing', label: 'Data Processing' },
    { value: 'reporting', label: 'Reporting' },
    { value: 'automation', label: 'Automation' },
    { value: 'financial', label: 'Financial' },
    { value: 'utilities', label: 'Utilities' },
  ];

  const handleGenerateCode = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a description for your VBA macro');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI code generation
    setTimeout(() => {
      const mockCode = `Sub GeneratedMacro()
    ' Generated from: "${prompt}"
    
    Dim ws As Worksheet
    Set ws = ActiveSheet
    
    ' Your custom VBA code will be generated here
    ' based on your natural language description
    
    MsgBox "Macro generated successfully!"
End Sub`;
      
      setGeneratedCode(mockCode);
      setIsGenerating(false);
      toast.success('VBA code generated successfully!');
    }, 2000);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard!');
  };

  const handleDownloadCode = (code: string, filename: string) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.vba`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Code downloaded successfully!');
  };

  const filteredTemplates = vbaTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">VBA Code Generator</h1>
        <p className="text-muted-foreground mt-2">
          Generate Excel/Sheets VBA macros from natural language descriptions or browse our template library.
        </p>
      </div>

      {/* AI Generator Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wand2 className="h-5 w-5" />
            <span>AI Code Generator</span>
          </CardTitle>
          <CardDescription>
            Describe what you want your VBA macro to do, and our AI will generate the code for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="prompt">Describe your VBA macro</Label>
            <Textarea
              id="prompt"
              placeholder="Example: Create a macro that formats selected cells with borders, highlights duplicates in red, and sorts data by the first column..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
            />
          </div>
          
          <Button 
            onClick={handleGenerateCode} 
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              'Generating Code...'
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate VBA Code
              </>
            )}
          </Button>

          {generatedCode && (
            <div className="space-y-2">
              <Label>Generated VBA Code</Label>
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{generatedCode}</code>
                </pre>
                <div className="absolute top-2 right-2 space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopyCode(generatedCode)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDownloadCode(generatedCode, 'generated-macro')}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Template Library */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Template Library</h2>
          <Badge variant="secondary">200+ Templates Available</Badge>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Code className="h-5 w-5" />
                      <span>{template.title}</span>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {template.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    {template.tier === 'premium' ? (
                      <Badge variant="default" className="bg-yellow-500">
                        <Crown className="mr-1 h-3 w-3" />
                        Premium
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <Star className="mr-1 h-3 w-3" />
                        Free
                      </Badge>
                    )}
                    {template.weeklyPrice > 0 && (
                      <span className="text-sm font-medium text-green-600">
                        R{template.weeklyPrice}/week
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleCopyCode(template.code)}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownloadCode(template.code, template.title)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    {template.tier === 'premium' && (
                      <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <Code className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No templates found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};