export interface ProjectMetric {
  label: string;
  value: number;
  suffix: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  engagement: string;
  subtitle: string;
  description: string;
  badges: string[];
  features: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  challenges: ProjectChallenge[];
  architecture: string;
  visualType: 'portal' | 'analytics' | 'drone' | 'itc' | 'hierarchy';
  color: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'brightspeed',
    title: 'Enterprise & Wholesale Customer Portal',
    company: 'Brightspeed',
    engagement: 'Infinite Computer Solutions • Client Delivery',
    subtitle: 'Handling 15,000+ monthly orders with seamless enterprise-grade experience',
    description:
      'A comprehensive enterprise portal enabling account management, real-time order tracking, automated ticketing, and integrated billing for Brightspeed\'s B2B customers. Built with microservices architecture to handle massive scale with 99.9% uptime.',
    badges: ['Real-time System', 'AI Powered', 'Enterprise Scale'],
    features: [
      'Role-Based Account Management (Admin, Enterprise, Wholesale) with granular permissions',
      'JWT + OAuth2 Authentication with refresh token rotation and session management',
      'Real-time Order Tracking with WebSocket push notifications and live status updates',
      'AI-Powered Service Ticketing with automatic classification and priority routing',
      'SLA Tracking Dashboard with automated alerts and compliance reporting',
      'Multi-Gateway Payment Integration (Stripe, PayPal, Razorpay) with PCI-DSS compliance',
      'Automated Invoice Generation and reconciliation with audit trails',
      'Advanced Analytics Dashboard with customizable reports and data export',
    ],
    techStack: [
      'React',
      'Redux',
      'TypeScript',
      'Java',
      'Spring Boot',
      'Microservices',
      'MySQL',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'WebSockets',
      'OAuth2',
      'JWT',
      'Stripe API',
    ],
    metrics: [
      { label: 'Monthly Orders', value: 15000, suffix: '+' },
      { label: 'Support Overhead Reduction', value: 30, suffix: '%' },
      { label: 'Faster Payments', value: 40, suffix: '%' },
      { label: 'Uptime', value: 99.9, suffix: '%' },
    ],
    challenges: [
      {
        title: 'High-Volume Order Processing',
        description:
          'System needed to handle 15,000+ concurrent orders per month with zero data loss during peak hours.',
        solution:
          'Implemented event-driven architecture with Apache Kafka for order processing, database sharding for horizontal scaling, and circuit breakers for fault tolerance.',
      },
      {
        title: 'Real-Time Synchronization',
        description:
          'Order status updates needed to propagate instantly across all connected clients.',
        solution:
          'Built a WebSocket layer with STOMP protocol, implemented Redis pub/sub for multi-instance synchronization, and used optimistic locking for concurrent updates.',
      },
      {
        title: 'Payment Security & Compliance',
        description:
          'Multi-gateway payment system required PCI-DSS compliance across different providers.',
        solution:
          'Created a payment abstraction layer with tokenized card storage, implemented 3D Secure for high-value transactions, and built comprehensive audit logging.',
      },
    ],
    architecture:
      'Microservices architecture with API Gateway (Spring Cloud Gateway), Service Discovery (Eureka), Config Server, Circuit Breaker (Resilience4j), Event Bus (Kafka), and distributed tracing (Zipkin). Deployed on AWS EKS with auto-scaling groups and multi-AZ deployment.',
    visualType: 'portal',
    color: '#00d4ff',
    icon: '🏢',
  },
  {
    id: 'verizon',
    title: 'Smart Analytics System',
    company: 'Verizon',
    engagement: 'Infinite Computer Solutions • Client Delivery',
    subtitle: 'Real-time 4G/5G network monitoring and predictive analytics platform',
    description:
      'An intelligent analytics platform for monitoring Verizon\'s 4G/5G network infrastructure in real-time. Features GIS-based tower visualization, ML-driven failure prediction, and streaming analytics for proactive network management.',
    badges: ['GIS Heatmaps', 'Kafka Streaming', 'ML Prediction'],
    features: [
      'Interactive Tower Visualization with Leaflet GIS maps and real-time status overlays',
      'Dynamic Heatmaps for network issue detection with zoom-adaptive resolution',
      'Network Health Monitoring Dashboard (latency, signal strength, downtime metrics)',
      'ML-Based Predictive Failure Detection with 92% accuracy using ensemble models',
      'Real-Time Kafka Streaming Pipeline for ingesting millions of events per second',
      'Multi-Channel Alert System (SMS, Email, Slack, PagerDuty) with escalation workflows',
      'Historical Analytics Dashboards with trend analysis and capacity planning tools',
      'Automated Root Cause Analysis with correlation engine across network layers',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Highcharts',
      'Leaflet',
      'Java',
      'Spring Boot',
      'Apache Kafka',
      'Redis',
      'Python',
      'TensorFlow',
      'PostgreSQL',
      'TimescaleDB',
      'Grafana',
      'Docker',
    ],
    metrics: [
      { label: 'Downtime Reduction', value: 35, suffix: '%' },
      { label: 'Faster Fault Detection', value: 50, suffix: '%' },
      { label: 'Events/Second', value: 1000000, suffix: '+' },
      { label: 'ML Accuracy', value: 92, suffix: '%' },
    ],
    challenges: [
      {
        title: 'Massive Data Ingestion',
        description:
          'Processing millions of telemetry events per second from thousands of cell towers across the country.',
        solution:
          'Built a multi-stage Kafka streaming pipeline with Kafka Streams for real-time aggregation, TimescaleDB for time-series storage, and Redis for hot data caching with TTL-based eviction.',
      },
      {
        title: 'Real-Time GIS Visualization',
        description:
          'Rendering thousands of tower markers with live status updates without browser performance degradation.',
        solution:
          'Implemented WebGL-based marker clustering, viewport-aware data loading, and delta-update protocol via WebSockets to minimize DOM manipulation.',
      },
      {
        title: 'Predictive Model Integration',
        description:
          'ML models needed to run inference in real-time on streaming data with sub-second latency.',
        solution:
          'Deployed TensorFlow models as microservices with gRPC, implemented model versioning with A/B testing, and used feature stores for consistent feature engineering.',
      },
    ],
    architecture:
      'Event-driven architecture with Kafka as the central nervous system. Data flows from tower sensors → Kafka Topics → Stream Processors → TimescaleDB/Redis. ML inference runs as separate microservices. Frontend consumes processed data via REST APIs and WebSocket streams. Monitoring via Grafana + Prometheus.',
    visualType: 'analytics',
    color: '#7c3aed',
    icon: '📡',
  },
  {
    id: 'qualcomm',
    title: 'Drone Management & Surveillance System',
    company: 'Qualcomm',
    engagement: 'Infinite Computer Solutions • Client Delivery',
    subtitle: 'Real-time drone surveillance with AI-powered incident detection',
    description:
      'An advanced drone management and surveillance platform for Qualcomm\'s autonomous drone fleet. Features live video streaming, AI-powered image recognition for incident detection, and real-time emergency response coordination.',
    badges: ['Live Video', 'OpenCV AI', 'Emergency Alerts'],
    features: [
      'Live Video Streaming Pipeline with FFmpeg transcoding and adaptive bitrate delivery',
      'AI Image Recognition using OpenCV for real-time object detection and classification',
      'Automated Incident Detection (fire, intrusion, anomalies) with confidence scoring',
      'Emergency Alert Integration with local emergency services and automated dispatch',
      'Multi-threaded Video Processing for parallel stream handling across drone fleet',
      'Flight Path Optimization with geofencing and no-fly zone enforcement',
      'Real-Time Telemetry Dashboard (altitude, speed, battery, GPS coordinates)',
      'Historical Incident Analysis with video playback and annotation tools',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Chart.js',
      'Java',
      'Spring Boot',
      'WebSockets',
      'MongoDB',
      'PostgreSQL',
      'FFmpeg',
      'OpenCV',
      'Python',
      'Docker',
      'RabbitMQ',
    ],
    metrics: [
      { label: 'Faster Response Time', value: 25, suffix: ' min' },
      { label: 'False Alert Reduction', value: 40, suffix: '%' },
      { label: 'Concurrent Streams', value: 50, suffix: '+' },
      { label: 'Detection Accuracy', value: 95, suffix: '%' },
    ],
    challenges: [
      {
        title: 'Low-Latency Video Streaming',
        description:
          'Live video feeds from 50+ drones needed sub-second latency for effective surveillance.',
        solution:
          'Built a custom streaming pipeline with FFmpeg for transcoding, WebRTC for last-mile delivery, and implemented adaptive bitrate switching based on network conditions.',
      },
      {
        title: 'Real-Time AI Processing',
        description:
          'Running computer vision models on multiple video streams simultaneously without dropping frames.',
        solution:
          'Implemented GPU-accelerated inference with batched processing, frame sampling strategies, and multi-threaded pipeline architecture with Java\'s CompletableFuture for async orchestration.',
      },
      {
        title: 'Emergency Response Coordination',
        description:
          'Detected incidents needed to trigger automated responses within seconds across multiple systems.',
        solution:
          'Created an event-driven alert pipeline with RabbitMQ, implemented priority queues for critical incidents, and built webhook integrations with emergency service APIs.',
      },
    ],
    architecture:
      'Hybrid architecture with edge processing on drone hardware and cloud-based analytics. Video streams flow through FFmpeg transcoder → AI inference pipeline → Event processor → Alert system. MongoDB stores unstructured video metadata, PostgreSQL handles structured operational data. WebSocket channels deliver real-time updates to the React dashboard.',
    visualType: 'drone',
    color: '#e040fb',
    icon: '🛸',
  },
  {
    id: 'mercedes-itc',
    title: 'IT Controlling (ITC) Platform',
    company: 'Mercedes-Benz',
    engagement: 'Capgemini • Client: MBRDI',
    subtitle: 'Enterprise IT financial planning and controlling for 1000+ users',
    description:
      'A SAP-based enterprise financial platform for IT budgeting, forecasting, cost allocation, and reporting across departments. Designed as a multi-layer architecture integrating ERP sources into planning and billing modules for accurate product-based IT costing.',
    badges: ['SAP BW', 'ABAP', 'Billing Automation'],
    features: [
      'C-FMP Financial Planning module for plan, forecast, and actuals integration from ERP',
      'Service Catalog (ServCat) to manage IT services and allocation-key-based cost allocation',
      'Billing4IT monthly billing engine for usage-based financial calculation and reporting',
      'Source → Staging → Application → Reporting layered architecture for reliable data flow',
      'Automated budget planning and forecasting with variance tracking dashboards',
      'Multi-ERP integration to normalize and consolidate financial datasets',
      'Role-aware UI for business users with simplified financial workflows',
      'Product-based IT cost tracking with improved transparency and accountability',
    ],
    techStack: [
      'ABAP',
      'SAP BW',
      'SAP UI5',
      'SAP Fiori',
      'ERP Integration',
      'Process Chains',
      'SAP Reporting',
    ],
    metrics: [
      { label: 'Enterprise Users', value: 1000, suffix: '+' },
      { label: 'Core Modules', value: 3, suffix: '' },
      { label: 'Data Layers', value: 4, suffix: '' },
      { label: 'Billing Cycle', value: 1, suffix: ' monthly' },
    ],
    challenges: [
      {
        title: 'Large Dataset Performance Bottlenecks',
        description:
          'Financial planning and billing pipelines slowed down under high-volume historical data operations.',
        solution:
          'Optimized ABAP transformations, introduced staged aggregation tables in SAP BW, and reduced heavy joins through precomputed reporting views.',
      },
      {
        title: 'Manual Data Flow Between C-FMP and ServCat',
        description:
          'Dependency on manual synchronization increased cycle times and risk of inconsistencies.',
        solution:
          'Implemented automated process-chain-driven sync jobs with reconciliation checkpoints and exception notifications for failed runs.',
      },
      {
        title: 'Complex UX for Non-Expert Users',
        description:
          'Business users struggled with technical workflows and dense financial interfaces.',
        solution:
          'Redesigned critical paths in SAP UI5/Fiori with guided actions, contextual tooltips, and role-specific simplified screens.',
      },
    ],
    architecture:
      'Multi-layer SAP enterprise architecture: Source systems (ERP) feed Staging models, transformed into Application data marts, and consumed by Reporting dashboards. Core modules include C-FMP, ServCat, and Billing4IT with ABAP business logic and SAP UI5/Fiori presentation.',
    visualType: 'itc',
    color: '#22d3ee',
    icon: '💼',
  },
  {
    id: 'mercedes-ohc',
    title: 'OHC Generic Hierarchy Management Tool',
    company: 'Mercedes-Benz',
    engagement: 'Capgemini • Client: MBRDI',
    subtitle: 'Dynamic hierarchy generation with Source → Work → Target flow in SAP BW',
    description:
      'An advanced hierarchy management platform that generates target hierarchies from multiple source hierarchies via an editable work hierarchy. Supports drag-drop editing, scheduled automation, inheritance logic, and diff-based comparison for enterprise hierarchy governance.',
    badges: ['Hierarchy Engine', 'Drag & Drop', 'Process Automation'],
    features: [
      'Core generation flow: Source Hierarchy → Work Hierarchy (editable) → Target Hierarchy',
      'Drag-and-drop node editing for insertion, deletion, and movement operations',
      'Manual and scheduled automatic hierarchy updates with job orchestration',
      'Diff view for hierarchy comparison and changed-node highlighting',
      'Translation support for multilingual hierarchy metadata',
      'Custom fields and profile-based configuration with inheritance behavior',
      'Excel export for hierarchy snapshots and audit-friendly sharing',
      'Programming interface for custom generation and validation logic',
    ],
    techStack: [
      'ABAP',
      'SAP BW',
      'ZCHIER Tables',
      'Process Chains',
      'Fiori Launchpad',
      'Excel Export',
      'Custom APIs',
    ],
    metrics: [
      { label: 'Hierarchy Stages', value: 3, suffix: '' },
      { label: 'Update Modes', value: 2, suffix: '' },
      { label: 'Inheritance Modes', value: 3, suffix: '' },
      { label: 'Data Consistency', value: 100, suffix: '%' },
    ],
    challenges: [
      {
        title: 'Complex Inheritance Logic',
        description:
          'Nodes required Complete, Partial, and New inheritance paths while preserving semantic correctness.',
        solution:
          'Implemented rule-driven ABAP inheritance engine with pre-validation passes and conflict resolution before final target generation.',
      },
      {
        title: 'Maintaining Consistency Across Source Hierarchies',
        description:
          'Multiple source trees introduced structural drift and mismatched definitions.',
        solution:
          'Built hierarchy diff and reconciliation workflows with node-level highlighting and guided merge decisions in the work hierarchy.',
      },
      {
        title: 'Balancing Manual Editing with Automation',
        description:
          'Users needed fine-grained edits while still relying on scheduled automation.',
        solution:
          'Added profile-based controls for editability, process-chain automation windows, and safe override points for expert users.',
      },
    ],
    architecture:
      'ABAP-driven hierarchy engine on SAP BW tables (ZCHIER*) with process-chain automation. Source hierarchies are normalized into a work hierarchy, enriched with inheritance/custom logic, and emitted as target hierarchy artifacts. Integrated with Fiori Launchpad for operational workflows.',
    visualType: 'hierarchy',
    color: '#f472b6',
    icon: '🌳',
  },
];
