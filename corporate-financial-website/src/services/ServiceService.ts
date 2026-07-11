import { Service } from '@/types/services';

// Service data service layer
export class ServiceService {
  // Mock service data - in production, this would fetch from CMS or API
  private static services: Service[] = [
    {
      slug: 'wealth-management',
      title: 'Wealth Management',
      description: 'Comprehensive wealth planning and management services for families, entrepreneurs, and institutions with a focus on long-term wealth preservation.',
      longDescription: 'Our wealth management services provide holistic financial solutions tailored to high-net-worth individuals and families. We combine sophisticated investment strategies with comprehensive estate planning, tax optimization, and family office services to preserve and grow generational wealth.',
      stats: '£40bn+ Assets',
      services: ['Family Office Services', 'Estate Planning', 'Investment Management', 'Tax Advisory'],
      targetClients: ['High-net-worth individuals', 'Family offices', 'Entrepreneurs', 'Institutional clients'],
      caseStudy: {
        title: 'Multi-Generational Wealth Transfer',
        description: 'Successfully structured a £500M wealth transfer across three generations with optimized tax efficiency.',
        results: ['95% tax efficiency achieved', 'Smooth generational transition', 'Preserved family legacy']
      },
      color: 'border-blue-500'
    },
    {
      slug: 'global-advisory',
      title: 'Global Advisory',
      description: 'M&A, restructuring, and strategic advisory services with deep sector expertise across global markets.',
      longDescription: 'Our global advisory team delivers strategic counsel on complex transactions and business transformations. With deep sector expertise and global reach, we advise on mergers and acquisitions, restructuring, and strategic initiatives that drive value creation.',
      stats: '1,200+ Transactions',
      services: ['Mergers & Acquisitions', 'Debt Advisory', 'Restructuring', 'Strategic Advisory'],
      targetClients: ['Corporations', 'Private equity firms', 'Financial institutions', 'Government entities'],
      caseStudy: {
        title: 'Cross-Border Acquisition',
        description: 'Advised on a $2.3B cross-border acquisition in the technology sector.',
        results: ['$2.3B transaction value', '40% premium achieved', 'Seamless integration completed']
      },
      color: 'border-green-500'
    },
    {
      slug: 'asset-management',
      title: 'Asset Management',
      description: 'Institutional investment solutions across equities, fixed income, and alternative asset classes with a focus on sustainable returns.',
      longDescription: 'We provide institutional-quality investment solutions across traditional and alternative asset classes. Our disciplined approach combines fundamental research with quantitative analysis to deliver consistent, risk-adjusted returns for our clients.',
      stats: '€35bn+ AUM',
      services: ['Equity Strategies', 'Fixed Income', 'Multi-Asset Solutions', 'Sustainable Investing'],
      targetClients: ['Pension funds', 'Insurance companies', 'Sovereign wealth funds', 'Endowments'],
      caseStudy: {
        title: 'Sustainable Investment Portfolio',
        description: 'Developed a €2B sustainable investment portfolio with carbon-neutral objectives.',
        results: ['€2B AUM acquired', 'Carbon footprint reduced by 75%', 'Top quartile performance']
      },
      color: 'border-purple-500'
    },
    {
      slug: 'five-arrows',
      title: 'Five Arrows',
      description: 'Alternative asset management including private equity, real estate, infrastructure, and hedge funds for sophisticated investors.',
      longDescription: 'Our Five Arrows platform offers access to alternative investments across private equity, real estate, infrastructure, and hedge funds. We provide sophisticated investors with opportunities to diversify and enhance portfolio returns through non-traditional asset classes.',
      stats: '€15bn+ Assets',
      services: ['Private Equity', 'Real Estate', 'Infrastructure', 'Hedge Funds'],
      targetClients: ['Institutional investors', 'Family offices', 'Fund managers', 'Sovereign wealth funds'],
      caseStudy: {
        title: 'Infrastructure Development Fund',
        description: 'Launched a €1.5B infrastructure fund focused on European renewable energy projects.',
        results: ['€1.5B fund size', '12 projects financed', '15% annual returns achieved']
      },
      color: 'border-orange-500'
    },
    {
      slug: 'risk-management',
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for financial institutions and corporations.',
      longDescription: 'Our risk management services help organizations identify, assess, and mitigate financial, operational, and strategic risks. We provide tailored solutions to protect assets and ensure business continuity in an increasingly complex regulatory environment.',
      stats: '95% Risk Reduction',
      services: ['Financial Risk Assessment', 'Operational Risk Management', 'Regulatory Compliance', 'Crisis Management'],
      targetClients: ['Banks and financial institutions', 'Insurance companies', 'Large corporations', 'Public sector organizations'],
      caseStudy: {
        title: 'Regulatory Risk Framework',
        description: 'Implemented comprehensive risk framework for major European bank compliance with Basel III requirements.',
        results: ['100% regulatory compliance', '30% reduction in operational risk', '€50M in avoided penalties']
      },
      color: 'border-red-500'
    },
    {
      slug: 'investment-management',
      title: 'Investment Management',
      description: 'Active portfolio management strategies across global markets with focus on risk-adjusted returns.',
      longDescription: 'Our investment management approach combines fundamental research with quantitative analysis to deliver consistent, risk-adjusted returns. We offer customized solutions for institutional and high-net-worth clients across multiple asset classes.',
      stats: '15% Average Returns',
      services: ['Equity Management', 'Fixed Income Strategies', 'Multi-Asset Portfolios', 'Quantitative Analysis'],
      targetClients: ['Institutional investors', 'High-net-worth individuals', 'Family offices', 'Pension funds'],
      caseStudy: {
        title: 'Global Equity Portfolio',
        description: 'Managed $500M global equity portfolio with focus on emerging markets growth.',
        results: ['18% annual returns', 'Top 10% percentile performance', 'Risk-adjusted outperformance']
      },
      color: 'border-indigo-500'
    },
    {
      slug: 'corporate-finance',
      title: 'Corporate Finance',
      description: 'Strategic financial advisory services for corporate clients including capital structure optimization and fundraising.',
      longDescription: 'We provide strategic corporate finance advisory services to help companies optimize their capital structure, raise capital, and execute complex financial transactions. Our expertise spans IPOs, debt financing, and corporate restructuring.',
      stats: '$50B+ Capital Raised',
      services: ['Capital Structure Advisory', 'Fundraising & IPOs', 'Debt Financing', 'Financial Restructuring'],
      targetClients: ['Public companies', 'Private corporations', 'Startups', 'Private equity portfolio companies'],
      caseStudy: {
        title: 'Major IPO Advisory',
        description: 'Advised technology company on $2.8B IPO on NASDAQ.',
        results: ['$2.8B raised', '25% oversubscription', 'Successful market debut']
      },
      color: 'border-teal-500'
    },
    {
      slug: 'wealth-advisory',
      title: 'Wealth Advisory',
      description: 'Specialized advisory services for high-net-worth individuals on wealth planning and preservation strategies.',
      longDescription: 'Our wealth advisory services provide personalized guidance to high-net-worth individuals on complex wealth planning, investment strategy, and legacy preservation. We work closely with families to develop comprehensive financial strategies.',
      stats: '500+ Families Served',
      services: ['Wealth Planning', 'Investment Strategy', 'Legacy Planning', 'Family Governance'],
      targetClients: ['Ultra-high-net-worth individuals', 'Multi-generational families', 'Business owners', 'Executives'],
      caseStudy: {
        title: 'Family Wealth Foundation',
        description: 'Established comprehensive wealth foundation for three-generation family with $2B portfolio.',
        results: ['$2B assets under management', 'Charitable giving framework established', 'Family governance structure implemented']
      },
      color: 'border-amber-500'
    }
  ];

  // Get all services
  static getAllServices(): Service[] {
    return [...this.services];
  }

  // Get service by slug
  static getServiceBySlug(slug: string): Service | null {
    const service = this.services.find(s => s.slug === slug);
    if (process.env.NODE_ENV === 'development') {
      console.log(`[ServiceService] Looking for service with slug: ${slug}`);
      console.log(`[ServiceService] Found: ${service ? service.title : 'null'}`);
    }
    return service || null;
  }

  // Get all service slugs for static generation
  static getAllServiceSlugs(): { serviceSlug: string }[] {
    return this.services.map(service => ({
      serviceSlug: service.slug
    }));
  }

  // Check if service exists
  static serviceExists(slug: string): boolean {
    return this.services.some(service => service.slug === slug);
  }
}