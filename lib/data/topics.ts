import type { Topic } from '@/lib/types';

export const topics: Topic[] = [
  // ── Backend Engineering ──────────────────────────────────────────
  {
    id: 'be-node-internals',
    categoryId: 'backend-engineering',
    title: 'Node.js Internals',
    description:
      'Understand the V8 engine, libuv, and how Node.js executes JavaScript outside the browser.',
    overview:
      'Node.js Internals covers the architecture of the Node.js runtime, including the V8 JavaScript engine, the libuv event loop library, and the C++ bindings that connect them. You will learn how Node.js manages I/O operations, handles concurrency, and provides non-blocking APIs.',
    difficulty: 'Intermediate',
    estimatedHours: 12,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://nodejs.org/en/docs',
    objectives: [
      { title: 'Understand V8 engine', description: 'Learn how V8 compiles and executes JavaScript.' },
      { title: 'Master libuv', description: 'Explore the event loop, thread pool, and async I/O.' },
      { title: 'C++ bindings', description: 'Understand how JS calls map to native code.' },
    ],
    resources: [
      { type: 'docs', title: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs', description: 'Complete API reference and guides.' },
      { type: 'youtube', title: 'Node.js Internals Deep Dive', url: 'https://youtube.com', description: 'Comprehensive video series on Node internals.' },
      { type: 'article', title: 'How Node.js Works', url: 'https://nodejs.org/en/about', description: 'Explainer on the Node.js runtime model.' },
      { type: 'book', title: 'Node.js Design Patterns', url: 'https://nodejsdesignpatterns.com', description: 'The definitive book on Node.js patterns.' },
    ],
  },
  {
    id: 'be-event-loop',
    categoryId: 'backend-engineering',
    title: 'Event Loop',
    description:
      'Deep dive into the Node.js event loop phases, microtasks, and macrotasks.',
    overview:
      'The event loop is the heart of Node.js async I/O. This topic covers the six phases of the event loop (timers, pending callbacks, idle/prepare, poll, check, close callbacks), the distinction between microtasks and macrotasks, and how nextTick and Promise queues interact.',
    difficulty: 'Advanced',
    estimatedHours: 10,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick',
    objectives: [
      { title: 'Event loop phases', description: 'Understand each phase and its callbacks.' },
      { title: 'Microtasks vs macrotasks', description: 'Learn the execution priority of different async operations.' },
      { title: 'nextTick vs setImmediate', description: 'Know when to use each and why.' },
    ],
    resources: [
      { type: 'docs', title: 'Event Loop Guide', url: 'https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick', description: 'Official guide on the event loop.' },
      { type: 'youtube', title: 'Event Loop Explained', url: 'https://youtube.com', description: 'Visual walkthrough of event loop phases.' },
      { type: 'article', title: 'The Node.js Event Loop', url: 'https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick', description: 'In-depth article on event loop behavior.' },
      { type: 'book', title: 'Node.js Async Patterns', url: 'https://nodejsdesignpatterns.com', description: 'Chapter on async patterns and the event loop.' },
    ],
  },
  {
    id: 'be-streams',
    categoryId: 'backend-engineering',
    title: 'Streams',
    description:
      'Work with readable, writable, duplex, and transform streams for efficient data processing.',
    overview:
      'Streams are Node.js way of handling reading and writing data chunk by chunk, enabling memory-efficient processing of large datasets. This topic covers the four stream types, backpressure, piping, and building custom streams.',
    difficulty: 'Advanced',
    estimatedHours: 8,
    status: 'in-progress',
    progress: 65,
    documentationUrl: 'https://nodejs.org/api/stream.html',
    objectives: [
      { title: 'Stream types', description: 'Understand Readable, Writable, Duplex, and Transform.' },
      { title: 'Backpressure', description: 'Learn how to handle flow control in streams.' },
      { title: 'Custom streams', description: 'Build your own stream implementations.' },
    ],
    resources: [
      { type: 'docs', title: 'Stream API', url: 'https://nodejs.org/api/stream.html', description: 'Complete stream API documentation.' },
      { type: 'youtube', title: 'Node.js Streams', url: 'https://youtube.com', description: 'Hands-on tutorial on streams.' },
      { type: 'article', title: 'Understanding Streams', url: 'https://nodejs.org/en/knowledge/advanced/streams/', description: 'Detailed article on stream internals.' },
      { type: 'book', title: 'Stream Design Patterns', url: 'https://nodejsdesignpatterns.com', description: 'Patterns for stream-based architectures.' },
    ],
  },
  {
    id: 'be-worker-threads',
    categoryId: 'backend-engineering',
    title: 'Worker Threads',
    description:
      'Offload CPU-intensive tasks to worker threads for true parallelism in Node.js.',
    overview:
      'Worker Threads allow Node.js to run JavaScript in parallel using a pool of worker threads. This topic covers creating workers, transferring data with SharedArrayBuffer, worker communication via MessageChannel, and when to use workers vs child processes.',
    difficulty: 'Advanced',
    estimatedHours: 8,
    status: 'in-progress',
    progress: 40,
    documentationUrl: 'https://nodejs.org/api/worker_threads.html',
    objectives: [
      { title: 'Create worker threads', description: 'Spawn and manage worker instances.' },
      { title: 'Data transfer', description: 'Use postMessage and SharedArrayBuffer efficiently.' },
      { title: 'Worker pools', description: 'Build a reusable worker pool pattern.' },
    ],
    resources: [
      { type: 'docs', title: 'Worker Threads API', url: 'https://nodejs.org/api/worker_threads.html', description: 'Official worker threads documentation.' },
      { type: 'youtube', title: 'Parallel Processing in Node', url: 'https://youtube.com', description: 'Video guide on worker threads.' },
      { type: 'article', title: 'When to Use Worker Threads', url: 'https://nodejs.org/en/docs/guides/dont-block-the-event-loop', description: 'Best practices for CPU-bound tasks.' },
      { type: 'book', title: 'Multithreading in Node.js', url: 'https://nodejsdesignpatterns.com', description: 'Advanced patterns for parallel execution.' },
    ],
  },
  {
    id: 'be-typescript-advanced',
    categoryId: 'backend-engineering',
    title: 'TypeScript Advanced',
    description:
      'Master advanced TypeScript types, generics, conditional types, and type-level programming.',
    overview:
      'Advanced TypeScript covers generics, conditional types, mapped types, template literal types, and type inference. You will learn to build type-safe APIs, use utility types effectively, and leverage the type system to catch bugs at compile time.',
    difficulty: 'Advanced',
    estimatedHours: 14,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://www.typescriptlang.org/docs',
    objectives: [
      { title: 'Generics mastery', description: 'Write flexible, reusable generic functions and types.' },
      { title: 'Conditional types', description: 'Build types that adapt based on input types.' },
      { title: 'Type-level programming', description: 'Compute types at the type level for maximum safety.' },
    ],
    resources: [
      { type: 'docs', title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs', description: 'Official TypeScript documentation.' },
      { type: 'youtube', title: 'Advanced TypeScript', url: 'https://youtube.com', description: 'Deep dive into advanced type features.' },
      { type: 'article', title: 'Type Manipulation', url: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html', description: 'Guide on deriving types from other types.' },
      { type: 'book', title: 'Effective TypeScript', url: 'https://effectivetypescript.com', description: '62 specific ways to improve your TypeScript.' },
    ],
  },
  {
    id: 'be-postgresql',
    categoryId: 'backend-engineering',
    title: 'PostgreSQL Deep Dive',
    description:
      'Master PostgreSQL internals, indexing strategies, query optimization, and advanced features.',
    overview:
      'PostgreSQL Deep Dive covers the architecture of PostgreSQL, including the MVCC concurrency model, WAL, and query planner. You will learn about B-tree, GIN, and GiST indexes, query optimization with EXPLAIN ANALYZE, and advanced features like JSONB, full-text search, and partitioning.',
    difficulty: 'Expert',
    estimatedHours: 16,
    status: 'in-progress',
    progress: 30,
    documentationUrl: 'https://www.postgresql.org/docs/',
    objectives: [
      { title: 'MVCC & concurrency', description: 'Understand multi-version concurrency control.' },
      { title: 'Indexing strategies', description: 'Choose and optimize indexes for your queries.' },
      { title: 'Query optimization', description: 'Use EXPLAIN ANALYZE to find and fix slow queries.' },
    ],
    resources: [
      { type: 'docs', title: 'PostgreSQL Manual', url: 'https://www.postgresql.org/docs/', description: 'Complete PostgreSQL documentation.' },
      { type: 'youtube', title: 'PostgreSQL Internals', url: 'https://youtube.com', description: 'Video series on PostgreSQL architecture.' },
      { type: 'article', title: 'Indexing Best Practices', url: 'https://www.postgresql.org/docs/current/indexes.html', description: 'Guide to PostgreSQL indexing.' },
      { type: 'book', title: 'PostgreSQL Up & Running', url: 'https://www.oreilly.com', description: 'Practical guide to PostgreSQL.' },
    ],
  },
  {
    id: 'be-redis',
    categoryId: 'backend-engineering',
    title: 'Redis Fundamentals',
    description:
      'Learn Redis data structures, persistence, pub/sub, and caching patterns.',
    overview:
      'Redis Fundamentals covers the in-memory data store and its use cases. You will learn about strings, hashes, lists, sets, and sorted sets, persistence options (RDB and AOF), pub/sub messaging, Lua scripting, and common caching patterns like cache-aside and write-through.',
    difficulty: 'Intermediate',
    estimatedHours: 10,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://redis.io/docs/',
    objectives: [
      { title: 'Data structures', description: 'Master all Redis data types and their use cases.' },
      { title: 'Persistence', description: 'Understand RDB snapshots and AOF logging.' },
      { title: 'Caching patterns', description: 'Implement cache-aside, write-through, and write-behind.' },
    ],
    resources: [
      { type: 'docs', title: 'Redis Documentation', url: 'https://redis.io/docs/', description: 'Official Redis documentation.' },
      { type: 'youtube', title: 'Redis Crash Course', url: 'https://youtube.com', description: 'Quick introduction to Redis.' },
      { type: 'article', title: 'Redis Patterns', url: 'https://redis.io/docs/manual/patterns/', description: 'Common Redis usage patterns.' },
      { type: 'book', title: 'Redis in Action', url: 'https://www.manning.com', description: 'Comprehensive guide to Redis.' },
    ],
  },

  // ── System Design ────────────────────────────────────────────────
  {
    id: 'sd-url-shortener',
    categoryId: 'system-design',
    title: 'URL Shortener',
    description:
      'Design a scalable URL shortening service like bit.ly with analytics and redirects.',
    overview:
      'Design a URL shortener that generates short aliases for long URLs, handles redirects at scale, and tracks click analytics. Key challenges include ID generation (base62 encoding), collision handling, caching hot URLs, and handling high read throughput.',
    difficulty: 'Beginner',
    estimatedHours: 6,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://systemdesign.one/url-shortener-system-design/',
    objectives: [
      { title: 'ID generation', description: 'Choose between auto-increment, UUID, and base62 encoding.' },
      { title: 'Caching strategy', description: 'Cache hot URLs for fast redirects.' },
      { title: 'Analytics pipeline', description: 'Track clicks without slowing down redirects.' },
    ],
    resources: [
      { type: 'docs', title: 'URL Shortener Design', url: 'https://systemdesign.one/url-shortener-system-design/', description: 'Complete system design breakdown.' },
      { type: 'youtube', title: 'System Design: URL Shortener', url: 'https://youtube.com', description: 'Video walkthrough of the design.' },
      { type: 'article', title: 'Designing a URL Shortener', url: 'https://systemdesign.one/url-shortener-system-design/', description: 'Step-by-step design article.' },
      { type: 'book', title: 'System Design Interview', url: 'https://www.amazon.com', description: 'Chapter on URL shortener design.' },
    ],
  },
  {
    id: 'sd-notification-service',
    categoryId: 'system-design',
    title: 'Notification Service',
    description:
      'Build a multi-channel notification system supporting email, SMS, and push notifications.',
    overview:
      'Design a notification service that sends messages across multiple channels (email, SMS, push). Covers message queuing, template management, rate limiting, retry strategies, deduplication, and tracking delivery status.',
    difficulty: 'Intermediate',
    estimatedHours: 10,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://systemdesign.one/notification-system-design/',
    objectives: [
      { title: 'Multi-channel delivery', description: 'Abstract channel-specific providers behind a common interface.' },
      { title: 'Queue & retry', description: 'Use message queues with exponential backoff for retries.' },
      { title: 'Rate limiting', description: 'Prevent notification flooding per user.' },
    ],
    resources: [
      { type: 'docs', title: 'Notification System Design', url: 'https://systemdesign.one/notification-system-design/', description: 'Detailed design guide.' },
      { type: 'youtube', title: 'Design a Notification System', url: 'https://youtube.com', description: 'Video explanation of the architecture.' },
      { type: 'article', title: 'Notification Architecture', url: 'https://systemdesign.one/notification-system-design/', description: 'Article on notification patterns.' },
      { type: 'book', title: 'Designing Data-Intensive Apps', url: 'https://dataintensive.net', description: 'Relevant chapters on async messaging.' },
    ],
  },
  {
    id: 'sd-payment-gateway',
    categoryId: 'system-design',
    title: 'Payment Gateway',
    description:
      'Design a secure, reliable payment processing system with idempotency and reconciliation.',
    overview:
      'Design a payment gateway that processes transactions securely. Covers idempotency keys, two-phase commit, PCI compliance, webhook handling, reconciliation processes, and handling partial failures.',
    difficulty: 'Expert',
    estimatedHours: 14,
    status: 'in-progress',
    progress: 55,
    documentationUrl: 'https://systemdesign.one/payment-gateway-system-design/',
    objectives: [
      { title: 'Idempotency', description: 'Ensure exactly-once payment processing.' },
      { title: 'Security & compliance', description: 'Understand PCI DSS requirements.' },
      { title: 'Reconciliation', description: 'Build daily reconciliation with bank records.' },
    ],
    resources: [
      { type: 'docs', title: 'Payment Gateway Design', url: 'https://systemdesign.one/payment-gateway-system-design/', description: 'Comprehensive design guide.' },
      { type: 'youtube', title: 'Payment System Design', url: 'https://youtube.com', description: 'Video on payment architecture.' },
      { type: 'article', title: 'Designing Payments', url: 'https://stripe.com/blog', description: 'Stripe engineering blog on payments.' },
      { type: 'book', title: 'Payment Systems Handbook', url: 'https://www.oreilly.com', description: 'Reference on payment systems.' },
    ],
  },
  {
    id: 'sd-chat-system',
    categoryId: 'system-design',
    title: 'Chat System',
    description:
      'Design a real-time messaging system with presence, typing indicators, and message history.',
    overview:
      'Design a real-time chat system supporting 1-on-1 and group messaging. Covers WebSocket connections, connection management, message ordering, presence detection, typing indicators, offline message sync, and scaling with sharding.',
    difficulty: 'Advanced',
    estimatedHours: 12,
    status: 'in-progress',
    progress: 25,
    documentationUrl: 'https://systemdesign.one/chat-system-design/',
    objectives: [
      { title: 'Real-time delivery', description: 'Use WebSockets for bidirectional communication.' },
      { title: 'Message ordering', description: 'Ensure consistent message ordering across clients.' },
      { title: 'Presence & typing', description: 'Track online status and typing indicators.' },
    ],
    resources: [
      { type: 'docs', title: 'Chat System Design', url: 'https://systemdesign.one/chat-system-design/', description: 'Full design walkthrough.' },
      { type: 'youtube', title: 'Design a Chat System', url: 'https://youtube.com', description: 'Video on chat architecture.' },
      { type: 'article', title: 'WhatsApp Architecture', url: 'https://systemdesign.one/chat-system-design/', description: 'Article on chat system scaling.' },
      { type: 'book', title: 'Real-Time Communication', url: 'https://www.oreilly.com', description: 'Book on real-time systems.' },
    ],
  },
  {
    id: 'sd-video-streaming',
    categoryId: 'system-design',
    title: 'Video Streaming',
    description:
      'Design a video streaming platform with adaptive bitrate, CDN, and transcoding.',
    overview:
      'Design a video streaming service like Netflix or YouTube. Covers video encoding/transcoding pipelines, adaptive bitrate streaming (HLS/DASH), CDN distribution, pre-signed URLs, thumbnail generation, and handling global content delivery.',
    difficulty: 'Expert',
    estimatedHours: 16,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://systemdesign.one/video-streaming-system-design/',
    objectives: [
      { title: 'Transcoding pipeline', description: 'Convert uploads to multiple bitrates and resolutions.' },
      { title: 'Adaptive streaming', description: 'Implement HLS or DASH for adaptive bitrate.' },
      { title: 'CDN strategy', description: 'Distribute content globally with edge caching.' },
    ],
    resources: [
      { type: 'docs', title: 'Video Streaming Design', url: 'https://systemdesign.one/video-streaming-system-design/', description: 'Complete design guide.' },
      { type: 'youtube', title: 'Design Video Streaming', url: 'https://youtube.com', description: 'Video on streaming architecture.' },
      { type: 'article', title: 'Netflix Architecture', url: 'https://netflixtechblog.com', description: 'Netflix engineering blog.' },
      { type: 'book', title: 'Streaming Media', url: 'https://www.oreilly.com', description: 'Reference on streaming technology.' },
    ],
  },
  {
    id: 'sd-api-gateway',
    categoryId: 'system-design',
    title: 'API Gateway',
    description:
      'Design an API gateway handling routing, auth, rate limiting, and load balancing.',
    overview:
      'Design an API gateway that sits between clients and backend services. Covers request routing, authentication/authorization, rate limiting, load balancing, request/response transformation, circuit breakers, and observability.',
    difficulty: 'Advanced',
    estimatedHours: 10,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://systemdesign.one/api-gateway-system-design/',
    objectives: [
      { title: 'Routing & load balancing', description: 'Route requests to appropriate backend services.' },
      { title: 'Auth & rate limiting', description: 'Centralize authentication and throttling.' },
      { title: 'Circuit breaking', description: 'Prevent cascading failures with circuit breakers.' },
    ],
    resources: [
      { type: 'docs', title: 'API Gateway Design', url: 'https://systemdesign.one/api-gateway-system-design/', description: 'Design guide for API gateways.' },
      { type: 'youtube', title: 'API Gateway Explained', url: 'https://youtube.com', description: 'Video on gateway patterns.' },
      { type: 'article', title: 'Kong Gateway', url: 'https://konghq.com', description: 'Real-world API gateway implementation.' },
      { type: 'book', title: 'Microservices Patterns', url: 'https://microservices.io', description: 'Book on microservice architecture.' },
    ],
  },

  // ── Distributed Systems ──────────────────────────────────────────
  {
    id: 'ds-kafka',
    categoryId: 'distributed-systems',
    title: 'Kafka Fundamentals',
    description:
      'Learn Apache Kafka architecture, producers, consumers, and stream processing.',
    overview:
      'Kafka Fundamentals covers the distributed streaming platform architecture. You will learn about topics, partitions, consumer groups, replication, the commit log model, and how Kafka achieves high throughput and durability.',
    difficulty: 'Intermediate',
    estimatedHours: 12,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://kafka.apache.org/documentation/',
    objectives: [
      { title: 'Architecture', description: 'Understand brokers, topics, partitions, and replication.' },
      { title: 'Producers & consumers', description: 'Produce and consume messages reliably.' },
      { title: 'Stream processing', description: 'Use Kafka Streams for real-time processing.' },
    ],
    resources: [
      { type: 'docs', title: 'Kafka Documentation', url: 'https://kafka.apache.org/documentation/', description: 'Official Apache Kafka docs.' },
      { type: 'youtube', title: 'Kafka Explained', url: 'https://youtube.com', description: 'Video series on Kafka.' },
      { type: 'article', title: 'Kafka Architecture', url: 'https://kafka.apache.org/documentation/#architecture', description: 'Deep dive into Kafka internals.' },
      { type: 'book', title: 'Kafka: The Definitive Guide', url: 'https://www.oreilly.com', description: 'Comprehensive Kafka reference.' },
    ],
  },
  {
    id: 'ds-event-sourcing',
    categoryId: 'distributed-systems',
    title: 'Event Sourcing',
    description:
      'Store state as a sequence of events for auditability and temporal queries.',
    overview:
      'Event Sourcing is a pattern where you store every state-changing event rather than just the current state. This enables full audit trails, temporal queries, and event replay. You will learn about event stores, snapshots, projections, and the trade-offs of event sourcing.',
    difficulty: 'Advanced',
    estimatedHours: 10,
    status: 'in-progress',
    progress: 50,
    documentationUrl: 'https://martinfowler.com/eaaDev/EventSourcing.html',
    objectives: [
      { title: 'Event store', description: 'Understand how events are stored and retrieved.' },
      { title: 'Projections', description: 'Build read models from event streams.' },
      { title: 'Snapshots', description: 'Optimize replay with periodic snapshots.' },
    ],
    resources: [
      { type: 'docs', title: 'Event Sourcing - Martin Fowler', url: 'https://martinfowler.com/eaaDev/EventSourcing.html', description: 'Classic article on event sourcing.' },
      { type: 'youtube', title: 'Event Sourcing Explained', url: 'https://youtube.com', description: 'Video walkthrough of the pattern.' },
      { type: 'article', title: 'Event Sourcing Pattern', url: 'https://microservices.io/patterns/data/event-sourcing.html', description: 'Practical guide to event sourcing.' },
      { type: 'book', title: 'Patterns of Enterprise Architecture', url: 'https://martinfowler.com/books/eaa.html', description: 'Foundational book on enterprise patterns.' },
    ],
  },
  {
    id: 'ds-cqrs',
    categoryId: 'distributed-systems',
    title: 'CQRS',
    description:
      'Separate read and write models for optimized query performance and scaling.',
    overview:
      'CQRS (Command Query Responsibility Segregation) separates the read and write sides of an application. This enables independent scaling of reads and writes, optimized read models, and is often combined with event sourcing.',
    difficulty: 'Advanced',
    estimatedHours: 8,
    status: 'in-progress',
    progress: 35,
    documentationUrl: 'https://martinfowler.com/bliki/CQRS.html',
    objectives: [
      { title: 'Command side', description: 'Handle writes and domain logic.' },
      { title: 'Query side', description: 'Build optimized read models.' },
      { title: 'Synchronization', description: 'Keep read models in sync with events.' },
    ],
    resources: [
      { type: 'docs', title: 'CQRS - Martin Fowler', url: 'https://martinfowler.com/bliki/CQRS.html', description: 'Authoritative article on CQRS.' },
      { type: 'youtube', title: 'CQRS Pattern', url: 'https://youtube.com', description: 'Video explanation of CQRS.' },
      { type: 'article', title: 'CQRS Journey', url: 'https://learn.microsoft.com/en-us/previous-versions/msp-n-p/jj554200(v=pandp.10)', description: 'Microsoft CQRS guide.' },
      { type: 'book', title: 'CQRS and Event Sourcing', url: 'https://www.oreilly.com', description: 'Book on combining CQRS with event sourcing.' },
    ],
  },
  {
    id: 'ds-saga',
    categoryId: 'distributed-systems',
    title: 'Saga Pattern',
    description:
      'Manage distributed transactions with compensating actions across services.',
    overview:
      'The Saga pattern manages distributed transactions as a sequence of local transactions, each with a compensating action for rollback. Covers choreography-based and orchestration-based sagas, and when to use each.',
    difficulty: 'Advanced',
    estimatedHours: 8,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://microservices.io/patterns/data/saga.html',
    objectives: [
      { title: 'Choreography vs orchestration', description: 'Choose the right coordination style.' },
      { title: 'Compensating transactions', description: 'Design rollback actions for each step.' },
      { title: 'State management', description: 'Track saga state across services.' },
    ],
    resources: [
      { type: 'docs', title: 'Saga Pattern', url: 'https://microservices.io/patterns/data/saga.html', description: 'Microservices.io guide on sagas.' },
      { type: 'youtube', title: 'Saga Pattern Explained', url: 'https://youtube.com', description: 'Video on distributed transactions.' },
      { type: 'article', title: 'Sagas in Microservices', url: 'https://microservices.io/patterns/data/saga.html', description: 'Article on saga implementation.' },
      { type: 'book', title: 'Microservices Patterns', url: 'https://microservices.io/book', description: 'Chapter on data consistency.' },
    ],
  },
  {
    id: 'ds-distributed-tx',
    categoryId: 'distributed-systems',
    title: 'Distributed Transactions',
    description:
      'Understand 2PC, 3PC, and eventual consistency in distributed systems.',
    overview:
      'Distributed Transactions covers the challenges of maintaining ACID properties across multiple services. You will learn about two-phase commit (2PC), three-phase commit (3PC), the problems with blocking protocols, and eventual consistency alternatives.',
    difficulty: 'Expert',
    estimatedHours: 10,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://en.wikipedia.org/wiki/Distributed_transaction',
    objectives: [
      { title: 'Two-phase commit', description: 'Understand the 2PC protocol and its limitations.' },
      { title: 'Three-phase commit', description: 'Learn how 3PC addresses 2PC blocking.' },
      { title: 'Eventual consistency', description: 'Trade consistency for availability.' },
    ],
    resources: [
      { type: 'docs', title: 'Distributed Transactions', url: 'https://en.wikipedia.org/wiki/Distributed_transaction', description: 'Overview of distributed transaction protocols.' },
      { type: 'youtube', title: 'Distributed Transactions', url: 'https://youtube.com', description: 'Video on transaction patterns.' },
      { type: 'article', title: 'Consistency Models', url: 'https://jepsen.io/consistency', description: 'Jepsen guide to consistency models.' },
      { type: 'book', title: 'Designing Data-Intensive Apps', url: 'https://dataintensive.net', description: 'Chapter on distributed transactions.' },
    ],
  },
  {
    id: 'ds-cap',
    categoryId: 'distributed-systems',
    title: 'CAP Theorem',
    description:
      'Understand the fundamental trade-off between consistency, availability, and partition tolerance.',
    overview:
      'The CAP Theorem states that a distributed system can guarantee at most two of: Consistency, Availability, and Partition tolerance. You will learn what each property means, why partition tolerance is non-negotiable, and how systems choose between CP and AP.',
    difficulty: 'Intermediate',
    estimatedHours: 6,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://en.wikipedia.org/wiki/CAP_theorem',
    objectives: [
      { title: 'CAP properties', description: 'Define consistency, availability, and partition tolerance.' },
      { title: 'CP vs AP systems', description: 'Classify real systems as CP or AP.' },
      { title: 'PACELC theorem', description: 'Extend CAP with latency trade-offs.' },
    ],
    resources: [
      { type: 'docs', title: 'CAP Theorem', url: 'https://en.wikipedia.org/wiki/CAP_theorem', description: 'Wikipedia article on CAP.' },
      { type: 'youtube', title: 'CAP Theorem Explained', url: 'https://youtube.com', description: 'Video on CAP trade-offs.' },
      { type: 'article', title: 'CAP Twelve Years Later', url: 'https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/', description: 'Eric Brewer revisits CAP.' },
      { type: 'book', title: 'Designing Data-Intensive Apps', url: 'https://dataintensive.net', description: 'Chapter on consistency and consensus.' },
    ],
  },

  // ── Cloud & DevOps ───────────────────────────────────────────────
  {
    id: 'cd-docker',
    categoryId: 'cloud-devops',
    title: 'Docker',
    description:
      'Containerize applications with Docker, multi-stage builds, and best practices.',
    overview:
      'Docker covers containerization fundamentals, including writing Dockerfiles, multi-stage builds, layer caching, volume management, networking, and Docker Compose for local development. You will learn to build production-ready container images.',
    difficulty: 'Beginner',
    estimatedHours: 8,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://docs.docker.com/',
    objectives: [
      { title: 'Dockerfile best practices', description: 'Write efficient, cacheable Dockerfiles.' },
      { title: 'Multi-stage builds', description: 'Reduce image size with multi-stage builds.' },
      { title: 'Docker Compose', description: 'Orchestrate multi-container local environments.' },
    ],
    resources: [
      { type: 'docs', title: 'Docker Documentation', url: 'https://docs.docker.com/', description: 'Official Docker docs.' },
      { type: 'youtube', title: 'Docker Crash Course', url: 'https://youtube.com', description: 'Hands-on Docker tutorial.' },
      { type: 'article', title: 'Docker Best Practices', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', description: 'Official best practices guide.' },
      { type: 'book', title: 'Docker Deep Dive', url: 'https://www.amazon.com', description: 'Comprehensive Docker reference.' },
    ],
  },
  {
    id: 'cd-kubernetes',
    categoryId: 'cloud-devops',
    title: 'Kubernetes',
    description:
      'Orchestrate containers at scale with Kubernetes pods, services, and deployments.',
    overview:
      'Kubernetes covers container orchestration with K8s. You will learn about pods, deployments, services, configmaps, secrets, ingress controllers, statefulsets, and RBAC. The focus is on deploying and scaling production workloads.',
    difficulty: 'Advanced',
    estimatedHours: 16,
    status: 'in-progress',
    progress: 60,
    documentationUrl: 'https://kubernetes.io/docs/',
    objectives: [
      { title: 'Core objects', description: 'Understand pods, deployments, and services.' },
      { title: 'Networking', description: 'Configure services, ingress, and network policies.' },
      { title: 'Storage & state', description: 'Use persistent volumes and statefulsets.' },
    ],
    resources: [
      { type: 'docs', title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/', description: 'Official K8s documentation.' },
      { type: 'youtube', title: 'Kubernetes Tutorial', url: 'https://youtube.com', description: 'Comprehensive K8s video series.' },
      { type: 'article', title: 'Kubernetes Best Practices', url: 'https://kubernetes.io/docs/concepts/configuration/overview/', description: 'Guide to K8s concepts.' },
      { type: 'book', title: 'Kubernetes Up & Running', url: 'https://www.oreilly.com', description: 'Practical guide to Kubernetes.' },
    ],
  },
  {
    id: 'cd-helm',
    categoryId: 'cloud-devops',
    title: 'Helm',
    description:
      'Package and manage Kubernetes applications with Helm charts and templating.',
    overview:
      'Helm is the package manager for Kubernetes. You will learn to create charts, use templates with Go templating, manage chart dependencies, use Helm repositories, and deploy applications with Helm in CI/CD pipelines.',
    difficulty: 'Intermediate',
    estimatedHours: 6,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://helm.sh/docs/',
    objectives: [
      { title: 'Chart creation', description: 'Build and structure Helm charts.' },
      { title: 'Templating', description: 'Use Go templates for dynamic manifests.' },
      { title: 'Chart management', description: 'Manage dependencies and repositories.' },
    ],
    resources: [
      { type: 'docs', title: 'Helm Documentation', url: 'https://helm.sh/docs/', description: 'Official Helm docs.' },
      { type: 'youtube', title: 'Helm Tutorial', url: 'https://youtube.com', description: 'Video guide to Helm.' },
      { type: 'article', title: 'Helm Best Practices', url: 'https://helm.sh/docs/chart_template_guide/best_practices/', description: 'Guide to writing good charts.' },
      { type: 'book', title: 'Learning Helm', url: 'https://www.oreilly.com', description: 'Book on Helm package management.' },
    ],
  },
  {
    id: 'cd-aws',
    categoryId: 'cloud-devops',
    title: 'AWS Fundamentals',
    description:
      'Learn core AWS services: EC2, S3, RDS, IAM, VPC, and CloudFront.',
    overview:
      'AWS Fundamentals covers the core services of Amazon Web Services. You will learn about compute (EC2, Lambda), storage (S3, EBS), databases (RDS, DynamoDB), networking (VPC, Route 53), IAM, and CDN (CloudFront).',
    difficulty: 'Intermediate',
    estimatedHours: 14,
    status: 'in-progress',
    progress: 45,
    documentationUrl: 'https://docs.aws.amazon.com/',
    objectives: [
      { title: 'Compute & storage', description: 'Use EC2, Lambda, and S3 effectively.' },
      { title: 'Networking', description: 'Configure VPCs, subnets, and security groups.' },
      { title: 'IAM & security', description: 'Manage access with IAM roles and policies.' },
    ],
    resources: [
      { type: 'docs', title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/', description: 'Official AWS docs.' },
      { type: 'youtube', title: 'AWS Course', url: 'https://youtube.com', description: 'Complete AWS fundamentals course.' },
      { type: 'article', title: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/', description: 'AWS architectural best practices.' },
      { type: 'book', title: 'AWS Certified Solutions Architect', url: 'https://www.amazon.com', description: 'Study guide for AWS certification.' },
    ],
  },
  {
    id: 'cd-cicd',
    categoryId: 'cloud-devops',
    title: 'CI/CD Pipelines',
    description:
      'Build automated CI/CD pipelines with GitHub Actions, testing, and deployment strategies.',
    overview:
      'CI/CD Pipelines covers continuous integration and delivery. You will learn to build pipelines with GitHub Actions, implement automated testing, use deployment strategies (blue-green, canary, rolling), and manage infrastructure as code with Terraform.',
    difficulty: 'Intermediate',
    estimatedHours: 10,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://docs.github.com/en/actions',
    objectives: [
      { title: 'Pipeline design', description: 'Build CI pipelines with build, test, and deploy stages.' },
      { title: 'Deployment strategies', description: 'Implement blue-green, canary, and rolling deploys.' },
      { title: 'Infrastructure as code', description: 'Use Terraform for reproducible infrastructure.' },
    ],
    resources: [
      { type: 'docs', title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions', description: 'Official GitHub Actions documentation.' },
      { type: 'youtube', title: 'CI/CD with GitHub Actions', url: 'https://youtube.com', description: 'Video tutorial on CI/CD pipelines.' },
      { type: 'article', title: 'CI/CD Best Practices', url: 'https://docs.github.com/en/actions/guides', description: 'Guides for CI/CD with Actions.' },
      { type: 'book', title: 'Continuous Delivery', url: 'https://continuousdelivery.com', description: 'Book on CD principles and practices.' },
    ],
  },

  // ── AI Engineering ───────────────────────────────────────────────
  {
    id: 'ai-llm-fundamentals',
    categoryId: 'ai-engineering',
    title: 'LLM Fundamentals',
    description:
      'Understand large language models, transformers, and how they generate text.',
    overview:
      'LLM Fundamentals covers the architecture and capabilities of large language models. You will learn about the transformer architecture, attention mechanisms, tokenization, context windows, fine-tuning vs prompt engineering, and the difference between training and inference.',
    difficulty: 'Intermediate',
    estimatedHours: 12,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://platform.openai.com/docs/guides/gpt',
    objectives: [
      { title: 'Transformer architecture', description: 'Understand self-attention and transformer blocks.' },
      { title: 'Tokenization', description: 'Learn how text is converted to tokens.' },
      { title: 'Prompt engineering', description: 'Craft effective prompts for LLMs.' },
    ],
    resources: [
      { type: 'docs', title: 'OpenAI API Guide', url: 'https://platform.openai.com/docs/guides/gpt', description: 'Guide to GPT models.' },
      { type: 'youtube', title: 'LLM Fundamentals', url: 'https://youtube.com', description: 'Video series on language models.' },
      { type: 'article', title: 'Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/', description: 'Visual guide to transformers.' },
      { type: 'book', title: 'Deep Learning', url: 'https://www.deeplearningbook.org', description: 'Foundational book on neural networks.' },
    ],
  },
  {
    id: 'ai-openai-api',
    categoryId: 'ai-engineering',
    title: 'OpenAI API',
    description:
      'Integrate OpenAI models into applications with the API, streaming, and function calling.',
    overview:
      'The OpenAI API topic covers integrating GPT models into applications. You will learn about chat completions, streaming responses, function/tool calling, embeddings, moderation, rate limiting, and cost optimization.',
    difficulty: 'Beginner',
    estimatedHours: 8,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://platform.openai.com/docs/api-reference',
    objectives: [
      { title: 'Chat completions', description: 'Use the chat completions API effectively.' },
      { title: 'Function calling', description: 'Enable LLMs to call external functions.' },
      { title: 'Streaming & cost', description: 'Stream responses and optimize token usage.' },
    ],
    resources: [
      { type: 'docs', title: 'OpenAI API Reference', url: 'https://platform.openai.com/docs/api-reference', description: 'Complete API reference.' },
      { type: 'youtube', title: 'OpenAI API Tutorial', url: 'https://youtube.com', description: 'Hands-on API integration.' },
      { type: 'article', title: 'Function Calling Guide', url: 'https://platform.openai.com/docs/guides/function-calling', description: 'Guide to function calling.' },
      { type: 'book', title: 'Building LLM Apps', url: 'https://www.oreilly.com', description: 'Book on LLM application development.' },
    ],
  },
  {
    id: 'ai-rag',
    categoryId: 'ai-engineering',
    title: 'RAG',
    description:
      'Build retrieval-augmented generation pipelines for grounded LLM responses.',
    overview:
      'Retrieval-Augmented Generation (RAG) combines LLMs with external knowledge bases. You will learn about document chunking, embedding generation, vector search, context window management, reranking, and evaluating RAG quality.',
    difficulty: 'Advanced',
    estimatedHours: 12,
    status: 'in-progress',
    progress: 70,
    documentationUrl: 'https://docs.llamaindex.ai/understanding/rag/',
    objectives: [
      { title: 'Document processing', description: 'Chunk and embed documents effectively.' },
      { title: 'Retrieval pipeline', description: 'Build semantic search with vector databases.' },
      { title: 'RAG evaluation', description: 'Measure retrieval quality and response accuracy.' },
    ],
    resources: [
      { type: 'docs', title: 'LlamaIndex RAG Guide', url: 'https://docs.llamaindex.ai/understanding/rag/', description: 'Comprehensive RAG guide.' },
      { type: 'youtube', title: 'RAG Explained', url: 'https://youtube.com', description: 'Video on RAG architecture.' },
      { type: 'article', title: 'RAG Best Practices', url: 'https://docs.llamaindex.ai/understanding/rag/', description: 'Article on building RAG systems.' },
      { type: 'book', title: 'Building RAG Applications', url: 'https://www.oreilly.com', description: 'Book on RAG system design.' },
    ],
  },
  {
    id: 'ai-vector-db',
    categoryId: 'ai-engineering',
    title: 'Vector Databases',
    description:
      'Store and query embeddings with vector databases like Pinecone, Weaviate, and pgvector.',
    overview:
      'Vector Databases covers specialized databases for storing and querying high-dimensional vectors. You will learn about approximate nearest neighbor (ANN) algorithms, HNSW, IVF, and comparing Pinecone, Weaviate, Milvus, and pgvector.',
    difficulty: 'Intermediate',
    estimatedHours: 8,
    status: 'in-progress',
    progress: 40,
    documentationUrl: 'https://www.pinecone.io/learn/vector-database/',
    objectives: [
      { title: 'ANN algorithms', description: 'Understand HNSW, IVF, and PQ.' },
      { title: 'Vector DB comparison', description: 'Compare Pinecone, Weaviate, Milvus, and pgvector.' },
      { title: 'Indexing & querying', description: 'Build efficient vector search pipelines.' },
    ],
    resources: [
      { type: 'docs', title: 'Pinecone Learning Center', url: 'https://www.pinecone.io/learn/vector-database/', description: 'Guide to vector databases.' },
      { type: 'youtube', title: 'Vector Databases Explained', url: 'https://youtube.com', description: 'Video on vector search.' },
      { type: 'article', title: 'Vector Search Algorithms', url: 'https://www.pinecone.io/learn/vector-database/', description: 'Article on ANN algorithms.' },
      { type: 'book', title: 'AI Engineering', url: 'https://www.oreilly.com', description: 'Book on AI infrastructure.' },
    ],
  },
  {
    id: 'ai-agents',
    categoryId: 'ai-engineering',
    title: 'AI Agents',
    description:
      'Build autonomous AI agents with tool use, planning, and multi-agent orchestration.',
    overview:
      'AI Agents covers building autonomous systems that use LLMs to plan, use tools, and complete tasks. You will learn about ReAct prompting, tool use, agent loops, multi-agent orchestration, and frameworks like LangChain and CrewAI.',
    difficulty: 'Advanced',
    estimatedHours: 14,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://python.langchain.com/docs/modules/agents/',
    objectives: [
      { title: 'Agent architecture', description: 'Design agent loops with planning and execution.' },
      { title: 'Tool use', description: 'Give agents the ability to call external tools.' },
      { title: 'Multi-agent systems', description: 'Orchestrate multiple agents together.' },
    ],
    resources: [
      { type: 'docs', title: 'LangChain Agents', url: 'https://python.langchain.com/docs/modules/agents/', description: 'Documentation on agent frameworks.' },
      { type: 'youtube', title: 'AI Agents Tutorial', url: 'https://youtube.com', description: 'Video on building agents.' },
      { type: 'article', title: 'ReAct Prompting', url: 'https://arxiv.org/abs/2210.03629', description: 'Paper on ReAct framework.' },
      { type: 'book', title: 'AI Agent Engineering', url: 'https://www.oreilly.com', description: 'Book on building AI agents.' },
    ],
  },
  {
    id: 'ai-mcp',
    categoryId: 'ai-engineering',
    title: 'MCP',
    description:
      'Use the Model Context Protocol to connect AI models with external data and tools.',
    overview:
      'The Model Context Protocol (MCP) is an open standard for connecting AI models with external data sources and tools. You will learn about MCP servers, resources, tools, prompts, and how to build MCP integrations.',
    difficulty: 'Advanced',
    estimatedHours: 10,
    status: 'not-started',
    progress: 0,
    documentationUrl: 'https://modelcontextprotocol.io/',
    objectives: [
      { title: 'MCP architecture', description: 'Understand the client-server protocol model.' },
      { title: 'Building MCP servers', description: 'Create servers that expose tools and resources.' },
      { title: 'Integration patterns', description: 'Connect MCP with existing AI applications.' },
    ],
    resources: [
      { type: 'docs', title: 'MCP Documentation', url: 'https://modelcontextprotocol.io/', description: 'Official MCP documentation.' },
      { type: 'youtube', title: 'MCP Explained', url: 'https://youtube.com', description: 'Video on the Model Context Protocol.' },
      { type: 'article', title: 'MCP Specification', url: 'https://modelcontextprotocol.io/specification', description: 'The MCP protocol specification.' },
      { type: 'book', title: 'AI Integration Patterns', url: 'https://www.oreilly.com', description: 'Book on AI system integration.' },
    ],
  },

  // ── Interview Preparation ────────────────────────────────────────
  {
    id: 'ip-dsa',
    categoryId: 'interview-prep',
    title: 'DSA',
    description:
      'Master data structures and algorithms for technical interviews.',
    overview:
      'DSA covers the essential data structures and algorithms for technical interviews. You will practice arrays, linked lists, trees, graphs, dynamic programming, greedy algorithms, and complexity analysis through LeetCode-style problems.',
    difficulty: 'Advanced',
    estimatedHours: 40,
    status: 'in-progress',
    progress: 55,
    documentationUrl: 'https://leetcode.com/learn/',
    objectives: [
      { title: 'Core data structures', description: 'Master arrays, trees, graphs, heaps, and hash tables.' },
      { title: 'Algorithm patterns', description: 'Learn sliding window, two pointers, DP, and BFS/DFS.' },
      { title: 'Problem solving', description: 'Solve 150+ LeetCode problems efficiently.' },
    ],
    resources: [
      { type: 'docs', title: 'LeetCode Learn', url: 'https://leetcode.com/learn/', description: 'Structured DSA learning paths.' },
      { type: 'youtube', title: 'DSA Interview Prep', url: 'https://youtube.com', description: 'Video series on interview DSA.' },
      { type: 'article', title: 'Blind 75 Problems', url: 'https://leetcode.com/learn/', description: 'Curated list of essential problems.' },
      { type: 'book', title: 'Cracking the Coding Interview', url: 'https://www.crackingthecodinginterview.com', description: 'The classic interview prep book.' },
    ],
  },
  {
    id: 'ip-behavioral',
    categoryId: 'interview-prep',
    title: 'Behavioral Questions',
    description:
      'Prepare for behavioral interviews using the STAR method and leadership principles.',
    overview:
      'Behavioral Questions covers preparing for behavioral and culture-fit interviews. You will learn the STAR method (Situation, Task, Action, Result), how to structure stories, and how to align answers with company leadership principles.',
    difficulty: 'Beginner',
    estimatedHours: 6,
    status: 'completed',
    progress: 100,
    documentationUrl: 'https://www.amazon.com/leadership-principles',
    objectives: [
      { title: 'STAR method', description: 'Structure behavioral answers with STAR.' },
      { title: 'Story bank', description: 'Prepare 10-15 reusable stories.' },
      { title: 'Leadership principles', description: 'Align answers with company values.' },
    ],
    resources: [
      { type: 'docs', title: 'Amazon Leadership Principles', url: 'https://www.amazon.com/leadership-principles', description: 'Reference for behavioral prep.' },
      { type: 'youtube', title: 'Behavioral Interview Tips', url: 'https://youtube.com', description: 'Video on behavioral interviews.' },
      { type: 'article', title: 'STAR Method Guide', url: 'https://www.themuse.com/advice/star-interview-method', description: 'Guide to the STAR method.' },
      { type: 'book', title: 'The Behavioral Interview', url: 'https://www.amazon.com', description: 'Book on behavioral interview prep.' },
    ],
  },
  {
    id: 'ip-leadership',
    categoryId: 'interview-prep',
    title: 'Leadership Stories',
    description:
      'Craft compelling leadership narratives for senior engineering interviews.',
    overview:
      'Leadership Stories covers preparing narratives that demonstrate leadership for senior roles. You will learn to articulate technical vision, mentorship experiences, conflict resolution, and driving large-scale initiatives.',
    difficulty: 'Intermediate',
    estimatedHours: 8,
    status: 'in-progress',
    progress: 30,
    documentationUrl: 'https://www.techinterviewhandbook.org/behavioral-interview-questions/',
    objectives: [
      { title: 'Technical leadership', description: 'Stories about driving technical decisions.' },
      { title: 'Mentorship & growth', description: 'Examples of growing team members.' },
      { title: 'Conflict resolution', description: 'Handling disagreements effectively.' },
    ],
    resources: [
      { type: 'docs', title: 'Tech Interview Handbook', url: 'https://www.techinterviewhandbook.org/behavioral-interview-questions/', description: 'Behavioral question database.' },
      { type: 'youtube', title: 'Leadership Interview Prep', url: 'https://youtube.com', description: 'Video on leadership stories.' },
      { type: 'article', title: 'Senior Engineer Interview', url: 'https://www.techinterviewhandbook.org/', description: 'Guide for senior role interviews.' },
      { type: 'book', title: 'The Staff Engineer Path', url: 'https://www.oreilly.com', description: 'Book on senior engineering roles.' },
    ],
  },
  {
    id: 'ip-system-design',
    categoryId: 'interview-prep',
    title: 'System Design Interviews',
    description:
      'Practice system design interviews with real-world scenarios and frameworks.',
    overview:
      'System Design Interviews covers the interview format for system design rounds. You will learn a structured framework (requirements, estimation, high-level design, deep dive, bottlenecks), practice with real scenarios, and learn to communicate trade-offs.',
    difficulty: 'Advanced',
    estimatedHours: 20,
    status: 'in-progress',
    progress: 45,
    documentationUrl: 'https://www.educative.io/courses/grokking-the-system-design-interview',
    objectives: [
      { title: 'Interview framework', description: 'Follow a structured approach to design problems.' },
      { title: 'Trade-off analysis', description: 'Articulate and justify design decisions.' },
      { title: 'Mock interviews', description: 'Practice with timed mock interviews.' },
    ],
    resources: [
      { type: 'docs', title: 'Grokking System Design', url: 'https://www.educative.io/courses/grokking-the-system-design-interview', description: 'Popular system design interview course.' },
      { type: 'youtube', title: 'System Design Interviews', url: 'https://youtube.com', description: 'Mock system design interviews.' },
      { type: 'article', title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', description: 'Open-source system design guide.' },
      { type: 'book', title: 'System Design Interview Vol 1 & 2', url: 'https://www.amazon.com', description: 'Alex Xu system design interview books.' },
    ],
  },
];

export const topicsByCategory = (categoryId: string) =>
  topics.filter((t) => t.categoryId === categoryId);

export const topicMap = Object.fromEntries(
  topics.map((t) => [t.id, t])
) as Record<string, Topic>;
