import React, { useState, useEffect } from 'react';
import { ArrowLeft, Menu, Code, Palette, Users, Zap, CheckCircle, GitBranch, Layers } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useInputKeyboardShortcuts } from './hooks/useInputKeyboardShortcuts';
import { ComponentData } from './constants/componentsData';
import { CodeBlock } from './shared/CodeBlock';
import { MainSidebar } from './shared/MainSidebar';
import { Toaster } from './ui/sonner';



interface ReadMePageProps {
  onBack: () => void;
  components: ComponentData[];
  onComponentClick: (componentName: string) => void;
  currentComponent: string;
}

export function ReadMePage({ onBack, components, onComponentClick, currentComponent }: ReadMePageProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarSearchTerm, setSidebarSearchTerm] = useState('');
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const { inputRef: sidebarInputRef, handleKeyDown: handleSidebarKeyDown } = useInputKeyboardShortcuts({
    value: sidebarSearchTerm,
    onChange: setSidebarSearchTerm,
    enableGlobalShortcuts: false,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 73;
      const elementTop = element.offsetTop - headerHeight - 24;
      
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      // Fallback for older browsers or when clipboard API fails
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const success = document.execCommand('copy');
        if (success) {
          setCopiedCode(id);
          toast.success('Code copied to clipboard!');
          setTimeout(() => setCopiedCode(null), 2000);
        } else {
          throw new Error('Copy command failed');
        }
      } catch (fallbackErr) {
        console.error('Failed to copy text: ', fallbackErr);
        toast.error('Failed to copy code. Please copy manually.');
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'features', 'quick-start', 'categories', 'best-practices'];
      const scrollPosition = window.scrollY + 150;

      let currentSection = sections[0];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarSections = [
    { id: 'overview', label: 'What is Resact?', icon: GitBranch },
    { id: 'features', label: 'Key Features', icon: Users },
    { id: 'quick-start', label: 'Quick Start Guide', icon: Zap },
    { id: 'categories', label: 'Component Categories', icon: Palette },
    { id: 'best-practices', label: 'Best Practices', icon: CheckCircle },
  ];

  const installationCode = `npm install @desact/ui
# or
yarn add @desact/ui
# or
pnpm add @desact/ui`;

  const usageCode = `import { Button } from '@desact/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@desact/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Resact</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}`;

  const themeCode = `// Import the design system tokens
import '@desact/ui/styles/tokens.css';
import '@desact/ui/styles/components.css';

// Or customize with your own theme
const customTheme = {
  colors: {
    primary: '#8B4513',
    secondary: '#D2B48C',
    accent: '#F5E6D3'
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif'
  }
};`;

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "HR-Focused",
      description: "Specifically designed for human resources applications and workflows"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Consistent Design",
      description: "Unified visual language with warm, professional color palette"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer-Friendly",
      description: "Built with TypeScript, React, and Tailwind CSS for modern development"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized components with tree-shaking and minimal bundle impact"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Accessibility",
      description: "WCAG 2.1 AA compliant with keyboard navigation and screen reader support"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalable",
      description: "From small teams to enterprise-level HR systems"
    }
  ];

  const quickStart = [
    {
      step: "1",
      title: "Install the package",
      description: "Add Resact to your project using your preferred package manager",
      code: installationCode
    },
    {
      step: "2",
      title: "Import components",
      description: "Import the components you need in your React application",
      code: usageCode
    },
    {
      step: "3",
      title: "Apply theme",
      description: "Include the design system styles or customize with your own theme",
      code: themeCode
    }
  ];

  return (
    <div className="min-h-screen bg-brown-50/30 flex">
      {/* Main Sidebar */}
      <MainSidebar
        onBack={onBack}
        components={components}
        onComponentClick={onComponentClick}
        currentComponent={currentComponent}
        sidebarSearchTerm={sidebarSearchTerm}
        setSidebarSearchTerm={setSidebarSearchTerm}
        collapsedCategories={collapsedCategories}
        setCollapsedCategories={setCollapsedCategories}
        sidebarInputRef={sidebarInputRef}
        handleSidebarKeyDown={handleSidebarKeyDown}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-brown-200 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack} className="p-2 hover:bg-brown-50">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-semibold">Read Me</h1>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                    Documentation
                  </Badge>
                </div>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                  Complete guide to the Resact design system
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content with Floating Navigation */}
        <div className="flex-1 relative">
          {/* Floating Navigation */}
          <div className="fixed right-8 top-40 z-30 hidden xl:block">
            <div className="bg-white rounded-lg border border-brown-200 shadow-lg p-4 w-56">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-brown-100">
                <Menu className="h-4 w-4" style={{ color: 'var(--color-text-quaternary)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>On this page</span>
              </div>
              <nav className="space-y-1">
                {sidebarSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-2 py-1.5 text-sm rounded transition-all duration-200 ${
                      activeSection === section.id
                        ? 'font-medium bg-brown-50 border-l-2 border-brown-500 pl-3'
                        : 'hover:bg-brown-50'
                    }`}
                    style={{ 
                      color: activeSection === section.id 
                        ? 'var(--color-fg-brand-primary)'
                        : 'var(--color-text-tertiary)' 
                    }}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 xl:pr-72">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Overview */}
              <section id="overview" className="scroll-mt-28">
                <div className="space-y-8">
                  <Card className="border-brown-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GitBranch className="w-5 h-5" />
                        What is Resact?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>Resact</strong> is a comprehensive design system specifically crafted for Human Resources applications. 
                        It provides a complete set of components, design tokens, and guidelines to help teams build consistent, 
                        accessible, and user-friendly HR interfaces.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 bg-brown-50 rounded-lg">
                          <h4 className="mb-2">🎯 Purpose</h4>
                          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            Streamline HR application development with pre-built, tested components that follow 
                            best practices for user experience and accessibility.
                          </p>
                        </div>
                        <div className="p-4 bg-brown-50 rounded-lg">
                          <h4 className="mb-2">👥 Target Audience</h4>
                          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            Frontend engineers, product designers, and development teams building HR software, 
                            employee portals, and people management systems.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge variant="secondary" className="bg-brown-100 text-brown-700">React</Badge>
                        <Badge variant="secondary" className="bg-brown-100 text-brown-700">TypeScript</Badge>
                        <Badge variant="secondary" className="bg-brown-100 text-brown-700">Tailwind CSS</Badge>
                        <Badge variant="secondary" className="bg-brown-100 text-brown-700">50+ Components</Badge>
                        <Badge variant="secondary" className="bg-brown-100 text-brown-700">WCAG 2.1 AA</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Features */}
              <section id="features" className="scroll-mt-28">
                <div className="space-y-8">
                  <h2>Key Features</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                      <Card key={feature.title} className="border-brown-200 h-full">
                        <CardHeader>
                          <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-3">
                            {feature.icon}
                          </div>
                          <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            {feature.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quick Start */}
              <section id="quick-start" className="scroll-mt-28">
                <div className="space-y-8">
                  <h2>Quick Start Guide</h2>
                  <div className="space-y-8">
                    {quickStart.map((step, index) => (
                      <Card key={step.step} className="border-brown-200">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-brown-600 text-white rounded-full flex items-center justify-center">
                              {step.step}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{step.title}</CardTitle>
                              <CardDescription>{step.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CodeBlock 
                            code={step.code} 
                            language="bash" 
                            id={`quickstart-${step.step}`}
                            copiedCode={copiedCode}
                            onCopy={handleCopyCode}
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              {/* Component Categories */}
              <section id="categories" className="scroll-mt-28">
                <div className="space-y-8">
                  <h2>Component Categories</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-brown-200">
                      <CardHeader>
                        <CardTitle className="text-lg">Base Components</CardTitle>
                        <CardDescription>
                          Foundational elements like buttons, inputs, and typography
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Buttons & Form Controls</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Typography System</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Color Palette</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-brown-200">
                      <CardHeader>
                        <CardTitle className="text-lg">Application UI</CardTitle>
                        <CardDescription>
                          Complex components for building HR applications
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Navigation & Menus</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Data Display</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Dashboard Widgets</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-brown-200">
                      <CardHeader>
                        <CardTitle className="text-lg">HR-Specific</CardTitle>
                        <CardDescription>
                          Components tailored for HR workflows and processes
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Employee Cards</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Performance Widgets</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Recruitment Tools</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Best Practices */}
              <section id="best-practices" className="scroll-mt-28">
                <div className="space-y-8">
                  <h2>Best Practices for Frontend Engineers</h2>
                  <Card className="border-brown-200">
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="mb-4">Component Usage</h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Use semantic HTML</p>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                  All components are built with proper semantic markup
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Follow prop interfaces</p>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                  TypeScript interfaces ensure type safety
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Leverage design tokens</p>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                  Use CSS custom properties for consistent theming
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-4">Performance Tips</h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Import only what you need</p>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                  Tree-shaking reduces bundle size automatically
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Use lazy loading</p>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                  Complex components support code splitting
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Optimize bundle size</p>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                  Monitor and analyze your application bundle
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}