# Resact Design System

<div align="center">
  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&h=200&q=80" alt="Resact Logo" width="120" height="120" />
  
  **Empowering Human Resources Teams with Thoughtful Design, Intuitive Components, and Scalable Solutions**

  [![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0+-06B6D4.svg)](https://tailwindcss.com/)
  [![Motion](https://img.shields.io/badge/Motion-Latest-purple.svg)](https://motion.dev/)
  
</div>

## 🌟 Overview

Resact is a comprehensive HR-focused design system featuring 50+ meticulously crafted components across multiple categories. Built with React, TypeScript, and Tailwind CSS v4, it provides a complete toolkit for building modern HR applications with consistent design patterns, smooth animations, and exceptional user experience.

### ✨ Key Features

- **50+ Components** across Base, Application UI, Marketing, and Documentation categories
- **Animated Thumbnails** with sophisticated hover effects and context-aware animations
- **Warm Color Palette** with brown as the primary brand color and cream-based grays
- **Advanced Typography System** using Inter font with comprehensive size scales
- **Smooth Animations** powered by Motion (Framer Motion) library
- **Responsive Design** with mobile-first approach
- **Dark Mode Support** with seamless theme switching
- **Accessibility First** with WCAG 2.1 AA compliance
- **TypeScript Ready** with full type definitions
- **Comprehensive Documentation** with live examples and code snippets

## 🎨 Design Philosophy

### Visual Identity
- **Color System**: Warm cream-based grays with brown primary colors for a professional, approachable feel
- **Typography**: Inter font family with carefully crafted size scales and line heights
- **Spacing**: Consistent 4px base spacing unit for perfect alignment
- **Border Radius**: Subtle 10px default radius for modern, friendly appearance
- **Animations**: Sophisticated micro-interactions that enhance user experience without being distracting

### Design Principles
1. **Human-Centered**: Every component is designed with HR professionals in mind
2. **Consistency**: Unified visual language across all components
3. **Accessibility**: WCAG 2.1 AA compliance as a baseline requirement
4. **Performance**: Optimized for speed and smooth interactions
5. **Scalability**: Components that work from startup to enterprise scale

## 📦 Component Categories

### Documentation (4 components)
- **Read Me**: Comprehensive system documentation
- **Typography**: Complete typography scale and guidelines
- **System Colors**: Full color palette with usage guidelines
- **Icons**: Icon library with consistent styling

### Base Components (9 components)
- **Buttons**: Primary, secondary, tertiary, and specialized button variants
- **Forms**: Complete form layouts with validation states
- **Input**: Text inputs, textareas, and form controls
- **Layout**: Grid systems, containers, and spacing utilities
- **HR Cards**: Specialized cards for HR use cases
- **Accordion**: Collapsible content panels
- **Navigation**: Navigation menus and breadcrumbs
- **Breadcrumbs**: Hierarchical navigation indicators
- **Pagination**: Page navigation controls

### Application UI (35+ components)
- **Interaction**: Tooltips, popovers, and interactive elements
- **Badges**: Status indicators and labels
- **Alerts**: Notification and alert messages
- **Data Display**: Tables, lists, and data visualization
- **Charts**: HR-specific charts and graphs
- **Lists**: Various list layouts and styles
- **Skeletons**: Loading placeholders
- **Modals**: Dialog boxes and overlays
- **Drawer**: Slide-out panels
- **Avatars**: User profile images and placeholders
- **File Upload**: Drag-and-drop file uploaders
- **Dashboard**: HR dashboard widgets and layouts
- **Simple Insight**: Quick data insights
- **Color Picker**: Color selection tools
- **Command Menu**: Keyboard-driven command palette
- **Text Editor**: Rich text editing components
- **Status**: Status indicators and progress bars
- **Page Headers**: Page-level headers and navigation
- **Card Headers**: Card component headers
- **Section Footers**: Section-level footers
- **Header Navigations**: Top-level navigation bars
- **Activity Gauges**: Performance and activity meters
- **Slideout Menus**: Sliding navigation menus
- **Inline CTAs**: Call-to-action components
- **Carousels**: Content carousels and sliders
- **Progress Steps**: Multi-step process indicators
- **Activity Feeds**: Timeline and activity streams
- **Messaging**: Chat and messaging interfaces
- **Notifications**: Push notifications and alerts
- **Calendars**: Date pickers and calendar views
- **Tabs**: Tabbed content interfaces
- **Tables**: Advanced data tables
- **Code Snippets**: Code display and highlighting
- **Miscellaneous**: Additional utility components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- React 18+
- TypeScript 5.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/resact-design-system.git

# Install dependencies
cd resact-design-system
npm install

# Start development server
npm run dev
```

### Basic Usage

```tsx
import React from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';

function App() {
  return (
    <div className="p-8">
      <Card className="max-w-md mx-auto p-6">
        <h2 className="mb-4">Welcome to Resact</h2>
        <p className="mb-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          Start building amazing HR applications with our design system.
        </p>
        <Button className="w-full">
          Get Started
        </Button>
      </Card>
    </div>
  );
}

export default App;
```

## 🎨 Design Tokens

### Color System

#### Primary Brand Colors
```css
--brown-50: #f6f2f0;   /* Light backgrounds */
--brown-100: #f0ece9;  /* Subtle backgrounds */
--brown-200: #e2d6d0;  /* Borders and dividers */
--brown-300: #d1bfb6;  /* Disabled states */
--brown-400: #b5978c;  /* Placeholders */
--brown-500: #947068;  /* Primary brand */
--brown-600: #7a5a54;  /* Primary dark */
--brown-700: #664242;  /* Text and focus */
--brown-800: #4d3232;  /* Dark text */
--brown-900: #3d2626;  /* Darkest text */
```

#### Text Colors
```css
--color-text-primary: #2c2420;      /* Primary text */
--color-text-secondary: #544d47;    /* Secondary text */
--color-text-tertiary: #6b6058;     /* Tertiary text */
--color-text-quaternary: #8a7f73;   /* Muted text */
--color-text-placeholder: #b5a99c;  /* Placeholder text */
--color-text-disabled: #d4cdc1;     /* Disabled text */
```

#### Semantic Colors
```css
/* Success (Green) */
--success-500: #22c55e;
--success-700: #15803d;

/* Danger (Red) */
--danger-500: #ef4444;
--danger-700: #b91c1c;

/* Warning (Amber) */
--warning-500: #f59e0b;
--warning-700: #b45309;

/* Info (Blue) */
--info-500: #3b82f6;
--info-700: #1d4ed8;
```

### Typography Scale

#### Display Sizes
```css
--text-display-2xl: 72px;  /* 72px / 1.1 line-height */
--text-display-xl: 60px;   /* 60px / 1.1 line-height */
--text-display-lg: 48px;   /* 48px / 1.2 line-height */
--text-display-md: 36px;   /* 36px / 1.2 line-height */
--text-display-sm: 30px;   /* 30px / 1.3 line-height */
--text-display-xs: 24px;   /* 24px / 1.3 line-height */
```

#### Body Text Sizes
```css
--text-xl: 20px;  /* 20px / 1.4 line-height */
--text-lg: 18px;  /* 18px / 1.4 line-height */
--text-md: 16px;  /* 16px / 1.6 line-height */
--text-sm: 14px;  /* 14px / 1.5 line-height */
--text-xs: 12px;  /* 12px / 1.4 line-height */
```

### Spacing System
```css
--spacing: 4px;  /* Base spacing unit */

/* Usage examples */
.p-1 { padding: 4px; }
.p-2 { padding: 8px; }
.p-4 { padding: 16px; }
.p-6 { padding: 24px; }
.p-8 { padding: 32px; }
```

### Border Radius
```css
--radius-sm: 6px;   /* Small radius */
--radius-md: 8px;   /* Medium radius */
--radius: 10px;     /* Default radius */
--radius-lg: 10px;  /* Large radius */
--radius-xl: 14px;  /* Extra large radius */
```

## 🎭 Animation System

### Core Principles
- **Purposeful**: Every animation serves a functional purpose
- **Performant**: 60fps animations using transform and opacity
- **Accessible**: Respects `prefers-reduced-motion`
- **Consistent**: Unified timing and easing across components

### Animation Variants

#### Page Transitions
```tsx
const PAGE_VARIANTS = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3, 
      ease: "easeIn" 
    }
  }
};
```

#### Card Hover Effects
```tsx
const CARD_VARIANTS = {
  initial: { 
    scale: 1, 
    y: 0 
  },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  }
};
```

#### Component-Specific Animations
- **Input Components**: Typewriter effects for text demonstration
- **Menu Components**: Sliding and accordion animations
- **Chart Components**: Progressive data visualization
- **Loading States**: Skeleton animations and spinners

## 🏗️ Architecture

### File Structure
```
/
├── App.tsx                 # Main application entry
├── styles/
│   ├── globals.css        # Global styles and CSS variables
│   └── typography.css     # Typography system
├── components/
│   ├── ui/               # Base UI components (shadcn/ui)
│   ├── shared/           # Shared utility components
│   ├── constants/        # Configuration and data
│   ├── hooks/           # Custom React hooks
│   └── [ComponentName]Page.tsx  # Individual component pages
└── README.md            # This documentation
```

### Technology Stack

#### Core Technologies
- **React 18+**: Latest React with Concurrent Features
- **TypeScript 5.0+**: Full type safety and developer experience
- **Tailwind CSS v4**: Utility-first CSS with CSS variables
- **Motion**: Smooth, performant animations
- **Lucide React**: Consistent icon system

#### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **shadcn/ui**: Base component library

### Component Development Patterns

#### Component Structure
```tsx
interface ComponentProps {
  // Props interface
}

export function Component({ ...props }: ComponentProps) {
  // Component logic
  return (
    <motion.div
      variants={COMPONENT_VARIANTS}
      initial="initial"
      animate="animate"
      className="component-styles"
    >
      {/* Component content */}
    </motion.div>
  );
}
```

#### Page Component Structure
```tsx
interface PageProps {
  onBack: () => void;
  components: ComponentData[];
  onComponentClick: (name: string) => void;
  currentComponent: string;
}

export function ComponentPage({ onBack, components, onComponentClick, currentComponent }: PageProps) {
  return (
    <div className="min-h-screen bg-brown-50/30">
      <MainSidebar 
        components={components}
        onComponentClick={onComponentClick}
        currentComponent={currentComponent}
      />
      <div className="pl-64">
        <PageHeader onBack={onBack} title="Component Name" />
        {/* Page content */}
      </div>
    </div>
  );
}
```

## 🧩 Component Usage Examples

### Button Component
```tsx
import { Button } from './components/ui/button';

// Primary button
<Button>Primary Action</Button>

// Secondary button
<Button variant="secondary">Secondary Action</Button>

// Destructive button
<Button variant="destructive">Delete Item</Button>

// With icon
<Button>
  <PlusIcon className="w-4 h-4 mr-2" />
  Add Item
</Button>
```

### Card Component
```tsx
import { Card, CardHeader, CardContent, CardFooter } from './components/ui/card';

<Card className="max-w-md">
  <CardHeader>
    <h3>Employee Profile</h3>
  </CardHeader>
  <CardContent>
    <p>Employee information and details...</p>
  </CardContent>
  <CardFooter>
    <Button>Edit Profile</Button>
  </CardFooter>
</Card>
```

### Form Components
```tsx
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Button } from './components/ui/button';

<form className="space-y-4">
  <div>
    <Label htmlFor="email">Email Address</Label>
    <Input 
      id="email" 
      type="email" 
      placeholder="Enter your email"
      className="mt-1"
    />
  </div>
  <Button type="submit" className="w-full">
    Submit
  </Button>
</form>
```

## 🎯 HR-Specific Components

### Dashboard Widgets
```tsx
import { DashboardWidget } from './components/dashboard/DashboardWidget';

<DashboardWidget
  title="Active Employees"
  value="1,247"
  change="+12%"
  trend="up"
  icon={<UsersIcon />}
/>
```

### Employee Cards
```tsx
import { EmployeeCard } from './components/hr/EmployeeCard';

<EmployeeCard
  name="Sarah Johnson"
  position="Senior Developer"
  department="Engineering"
  avatar="/avatars/sarah.jpg"
  status="active"
/>
```

### Performance Charts
```tsx
import { PerformanceChart } from './components/charts/PerformanceChart';

<PerformanceChart
  data={performanceData}
  period="quarterly"
  metric="performance_score"
/>
```

## 🌙 Dark Mode Support

The design system includes comprehensive dark mode support with automatic theme switching:

```tsx
// Toggle dark mode
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };
  
  return (
    <Button onClick={toggleTheme} variant="ghost">
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
```

### Dark Mode Color Tokens
```css
.dark {
  --color-text-primary: #fefefe;
  --color-text-secondary: #f3f1ee;
  --color-bg-primary: #1c1816;
  --color-bg-secondary: #2c2420;
  /* ... additional dark mode tokens */
}
```

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- **Color Contrast**: All text meets 4.5:1 contrast ratio minimum
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Keyboard Navigation**: Full keyboard accessibility
- **Reduced Motion**: Respects `prefers-reduced-motion`

### Accessibility Features
```tsx
// Example accessible button
<Button
  aria-label="Delete employee record"
  aria-describedby="delete-warning"
  onClick={handleDelete}
>
  <TrashIcon aria-hidden="true" />
</Button>

// Screen reader announcement
<div id="delete-warning" className="sr-only">
  This action cannot be undone
</div>
```

## 🔧 Customization

### CSS Variables
Customize the design system by overriding CSS variables:

```css
:root {
  /* Override primary brand color */
  --brown-500: #8b5a3c; 
  
  /* Custom spacing */
  --spacing: 8px;
  
  /* Custom border radius */
  --radius: 6px;
}
```

### Component Variants
Extend components with custom variants:

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-brown-500 text-white hover:bg-brown-600",
        custom: "bg-purple-500 text-white hover:bg-purple-600",
      }
    }
  }
);
```

## 📱 Responsive Design

### Breakpoint System
```css
/* Mobile first approach */
.container {
  padding: 1rem; /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 2rem; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem; /* Desktop */
  }
}
```

### Responsive Components
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Responsive grid layout */}
</div>
```

## 🧪 Testing

### Component Testing
```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});
```

### Accessibility Testing
```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

test('Button should not have accessibility violations', async () => {
  const { container } = render(<Button>Test</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 📈 Performance

### Optimization Strategies
- **Tree Shaking**: Import only needed components
- **Code Splitting**: Lazy load component pages
- **CSS Variables**: Runtime theme switching without re-compilation
- **Optimized Animations**: Transform and opacity only for 60fps performance

### Bundle Size
- Core components: ~50KB gzipped
- Individual component pages: ~10-15KB each
- Total system: ~200KB gzipped

## 🤝 Contributing

### Development Setup
```bash
# Clone and setup
git clone https://github.com/your-org/resact-design-system.git
cd resact-design-system
npm install

# Start development
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Component Development Guidelines

1. **Follow naming conventions**: PascalCase for components
2. **Use TypeScript**: Full type definitions required
3. **Include animations**: Motion variants for interactions
4. **Test accessibility**: WCAG 2.1 AA compliance
5. **Document usage**: Examples and props documentation
6. **Responsive design**: Mobile-first approach

### Pull Request Process

1. Create feature branch from `main`
2. Develop component with tests
3. Update documentation
4. Submit PR with detailed description
5. Pass CI/CD checks
6. Code review approval
7. Merge to main

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Created with ❤️ by Mostafa Akajdid**

- **Portfolio**: [akajdidm.vercel.app](https://akajdidm.vercel.app/)
- **LinkedIn**: [Mostafa Akajdid](https://linkedin.com/in/mostafa-akajdid)
- **GitHub**: [akajdid-mostafa](https://github.com/akajdid-mostafa)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the foundational component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Motion](https://motion.dev/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon system
- [Untitled UI](https://untitledui.com/) for design inspiration

## 📚 Additional Resources

- [Component Storybook](https://storybook.resact.com) - Interactive component explorer
- [Design Tokens](https://tokens.resact.com) - Complete design token documentation
- [Figma Library](https://figma.com/resact) - Design files and prototypes
- [API Documentation](https://docs.resact.com) - Component API reference

---

© 2025 Resact Design System. All Rights Reserved.