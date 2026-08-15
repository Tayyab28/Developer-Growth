import type { Note } from '@/lib/types';

export const initialNotes: Note[] = [
  {
    id: 'note-1',
    title: 'Event Loop Phases Summary',
    content:
      'The Node.js event loop has 6 phases:\n\n1. Timers - executes callbacks from setTimeout and setInterval\n2. Pending callbacks - I/O callbacks deferred to the next loop iteration\n3. Idle/prepare - internal use only\n4. Poll - retrieves new I/O events\n5. Check - setImmediate callbacks\n6. Close callbacks - close events\n\nKey insight: microtasks (process.nextTick, Promises) run between EVERY phase, not just at the end of the loop.',
    categoryId: 'backend-engineering',
    topicId: 'be-event-loop',
    tags: ['nodejs', 'event-loop', 'async'],
    createdAt: '2026-08-10T10:30:00Z',
    updatedAt: '2026-08-10T10:30:00Z',
  },
  {
    id: 'note-2',
    title: 'Kafka Consumer Groups',
    content:
      'Consumer groups allow parallel consumption of a topic:\n\n- Each consumer in a group reads from a unique subset of partitions\n- If a consumer fails, partitions are rebalanced to remaining consumers\n- To scale: add more partitions AND more consumers (consumers > partitions = idle)\n- Offset management: auto-commit vs manual commit (prefer manual for exactly-once semantics)\n\nImportant: consumers in different groups each get the full message stream.',
    categoryId: 'distributed-systems',
    topicId: 'ds-kafka',
    tags: ['kafka', 'distributed-systems', 'consumers'],
    createdAt: '2026-08-08T14:00:00Z',
    updatedAt: '2026-08-09T09:15:00Z',
  },
  {
    id: 'note-3',
    title: 'CAP Theorem Real-World Examples',
    content:
      'CP systems: HBase, MongoDB (by default), Redis (in cluster mode)\nAP systems: Cassandra, DynamoDB, CouchDB\n\nDuring a network partition:\n- CP: refuses service to ensure consistency\n- AP: serves stale data to ensure availability\n\nPACELC extends CAP: if no partition (P), choose between latency (L) and consistency (C).\n  - Cassandra: PA/EL (always available, low latency)\n  - MongoDB: PC/EC (consistent unless partitioned)',
    categoryId: 'distributed-systems',
    topicId: 'ds-cap',
    tags: ['cap', 'distributed-systems', 'consistency'],
    createdAt: '2026-08-05T16:45:00Z',
    updatedAt: '2026-08-05T16:45:00Z',
  },
  {
    id: 'note-4',
    title: 'Docker Multi-Stage Build Pattern',
    content:
      'Multi-stage builds reduce image size dramatically:\n\nStage 1 (builder): install dev deps, compile TS, build assets\nStage 2 (runtime): copy only the built artifacts + production deps\n\nExample: Node.js app goes from 900MB -> 120MB\n\nBest practices:\n- Use specific base images (node:20-alpine)\n- Copy package*.json first for layer caching\n- Use --from=builder to copy from previous stage\n- Set NODE_ENV=production in runtime stage',
    categoryId: 'cloud-devops',
    topicId: 'cd-docker',
    tags: ['docker', 'devops', 'optimization'],
    createdAt: '2026-08-01T11:20:00Z',
    updatedAt: '2026-08-02T08:00:00Z',
  },
  {
    id: 'note-5',
    title: 'RAG Architecture Notes',
    content:
      'RAG pipeline steps:\n\n1. Document ingestion: load PDFs, web pages, etc.\n2. Chunking: split into ~500-1000 token chunks with overlap\n3. Embedding: generate vector embeddings (text-embedding-3-small)\n4. Storage: store vectors + metadata in vector DB\n5. Query: embed user query, perform similarity search\n6. Context assembly: top-k chunks + system prompt + user query\n7. Generation: LLM generates response with retrieved context\n\nKey metrics: retrieval precision, answer faithfulness, answer relevance',
    categoryId: 'ai-engineering',
    topicId: 'ai-rag',
    tags: ['rag', 'ai', 'llm', 'embeddings'],
    createdAt: '2026-07-28T13:00:00Z',
    updatedAt: '2026-07-30T10:30:00Z',
  },
  {
    id: 'note-6',
    title: 'STAR Method Template',
    content:
      'Behavioral interview answer structure:\n\nS - Situation: Set the context (1-2 sentences)\nT - Task: What was your responsibility? (1 sentence)\nA - Action: What YOU did (the bulk of the answer, use "I" not "we")\nR - Result: Quantify the outcome (metrics, impact)\n\nExample story: "Reduced API latency by 40% by implementing Redis caching layer"\n\nTip: Prepare stories that can be adapted to multiple questions.',
    categoryId: 'interview-prep',
    topicId: 'ip-behavioral',
    tags: ['interview', 'behavioral', 'star-method'],
    createdAt: '2026-07-25T09:00:00Z',
    updatedAt: '2026-07-25T09:00:00Z',
  },
  {
    id: 'note-7',
    title: 'PostgreSQL Indexing Strategy',
    content:
      'Index types in PostgreSQL:\n\n- B-tree: default, good for equality and range queries\n- GIN: good for arrays, JSONB, full-text search\n- GiST: good for geometric data, range types\n- BRIN: good for large tables with natural ordering (time-series)\n\nTips:\n- Use EXPLAIN ANALYZE to verify index usage\n- Avoid over-indexing (slows down writes)\n- Partial indexes: WHERE clause on index for smaller, faster indexes\n- Composite indexes: order matters (most selective first)',
    categoryId: 'backend-engineering',
    topicId: 'be-postgresql',
    tags: ['postgresql', 'database', 'indexing'],
    createdAt: '2026-07-20T15:30:00Z',
    updatedAt: '2026-07-21T11:00:00Z',
  },
];
